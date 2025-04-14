import React, { useState } from 'react';

export default function LayoutTool() {
  const [items, setItems] = useState([]);

  const furnitureOptions = [
    { name: 'Sofa', emoji: '🛋️' },
    { name: 'Chair', emoji: '🪑' },
    { name: 'Lamp', emoji: '💡' },
    { name: 'Table', emoji: '🪵' },
    { name: 'TV Stand', emoji: '📺' },
  ];

  const addItem = (name) => {
    const newItem = {
      id: Date.now(),
      name,
      x: 50,
      y: 50,
    };
    setItems([...items, newItem]);
  };

  const handleDrag = (e, id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          x: e.clientX - 80,
          y: e.clientY - 150,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ textAlign: 'center' }}>🧱 Room Layout Tool</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {furnitureOptions.map((item) => (
          <button
            key={item.name}
            onClick={() => addItem(`${item.emoji} ${item.name}`)}
            style={{
              margin: '10px',
              background: '#fff',
              color: '#333',
              border: '1px solid #ccc',
              padding: '10px 14px',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              transition: '0.2s',
            }}
            onMouseOver={(e) => (e.target.style.background = '#f0f0f0')}
            onMouseOut={(e) => (e.target.style.background = '#fff')}
          >
            {item.emoji} {item.name}
          </button>
        ))}
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          height: '500px',
          margin: 'auto',
          background: '#fff',
          borderRadius: '20px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            onMouseDown={(e) => {
              const move = (e) => handleDrag(e, item.id);
              const stop = () => {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', stop);
              };
              document.addEventListener('mousemove', move);
              document.addEventListener('mouseup', stop);
            }}
            style={{
              position: 'absolute',
              top: item.y,
              left: item.x,
              background: '#f7f7f7',
              padding: '12px 20px',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
              cursor: 'grab',
              fontSize: '16px',
              fontWeight: '600',
              userSelect: 'none',
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}


