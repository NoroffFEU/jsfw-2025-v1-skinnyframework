// Represents a collection of theme styles where the key is a string (e.g., a CSS property or class name)

import React from "react";

// and the value is the corresponding style value.
export interface ThemeStyles {
  [key: string]: string;
}

// Props for a page component, which includes theme styles for styling the page.
export interface PageProps {
  themeStyles: ThemeStyles;
}

// Represents a single route with a path and the corresponding element to render.
export interface RouteProps {
  path: string; // The URL path for the route.
  element: React.ReactNode; // The component or element to render for this route.
}

// Props for a collection of routes, which is an array of Route objects.
export interface RoutesProps {
  routes: RouteProps[];
}

// Props for a layout component, which includes:
// - Children: The nested components or elements to render inside the layout.
// - ThemeStyles: The theme styles to apply to the layout.
// - Routes: An array of route configurations.
export interface LayoutProps {
  children: React.ReactNode;
  themeStyles: ThemeStyles;
  routes: RouteProps[];
}