# Data Fetching Strategy

## Order Status

Key:
"/api/orders/[id]"

Refresh:
refreshInterval: 5000

Reason:
Order status changes while the customer waits, so it needs live updates.


## Menu Search

Key:
["menu", search]

Refresh:
keepPreviousData: true

Reason:
Keeps the previous list visible while new search results load.


## Menu Pagination

Key:
["menu", search, page]

Refresh:
staleTime: 60000

Reason:
Menu data does not change frequently, so caching reduces unnecessary requests.
# Data Strategy

| Query | Side | Key | Refresh Rule | Reason |
|---|---|---|---|---|
| Order status | Client + server seed | /api/orders/[id] | refreshInterval: 5000 | Status changes while waiting |
| Menu search | Client | ["menu", search] | debounce + keepPreviousData | Prevents flashing |
| Menu pagination | Client | ["menu", search, page] | staleTime | Reduces unnecessary requests |