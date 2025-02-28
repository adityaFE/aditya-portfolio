import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create floating geometric shapes with softer colors
    const objects: THREE.Mesh[] = [];
    const geometries = [
      new THREE.TorusGeometry(0.3, 0.1, 16, 32),
      new THREE.OctahedronGeometry(0.3),
      new THREE.TetrahedronGeometry(0.3),
      new THREE.IcosahedronGeometry(0.3),
      new THREE.TorusKnotGeometry(0.3, 0.1, 64, 8),
    ];

    // Softer color palette
    const colors = [
      'hsl(210, 40%, 80%)', // Soft blue
      'hsl(280, 30%, 80%)', // Soft purple
      'hsl(170, 30%, 80%)', // Soft teal
      'hsl(20, 30%, 80%)',  // Soft orange
      'hsl(340, 30%, 80%)', // Soft pink
    ];

    for (let i = 0; i < 12; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(colors[i % colors.length]),
        transparent: true,
        opacity: 0.5,
        flatShading: true,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      objects.push(mesh);
      scene.add(mesh);
    }

    // Softer lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff9999, 0.8); // Soft pink
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x99ccff, 0.8); // Soft blue
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Mouse move handler with slower parallax
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop with slower movements
    let animationFrameId: number;
    const animate = () => {
      objects.forEach((obj, i) => {
        // Slower rotation
        obj.rotation.x += 0.001;
        obj.rotation.y += 0.0015;

        // Slower floating motion
        obj.position.y += Math.sin(Date.now() * 0.0005 + i) * 0.002;

        // Gentler mouse parallax
        obj.position.x += (mousePosition.x * 0.005 - obj.position.x) * 0.01;
        obj.position.z += (mousePosition.y * 0.005 - obj.position.z) * 0.01;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [mousePosition]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    />
  );
}