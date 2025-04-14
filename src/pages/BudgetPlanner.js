import React, { useState } from 'react';

export default function BudgetPlanner() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');
  const [cost, setCost] = useState('');

  const addItem = () => {
    if (!item || !cost) return;
    setItems([...items, { item, cost: parseFloat(cost) }]);
    setItem('');
    setCost('');
  };

  const total = items.reduce((sum, i) => sum + i.cost, 0);

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>💰 Budget Planner</h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <input
          placeholder="Cost"
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          style={{ width: '100px', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button onClick={addItem}>Add</button>
      </div>

      <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map((i, index) => (
            <li key={index} style={{ marginBottom: '10px', fontWeight: '500' }}>
              {i.item} — <span style={{ float: 'right' }}>${i.cost.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <hr style={{ margin: '15px 0' }} />
        <h3 style={{ textAlign: 'right' }}>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}


