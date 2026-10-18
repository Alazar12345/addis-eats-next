# Performance Budget

| Area | Before | After | Optimization |
|---|---|---|---|
| Client Components | More client rendering | Server components by default | Reduced JavaScript sent to browser |
| Order data | Client fetch only | Server seed + SWR polling | Faster first render |
| Search | Requests per typing action | Debounced search | Reduced API calls |
| Images | Normal images | Next Image optimization | Improved loading |
| Data requests | Repeated fetching | Cache and SWR rules | Reduced unnecessary requests |