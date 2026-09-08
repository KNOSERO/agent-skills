# Domain modeling and business rules

Load this reference when code represents meaningful business logic, domain rules, domain boundaries, or domain language.

Apply these principles when code represents a meaningful domain or business logic. They are not a requirement to introduce bounded contexts, domain models, or tactical DDD patterns into simple infrastructure, utility, or technical code when those structures provide no value.

| Principle | How to apply it |
| --- | --- |
| Clear bounded context | Define the boundaries of each domain model: the area in which terms and rules have one unambiguous meaning. |
| Small, coherent domains | Divide the system into small domain areas with one coherent responsibility. Keep closely related concepts and rules together. |
| Domain encapsulation | Hide internal models, state, and persistence. Expose only required data and operations through an explicit contract, without allowing direct changes to internals. |
| Shared domain language | Use the same concepts in code as in requirements and domain discussions. Within a context, one concept should have one name and consistent meaning. |
| Business rules in the domain | Keep business rules in the domain and enforce them when state changes. Preserve their correctness regardless of who invokes the operation. |
| Technology-independent domain | Business rules should work independently of the user interface, database, and external services. Technology-specific code should use the domain through its contract. |

Business behavior should be visible in the code. Keep business rules separate from technology details when that separation is useful, while avoiding domain structures that add no value to simple technical code.
