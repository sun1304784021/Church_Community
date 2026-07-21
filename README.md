# Christ Family Church Mobile App Showcase

A polished mobile web app showcase for **Christ Family Church**, built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

**Live demo:** [https://sun1304784021.github.io/Church_Community/](https://sun1304784021.github.io/Church_Community/)

This project presents three mobile-style church screens:

- Testimonial
- Hero / Landing
- Sermons / Events

Users can swipe horizontally to move between screens, while the layout keeps a realistic iPhone-inspired presentation with:

- Dynamic Island
- Home Indicator
- Safe-area aware spacing
- Animated text and transitions

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Manrope font

## Features

- Full-screen app-like experience
- Horizontal swipe navigation between 3 screens
- Dynamic Island and Home Indicator overlay
- Safe-area support for iPhone-style layouts
- Typewriter text animation
- Animated menu overlay
- Responsive desktop and mobile presentation

## Project Structure

```text
src/
  components/
    shared/
      CloseButton.jsx
      DynamicIsland.jsx
      HamburgerButton.jsx
      Header.jsx
    MenuOverlay.jsx
    PhoneFrame.jsx
    Screen1Testimonial.jsx
    Screen2Hero.jsx
    Screen3Sermons.jsx
    ShowcasePage.jsx
    TypewriterText.jsx
  config/
    animations.js
    safeArea.js
  App.jsx
  index.css
  main.jsx
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Adjustable Animation Settings

You can tune the main animation values in:

- `src/config/animations.js`
- `src/config/safeArea.js`

These files control:

- text typing speed
- menu fade timing
- spring motion settings
- Dynamic Island sizing
- safe-area spacing

## Design Notes

The UI uses remote visual assets served from `framerusercontent.com` and follows a dark, warm-toned visual system designed for a church mobile experience.

## Chinese Documentation

For the Simplified Chinese version, see:

- `README.zh-CN.md`
