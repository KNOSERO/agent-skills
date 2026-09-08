# Structured-data retrieval

For JSON, CSV, XML, traces, database dumps, and API responses, retrieve in this order:

`schema/metadata → filter → matching records → relevant fields → small sample`

Discover keys, columns, namespaces, event types, counts, and time ranges before reading records. Apply filters at the producer or query layer where possible. Project only fields needed for the decision and sample enough records to establish the pattern; use counts or aggregates for prevalence.

For nested data, locate the path or predicate first, then extract matching subtrees rather than printing the document. For traces, filter by trace/span/request ID and retrieve the causal span neighborhood. Preserve schema assumptions, filter criteria, and representative record pointers in notes so results remain reproducible without retaining the dataset.

