### **Project Objectives**

## **due date** - 18/5

- Build an e-commerce store with React using the API endpoint: [https://v2.api.noroff.dev/online-shop](https://v2.api.noroff.dev/online-shop).
- Create and style pages: Homepage, Product Details, Cart, Checkout Success, and Contact.
- Implement essential features:
  - **Homepage**: Product listing with a search bar for filtering.
  - **Product Page**: Product details with an "Add to Cart" button and discount display.
  - **Cart Page**: List of added items, total cost, and checkout button.
  - **Checkout Success Page**: Display confirmation and clear cart.
  - **Contact Page**: A form with validation for name, subject, email, and body fields.
- Utilize **React Router** for navigation between pages.
- Ensure a responsive, visually appealing design (recommended: CSS Modules or styled-components).

---

### **Key Features**

1. **Navigation**:

   - Header with Nav and Cart icon (show item count).
   - Footer for consistent layout.

2. **API Integration**:

   - Fetch all products (`GET /online-shop`).
   - Fetch individual product details (`GET /online-shop/<id>`).

3. **Dynamic Features**:

   - Lookahead search bar on the Homepage.
   - Product discount calculations and reviews on Product Page.
   - Adjustable cart with item removal and total calculations.
   - Toast notifications for key actions.

4. **Validation**:

   - Contact form validation (name, subject, email, body).
   - Log form data on successful validation.

5. **State Management**:
   - Implement a cart state to track items, quantities, and totals.

---

### **Delivery Requirements**

- Host the live project on **Netlify**.
- Submit:
  - Public GitHub repository (exclude `node_modules`).
  - Live demo URL.
- Ensure your code is clean, responsive, and adheres to API specs.
