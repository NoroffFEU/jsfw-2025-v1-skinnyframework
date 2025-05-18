# Greedy Little Pigs – E-Commerce Store

## Overview

Greedy Little Pigs is a modern e-commerce web application built with React and TypeScript. It features a responsive design, real-time product search, sorting, a shopping cart, checkout flow, and a contact form. The project demonstrates best practices in React development, state management, API integration, and user experience enhancements such as toast notifications.

## Features

- **Product Listing:** Browse products fetched from the Noroff Online Shop API.
- **Product Details:** View detailed information, reviews, and add items to your cart.
- **Search & Sort:** Real-time search with lookahead and sorting by price or name.
- **Shopping Cart:** Add, remove, and adjust quantities of products. Cart state is persisted.
- **Checkout:** Place an order, clear the cart, and receive confirmation.
- **Contact Form:** Submit inquiries with TypeScript-based validation and feedback.
- **Toast Notifications:** Reusable system for user feedback (add to cart, errors, etc.).
- **Responsive Design:** Works on desktop, tablet, and mobile.

## Tech Stack

- **React 19**
- **TypeScript**
- **React Router**
- **CSS Modules**
- **Vite** (for fast development and build)
- **Jest/Vitest** (for testing)

## API

- [Noroff Online Shop API](https://v2.api.noroff.dev/online-shop)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd javascript_ecom
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App Locally

Start the development server:

```bash
npm run spin
```

- The app will be available at `http://localhost:5173` (or as indicated in your terminal).

### Building for Production

To build the app for production:

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Running Tests

To run all tests:

```bash
npm test
```

To run tests with coverage:

```bash
npm run test:coverage
```

## Project Structure

```
├── src/
│   ├── context/         # React Contexts (Cart, Products, Search, Toast)
│   ├── layout/          # Layout and shared components
│   ├── pages/           # Page components (Home, Product, Cart, etc.)
│   ├── services/        # API calls and mock data
│   ├── styles/          # CSS Modules
│   ├── types/           # TypeScript type definitions
│   └── ui/components/   # UI components (Nav, SearchBar, etc.)
├── public/              # Static assets
├── package.json         # Project metadata and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## Deployment

- Deploy easily to Netlify, Vercel, or any static hosting provider.
- Ensure you build the project (`npm run build`) and deploy the contents of the `dist/` folder.

## License

This project is for educational purposes. See [LICENSE](LICENSE) if provided.

---

**Happy shopping with Greedy Little Pigs!**
