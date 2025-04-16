import React, { useState } from 'react';
import suggestionData from '../data/suggestionData';

export default function AIRecommendations() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleSuggest = () => {
    const keyword = input.trim().toLowerCase();
    const match = suggestionData.find(item => item.keyword.toLowerCase() === keyword);
    setResult(match || { suggestion: "No match found. Try 'cozy', 'modern', 'boho', etc.", image: null });
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ textAlign: 'center' }}>💡 AI Design Suggestions</h2>

      <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Try a style like cozy, modern, boho..."
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            marginBottom: '10px'
          }}
        />
        <button onClick={handleSuggest}>🎨 Suggest</button>
      </div>

      {result && (
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          {result.image && (
            <img
              src={result.image}
              alt={result.keyword || 'preview'}
              style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', marginBottom: '15px' }}
            />
          )}
          <p style={{ fontSize: '18px', fontWeight: '500' }}>{result.suggestion}</p>
        </div>
      )}
    </div>
  );
}






