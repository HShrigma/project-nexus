# Project Nexus – Luxury E-commerce Frontend

A responsive, luxury-inspired e-commerce product listing frontend built with React, Tailwind CSS, and Lucide Icons. This project showcases a maintainable architecture, a clean design system, and thoughtful UX for desktop and mobile.

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Development Process](#development-process)
4. [Component Architecture](#component-architecture)
5. [Key Features](#key-features)
6. [UX & Design Philosophy](#ux--design-philosophy)
7. [Data Handling](#data-handling)
8. [Getting Started](#getting-started)

## Overview

Project Nexus is a single-page frontend application designed for a luxury e-commerce experience. The goal was to build a maintainable, responsive product listing page while showcasing both coding discipline and design sensibility.

The project prioritizes:

- **Separation of concerns**: logic in hooks, view in components

- **Responsive UX**: desktop and mobile layouts with synced state

- **Luxury aesthetic**: monochrome palette, subtle cues, classical fonts

## Tech Stack

- **React** – for component-based UI and reusable hooks

- **JavaScript (ES6)** – clean, functional logic

- **Tailwind CSS** – utility-first styling for rapid prototyping and responsive layouts

- **Lucide Icons** – clean, minimal iconography

### Why this stack?

- Minimal stack allows rapid development without compromising maintainability.

- `Tailwind` + `index.css` provides global design defaults while supporting component-specific customization.

- React hooks abstract all business logic, making components purely presentational.

## Development Process

1. **Skeleton** – scaffold all components first (header, footer, products) to create a functional structure.

2. **Functionality** – implement component logic initially inline, then abstract into hooks (`useProducts`, `useCategories`) for reusability and multi-instance support.

3. **Styling** – use Tailwind for component-level customization and `index.css` for global design tokens like fonts, colors, and typography.

**Git workflow**: separate branches for skeleton → functionality → styling, reflecting real-world maintainable development practices.

## Component Architecture

- **Header** – sticky, responsive navigation with desktop nav and mobile hamburger menu.

- **Products** – product grid with dynamic columns, pagination, filtering, and sorting.

- **Filters** – color, price, and sort filters synced across desktop and mobile.

- **Footer** – simple, useful links with responsive layout.

- **Hooks** – `useProducts` manages filtering, sorting, pagination, and load logic; `useCategories` handles category selection.

**Key principle**: Components are purely presentational; all business logic is abstracted into hooks to maximize reusability and clarity.

## Key Features

- **Responsive Product Grid** – adapts columns to screen size dynamically.

- **Sticky Header & Filters** – maintains navigation and filtering visibility while scrolling.

- **Filter Sync Across Devices** – desktop and mobile filters share the same hook state.

- **Custom Price Slider** – double-handle slider with pointer events.

- **Load More Button** – smart pagination that disappears when all products are displayed.

- **Sorting Options** – by name, price, or rating.

- **Subtle UX** – hover effects, subtle shadows, and spacing for a premium feel.

## UX & Design Philosophy

- **Luxury-inspired aesthetic**: white background, black text, minimal rounding, classical fonts for titles.

- **Attention cues**: color reserved for products; functional components may use system fonts for clarity.

- **Responsive design**: Tailwind breakpoints and conditional rendering ensure consistent UX across devices.

- **Typography**: Serif fonts for headings, sans-serif for body; balances elegance with readability.

- **Visual hierarchy**: sticky elements, hover effects, and spacing guide user focus.

> The design aims to evoke the feeling of entering a boutique rather than an arcade - subtle, refined, and user-focused.  

## Data Handling

- Product and category data stored in **React state** to simulate API calls.

- Images chosen to test real-world scenarios: varying aspect ratios, backgrounds, and quality.

- `useProducts` hook manages filtering, sorting, pagination, and syncing filter state across mobile and desktop.

## Getting Started

1. Install dependencies:

```bash 
npm install
```

2. Run locally (development):

```bash 
npm run dev
```

3. Preview production build locally:

```bash 
npm run preview
```

4. Build for production:

```bash 
npm run build
```
