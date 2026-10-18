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
| Order Status | Client with server seed | /api/orders/[id] | refreshInterval: 5000 | Order status changes while waiting |
| Menu Search | Client | ["menu", search] | keepPreviousData: true | Prevents flashing between searches |
| Menu Pagination | Client | ["menu", search, page] | staleTime: 60000 | Menu data does not change often |