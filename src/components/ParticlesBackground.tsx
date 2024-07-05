import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticlesBackgroundProps {
  targetPoint: [number, number, number];
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ targetPoint }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<[number, number, number]>([0, 0, 0]);
  const currentPoint = useRef<[number, number, number]>([0, 0, 0]);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 110000; i++) { // Aumenta el número de partículas
      vertices.push(THREE.MathUtils.randFloatSpread(7000)); // Aumenta el área de dispersión
      vertices.push(THREE.MathUtils.randFloatSpread(7000));
      vertices.push(THREE.MathUtils.randFloatSpread(7000));
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({ color: 0xffffff });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 5;

    const animateRotation = function () {
      points.rotation.x += 0.001;
      points.rotation.y += 0.001;
    };

    const animateDisplacement = function () {
      const [tx, ty, tz] = targetRef.current;
      const [cx, cy, cz] = currentPoint.current;

      const deltaX = (tx - cx) * 0.05;
      const deltaY = (ty - cy) * 0.05;
      const deltaZ = (tz - cz) * 0.05;

      currentPoint.current[0] += deltaX;
      currentPoint.current[1] += deltaY;
      currentPoint.current[2] += deltaZ;

      points.geometry.attributes.position.array.forEach((_, i) => {
        if (i % 3 === 0) points.geometry.attributes.position.array[i] += deltaX;
        if (i % 3 === 1) points.geometry.attributes.position.array[i] += deltaY;
        if (i % 3 === 2) points.geometry.attributes.position.array[i] += deltaZ;
      });
      points.geometry.attributes.position.needsUpdate = true;
    };

    const animate = function () {
      requestAnimationFrame(animate);

      animateRotation();

      if (
        Math.abs(targetRef.current[0] - currentPoint.current[0]) > 1 ||
        Math.abs(targetRef.current[1] - currentPoint.current[1]) > 1 ||
        Math.abs(targetRef.current[2] - currentPoint.current[2]) > 1
      ) {
        animateDisplacement();
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    targetRef.current = targetPoint;
  }, [targetPoint]);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default ParticlesBackground;
