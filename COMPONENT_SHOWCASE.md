# Component Showcase & Usage Guide

## Quick Component Reference

This document provides visual examples and usage patterns for all components in the project.

---

## 🧭 Navbar Component

### Features
- Logo with brand name
- Navigation menu integration
- Search button with panel toggle
- Shopping cart with item count badge
- Responsive design

### Usage
```jsx
import { Navbar } from './components';

<Navbar 
  cartCount={5}
  onCartClick={() => setShowCart(true)}
  showCart={showCart}
  onSearchClick={() => setShowSearch(true)}
  showSearch={showSearch}
/>
```

### Customization
```jsx
// Change logo text:
<span className="font-black text-2xl tracking-wider">YOUR BRAND</span>

// Change navbar color:
className="bg-blue-900"  // Instead of bg-gray-900

// Add new menu items:
<div className="inline-flex items-center h-full cursor-pointer...">
  Navigation Item Text
</div>
```

---

## 📊 MegaMenu Component

### Features
- Multi-column dropdown layout
- Product categories
- Featured content boxes
- Hover animations
- Badge system

### Structure
```
MegaMenu (Dropdown)
├── Column 1: Apparel
├── Column 2: Shoes
├── Column 3: Accessories
└── Columns 4-5: Featured Content
```

### Usage
```jsx
import { MegaMenu } from './components';

// Used inside Navbar automatically
// Or standalone:
<MegaMenu />
```

### Add Categories
```javascript
// In constants.js:
export const MEGA_MENU_DATA = {
  newCategory: [
    'Item 1',
    'Item 2',
    'Item 3'
  ]
}

// In MegaMenu.jsx:
<div>
  <h4 className="font-bold text-gray-900...">New Category</h4>
  <ul className="space-y-3">
    {MEGA_MENU_DATA.newCategory.map(...)}
  </ul>
</div>
```

---

## 🎯 ProductCard Component

### Features
- Product image/emoji
- Category label
- Product name
- Price
- Star rating
- Add to cart button
- "NEW" badge
- Hover effects

### Usage
```jsx
import { ProductCard } from './components';

<ProductCard
  title="Premium Leather Jacket"
  price={199.99}
  category="Jackets"
  image="👔"
  isNew={true}
  onAddToCart={() => handleAddToCart('Premium Leather Jacket')}
/>
```

### Grid Layout
```jsx
// 4-column responsive grid:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {PRODUCTS.map((product) => (
    <ProductCard {...product} onAddToCart={handleAdd} />
  ))}
</div>
```

### Customization
```jsx
// Change price color:
<span className="text-lg font-bold text-red-600">${price}</span>

// Hide star rating:
// Remove star rating section

// Add product description:
<p className="text-sm text-gray-500 mt-2">{product.description}</p>
```

---

## 🏠 Hero Component

### Features
- Large headline
- Gradient text effect
- Animated blob background
- Call-to-action buttons
- Feature highlights
- 600px fixed height

### Usage
```jsx
import { Hero } from './components';

<Hero onShopNow={handleShopNow} />
```

### Customize Text
```jsx
// Change headline:
<h1>YOUR HEADLINE HERE</h1>

// Change subtitle:
<p>Your subtitle text here</p>

// Add custom features:
<p className="text-gray-400 text-sm">
  ✓ Feature One  ✓ Feature Two  ✓ Feature Three
</p>
```

### Change Background
```jsx
// Hero with gradient background:
className="bg-gradient-to-r from-blue-500 to-purple-600"

// Solid color:
className="bg-gray-900"

// Background image:
style={{backgroundImage: 'url(...)'}}
```

---

## 🔍 SearchPanel Component

### Features
- Search input field
- Trending searches
- Form submission
- Modal close button
- Suggestions system

### Usage
```jsx
import { SearchPanel } from './components';

<SearchPanel 
  isOpen={showSearch}
  onClose={() => setShowSearch(false)}
  onSearch={(query) => handleSearch(query)}
/>
```

### Customize Trending Searches
```jsx
// In SearchPanel.jsx, update:
{['Summer Sale', 'Leather Jackets', 'Sneakers', 'Watches'].map((term) => (
  // Change to your trending searches
))}
```

### Add Filter Options
```jsx
// Add category filter:
<div className="mt-4 border-t pt-4">
  <p className="text-xs font-semibold mb-2">CATEGORIES</p>
  <div className="flex flex-wrap gap-2">
    {['All', 'Men', 'Women', 'Kids'].map(cat => (
      <button>{cat}</button>
    ))}
  </div>
</div>
```

---

## 🛒 CartPanel Component

### Features
- Item listing with removal
- Price calculation
- Cart total
- Empty state
- Checkout button

### Usage
```jsx
import { CartPanel } from './components';

<CartPanel 
  isOpen={showCart}
  onClose={() => setShowCart(false)}
  cartItems={cartItems}
  cartCount={cartCount}
  onRemoveItem={handleRemoveFromCart}
/>
```

