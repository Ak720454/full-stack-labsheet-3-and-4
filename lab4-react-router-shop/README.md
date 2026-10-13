# Lab 4 - React Routing and State Management (TechShop SPA)

**Aim:** Build a multi-page single-page application (SPA).

## Run
```
npm install
npm run dev
```
Open the URL shown (usually http://localhost:5173).

## Tasks covered
| Task | Where |
|---|---|
| 3-page app: Home, Products, Product Details (react-router-dom) | `src/App.jsx`, `src/pages/` |
| Pass data via route params | `/products/:id` -> `useParams()` in `ProductDetails.jsx` |
| Global state (cart + favorites) with Context API + useReducer | `src/context/ShopContext.jsx` |
| Loading state | `Loader.jsx`, simulated fetch in `src/data/products.js` |
| 404 Not Found page | `path="*"` route -> `NotFound.jsx` (also for invalid product ids) |

Extra: Cart page, localStorage persistence of cart and favorites.

## Routes
| URL | Page |
|---|---|
| `/#/` | Home |
| `/#/products` | Products list |
| `/#/products/3` | Product Details (id = 3) |
| `/#/cart` | Cart |
| `/#/anything-else` | 404 |

## Component tree
Diagram image: `component-tree.svg`
```
HashRouter > ShopProvider (Context)
 |-- App
      |-- Navbar
      |-- Routes
           |-- Home
           |-- Products -> Loader, ProductCard x N
           |-- ProductDetails -> Loader (or NotFound)
           |-- Cart
           |-- NotFound (*)
```

## Deploy to GitHub Pages (live link)
```
npm run build
```
Upload/push the generated `dist` folder contents to a `gh-pages` branch, or use GitHub Actions. `HashRouter` and `base: './'` are already set so routing works there.
