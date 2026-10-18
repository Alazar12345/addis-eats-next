# Route Strategy

| Route | Type | Strategy | Reason |
|---|---|---|---|
| / | Page | Server Component | Homepage content does not require browser interaction |
| /menu | Page | Server Component | Dish data can be rendered on the server |
| /cart | Page | Client Component | Cart needs user interaction and state |
| /checkout | Page | Server Component + Server Action | Form submission is handled on the server |
| /api/dishes | API Route | Route Handler | Returns dish data as JSON |
| /api/dishes/[id] | API Route | Dynamic Route Handler | Finds a single dish by id |
| /api/orders | API Route | Route Handler | Receives and validates order data |