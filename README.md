### **JavaScript Frameworks Project Summary**

#### **Core Features**

1. **Fetch & Display Products**:

   - Use API (`GET /online-shop`) to display products in a grid with details (image, title, prices, rating, discounts).
   - Show discount stickers for discounted products.

2. **Product Details Page**:

   - Dynamic routing to fetch and display detailed product info (API: `GET /online-shop/<id>`).
   - Add "Add to Cart" button with a toast notification.

3. **Search & Sort**:

   - Search bar for filtering products in real-time.
   - Sort products by price or name.

4. **Shopping Cart System**:

   - Cart state: adjustable quantities, item removal, total cost.
   - Display cart count in the header.
   - Checkout with a confirmation page and cart clearance.

5. **Contact Page**:
   - Form with TypeScript validation (name, subject, email, message).
   - Validation messages and toast notifications for feedback.

---

#### **Additional Requirements**

- **Toast Notifications**: Reusable system for feedback on actions (add to cart, checkout, form errors).
- **Responsive Design**: Mobile-friendly, user-friendly layout (use a CSS framework like Tailwind, Material-UI).
- **TypeScript Integration**: Use strict types for APIs, components, and states.
- **Testing**: Add tests for components (React Testing Library).
- **Code Quality**: Clean, maintainable, well-documented code.
