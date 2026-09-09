# Active testing boundaries

**Trigger:** Load when considering exploit attempts, dynamic security testing, service scanning, active probing, or any test affecting a running environment.

Static analysis within the selected scope does not require active-testing authorization.

Before active testing, confirm:

- target environment;
- authorized scope;
- allowed techniques;
- data and traffic limits;
- stop conditions;
- handling of discovered secrets or sensitive data.

Never test production without explicit authorization.

Do not perform exploit attempts, service scans, dynamic probing, or destructive tests merely because they could provide more evidence.

Prefer the least invasive test that resolves the concrete hypothesis. Stop when the hypothesis is confirmed, rejected, or further activity would no longer materially change the finding.

Do not disclose secrets in output. Redact values and report only the minimum location and security impact needed.
