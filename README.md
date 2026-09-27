# HARMORA

A self-contained luxury fashion e-commerce demo built from the supplied HARMORA cinematic frames.

## Run locally

```powershell
node server.js
```

Open `http://localhost:4173`.

## Included

- Scroll-driven cinematic frame sequence using the provided images
- Responsive editorial home and 30-item structured demo catalog
- Search, cycling category filter, and sorting
- Product variants with required colour and size validation
- Persistent browser-based wishlist and cart
- Cart quantity controls, shipping calculation, and safe test checkout

Demo inventory lives in `app.js` in the `products` data model and can be replaced with a production API/data layer later. The checkout intentionally never captures or processes payment-card data.
