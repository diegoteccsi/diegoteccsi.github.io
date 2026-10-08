import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface FondoInteractivoProps {
  className?: string;
  intensidad?: number;
  interactive?: boolean;
}

export const FondoInteractivo: React.FC<FondoInteractivoProps> = ({
  className = '',
  intensidad = 1,
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    // Scene setup
    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 220;

    // Node & Particle System for Data Constellation
    const nodeCount = window.innerWidth < 768 ? 45 : 90;
    const maxConnectionDistance = window.innerWidth < 768 ? 45 : 55;
    const boundingBox = {
      x: window.innerWidth < 768 ? 140 : 260,
      y: window.innerWidth < 768 ? 100 : 160,
      z: 70,
    };

    const nodePositions: THREE.Vector3[] = [];
    const nodeVelocities: THREE.Vector3[] = [];
    const originalPositions: THREE.Vector3[] = [];
    const nodeColors: number[] = [];

    // Colors: #2563EB (Electric Blue Accent), #64748B (Slate Gray), #94A3B8 (Light Slate)
    const colorAccent = new THREE.Color('#2563EB');
    const colorMuted = new THREE.Color('#94A3B8');
    const colorSubtle = new THREE.Color('#CBD5E1');

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * boundingBox.x * 2,
        (Math.random() - 0.5) * boundingBox.y * 2,
        (Math.random() - 0.5) * boundingBox.z * 2
      );
      nodePositions.push(pos.clone());
      originalPositions.push(pos.clone());

      const speed = prefersReducedMotion ? 0.02 : 0.15;
      nodeVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * speed,
          (Math.random() - 0.5) * speed,
          (Math.random() - 0.5) * (speed * 0.5)
        )
      );

      // ~20% of nodes are electric blue accents, remainder are muted data nodes
      const isAccent = Math.random() < 0.22;
      const c = isAccent ? colorAccent : Math.random() < 0.5 ? colorMuted : colorSubtle;
      nodeColors.push(c.r, c.g, c.b);
    }

    // Points Geometry & Material
    const pointsGeometry = new THREE.BufferGeometry();
    const positionsArray = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      positionsArray[i * 3] = nodePositions[i].x;
      positionsArray[i * 3 + 1] = nodePositions[i].y;
      positionsArray[i * 3 + 2] = nodePositions[i].z;
    }

    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));
    pointsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(nodeColors, 3));

    // Custom circle texture for soft round particles
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.arc(32, 32, 28, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const pointsMaterial = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 4.5 : 5.5,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      opacity: 0.85 * intensidad,
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(pointCloud);

    // Line Connections Geometry & Material
    const maxLines = (nodeCount * (nodeCount - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const linesMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.28 * intensidad,
      vertexColors: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const lineSegments = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lineSegments);

    // Mouse Interaction State
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      worldX: 0,
      worldY: 0,
      active: false,
      lastMoved: Date.now(),
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;

      mouse.targetX = (relativeX - 0.5) * 2;
      mouse.targetY = -(relativeY - 0.5) * 2;
      mouse.active = true;
      mouse.lastMoved = Date.now();

      // Project mouse into 3D world plane roughly at z=0
      mouse.worldX = mouse.targetX * (boundingBox.x * 0.9);
      mouse.worldY = mouse.targetY * (boundingBox.y * 0.9);
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Parallax effect on camera
      if (!prefersReducedMotion) {
        camera.position.x += (mouse.x * 25 - camera.position.x) * 0.03;
        camera.position.y += (mouse.y * 20 - camera.position.y) * 0.03;
        camera.lookAt(0, 0, 0);
      }

      // Update Node Positions with physical drift + mouse repulsion
      const positionsAttr = pointsGeometry.attributes.position as THREE.BufferAttribute;
      const posArray = positionsAttr.array as Float32Array;

      let lineVertexIndex = 0;
      let lineCount = 0;

      for (let i = 0; i < nodeCount; i++) {
        const p = nodePositions[i];
        const v = nodeVelocities[i];

        // Idle floating oscillation
        if (!prefersReducedMotion) {
          p.x += v.x;
          p.y += v.y;
          p.z += v.z;

          // Boundary bouncing
          if (p.x < -boundingBox.x || p.x > boundingBox.x) v.x *= -1;
          if (p.y < -boundingBox.y || p.y > boundingBox.y) v.y *= -1;
          if (p.z < -boundingBox.z || p.z > boundingBox.z) v.z *= -1;

          // Gentle sine wave breath
          p.y += Math.sin(elapsedTime * 0.8 + i) * 0.04;
        }

        // Mouse Repulsion & Ripple Physics
        if (mouse.active && interactive) {
          const dx = p.x - mouse.worldX;
          const dy = p.y - mouse.worldY;
          const distSq = dx * dx + dy * dy;
          const interactionRadius = 75;

          if (distSq < interactionRadius * interactionRadius && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / interactionRadius) * 1.8;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Spring back gently towards original distribution area
        p.x += (originalPositions[i].x - p.x) * 0.003;
        p.y += (originalPositions[i].y - p.y) * 0.003;

        posArray[i * 3] = p.x;
        posArray[i * 3 + 1] = p.y;
        posArray[i * 3 + 2] = p.z;
      }
      positionsAttr.needsUpdate = true;

      // Update Constellation Lines
      const linePosArray = linesGeometry.attributes.position.array as Float32Array;
      const lineColorArray = linesGeometry.attributes.color.array as Float32Array;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const p1 = nodePositions[i];
          const p2 = nodePositions[j];

          const dist = p1.distanceTo(p2);

          if (dist < maxConnectionDistance) {
            const alpha = 1 - dist / maxConnectionDistance;

            // Line vertices
            linePosArray[lineVertexIndex * 3] = p1.x;
            linePosArray[lineVertexIndex * 3 + 1] = p1.y;
            linePosArray[lineVertexIndex * 3 + 2] = p1.z;

            linePosArray[(lineVertexIndex + 1) * 3] = p2.x;
            linePosArray[(lineVertexIndex + 1) * 3 + 1] = p2.y;
            linePosArray[(lineVertexIndex + 1) * 3 + 2] = p2.z;

            // Faint slate-blue color blend
            const isBlueConnected =
              (nodeColors[i * 3] < 0.2 && nodeColors[i * 3 + 2] > 0.8) ||
              (nodeColors[j * 3] < 0.2 && nodeColors[j * 3 + 2] > 0.8);

            const r = isBlueConnected ? 0.15 : 0.58;
            const g = isBlueConnected ? 0.39 : 0.64;
            const b = isBlueConnected ? 0.92 : 0.72;

            lineColorArray[lineVertexIndex * 3] = r * alpha;
            lineColorArray[lineVertexIndex * 3 + 1] = g * alpha;
            lineColorArray[lineVertexIndex * 3 + 2] = b * alpha;

            lineColorArray[(lineVertexIndex + 1) * 3] = r * alpha;
            lineColorArray[(lineVertexIndex + 1) * 3 + 1] = g * alpha;
            lineColorArray[(lineVertexIndex + 1) * 3 + 2] = b * alpha;

            lineVertexIndex += 2;
            lineCount++;
          }
        }
      }

      linesGeometry.setDrawRange(0, lineCount * 2);
      linesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.color.needsUpdate = true;

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }

      pointsGeometry.dispose();
      pointsMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      particleTexture.dispose();
    };
  }, [intensidad, interactive]);

  if (!hasWebGL) {
    // Elegant CSS/Canvas Fallback for environments without WebGL
    return (
      <div
        className={`absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:24px_24px] ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};
