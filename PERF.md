# Performance Budget

| Area | Before | After | Cause |
|---|---|---|---|
| Client components | More JS sent | Server components used | Reduced bundle |
| Search requests | Every keystroke | Debounced | Fewer API calls |
| Order loading | Client fetch | Server seed + SWR | Faster first paint |
| Images | Normal images | Next Image | Optimization |