### Display Cart Subtotals
```jsx
// Already included:
<div className="flex justify-between text-sm">
  <span className="text-gray-600">Subtotal:</span>
  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
</div>
```

### Add Tax Calculation
```jsx
const tax = totalPrice * 0.08;  // 8% tax
const finalTotal = totalPrice + tax;

<div className="flex justify-between text-sm">
  <span>Tax (8%):</span>
  <span>${tax.toFixed(2)}</span>
</div>
```

---

## 📑 Footer Component

### Features
- Brand info
- 4-column layout (Shop, Help, Legal, Social)
- Newsletter signup
- Links
- Copyright

### Usage
```jsx
import { Footer } from './components';

<Footer />
```

### Add Company Links
```jsx
// Already included in Footer.jsx
// Update link URLs:
<a href="/about">About Us</a>
<a href="/careers">Careers</a>
<a href="/blog">Blog</a>
```

### Customize Newsletter
```jsx
// Newsletter already included
// Change button text:
<button>Subscribe Now</button>

// Add description:
<p>Get exclusive deals and new product updates</p>
```

---

## 🎨 Styling All Components

### Using Theme Colors
```javascript
// Import theme:
import THEME from '../theme';

// Use colors:
backgroundColor: THEME.colors.primary  // #FBBF24
color: THEME.colors.dark              // #111827
```

### Using Spacing Scale
```jsx
// Padding:
className="p-8"      // large
className="px-4 py-2" // custom x/y

// Margins:
className="m-4"
className="mb-8"     // margin-bottom
className="mt-2"     // margin-top
```

### Responsive Classes
```jsx
// Text size responsive:
className="text-sm md:text-lg lg:text-2xl"

// Grid responsive:
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Hidden on mobile:
className="hidden md:block"

// Show on mobile only:
className="md:hidden"
```

---

## 🎬 Animation Examples

### Hover Effects
```jsx
// Scale on hover:
className="transform hover:scale-105 transition"

// Color change:
className="hover:bg-yellow-500 transition"

// Text transform:
className="hover:font-semibold transition"
```

### Animation Classes
```css
/* From index.css */
.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
```

### Custom Animations
```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slideIn {
  animation: slideIn 0.3s ease-out;
}
```

---

## 🔗 Integration Examples

### Add Items to Cart from Product Card
```jsx
const handleAddToCart = (productTitle) => {
  setCartItems([...cartItems, productTitle]);
  setCartCount(cartCount + 1);
  // Optional: Show success message
}

<ProductCard 
  onAddToCart={() => handleAddToCart(product.title)}
/>
```

### Search Integration
```jsx
const handleSearch = (query) => {
  // Filter products by query
  const results = PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase())
  );
  // Show results
}

<SearchPanel 
  onSearch={handleSearch}
/>
```

### Cart Checkout
```jsx
const handleCheckout = () => {
  // Validate cart
  if (cartItems.length === 0) return;
  
  // Redirect to checkout
  window.location.href = '/checkout';
}
```

---

## 📱 Responsive Usage

### Mobile-First Approach
```jsx
// Default (mobile) styles first:
className="text-sm"

// Then add larger sizes:
className="text-sm md:text-base lg:text-lg"

// Grid example:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
```

### Hide/Show Based on Screen
```jsx
// Show on desktop only:
<div className="hidden lg:block">Desktop Content</div>

// Show on mobile only:
<div className="lg:hidden">Mobile Content</div>

// Hide on mobile:
<div className="hidden md:block">Hidden on mobile</div>
```

---

## 🧪 Testing Components

### Component Testing Checklist
```
Navbar:
  ☐ Logo displays
  ☐ Menu items clickable
  ☐ Cart badge shows count
  ☐ Search button opens panel

MegaMenu:
  ☐ Dropdown appears on hover
  ☐ Categories display
  ☐ Items are clickable
  ☐ Featured boxes show

ProductCard:
  ☐ Image displays
  ☐ Title and price show
  ☐ Add to cart button works
  ☐ NEW badge appears
  ☐ Stars display

CartPanel:
  ☐ Items list shows
  ☐ Remove button works
  ☐ Total calculates
  ☐ Checkout button present

Hero:
  ☐ Headline displays
  ☐ Buttons are clickable
  ☐ Animation works
  ☐ Mobile responsive

Footer:
  ☐ All links present
  ☐ Newsletter form works
  ☐ Mobile responsive
  ☐ Social links show
```

---

## 💡 Pro Tips

1. **Reuse Components** - Use ProductCard multiple times
2. **Customize Easily** - Most text/colors in one place
3. **Use Theme System** - Colors from theme.js
4. **Responsive First** - Mobile works, then enhance
5. **Test Interactions** - Click every button
6. **Check Performance** - Use dev tools
7. **Keep Code DRY** - Extract repeated patterns

---

## 🚀 Next Steps

1. **Customize Colors** - Edit theme.js
2. **Add Your Products** - Update constants.js
3. **Modify Text** - Update component strings
4. **Add Backend** - Connect API endpoints
5. **Deploy** - Build and host

For detailed component documentation, see **COMPONENTS.md**
