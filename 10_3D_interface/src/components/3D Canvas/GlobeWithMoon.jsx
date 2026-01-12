import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

export default function GlobeWithMoon() {
  const globeEl = useRef();

  const [markers, setMarkers] = useState([
    { lat: 0, lng: 0, size: 0.5, color: "red", label: "Greenwich" },
    { lat: 37.7749, lng: -122.4194, size: 0.5, color: "blue", label: "San Francisco" },
    { lat: 24.7136, lng: 46.6753, size: 0.5, color: "yellow", label: "Riyadh" },
  ]);

  // Moon orbit parameters
  const moonDistance = 2; // distance from Earth radius (unit scale)
  const moonRadius = 0.27; // relative size
  const moonRef = useRef();

  useEffect(() => {
    const globe = globeEl.current;
    if (!globe) return;

    // Create Moon as a sphere
    const moonGeometry = new THREE.SphereGeometry(moonRadius, 32, 32);
    const moonMaterial = new THREE.MeshStandardMaterial({ color: "gray" });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    moonRef.current = moon;
    globe.scene().add(moon);

    // Add light
    const light = new THREE.PointLight(0xffffff, 1.5);
    light.position.set(5, 5, 5);
    globe.scene().add(light);
  }, []);

  // Animate moon
  useEffect(() => {
    let frameId;
    const animate = () => {
      if (moonRef.current) {
        const t = Date.now() * 0.001;
        moonRef.current.position.x = Math.sin(t) * moonDistance;
        moonRef.current.position.z = Math.cos(t) * moonDistance;
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundColor="black"
      markers={markers}
      markerAltitude={0.01}
      markerColor={(m) => m.color}
      markerRadius={(m) => m.size}
      markerLabel={(m) => m.label}
    />
  );
}
