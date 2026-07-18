import React, { useState } from 'react';
import './WidgetManager.css';

function WidgetManager({ availableWidgets, onAdd }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddWidget = (widgetId) => {
    onAdd(widgetId);
    setIsOpen(false);
  };

  return (
    <div className="widget-manager">
      <button
        className="add-widget-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        + Add Widget
      </button>

      {isOpen && (
        <div className="widget-dropdown">
          {availableWidgets.map(widget => (
            <button
              key={widget.id}
              className="widget-option"
              onClick={() => handleAddWidget(widget.id)}
            >
              {widget.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default WidgetManager;
