# E-Commerce Mega Menu Documentation

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with logo and action buttons
│   ├── MegaMenu.jsx        # Mega menu dropdown for Men's Collection
│   ├── SearchPanel.jsx     # Search modal panel
│   ├── CartPanel.jsx       # Shopping cart modal panel
│   ├── Hero.jsx            # Hero banner section
│   ├── ProductCard.jsx     # Reusable product card component
│   └── Footer.jsx          # Footer with links and newsletter
├── constants.js            # Data constants and mock data
├── App.jsx                 # Main application component
├── index.css              # Global styles and animations
└── main.jsx               # Application entry point
```

## Components Overview

### Navbar.jsx
The main navigation component featuring:
- Logo with branding
- Desktop menu navigation
- Search functionality button
- Cart button with item count badge

**Props:**
- `cartCount` - Number of items in cart
- `onCartClick` - Callback when cart button is clicked
- `showCart` - Boolean to show/hide cart
- `onSearchClick` - Callback when search button is clicked
- `showSearch` - Boolean to show/hide search

### MegaMenu.jsx
Dropdown mega menu component with:
- Multi-column layout (Apparel, Shoes, Accessories, Featured)
- Hover animations and transitions
- Featured content boxes with badges
- Trending and sale promotions

### SearchPanel.jsx
Modal search panel featuring:
- Search input with placeholder suggestions
- Trending search terms
- Form submission handling
- Close functionality

**Props:**
- `isOpen` - Whether panel is visible
- `onClose` - Callback to close panel
- `onSearch` - Callback with search query

### CartPanel.jsx
Shopping cart modal with:
- Item list with removal buttons
- Price calculation and totals
- Empty cart state
- Checkout button

**Props:**
- `isOpen` - Whether panel is visible
- `onClose` - Callback to close panel
- `cartItems` - Array of items in cart
- `cartCount` - Number of items
- `onRemoveItem` - Callback to remove item

### Hero.jsx
Hero banner section featuring:
- Large hero headline "SUMMER 2026"
- Gradient text effects
- Animated background blob elements
- Call-to-action buttons
- Badge text and feature list

**Props:**
- `onShopNow` - Callback for Shop Now button

### ProductCard.jsx
Reusable product card with:
- Product image placeholder (emoji)
- Category label
- Product title
- Price display
- Star ratings
- "Add to Cart" button with hover effects
- "NEW" badge for new products
- Hover overlay animation

**Props:**
- `image` - Product image (emoji or URL)
- `title` - Product name
- `price` - Product price
- `category` - Product category
- `onAddToCart` - Callback when add to cart is clicked
- `isNew` - Boolean for new product badge

### Footer.jsx
Footer section with:
- Brand information
- Navigation links (Shop, Help, Legal)
- Newsletter subscription form
- Social media links
- Copyright information

## Constants and Data

### MEGA_MENU_DATA
Menu items organized by category:
```javascript
{
  apparel: [...],  // Clothing items
  shoes: [...],    // Footwear
  accessories: [...] // Accessories
}
```

### PRODUCTS
Sample product array with 8 products:
- Each product has: id, title, price, category, image, isNew

### TESTIMONIALS
Customer testimonials with:
- Customer name and role
- Review message
- Avatar emoji

## Styling

### Colors
- **Primary**: Yellow (#FBBF24) - Accent color for buttons and highlights
- **Dark**: Gray-900 (#111827) - For text and navbar
- **Light**: Gray-50 (#F9FAFB) - For sections backgrounds
- **Neutral**: Gray shades - For text hierarchy

### Animations
- **blob**: Smooth floating animation for hero background
- **slideInDown**: Top-to-bottom slide animation
- **slideInUp**: Bottom-to-top slide animation
- **fadeIn**: Simple fade-in animation

### Typography
- Font family: System sans-serif stack
- Font weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 900 (black)
- Responsive text sizes with Tailwind

## Key Features

### Z-Index Layering
- Navbar: `z-50` (always on top)
- Modals: `z-40` (below navbar)
- Regular content: Default stacking

### Absolute Positioning
The mega menu and modals use `absolute` positioning to:
- Prevent layout shift
- Float over content
- Layer properly with z-index

### Responsive Design
- Mobile-first approach
- Hidden desktop menu on mobile (`hidden md:flex`)
- Grid layouts that adapt (1 col → 2 col → 4 col)

## Features Demonstrated

1. **Z-Index Management** - Proper layering of UI elements
2. **Absolute Positioning** - Preventing layout flow disruption
3. **Hover States** - Interactive mega menu and cards
4. **Modal Functionality** - Search and cart panels
5. **Responsive Grid** - Product cards that adapt to screen size
6. **CSS Animations** - Smooth transitions and effects
7. **Component Composition** - Modular, reusable components
8. **State Management** - React hooks for cart and UI state
9. **Tailwind CSS** - Utility-first styling approach
10. **Accessibility** - Semantic HTML and meaningful interactions

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173`

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS animations support required
- JavaScript ES6+ support required

## Future Enhancements

- Product filtering and sorting
- User authentication
- Real product images
- Payment integration
- Order history
- Wishlist functionality
- Mobile responsive mega menu
- Dark mode toggle
- Multi-language support

