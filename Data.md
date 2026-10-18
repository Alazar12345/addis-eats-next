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