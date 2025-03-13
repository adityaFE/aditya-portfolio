import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export default function TimelineCube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create a line representing the timeline
    const points = [];
    points.push(new THREE.Vector3(-2, 0, 0));
    points.push(new THREE.Vector3(2, 0, 0));
    
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x4444ff,
      transparent: true,
      opacity: 0.5
    });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);

    // Add floating dots along the timeline
    const dotGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const dotMaterial = new THREE.MeshPhongMaterial({
      color: 0x4444ff,
      transparent: true,
      opacity: 0.8,
    });

    const dots: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      dot.position.x = -2 + (i * 2);
      dots.push(dot);
      scene.add(dot);
    }

    // Add ambient and point lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x4444ff, 0.8);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      dots.forEach((dot, i) => {
        dot.position.y = Math.sin(Date.now() * 0.001 + i) * 0.2;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="w-full h-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
