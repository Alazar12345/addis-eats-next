# Component Boundary Decisions

## Overview

This project uses Next.js Server Components by default. Client Components are only used where browser interaction, state management, or event handlers are required.

The goal is to keep the client-side JavaScript bundle as small as possible.

---

# Server Components

## app/layout.js

**Type:** Server Component

**Reason:**

- Provides the global page structure.
- Does not require browser APIs or React state.
- Wraps the application with the client provider boundary.

---

## app/menu/page.js

**Type:** Server Component

**Reason:**

- Loads menu data from the server.
- Passes data to child components.
- Does not use state, effects, or event handlers.

---

## DishList

**Type:** Server Component

**Reason:**

- Only maps through dish data.
- Responsible for rendering the list structure.
- Does not require client-side interaction.

---

# Client Components

## FilterShell

**Type:** Client Component

**Reason:**

- Uses React state.
- Handles user interaction for filtering/search.
- Provides a client boundary while keeping children server-rendered.

---

## Home

**Type:** Client Component

**Reason:**

- Uses useState for category selection and search state.
- Manages interactive UI behavior.

---

## DishCard

**Type:** Client Component

**Reason:**

- Uses Next.js router navigation.
- Uses Zustand cart actions.
- Contains click event handlers.

---

## AddToCartButton

**Type:** Client Component

**Reason:**

- Updates the Zustand cart store.
- Requires button click interaction.

---

## Cart

**Type:** Client Component

**Reason:**

- Reads and updates Zustand state.
- Contains quantity and remove button interactions.

---

# Provider Boundary

## app/providers.jsx

**Type:** Client Component

**Reason:**

- Creates a dedicated client boundary.
- Keeps app/layout.js as a Server Component.
- Allows client-side providers to be added without converting the entire application.

Route (app)

┌ ○ /
├ ○ /\_not-found
├ ○ /Cart
├ ○ /Checkout
├ ƒ /dish/[id]
├ ○ /menu
└ ○ /menu/id

○ (Static) prerendered as static content
ƒ (Dynamic) server-rendered on demand

---

# Summary

The application keeps most rendering on the server and only sends client JavaScript for interactive components.

Current client boundaries are limited to:

- FilterShell
- Home
- DishCard
- AddToCartButton
- Cart
- Providers

This keeps the application optimized while maintaining required interactivity.
