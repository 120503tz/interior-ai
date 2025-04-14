import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/examples/jsm/controls/DragControls';

export default function Visualization() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const dragControlsRef = useRef(null);
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Set up scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f0f0f0');
    sceneRef.current = scene;

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 3, 6);
    cameraRef.current = camera;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Grid helper
    const grid = new THREE.GridHelper(10, 10);
    scene.add(grid);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2;
    controlsRef.current = controls;

    // Animation loop
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
        if (mountRef.current && renderer) {
          renderer.dispose();
          mountRef.current.removeChild(renderer.domElement);
        }
      };      
  }, []);

  // Update drag controls when furniture changes
  useEffect(() => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

    const dragControls = new DragControls(furniture, cameraRef.current, rendererRef.current.domElement);
    dragControls.addEventListener('dragstart', () => {
      controlsRef.current.enabled = false;
    });
    dragControls.addEventListener('dragend', () => {
      controlsRef.current.enabled = true;
    });

    dragControlsRef.current = dragControls;

    return () => {
      dragControls.dispose();
    };
  }, [furniture]);

  const addFurniture = (type) => {
    if (!sceneRef.current) return;

    let geometry;
    const color = '#FF6A13';

    switch (type) {
      case 'sofa':
        geometry = new THREE.BoxGeometry(1.6, 0.6, 0.8);
        break;
      case 'table':
        geometry = new THREE.CylinderGeometry(0.8, 0.8, 0.1, 32);
        break;
      case 'chair':
        geometry = new THREE.BoxGeometry(0.6, 0.8, 0.6);
        break;
      case 'lamp':
        geometry = new THREE.ConeGeometry(0.2, 0.4, 16);
        break;
      default:
        geometry = new THREE.BoxGeometry(1, 1, 1);
    }

    const material = new THREE.MeshStandardMaterial({ color });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(Math.random() * 4 - 2, 0.5, Math.random() * 4 - 2);

    sceneRef.current.add(mesh);
    setFurniture((prev) => [...prev, mesh]);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>🧊 Interactive 3D Room</h2>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        Click a button to add furniture. Drag it around the 3D space.
      </p>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={() => addFurniture('sofa')} style={{ marginRight: '10px' }}>🛋️ Sofa</button>
        <button onClick={() => addFurniture('table')} style={{ marginRight: '10px' }}>🪵 Table</button>
        <button onClick={() => addFurniture('chair')} style={{ marginRight: '10px' }}>🪑 Chair</button>
        <button onClick={() => addFurniture('lamp')}>💡 Lamp</button>
      </div>

      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '500px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          overflow: 'hidden',
        }}
      />
    </div>
  );
}






