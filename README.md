# SolidJS Starter App

This is a simple SolidJS application that demonstrates how to implement a Dark Mode Toggle using Tailwind CSS. The app allows users to switch between light and dark themes based on their preference.

## User Journeys

1. [View App Template](docs/journeys/view-app-template.md) - Explore the basic structure of the application.
2. [Toggle Dark Mode](docs/journeys/toggle-dark-mode.md) - Switch between light and dark themes for a personalized experience.

## Design Specifications

### Color Palette

#### Light Mode

- **Background:** `#FFFFFF`
- **Text:** `#000000`
- **Primary:** `#1D4ED8`
- **Secondary:** `#6B7280`
- **Neutral:** `#F3F4F6`

#### Dark Mode

- **Background:** `#1F2937`
- **Text:** `#FFFFFF`
- **Primary:** `#3B82F6`
- **Secondary:** `#9CA3AF`
- **Neutral:** `#374151`

### Typography

- **Font Family:** Inter, sans-serif
- **Base Font Size:** 16px
- **Heading Sizes:**
  - h1: 2rem
  - h2: 1.5rem
  - h3: 1.25rem

### Spacing

- **Base Unit:** 8px
- **Padding/Margin:** Multiples of the base unit (e.g., 8px, 16px, 24px)

## External Services Used

- **Sentry**: For error logging and monitoring.
- **Progressier**: To add PWA functionality.
- **Umami Analytics**: For tracking website analytics.

## Environment Variables

The following environment variables need to be set:

- `VITE_PUBLIC_SENTRY_DSN`: Sentry DSN for error logging.
- `VITE_PUBLIC_APP_ENV`: The application environment (e.g., development, production).
- `VITE_PUBLIC_APP_ID`: The public App ID.
- `VITE_PUBLIC_UMAMI_WEBSITE_ID`: The website ID for Umami Analytics.

---

[Made on ZAPT](https://www.zapt.ai)