import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectShowcase3DProps {
  project: Project;
  index: number;
}

export default function ProjectShowcase3D({ project, index }: ProjectShowcase3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const modelRef = useRef<THREE.Mesh>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
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

    // Create project showcase model
    const geometry = new THREE.OctahedronGeometry(1.5, 0);
    const material = new THREE.MeshPhongMaterial({
      color: new THREE.Color(`hsl(${(index * 40) % 360}, 70%, 60%)`),
      transparent: true,
      opacity: 0.8,
      flatShading: true,
    });
    const model = new THREE.Mesh(geometry, material);
    scene.add(model);
    modelRef.current = model;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 0.8);
    pointLight1.position.set(2, 2, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
    pointLight2.position.set(-2, -2, -2);
    scene.add(pointLight2);

    // Animation
    let animationFrameId: number;
    const animate = () => {
      if (modelRef.current) {
        // Slower rotation speed
        modelRef.current.rotation.x += 0.002;
        modelRef.current.rotation.y += 0.003;

        // Hover effect
        if (isHovered) {
          modelRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
          modelRef.current.rotation.x += 0.01;
          modelRef.current.rotation.y += 0.01;
        } else {
          modelRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        }
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [index, isHovered]);

  return (
    <motion.div
      className="relative h-64 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div ref={containerRef} className="absolute inset-0" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
          <img src={project.image} alt="Screenshot of the app" />
        </div>
      </motion.div>
    </motion.div>
  );
}
