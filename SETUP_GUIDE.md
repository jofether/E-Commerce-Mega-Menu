# Development Setup & Troubleshooting Guide

## ✅ Quick Start Checklist

- [ ] Node.js 16+ installed
- [ ] Project dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] Browser opens to `http://localhost:5173`
- [ ] Navbar, mega menu, and products display correctly

## 🔧 Installation Steps

### 1. Install Node Dependencies
```bash
npm install
```

**Expected output:**
```
added XXX packages in XXs
```

### 2. Start Development Server
```bash
npm run dev
```

**Expected output:**
```
VITE v4.x.x ready in XXX ms

➜  Local:   http://localhost:5173/
➜  press h + enter to show help
```

### 3. Open in Browser
Navigate to `http://localhost:5173/` and verify:
- Yellow "LUXE." logo appears in dark navbar
- Hero section with "SUMMER 2026" text
- Product grid with 8 items
- Footer with links

## 🐛 Troubleshooting

### Issue: "Module not found" errors

**Solution:**
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

### Issue: Port 5173 already in use

**Solution:**
```bash
# Use different port
npm run dev -- --port 3000
```

### Issue: Styles not loading (Tailwind not working)

**Checklist:**
- [ ] `tailwind.config.js` exists and configured
- [ ] `postcss.config.js` exists
- [ ] `src/index.css` has @tailwind directives
- [ ] Browser cache cleared (Cmd+Shift+R or Ctrl+Shift+R)

**Solution:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Issue: Components not rendering

**Check:**
1. Verify component imports in `App.jsx`
2. Check for syntax errors in component files
3. Look for browser console errors (F12 → Console tab)

**Solution:**
```bash
# Restart dev server
# In terminal: Ctrl+C
npm run dev
```

### Issue: Mega menu not appearing on hover

**Verify:**
- MegaMenu.jsx is imported in Navbar.jsx
- Hover state is working (test with hover in browser dev tools)
- CSS classes include `group-hover:` modifiers
- Z-index values are correct (navbar z-50, menu z-40)

### Issue: Cart items not updating

**Check:**
- State management in App.jsx
- Cart button click handler is bound
- CartPanel is receiving correct props

**Debug:**
```
Open browser console (F12)
Check for React errors
Verify state in React DevTools extension
```

## 📦 Project Structure Verification

Run this command to verify all files exist:

```bash
# Windows PowerShell
Get-ChildItem -Path src -Recurse | Format-Table Name, Length

# Mac/Linux
find src -type f | sort
```

**Expected files:**
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── MegaMenu.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   ├── SearchPanel.jsx
│   ├── CartPanel.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
├── index.css
├── utils.js
├── hooks.js
├── theme.js
└── constants.js
```

## 🧪 Testing Components Individually

### Test Search Functionality
1. Click "🔍 Search" button in navbar
2. Type search term
3. Click "Search" button
4. Alert appears with search term

### Test Cart Functionality
1. Click "🛒 Cart" button
2. Empty cart message displays
3. Click "Add to Cart" on any product
4. Cart updates with item
5. Item count badge appears
6. Remove button works

### Test Mega Menu
1. Hover over "Men's Collection" in navbar
2. Dropdown menu appears with categories
3. Menu items are clickable
4. Featured boxes display

### Test Responsive Design
1. Open browser dev tools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Resize to different breakpoints:
   - Mobile: 375px width
   - Tablet: 768px width
   - Desktop: 1024px width
4. Verify layout adapts properly

## 🎨 Customization Examples

### Change Hero Title
**File:** `src/components/Hero.jsx`
```jsx
// Find this line:
<h1 className="text-7xl font-black text-white mb-6 leading-tight">
  SUMMER <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">2026</span>
</h1>

// Change to:
<h1 className="text-7xl font-black text-white mb-6 leading-tight">
  YOUR TITLE HERE
