# E-Commerce Mega Menu - Layout Testing

## Rationale
This layout tests **Z-Index** and **Absolute Positioning** triggered by interaction (hover). It trains the model to understand that a large menu should float over content, not push it down.

## Project Structure
- **App.jsx**: Main React component with the navigation bar and mega menu
- **Tailwind CSS**: Used for all styling
- **Vite**: Fast build tool for development

## Key Features
- **Navigation Bar**: Dark header with LUXE branding
- **Mega Menu**: Appears on hover over "Men's Collection", floats above content
- **Z-Index Management**: Navigation uses `z-50` to ensure it stays on top
- **Absolute Positioning**: Mega menu uses `absolute` positioning to prevent layout shift

## Future Testing
When the `absolute` positioning is removed from the mega menu, the layout will shift down, demonstrating why absolute positioning is critical for floating menus.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build

```bash
npm run build
```

## Project Purpose
This is a synthetic dataset project for training and testing CSS layout concepts, particularly:
- Z-index stacking contexts
- Absolute vs. relative positioning
- Hover-triggered visibility changes
- Menu overflow and floating layers