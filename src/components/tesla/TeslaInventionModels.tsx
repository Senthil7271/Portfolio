"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ModelProps {
  isHovered?: boolean;
  isDragging?: boolean;
  active?: boolean;
  className?: string;
}

// -------------------------------------------------------------
// 1. TESLA COIL MODEL (Project 1: FPGA AI Surveillance)
// -------------------------------------------------------------
export function TeslaCoilModel({ isHovered = false, isDragging = false, active = false, className = "" }: ModelProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 260;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 1.8, 4.2);
    camera.lookAt(0, 0.6, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Warm Obsidian & Amber Lights
    const ambientLight = new THREE.AmbientLight(0x141411, 2.5);
    scene.add(ambientLight);

    const spotLight = new THREE.DirectionalLight(0xfacc15, 3.5);
    spotLight.position.set(3, 5, 4);
    scene.add(spotLight);

    const rimLight = new THREE.DirectionalLight(0xeab308, 2.5);
    rimLight.position.set(-3, -1, -3);
    scene.add(rimLight);

    const sparkLight = new THREE.PointLight(0xfacc15, 1.5, 4);
    sparkLight.position.set(0, 1.6, 0);
    scene.add(sparkLight);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Obsidian Ceramic / Slate Base
    const baseGeo = new THREE.CylinderGeometry(1.2, 1.25, 0.15, 32);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x1d1c17, roughness: 0.45, metalness: 0.5 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = 0.075;
    rootGroup.add(base);

    // Primary Copper Winding (Helical spiral)
    const primaryGroup = new THREE.Group();
    const copperMat = new THREE.MeshStandardMaterial({ color: 0xd4a017, roughness: 0.25, metalness: 0.9 });
    for (let i = 0; i < 5; i++) {
      const radius = 0.85 + i * 0.08;
      const torusGeo = new THREE.TorusGeometry(radius, 0.035, 12, 32);
      const torus = new THREE.Mesh(torusGeo, copperMat);
      torus.rotation.x = Math.PI / 2;
      torus.position.y = 0.2 + i * 0.06;
      primaryGroup.add(torus);
    }
    rootGroup.add(primaryGroup);

    // Secondary Coil Form (Tall cylindrical column with copper wire texture)
    const coilFormGeo = new THREE.CylinderGeometry(0.35, 0.35, 1.3, 32);
    const coilMat = new THREE.MeshStandardMaterial({
      color: 0xb8860b,
      roughness: 0.3,
      metalness: 0.85,
    });
    const coil = new THREE.Mesh(coilFormGeo, coilMat);
    coil.position.y = 0.85;
    rootGroup.add(coil);

    // Secondary Wire Striations (Decorative rings)
    for (let i = 0; i < 12; i++) {
      const ringGeo = new THREE.TorusGeometry(0.355, 0.012, 8, 32);
      const ring = new THREE.Mesh(ringGeo, copperMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.25 + i * 0.1;
      rootGroup.add(ring);
    }

    // Top Toroid Discharge Terminal (Polished Brass / Gold)
    const toroidGeo = new THREE.TorusGeometry(0.55, 0.18, 20, 40);
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.15, metalness: 0.95 });
    const toroid = new THREE.Mesh(toroidGeo, brassMat);
    toroid.rotation.x = Math.PI / 2;
    toroid.position.y = 1.6;
    rootGroup.add(toroid);

    // Top Electrode Tip
    const tipGeo = new THREE.ConeGeometry(0.06, 0.2, 16);
    const tip = new THREE.Mesh(tipGeo, brassMat);
    tip.position.y = 1.82;
    rootGroup.add(tip);

    // Electrical Discharge Arcs (Line geometry branching from toroid in Electric Yellow)
    const arcLines: THREE.Line[] = [];
    const arcCount = 4;
    for (let i = 0; i < arcCount; i++) {
      const points: THREE.Vector3[] = [];
      points.push(new THREE.Vector3(0, 1.8, 0));
      for (let j = 1; j <= 4; j++) {
        points.push(new THREE.Vector3((Math.random() - 0.5) * 0.8, 1.8 + j * 0.2, (Math.random() - 0.5) * 0.8));
      }
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
      const arcMat = new THREE.LineBasicMaterial({ color: 0xfacc15, transparent: true, opacity: 0.85 });
      const arc = new THREE.Line(arcGeo, arcMat);
      rootGroup.add(arc);
      arcLines.push(arc);
    }

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      const speed = isHovered ? 2.2 : isDragging ? 3.0 : 1.0;

      rootGroup.rotation.y = t * 0.4 * speed;

      // Pulse sparks & arcs
      arcLines.forEach((arc, idx) => {
        const positions = arc.geometry.attributes.position.array as Float32Array;
        const activeMultiplier = isHovered || active ? 1.5 : 0.8;
        for (let i = 3; i < positions.length; i += 3) {
          positions[i] = (Math.sin(t * 15 + idx + i) * 0.5 + (Math.random() - 0.5) * 0.1) * activeMultiplier;
          positions[i + 1] = 1.7 + (i / 3) * 0.22;
          positions[i + 2] = (Math.cos(t * 12 + idx + i) * 0.5 + (Math.random() - 0.5) * 0.1) * activeMultiplier;
        }
        arc.geometry.attributes.position.needsUpdate = true;
      });

      sparkLight.intensity = (isHovered || active ? 3.0 : 1.2) + Math.sin(t * 20) * 0.5;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, [isHovered, isDragging, active]);

  return <div ref={containerRef} className={`w-full h-full min-h-[220px] select-none ${className}`} />;
}

