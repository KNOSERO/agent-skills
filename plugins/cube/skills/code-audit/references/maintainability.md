# Maintainability audit guidance

**Trigger:** Load only when a concrete maintainability hypothesis with material future cost or risk exists.

Load and follow `programming-principles` for design evaluation. Do not duplicate its rules on naming, abstractions, responsibilities, composition, domain modeling, or testing.

Evaluate whether the observed structure creates material:

- change risk;
- defect risk;
- coupling or dependency risk;
- inability to verify behavior;
- repeated knowledge that can diverge;
- boundary confusion;
- disproportionate cognitive or operational cost.

Do not report style preferences, local taste, naming differences, or refactor opportunities without material impact.

Recommend structural change only when it addresses the identified risk or cost.
