import React from 'react';

const materials = [
  {
    name: 'Oak Wood',
    type: 'Flooring',
    image: 'https://via.placeholder.com/400x150.png?text=Oak+Wood'
  },
  {
    name: 'White Marble',
    type: 'Countertop',
    image: 'https://via.placeholder.com/400x150.png?text=White+Marble'
  },
  {
    name: 'Velvet',
    type: 'Upholstery',
    image: 'https://via.placeholder.com/400x150.png?text=Velvet'
  },
  {
    name: 'Matte Black Finish',
    type: 'Appliance Finish',
    image: 'https://via.placeholder.com/400x150.png?text=Matte+Black'
  },
  {
    name: 'Bamboo',
    type: 'Flooring',
    image: 'https://via.placeholder.com/400x150.png?text=Bamboo'
  },
  {
    name: 'Granite',
    type: 'Countertop',
    image: 'https://via.placeholder.com/400x150.png?text=Granite'
  },
  {
    name: 'Suede',
    type: 'Upholstery',
    image: 'https://via.placeholder.com/400x150.png?text=Suede'
  },
  {
    name: 'Glass',
    type: 'Tabletop',
    image: 'https://via.placeholder.com/400x150.png?text=Glass'
  },
  {
    name: 'Chrome',
    type: 'Metal Finish',
    image: 'https://via.placeholder.com/400x150.png?text=Chrome'
  },
  {
    name: 'Linen',
    type: 'Fabric',
    image: 'https://via.placeholder.com/400x150.png?text=Linen'
  },
  {
    name: 'Reclaimed Wood',
    type: 'Wall Paneling',
    image: 'https://via.placeholder.com/400x150.png?text=Reclaimed+Wood'
  },
  {
    name: 'Terracotta Tile',
    type: 'Floor Tile',
    image: 'https://via.placeholder.com/400x150.png?text=Terracotta'
  },
];

export default function MaterialCatalog() {
  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ textAlign: 'center' }}>🧱 Material Catalog</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {materials.map((mat, index) => (
          <div
            key={index}
            style={{
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: '0.3s',
              cursor: 'pointer'
            }}
          >
            <img
              src={mat.image}
              alt={mat.name}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                transition: '0.3s ease-in-out',
              }}
            />
            <div style={{ padding: '12px' }}>
              <h4 style={{ marginBottom: '5px' }}>{mat.name}</h4>
              <p style={{ fontSize: '14px', color: '#666' }}>{mat.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