// -------------------------------------------------------------
// 2. AC INDUCTION MOTOR MODEL (Project 2: μT-Kernel RTOS Porting)
// -------------------------------------------------------------
export function InductionMotorModel({ isHovered = false, isDragging = false, active = false, className = "" }: ModelProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 260;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(2.8, 2.2, 3.8);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x141411, 2.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfacc15, 3.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Stator Cast-Iron Housing (Obsidian Dark)
    const statorGeo = new THREE.CylinderGeometry(0.95, 0.95, 1.4, 24);
    const statorMat = new THREE.MeshStandardMaterial({ color: 0x1d1c17, roughness: 0.45, metalness: 0.7 });
    const stator = new THREE.Mesh(statorGeo, statorMat);
    stator.rotation.z = Math.PI / 2;
    stator.position.y = 0.6;
    rootGroup.add(stator);

    // Stator End Bells
    const endBellGeo = new THREE.CylinderGeometry(0.98, 0.98, 0.15, 24);
    const ironMat = new THREE.MeshStandardMaterial({ color: 0x26251e, roughness: 0.4, metalness: 0.85 });
    const endBell1 = new THREE.Mesh(endBellGeo, ironMat);
    endBell1.rotation.z = Math.PI / 2;
    endBell1.position.set(-0.75, 0.6, 0);
    rootGroup.add(endBell1);

    const endBell2 = new THREE.Mesh(endBellGeo, ironMat);
    endBell2.rotation.z = Math.PI / 2;
    endBell2.position.set(0.75, 0.6, 0);
    rootGroup.add(endBell2);

    // Motor Base Feet
    const feetGeo = new THREE.BoxGeometry(0.4, 0.12, 1.4);
    const foot1 = new THREE.Mesh(feetGeo, ironMat);
    foot1.position.set(-0.5, 0.06, 0);
    rootGroup.add(foot1);
    const foot2 = new THREE.Mesh(feetGeo, ironMat);
    foot2.position.set(0.5, 0.06, 0);
    rootGroup.add(foot2);

    // Internal Copper Stator Coils
    const copperMat = new THREE.MeshStandardMaterial({ color: 0xd4a017, roughness: 0.25, metalness: 0.9 });
    for (let i = 0; i < 6; i++) {
      const coilRingGeo = new THREE.TorusGeometry(0.7, 0.045, 12, 32);
      const coilRing = new THREE.Mesh(coilRingGeo, copperMat);
      coilRing.rotation.y = Math.PI / 2;
      coilRing.position.set(-0.5 + i * 0.2, 0.6, 0);
      rootGroup.add(coilRing);
    }

    // Drive Shaft (Steel Cylinder)
    const shaftGroup = new THREE.Group();
    const shaftGeo = new THREE.CylinderGeometry(0.14, 0.14, 2.3, 20);
    const steelMat = new THREE.MeshStandardMaterial({ color: 0xd4d0c5, roughness: 0.15, metalness: 0.95 });
    const shaft = new THREE.Mesh(shaftGeo, steelMat);
    shaft.rotation.z = Math.PI / 2;
    shaftGroup.add(shaft);

    // Squirrel-Cage Rotor Bars inside Stator
    const rotorGeo = new THREE.CylinderGeometry(0.55, 0.55, 1.1, 16);
    const rotorMat = new THREE.MeshStandardMaterial({ color: 0x8c887b, roughness: 0.35, metalness: 0.8 });
    const rotor = new THREE.Mesh(rotorGeo, rotorMat);
    rotor.rotation.z = Math.PI / 2;
    shaftGroup.add(rotor);

    shaftGroup.position.set(0, 0.6, 0);
    rootGroup.add(shaftGroup);

    // Rotating Magnetic Flux Arc Rings (Electric Yellow)
    const fluxRings: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const fluxGeo = new THREE.RingGeometry(1.05 + i * 0.12, 1.08 + i * 0.12, 32);
      const fluxMat = new THREE.MeshBasicMaterial({
        color: 0xfacc15,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
      });
      const fluxRing = new THREE.Mesh(fluxGeo, fluxMat);
      fluxRing.rotation.y = Math.PI / 2;
      fluxRing.position.set(0, 0.6, 0);
      rootGroup.add(fluxRing);
      fluxRings.push(fluxRing);
    }

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      const spinSpeed = isHovered ? 8.0 : isDragging ? 12.0 : 2.5;

      shaftGroup.rotation.x = t * spinSpeed;
      rootGroup.rotation.y = Math.sin(t * 0.5) * 0.25;

      fluxRings.forEach((ring, idx) => {
        ring.rotation.x = t * (spinSpeed * 0.8) + idx * 0.6;
        (ring.material as THREE.MeshBasicMaterial).opacity = 0.25 + Math.sin(t * 6 + idx) * 0.35;
      });

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, [isHovered, isDragging, active]);

  return <div ref={containerRef} className={`w-full h-full min-h-[220px] select-none ${className}`} />;
}

