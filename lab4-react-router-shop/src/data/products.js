export const products = [
  { id: 1, name: 'Laptop ProBook 14', price: 55000, emoji: '💻', category: 'Computers', description: '16 GB RAM, 512 GB SSD, Intel i5. Great for students and developers.' },
  { id: 2, name: 'Smartphone Nova X', price: 18999, emoji: '📱', category: 'Mobiles', description: '8 GB RAM, 128 GB storage, 50 MP camera and all-day battery.' },
  { id: 3, name: 'Headphones BassPlus', price: 2499, emoji: '🎧', category: 'Audio', description: 'Bluetooth 5.3 with 30 hours of battery life.' },
  { id: 4, name: 'Smart Watch Fit2', price: 4999, emoji: '⌚', category: 'Wearables', description: 'Heart-rate tracking, sleep monitor and 7-day battery.' },
  { id: 5, name: 'Mechanical Keyboard K8', price: 3299, emoji: '⌨️', category: 'Accessories', description: 'Hot-swappable blue switches with RGB backlight.' },
  { id: 6, name: 'Wireless Mouse M3', price: 899, emoji: '🖱️', category: 'Accessories', description: 'Ergonomic design, 2.4 GHz wireless, silent clicks.' },
];

// Simulates a network request so a loading state can be shown
export function fetchProducts() {
  return new Promise((resolve) => setTimeout(() => resolve(products), 800));
}

export function fetchProductById(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(products.find((p) => p.id === Number(id)) || null), 600)
  );
}
