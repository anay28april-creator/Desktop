import React, { useState } from 'react';
import './App.css';
import WidgetManager from './components/WidgetManager';
import Weather from './widgets/Weather';
import Clock from './widgets/Clock';
import Todo from './widgets/Todo';

function App() {
  const [widgets, setWidgets] = useState([]);
  const [availableWidgets] = useState([
    { id: 'weather', name: 'Weather', component: Weather },
    { id: 'clock', name: 'Clock', component: Clock },
    { id: 'todo', name: 'Todo List', component: Todo }
  ]);

  const addWidget = (widgetId) => {
    const widget = availableWidgets.find(w => w.id === widgetId);
    if (widget) {
      setWidgets([...widgets, { ...widget, instanceId: Date.now() }]);
    }
  };

  const removeWidget = (instanceId) => {
    setWidgets(widgets.filter(w => w.instanceId !== instanceId));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Desktop Widgets</h1>
        <WidgetManager availableWidgets={availableWidgets} onAdd={addWidget} />
      </header>

      <main className="widgets-container">
        {widgets.length === 0 ? (
          <div className="empty-state">
            <p>No widgets yet. Add one to get started!</p>
          </div>
        ) : (
          widgets.map(widget => {
            const WidgetComponent = widget.component;
            return (
              <div key={widget.instanceId} className="widget-wrapper">
                <button
                  className="widget-close"
                  onClick={() => removeWidget(widget.instanceId)}
                >
                  ×
                </button>
                <WidgetComponent />
              </div>
            );
          })
        )}
      </main>
    </div>
  );
}

export default App;
