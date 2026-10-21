# Authentication Strategy

## Protected Routes

| Route | Layer | What it proves |
|---|---|---|
| /checkout | Authentication | Only logged-in users can place orders |
| /orders/[id] | Ownership check | Users can only access their own orders |
| /api/orders | Server validation | Invalid data is rejected |

## Attack Tests

| Attack | Result | Protection |
|---|---|---|
| Guest tries checkout | Blocked | Authentication layer |
| User requests another user's order | Blocked | Ownership check |
| Invalid order payload sent | Rejected | Server validation |