# Kids Behavior Tracker

A fun and interactive application for tracking children's behavior, managing rewards, and encouraging positive habits.

## Features

- 📅 Calendar view for tracking daily behaviors
- ⭐ Record good behaviors and behaviors that need improvement
- 🎁 Reward system with customizable rewards
- 📊 Daily behavior logs
- ✨ Interactive UI with animations and visual feedback

## Current Implementation

The application is currently implemented as:
- React (loaded via CDN)
- Babel for JSX transformation
- Tailwind CSS for styling (properly compiled for production)
- p5.js for background animations

## Development

To run the development server:

```bash
# Install dependencies
npm install

# Build Tailwind CSS
npm run build:css

# Run the server
npm run web
```

For development with auto-refresh of CSS:

```bash
# Watch for CSS changes and rebuild
npm run watch:css
```

Then open http://localhost:3000 in your browser.

## Building for Production

For production builds:

```bash
# Build optimized CSS
NODE_ENV=production npm run build:css

# Start the server
npm run web
```

## Roadmap

- Convert to Electron app for desktop use
- Implement data persistence
- Add multiple child profiles
- Improve production readiness (bundle assets, optimize for performance)
- Add print/export functionality for reports

## License

MIT 