// -------------------------------------------------------------
// 3. POLYPHASE AC GENERATOR MODEL (Project 3: FPGA KNN Classifier)
// -------------------------------------------------------------
export function PolyphaseGeneratorModel({ isHovered = false, isDragging = false, active = false, className = "" }: ModelProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 260;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 2.2, 4.0);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x141411, 2.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfacc15, 3.5);
    dirLight.position.set(3, 6, 4);
    scene.add(dirLight);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Stator Outer Ring
    const statorRingGeo = new THREE.TorusGeometry(1.2, 0.12, 16, 36);
    const ironMat = new THREE.MeshStandardMaterial({ color: 0x1d1c17, roughness: 0.35, metalness: 0.8 });
    const statorRing = new THREE.Mesh(statorRingGeo, ironMat);
    statorRing.position.y = 0.6;
    rootGroup.add(statorRing);

    // 3 Distinct Phase Stator Coils (Electric Yellow, Deep Amber, Electric White)
    const phaseColors = [0xfacc15, 0xeab308, 0xfffdf5];
    const phaseCoils: THREE.Mesh[] = [];

    for (let i = 0; i < 3; i++) {
      const angle = (i * 2 * Math.PI) / 3;
      const coilGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.45, 16);
      const coilMat = new THREE.MeshStandardMaterial({
        color: phaseColors[i],
        roughness: 0.25,
        metalness: 0.85,
      });
      const coil = new THREE.Mesh(coilGeo, coilMat);
      coil.position.set(Math.cos(angle) * 1.05, 0.6 + Math.sin(angle) * 1.05, 0);
      coil.rotation.z = angle + Math.PI / 2;
      rootGroup.add(coil);
      phaseCoils.push(coil);
    }

    // Rotating Armature in Center
    const rotorGroup = new THREE.Group();
    const rotorCenterGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.3, 20);
    const copperMat = new THREE.MeshStandardMaterial({ color: 0xd4a017, roughness: 0.25, metalness: 0.9 });
    const rotorCenter = new THREE.Mesh(rotorCenterGeo, copperMat);
    rotorCenter.rotation.x = Math.PI / 2;
    rotorGroup.add(rotorCenter);

    for (let i = 0; i < 4; i++) {
      const pAngle = (i * Math.PI) / 2;
      const poleGeo = new THREE.BoxGeometry(0.18, 0.45, 0.26);
      const pole = new THREE.Mesh(poleGeo, ironMat);
      pole.position.set(Math.cos(pAngle) * 0.52, Math.sin(pAngle) * 0.52, 0);
      pole.rotation.z = pAngle;
      rotorGroup.add(pole);
    }

    rotorGroup.position.set(0, 0.6, 0);
    rootGroup.add(rotorGroup);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      const speed = isHovered ? 5.0 : isDragging ? 8.0 : 1.8;

      rotorGroup.rotation.z = -t * speed;
      rootGroup.rotation.y = Math.sin(t * 0.4) * 0.3;

      phaseCoils.forEach((coil, i) => {
        const phaseOffset = (i * 2 * Math.PI) / 3;
        const phaseVal = (Math.sin(t * speed * 2 + phaseOffset) + 1) / 2;
        (coil.material as THREE.MeshStandardMaterial).emissive = new THREE.Color(phaseColors[i]);
        (coil.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.2 + phaseVal * 0.8;
      });

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, [isHovered, isDragging, active]);

  return <div ref={containerRef} className={`w-full h-full min-h-[220px] select-none ${className}`} />;
}

