import React, { useState } from 'react';

export default function BudgetPlanner() {
  const [item, setItem] = useState('');
  const [cost, setCost] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!item || !cost) return;
    setItems([...items, { item, cost: parseFloat(cost) }]);
    setItem('');
    setCost('');
  };

  const removeItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  const total = items.reduce((sum, entry) => sum + entry.cost, 0);

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ textAlign: 'center' }}>💸 Budget Planner</h2>

      <div style={{
        display: 'flex',
        gap: '10px',
        margin: '20px auto',
        maxWidth: '500px',
        justifyContent: 'center'
      }}>
        <input
          type="text"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          style={{ padding: '10px', width: '50%' }}
        />
        <input
          type="number"
          placeholder="Cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          style={{ padding: '10px', width: '30%' }}
        />
        <button onClick={addItem}>➕</button>
      </div>

      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        {items.map((entry, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            background: '#f5f5f5',
            marginBottom: '5px',
            borderRadius: '8px'
          }}>
            <span>{entry.item}</span>
            <span>${entry.cost.toFixed(2)}</span>
            <button onClick={() => removeItem(index)}>❌</button>
          </div>
        ))}
      </div>

      <h3 style={{ textAlign: 'center', marginTop: '20px' }}>
        Total: ${total.toFixed(2)}
      </h3>
    </div>
  );
}



