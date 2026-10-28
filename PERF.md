# Performance Budget

| Area | Before | After | Cause |
|---|---|---|---|
| Client components | More JS sent | Server components used | Reduced bundle |
| Search requests | Every keystroke | Debounced | Fewer API calls |
| Order loading | Client fetch | Server seed + SWR | Faster first paint |
| Images | Normal images | Next Image | Optimization |
## Third-party scripts

No third-party scripts are used in the application.
No next/script migration was required.
# Performance Report — Addis Eats

## Before Optimization

Lighthouse run:
- Build: Production build
- Test: Mobile throttling

Results:

Performance:
65

Metrics:
- First Contentful Paint (FCP): 1.4s
- Largest Contentful Paint (LCP): 1.6s
- Total Blocking Time (TBT): 5310ms
- Cumulative Layout Shift (CLS): 0
- Speed Index: 5.6s


## Changes Made

### Images
- Replaced HTML img tags with next/image.
- Added width and height to prevent layout shift.
- Added sizes attributes for responsive loading.
- Added priority only to the main hero image.

### Fonts
- Replaced external font loading with next/font.
- Font is now optimized at build time.

### Scripts
- No third-party scripts are used in this application.
- No next/script migration was required.

### Environment
- Added .env.local for local secrets.
- Added .env.example with dummy values.
- Confirmed environment files are ignored by Git.
## Notes

Main remaining performance opportunities:
- Reduce JavaScript execution time.
- Reduce unused client-side JavaScript.
- Reduce long main-thread tasks.