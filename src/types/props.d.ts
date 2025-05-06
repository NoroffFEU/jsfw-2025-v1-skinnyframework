/**
 * Represents a collection of theme styles where the key is a string
 * (e.g., a CSS property or class name) and the value is the corresponding style value.
 */
export interface ThemeStyles {
  [key: string]: string;
}

/**
 * Props for a page component.
 *
 * @interface PageProps
 * @property {ThemeStyles} themeStyles - The theme styles to apply to the page.
 */
export interface PageProps {
  themeStyles: ThemeStyles;
}

/**
 * Represents the properties for a route in the application.
 *
 * @interface RouteProps
 * @property {string} path - The URL path for the route.
 * @property {React.ReactNode} element - The component or element to render for this route.
 */
export interface RouteProps {
  path: string;
  element: React.ReactNode;
  showInNav: boolean;
}

/**
 * Props for a collection of routes.
 *
 * @interface RoutesProps
 * @property {RouteProps[]} routes - An array of route configurations.
 */
export interface RoutesProps {
  routes: RouteProps[];
}

/**
 * Props for a layout component.
 *
 * @interface LayoutProps
 * @property {React.ReactNode} children - The nested components or elements to render inside the layout.
 * @property {ThemeStyles} themeStyles - The theme styles to apply to the layout.
 * @property {RouteProps[]} routes - An array of route configurations.
 */
export interface LayoutProps {
  children: React.ReactNode;
  themeStyles: ThemeStyles;
  routes: RouteProps[];
}

/**
 * Props for a wrapper component.
 *
 * @interface WrapperProps
 * @property {React.ReactNode} children - The nested components or elements to render inside the wrapper.
 * @property {{ [key: string]: string }} themeStyles - A collection of theme styles where the key is a string
 * (e.g., a CSS property or class name) and the value is the corresponding style value.
 */
export interface WrapperProps {
  children: React.ReactNode;
  themeStyles: { [key: string]: string };
}

export interface ProductProps {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  reviews: {
    rating: number;
    comment: string;
  }[];
  rating: number;
  tags: string[];
}