// -------------------------------------------------------------
// 4. RESONANT WIRELESS ENERGY SYSTEM (Project 4: Wafer Defect Classification)
// -------------------------------------------------------------
export function ResonantCoilModel({ isHovered = false, isDragging = false, active = false, className = "" }: ModelProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 260;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 1.8, 4.2);
    camera.lookAt(0, 0.6, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x141411, 2.5);
    scene.add(ambientLight);

    const light1 = new THREE.DirectionalLight(0xfacc15, 3.5);
    light1.position.set(3, 5, 4);
    scene.add(light1);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    const copperMat = new THREE.MeshStandardMaterial({ color: 0xd4a017, roughness: 0.25, metalness: 0.9 });
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.2, metalness: 0.95 });
    const slateMat = new THREE.MeshStandardMaterial({ color: 0x1d1c17, roughness: 0.4, metalness: 0.7 });

    const createResonantUnit = (xPos: number) => {
      const unit = new THREE.Group();
      unit.position.x = xPos;

      const standGeo = new THREE.CylinderGeometry(0.45, 0.5, 0.12, 24);
      const stand = new THREE.Mesh(standGeo, slateMat);
      stand.position.y = 0.06;
      unit.add(stand);

      const pillarGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.8, 16);
      const pillar = new THREE.Mesh(pillarGeo, brassMat);
      pillar.position.y = 0.45;
      unit.add(pillar);

      const spiralGroup = new THREE.Group();
      for (let r = 0; r < 6; r++) {
        const ringGeo = new THREE.TorusGeometry(0.18 + r * 0.07, 0.02, 8, 32);
        const ring = new THREE.Mesh(ringGeo, copperMat);
        ring.rotation.y = Math.PI / 2;
        spiralGroup.add(ring);
      }
      spiralGroup.position.y = 0.85;
      unit.add(spiralGroup);

      const sphereGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const sphere = new THREE.Mesh(sphereGeo, brassMat);
      sphere.position.y = 1.35;
      unit.add(sphere);

      return unit;
    };

    const txUnit = createResonantUnit(-0.95);
    const rxUnit = createResonantUnit(0.95);
    rootGroup.add(txUnit);
    rootGroup.add(rxUnit);

    // Wireless Energy Stream Particles (Electric Yellow / Gold)
    const beamCount = 18;
    const beamGeo = new THREE.BufferGeometry();
    const beamPositions = new Float32Array(beamCount * 3);
    for (let i = 0; i < beamCount; i++) {
      beamPositions[i * 3] = -0.9 + (i / beamCount) * 1.8;
      beamPositions[i * 3 + 1] = 0.85 + (Math.random() - 0.5) * 0.2;
      beamPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
    }
    beamGeo.setAttribute("position", new THREE.BufferAttribute(beamPositions, 3));
    const beamMat = new THREE.PointsMaterial({
      color: 0xfacc15,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
    });
    const beamPoints = new THREE.Points(beamGeo, beamMat);
    rootGroup.add(beamPoints);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      const speed = isHovered ? 2.5 : isDragging ? 3.5 : 1.2;

      rootGroup.rotation.y = Math.sin(t * 0.5) * 0.35;

      const positions = beamPoints.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < beamCount; i++) {
        let x = positions[i * 3] + 0.025 * speed;
        if (x > 0.95) x = -0.95;
        positions[i * 3] = x;
        positions[i * 3 + 1] = 0.85 + Math.sin(t * 8 + i) * 0.08;
      }
      beamPoints.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, [isHovered, isDragging, active]);

  return <div ref={containerRef} className={`w-full h-full min-h-[220px] select-none ${className}`} />;
}
