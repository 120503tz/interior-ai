import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import RoomLayout from '../pages/LayoutTool.js'; // adjust path if needed

export default function SaveShare() {
  const captureRef = useRef(null);

  const saveAsPDF = async () => {
    const canvas = await html2canvas(captureRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
    pdf.save('my-room-design.pdf');
  };

  const shareText = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ textAlign: 'center' }}>💾 Save & Share</h2>

      <div
        ref={captureRef}
        style={{
          padding: '20px',
          border: '1px dashed #aaa',
          borderRadius: '10px',
          marginBottom: '20px',
          background: '#f9f9f9'
        }}
      >
        <h3 style={{ textAlign: 'center' }}>🛋️ Your Room Layout</h3>
        <RoomLayout />
      </div>

      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <button onClick={saveAsPDF}>📄 Save as PDF</button>
        <button onClick={shareText}>🔗 Copy Share Link</button>
      </div>
    </div>
  );
}




