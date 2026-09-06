// Celowo pogmatwany przykład do przetestowania skilla refactor.

const orders = [];
const sentEmails = [];

class BaseOrderProcessor {
  log(message) {
    console.log(new Date().toISOString(), message);
  }
}

class OrderProcessor extends BaseOrderProcessor {
  constructor(database, kafka, mailer) {
    super();
    this.database = database;
    this.kafka = kafka;
    this.mailer = mailer;
    this.tax = 0.23;
    this.discount = 0;
    this.lastOrder = null;
  }

  async process(input, user) {
    this.log("start process");

    if (!input || !input.items || input.items.length === 0) {
      throw new Error("bad order");
    }

    if (!user || !user.email) {
      throw new Error("bad user");
    }

    let total = 0;
    let names = "";
    for (let i = 0; i < input.items.length; i++) {
      const item = input.items[i];
      if (!item.name || item.price < 0 || item.quantity <= 0) {
        throw new Error("bad item");
      }
      total += item.price * item.quantity;
      names += item.name + (i === input.items.length - 1 ? "" : ", ");
    }

    if (user.type === "vip") {
      this.discount = total > 1000 ? 0.2 : 0.1;
    } else if (user.type === "employee") {
      this.discount = 0.3;
    } else {
      this.discount = total > 500 ? 0.05 : 0;
    }

    const discounted = total - total * this.discount;
    const tax = discounted * this.tax;
    const finalTotal = Math.round((discounted + tax) * 100) / 100;

    const order = {
      id: Math.floor(Math.random() * 100000),
      customerId: user.id,
      email: user.email,
      customerName: user.name || user.email,
      items: input.items,
      names,
      total,
      discount: this.discount,
      tax,
      finalTotal,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    orders.push(order);
    this.lastOrder = order;

    if (this.database && this.database.save) {
      await this.database.save(order);
    }

    if (this.kafka) {
      await this.kafka.send("orders", JSON.stringify(order));
    }

    const subject = "Your order " + order.id;
    const body =
      "Hi " +
      order.customerName +
      ", your order contains: " +
      names +
      ". Total: " +
      finalTotal +
      ".";

    if (this.mailer && this.mailer.send) {
      await this.mailer.send(order.email, subject, body);
    } else {
      sentEmails.push({ to: order.email, subject, body });
    }

    this.log("order " + order.id + " processed");
    return {
      ok: true,
      order,
      message: body,
    };
  }

  cancel(id, reason) {
    const order = orders.find((x) => x.id === id);
    if (!order) return false;
    order.status = "cancelled";
    order.reason = reason || "unknown";
    if (this.kafka) {
      this.kafka.send("orders-cancelled", JSON.stringify(order));
    }
    if (order.email) {
      this.mailer.send(
        order.email,
        "Order cancelled",
        "Order " + id + " was cancelled: " + order.reason
      );
    }
    return order;
  }
}

async function createOrder(input, user, database, kafka, mailer) {
  const processor = new OrderProcessor(database, kafka, mailer);
  const result = await processor.process(input, user);
  console.log("created", result.order.id, result.message);
  return result.order;
}

module.exports = {
  OrderProcessor,
  createOrder,
  orders,
  sentEmails,
};
