# Proposal evaluation

Load when one or more possible refactoring opportunities must be evaluated or compared.

For each concrete hypothesis, establish the relevant evidence and compare:

- expected benefit in clarity, responsibility, maintainability, duplication, boundary quality, or change safety;
- added complexity and navigation cost;
- regression risk and affected observable contracts;
- responsibility clarity, duplication, boundary quality, maintainability, architectural fit, and local consistency;
- dependencies and the smallest safe scope.

Apply:

```text
expected benefit > added complexity + navigation cost + regression risk
```

Use `programming-principles` for structural and design judgment. Do not propose a change merely because code differs from a preferred style. Do not manufacture proposals to cover categories. Explicitly choose no refactor when that is the strongest conclusion.
