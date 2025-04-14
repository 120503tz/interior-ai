import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '90vh',
        background: 'linear-gradient(to right, #141e30, #243b55)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
        textAlign: 'center'
      }}
    >
      <h1 style={{ fontSize: '56px', fontWeight: '700', marginBottom: '20px' }}>
        Interior AI
      </h1>
      <p style={{ fontSize: '20px', maxWidth: '600px', marginBottom: '40px' }}>
        Design your dream space with AI-powered suggestions, real-time layouts, and a catalog full of inspiration.
      </p>
      <Link to="/layout">
        <button style={{ fontSize: '18px', padding: '12px 30px' }}>Get Started</button>
      </Link>
    </div>
  );
}

