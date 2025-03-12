# Kids Behavior Tracker

A fun and interactive application for tracking children's behavior, managing rewards, and encouraging positive habits.

## Features

- 📅 Calendar view for tracking daily behaviors
- ⭐ Record good behaviors and behaviors that need improvement
- 🎁 Reward system with customizable rewards
- 📊 Daily behavior logs
- ✨ Interactive UI with animations and visual feedback
- 🖥️ Cross-platform desktop application (Windows, macOS, Linux)

## Current Implementation

The application is implemented as:
- Electron desktop application for Windows, macOS, and Linux
- React (loaded via CDN)
- Babel for JSX transformation
- Tailwind CSS for styling (properly compiled for production)
- p5.js for background animations

## Development

### Web Version

To run the development server for the web version:

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

### Desktop Application

To run the desktop application in development mode:

```bash
# Install dependencies
npm install

# Build Tailwind CSS
npm run build:css

# Start Electron app
npm start

# For auto-reload during development
npm run dev
```

## Building for Production

### Web Version

For production web builds:

```bash
# Build optimized CSS
NODE_ENV=production npm run build:css

# Start the server
npm run web
```

### Desktop Application

To build the desktop application for distribution:

```bash
# Build for your current platform
npm run build

# Package without full distribution
npm run pack
```

This will create distributables in the `dist` folder:
- Windows: NSIS installer (.exe)
- macOS: DMG file (.dmg)
- Linux: AppImage (.AppImage)

## Roadmap

- ✅ Convert to Electron app for desktop use
- Implement data persistence
- Add multiple child profiles
- Improve production readiness (bundle assets, optimize for performance)
- Add print/export functionality for reports

## License

MIT 