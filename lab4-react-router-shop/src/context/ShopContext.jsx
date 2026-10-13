import { createContext, useContext, useReducer, useEffect } from 'react';

const ShopContext = createContext(null);

function loadState() {
  try {
    const saved = localStorage.getItem('lab4-shop');
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return { cart: [], favorites: [] };
}

// cart item shape: { id, qty }
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const exists = state.cart.find((i) => i.id === action.id);
      const cart = exists
        ? state.cart.map((i) => (i.id === action.id ? { ...i, qty: i.qty + 1 } : i))
        : [...state.cart, { id: action.id, qty: 1 }];
      return { ...state, cart };
    }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter((i) => i.id !== action.id) };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.includes(action.id)
          ? state.favorites.filter((f) => f !== action.id)
          : [...state.favorites, action.id],
      };
    default:
      return state;
  }
}

export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState);

  useEffect(() => {
    localStorage.setItem('lab4-shop', JSON.stringify(state));
  }, [state]);

  const cartCount = state.cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <ShopContext.Provider value={{ ...state, cartCount, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
}

// custom hook so components don't import the context directly
export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used inside <ShopProvider>');
  return ctx;
}