</h1>
```

### Add New Product
**File:** `src/constants.js`
```javascript
// Add to PRODUCTS array:
{
  id: 9,
  title: 'Your Product Name',
  price: 149.99,
  category: 'Your Category',
  image: '🎯',  // Any emoji
  isNew: true
}
```

### Change Primary Color (Yellow to Blue)
**File:** `src/theme.js`
```javascript
colors: {
  primary: '#3B82F6',  // Changed from #FBBF24
  // ... rest of colors
}
```

Then update Tailwind classes:
- `bg-yellow-400` → `bg-blue-400`
- `text-yellow-600` → `text-blue-600`
- `border-yellow-400` → `border-blue-400`

### Add More Menu Items
**File:** `src/constants.js`
```javascript
export const MEGA_MENU_DATA = {
  apparel: [
    'New Arrivals',
    'T-Shirts & Polos',
    'Jackets & Coats',
    'Denim',
    'Sweaters & Cardigans',
    'Dress Shirts',
    'Casual Wear',
    'YOUR NEW ITEM HERE'  // Add here
  ],
  // ... rest of menu
}
```

## 🚀 Building for Production

### Create Optimized Build
```bash
npm run build
```

**Output:**
```
dist/
├── index.html
├── assets/
│   ├── index-abc123.js
│   └── index-def456.css
└── vite.svg
```

### Preview Production Build Locally
```bash
npm run preview
```

**Visit:** `http://localhost:4173`

### Deploy to Hosting

**Option 1: Netlify**
```bash
npm run build
# Drag 'dist' folder to Netlify
```

**Option 2: Vercel**
```bash
npm i -g vercel
vercel
```

**Option 3: Traditional Hosting**
```bash
# Upload 'dist' folder contents to server
scp -r dist/* user@server.com:/var/www/html/
```

## 📊 Performance Tips

1. **Use Production Build** - ~85% smaller than dev
2. **Enable Compression** - Gzip on server
3. **Cache Assets** - Set long expiry headers
4. **Lazy Load Images** - Use loading="lazy"
5. **Minify CSS/JS** - Done automatically by Vite
6. **Use CDN** - Serve from edge locations

## 🔍 Browser DevTools Tips

### Check Performance
1. Open DevTools (F12)
2. Go to Performance tab
3. Click Record, reload page, stop
4. Review metrics

### Debug Styling Issues
1. Right-click element
2. Select "Inspect"
3. Check Applied CSS
4. Modify classes in real-time

### Monitor Network
1. Go to Network tab
2. Reload page
3. Check file sizes
4. Look for slow requests

## 📝 Common Command Reference

```bash
# Development
npm run dev           # Start dev server
npm run dev -- --port 3000  # Custom port

# Building
npm run build         # Create production build
npm run preview       # Preview production build

# Package Management
npm list              # Show installed packages
npm outdated          # Check for updates
npm update            # Update all packages
npm install <name>    # Install new package

# Cleanup
npm cache clean --force
rm -rf node_modules
npm install
```

## ✨ Pro Tips

1. **Use React DevTools Extension** - Debug components easily
2. **Enable Tailwind IntelliSense** - VS Code extension for autocomplete
3. **Use Prettier** - Auto-format code: `Alt+Shift+F`
4. **Keep Console Clean** - Fix warnings as they appear
5. **Test on Real Devices** - Use your phone to test responsive
6. **Use Version Control** - Git for tracking changes

## 🆘 When Nothing Works

Try the nuclear option:
```bash
# 1. Stop dev server (Ctrl+C)
# 2. Remove all generated files
rm -rf node_modules dist .vite

# 3. Clear npm cache
npm cache clean --force

# 4. Reinstall everything
npm install

# 5. Start fresh
npm run dev
```

## 📞 Getting Help

1. Check browser console for errors (F12)
2. Look for red text in terminal
3. Review components for typos
4. Compare with example code in docs
5. Check Node.js version: `node -v`
6. Update npm: `npm install -g npm@latest`

## 📚 Useful Links

- [Vite Troubleshooting](https://vitejs.dev/guide/troubleshooting)
- [React Hooks Rules](https://react.dev/reference/rules/rules-of-hooks)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Need help?** Review the error message carefully - it usually tells you what's wrong! 🚀
