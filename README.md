# Desktop Widgets

A cross-platform Electron + React desktop application for adding customizable widgets to your desktop.

## Features

- ✨ Add/remove widgets dynamically
- 🌤️ Weather widget
- ⏰ Clock widget with real-time updates
- ✅ Todo list widget
- 🎨 Modern, responsive UI
- 💻 Cross-platform (Windows, macOS, Linux)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Install additional dev dependencies:
   ```bash
   npm install --save-dev wait-on electron-is-dev
   ```

## Development

Start the app in development mode:

```bash
npm start
```

This will start both the React dev server and the Electron app.

## Building

Build the app for production:

```bash
npm run electron-build
```

## Project Structure

```
desktop-widgets/
├── public/
│   ├── electron.js      # Electron main process
│   ├── index.html       # HTML template
│   └── preload.js       # (optional) Preload script
├── src/
│   ├── components/      # Reusable components
│   ├── widgets/         # Widget implementations
│   ├── App.js          # Main app component
│   └── index.js        # React entry point
└── package.json        # Dependencies
```

## Adding New Widgets

1. Create a new file in `src/widgets/YourWidget.js`:
   ```jsx
   import React from 'react';
   import './Widget.css';

   function YourWidget() {
     return (
       <div className="widget your-widget">
         <h2>Your Widget</h2>
         {/* Widget content */}
       </div>
     );
   }

   export default YourWidget;
   ```

2. Import and add it to `src/App.js`:
   ```jsx
   import YourWidget from './widgets/YourWidget';
   
   // Add to availableWidgets array
   { id: 'your-widget', name: 'Your Widget', component: YourWidget }
   ```

## Future Features

- [ ] Widget drag-and-drop reordering
- [ ] Save widget configurations to local storage
- [ ] Weather API integration
- [ ] System stats widget (CPU, RAM, disk)
- [ ] Music player widget
- [ ] Crypto ticker widget
- [ ] Pomodoro timer widget
- [ ] Settings/preferences window

## License

MIT
