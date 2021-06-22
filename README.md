# Redirector.js

This little thing is to check if your current url need to be automatically redirected to authentication URL.

## Installation

1. Include `redirector.min.js` to your html page:
```
<script src="https://cdn.jsdelivr.net/gh/aanfarhan/redirector@main/redirector.min.js" redirect-url="YOUR_AUTHENTICATED_ENDPOINT" redirect-interval="INTERVAL_CHECKING_TIME"></script>
``` 
2. Replace __YOUR_AUTHENTICATED_ENPOINT__ with your url that only accessible when user authenticated, default value is '' which means your base url, for example https://example.com, so if you want to specify custom url it would be `'/your-custom-url'`.
3. Replace __INTERVAL_CHECKING_TIME__ with numeric value in miliseconds, default value is `60000` (60 seconds).
4. Your page automatically redirected if your auth session no longer valid.
