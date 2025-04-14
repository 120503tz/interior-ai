import React, { useState } from 'react';

const keywordResponses = {
  cozy: "Try a warm-toned palette with soft lighting, layered textures like wool and velvet, and a reading nook.",
  modern: "Use sleek lines, a monochrome color palette, glass tables, and minimal furniture with metallic accents.",
  vintage: "Incorporate retro wallpaper, distressed wood, antique lighting, and bold floral fabrics.",
  colorful: "Try bold accent walls, eclectic art, and vibrant furniture pieces to energize the room.",
  small: "Use light colors, mirrors, and space-saving furniture to make the room feel bigger and brighter.",
  luxury: "Add velvet sofas, gold/brass fixtures, marble finishes, and elegant lighting like chandeliers.",
  rustic: "Try natural wood beams, stone accents, earthy tones, and warm, cozy textures like leather and knit rugs.",
  boho: "Go for layered rugs, rattan furniture, hanging plants, and lots of patterns in warm earth tones."
};

export default function AIRecommendations() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleClick = () => {
    const lowerInput = input.toLowerCase();
    let found = false;

    for (let keyword in keywordResponses) {
      if (lowerInput.includes(keyword)) {
        setResponse(keywordResponses[keyword]);
        found = true;
        break;
      }
    }

    if (!found) {
      setResponse("Try using keywords like: cozy, modern, vintage, colorful, small, luxury, rustic, or boho to get suggestions!");
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '700px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>💡 AI Recommendations</h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: I want a cozy boho vibe with natural lighting"
          style={{
            flex: 1,
            padding: '12px',
            fontSize: '16px',
            borderRadius: '10px',
            border: '1px solid #ccc',
          }}
        />
        <button onClick={handleClick}>Suggest</button>
      </div>

      {response && (
        <div
          style={{
            background: '#f4f4f4',
            padding: '18px',
            borderRadius: '12px',
            borderLeft: '5px solid #FF6A13',
            color: '#00205B'
          }}
        >
          🧠 <strong>AI Suggestion:</strong>
          <p style={{ marginTop: '10px' }}>{response}</p>
        </div>
      )}
    </div>
  );
}





