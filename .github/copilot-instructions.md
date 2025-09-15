# Copilot Instructions for Teedin Codebase

## Overview
This is a static web project for a real estate or property listing site named "Teedin." The codebase consists of HTML, CSS, and JavaScript files, with image assets in the `assets/img/` directory. There are no build tools, frameworks, or backend integrations present.

## Architecture & Key Files
- `index.html`: Main entry point. Contains navigation, featured section, and links to other pages (e.g., `about.html`, `contact.html`).
- `style.css`: Custom styles for layout, navigation, and branding. Uses Google Fonts and Font Awesome via CDN. Logo and icons are referenced from `assets/img/`.
- `index.js`: Present but currently empty. Use this for interactive features or DOM manipulation.
- `assets/img/`: Contains all images and icons used in the UI. Reference these directly in HTML/CSS.

## Patterns & Conventions
- **Styling**: All styles are in `style.css`. Use BEM-like IDs and classes for new components. Maintain consistent spacing and font usage.
- **Navigation**: The navigation bar uses IDs (`#navbar`, `#icon`, `#nav`, `#profile`) and a divider class. Follow this pattern for new navigation elements.
- **Assets**: Reference images with relative paths (e.g., `./assets/img/logo.png`).
- **Responsiveness**: The layout uses flexbox for navigation. Extend this approach for new sections.
- **External Libraries**: Font Awesome and Google Fonts are loaded via CDN in the `<head>`. Add new libraries similarly if needed.

## Developer Workflow
- **No build step**: Edit HTML, CSS, and JS files directly. Open `index.html` in a browser to preview changes.
- **Debugging**: Use browser DevTools for inspecting layout and debugging JavaScript.
- **Adding Pages**: Create new HTML files for additional pages. Link them in the navbar and style in `style.css`.
- **Adding Interactivity**: Place scripts in `index.js` or create new JS files as needed. Link them in HTML.

## Examples
- To add a new property card, create a section in `index.html`, style it in `style.css`, and use images from `assets/img/`.
- To add a new icon, place the image in `assets/img/` and reference it in HTML or CSS.

## Recommendations for AI Agents
- Maintain the existing structure and naming conventions.
- Avoid introducing frameworks or build tools unless explicitly requested.
- Keep all assets in `assets/img/` and reference them with relative paths.
- Document any new patterns or conventions in this file for future agents.

---
_Last updated: September 15, 2025_
