# Security audit guidance

**Trigger:** Load only when the selected scope or evidence involves a trust boundary, authentication, authorization, input handling, secrets, sensitive data, injection, SSRF, deserialization, cryptography, file or path handling, dependency security, or configuration security.

Investigate the smallest concrete security hypothesis supported by the scope.

For each hypothesis establish:

- attacker-controlled or untrusted input;
- relevant trust boundary;
- vulnerable operation or missing control;
- plausible attack scenario;
- affected asset or security property;
- evidence that the path is reachable;
- confidence and missing evidence.

Do not report a vulnerability because a security-sensitive pattern merely exists. Confirm reachability and a plausible mechanism.

Do not expose secrets in findings. Describe location and impact without reproducing secret values.

Use focused static checks by default. Load `active-testing.md` before considering exploit attempts, dynamic probing, scans, or tests against a running service.
