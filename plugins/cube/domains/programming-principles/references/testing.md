# Testing principles

Load this reference when creating or changing tests or deciding how behavior should be verified.

| Principle | How to apply it |
| --- | --- |
| Simple test names | Name tests with a simple sentence describing the scenario and expected result, such as “rejects an order with an empty cart”. |
| Clear test structure | Clearly separate data setup, operation execution, and result verification (Arrange–Act–Assert), for example with blank lines. |
| Contract testing (black-box) | Check publicly observable behavior and effects. Avoid private methods, internal structure, and call order. Test interactions when the interaction itself is part of the contract. |
| Prefer higher-level tests | Test scenarios through the public entry point of a module, component, or domain. Match the scope to the contract and avoid testing every internal element separately. |
| Domain tests | Test domain rules through the public domain contract using real domain objects. These tests should run without infrastructure. |
| Infrastructure integration tests | Test code that works with a database, Kafka, or similar service using the real technology in an isolated test environment. Prefer running these dependencies in containers. |
| As few mocks as possible | Prefer real collaborators. Use mocks only when running the real dependency in a test is impractical. Mocks do not replace integration checks. |

> A test should survive a refactor that preserves observable behavior.

Changing a private method, decomposing the implementation, changing internal call order, or replacing one correct implementation should not require test changes when the public contract remains unchanged.

Prefer this testing direction:

```text
observable behavior > implementation details
real collaborators > mocks
contract > internal structure
```
