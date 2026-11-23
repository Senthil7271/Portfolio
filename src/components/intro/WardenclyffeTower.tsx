"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface TowerProps {
  timelineStep: number; // 0 to 4
  shaftChargeProgress: number; // 0 to 1
  dischargeIntensity: number; // 0 to 1
}

// 3D Procedural Wardenclyffe Tower Model
function Tower3DScene({ timelineStep, shaftChargeProgress, dischargeIntensity }: TowerProps) {
  const towerGroupRef = useRef<THREE.Group>(null);
  const cupolaRef = useRef<THREE.Mesh>(null);
  const shaftSparksRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (towerGroupRef.current) {
      // Very gentle cinematic breathing rotation
      towerGroupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.12;
    }

    if (cupolaRef.current && dischargeIntensity > 0) {
      // Rapid subtle vibration during high-voltage discharge
      cupolaRef.current.position.y = 3.6 + (Math.random() - 0.5) * 0.04 * dischargeIntensity;
    }
  });

  // Structural Materials
  const darkMetalMaterial = new THREE.MeshStandardMaterial({
    color: 0x1d1c17,
    roughness: 0.65,
    metalness: 0.75,
  });

  const copperStrutMaterial = new THREE.MeshStandardMaterial({
    color: 0xd4a017,
    roughness: 0.45,
    metalness: 0.85,
  });

  const glowingElectrodeMaterial = new THREE.MeshStandardMaterial({
    color: timelineStep >= 2 ? 0xfacc15 : 0x8c6614,
    emissive: timelineStep >= 2 ? 0xfacc15 : 0x000000,
    emissiveIntensity: timelineStep >= 2 ? 1.5 * dischargeIntensity : 0.1,
    roughness: 0.2,
    metalness: 0.9,
  });

  return (
    <group ref={towerGroupRef} position={[0, -2.4, 0]}>
      {/* 1. Brick / Stone Industrial Laboratory Base Building */}
      <mesh position={[0, 0.4, 0]} material={darkMetalMaterial}>
        <cylinderGeometry args={[2.2, 2.5, 0.8, 8]} />
      </mesh>
      {/* Base Foundation Rim */}
      <mesh position={[0, 0.85, 0]} material={copperStrutMaterial}>
        <cylinderGeometry args={[2.0, 2.2, 0.1, 8]} />
      </mesh>

      {/* 2. Octagonal Tapering Lattice Framework (4 Staged Tiers) */}
      {/* Tier 1 (Bottom) */}
      <mesh position={[0, 1.4, 0]} material={darkMetalMaterial}>
        <cylinderGeometry args={[1.5, 1.95, 1.0, 8, 1, true]} />
      </mesh>
      {/* Tier 1 Ring Collar */}
      <mesh position={[0, 1.9, 0]} material={copperStrutMaterial}>
        <torusGeometry args={[1.52, 0.04, 8, 8]} />
      </mesh>

      {/* Tier 2 (Mid-lower) */}
      <mesh position={[0, 2.3, 0]} material={darkMetalMaterial}>
        <cylinderGeometry args={[1.1, 1.5, 0.8, 8, 1, true]} />
      </mesh>
      {/* Tier 2 Ring Collar */}
      <mesh position={[0, 2.7, 0]} material={copperStrutMaterial}>
        <torusGeometry args={[1.12, 0.035, 8, 8]} />
      </mesh>

      {/* Tier 3 (Upper-mid) */}
      <mesh position={[0, 3.0, 0]} material={darkMetalMaterial}>
        <cylinderGeometry args={[0.75, 1.1, 0.6, 8, 1, true]} />
      </mesh>
      {/* Tier 3 Ring Collar */}
      <mesh position={[0, 3.3, 0]} material={copperStrutMaterial}>
        <torusGeometry args={[0.77, 0.03, 8, 8]} />
      </mesh>

      {/* 3. Central Vertical High-Voltage Energy Shaft */}
      <mesh position={[0, 2.2, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 3.6, 12]} />
        <meshStandardMaterial
          color={timelineStep >= 1 ? 0xfacc15 : 0xd4a017}
          emissive={timelineStep >= 1 ? 0xfacc15 : 0x000000}
          emissiveIntensity={timelineStep >= 1 ? 2.0 : 0}
        />
      </mesh>

      {/* Rising Ionization Ring traveling up the shaft */}
      {timelineStep === 1 && (
        <mesh position={[0, 0.8 + shaftChargeProgress * 2.8, 0]}>
          <torusGeometry args={[0.2, 0.03, 8, 16]} />
          <meshBasicMaterial color="#FACC15" />
        </mesh>
      )}

      {/* 4. Massive Toroidal Cupola / Hemispherical Top Dome */}
      <group position={[0, 3.6, 0]}>
        {/* Main Toroidal Outer Electrode Ring */}
        <mesh ref={cupolaRef} material={glowingElectrodeMaterial}>
          <torusGeometry args={[1.35, 0.45, 16, 32]} />
        </mesh>

        {/* Hemispherical Upper Cap */}
        <mesh position={[0, 0.15, 0]} material={glowingElectrodeMaterial}>
          <sphereGeometry args={[1.1, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        </mesh>

        {/* Hemispherical Wireframe Ribs (Historical Steel/Wood Lattice Cage) */}
        <mesh position={[0, 0.16, 0]}>
          <sphereGeometry args={[1.15, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshBasicMaterial color="#EAB308" wireframe={true} />
        </mesh>

        {/* Central Terminal Spire & Apex Electrode */}
        <mesh position={[0, 1.25, 0]} material={glowingElectrodeMaterial}>
          <cylinderGeometry args={[0.03, 0.08, 0.6, 8]} />
        </mesh>
        <mesh position={[0, 1.6, 0]} material={glowingElectrodeMaterial}>
          <sphereGeometry args={[0.18, 16, 16]} />
        </mesh>
      </group>
    </group>
  );
}

// 2D SVG / Canvas Fallback in case WebGL is unavailable
function WardenclyffeSvgFallback({ timelineStep, shaftChargeProgress }: TowerProps) {
  return (
    <div className="relative w-72 sm:w-80 h-96 mx-auto flex items-center justify-center">
      <svg viewBox="0 0 300 400" className="w-full h-full" fill="none">
        {/* Tower Base */}
        <polygon points="70,380 230,380 210,320 90,320" fill="#1D1C17" stroke="#34332A" strokeWidth="2" />
        
        {/* Tapering Lattice Tiers */}
        <polygon points="90,320 210,320 185,240 115,240" fill="#141411" stroke="#34332A" strokeWidth="2" />
        <line x1="90" y1="320" x2="185" y2="240" stroke="#D4A017" strokeWidth="1.2" opacity="0.6" />
        <line x1="210" y1="320" x2="115" y2="240" stroke="#D4A017" strokeWidth="1.2" opacity="0.6" />

        <polygon points="115,240 185,240 170,160 130,160" fill="#141411" stroke="#34332A" strokeWidth="2" />
        <line x1="115" y1="240" x2="170" y2="160" stroke="#D4A017" strokeWidth="1.2" opacity="0.6" />
        <line x1="185" y1="240" x2="130" y2="160" stroke="#D4A017" strokeWidth="1.2" opacity="0.6" />

        {/* Central Electrical Shaft */}
        <line
          x1="150"
          y1="320"
          x2="150"
          y2="130"
          stroke={timelineStep >= 1 ? "#FACC15" : "#D4A017"}
          strokeWidth="4"
        />

        {/* Rising Charge indicator */}
        {timelineStep === 1 && (
          <circle cx="150" cy={320 - shaftChargeProgress * 190} r="7" fill="#FACC15" />
        )}

        {/* Top Toroidal Cupola Dome */}
        <ellipse
          cx="150"
          cy="120"
          rx="65"
          ry="25"
          fill="#1D1C17"
          stroke={timelineStep >= 2 ? "#FACC15" : "#D4A017"}
          strokeWidth="3"
        />
        <path
          d="M 90 120 C 90 70, 210 70, 210 120 Z"
          fill="#141411"
          stroke={timelineStep >= 2 ? "#FACC15" : "#D4A017"}
          strokeWidth="2.5"
        />

        {/* Cupola Spire Electrode */}
        <line x1="150" y1="80" x2="150" y2="50" stroke="#FACC15" strokeWidth="3" />
        <circle cx="150" cy="46" r="8" fill="#FACC15" />
      </svg>
    </div>
  );
}

export default function WardenclyffeTower({
  timelineStep,
  shaftChargeProgress,
  dischargeIntensity,
}: TowerProps) {
  const [hasWebGlError, setHasWebGlError] = React.useState(false);

  return (
    <div className="relative w-full h-[460px] sm:h-[540px] flex items-center justify-center select-none">
      {!hasWebGlError ? (
        <div className="w-full h-full">
          <Canvas
            camera={{ position: [0, 0.4, 7.2], fov: 45 }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
            }}
            onError={() => setHasWebGlError(true)}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFF8CC" />
            <pointLight position={[0, 1.8, 1]} intensity={timelineStep >= 2 ? 3.0 : 0.8} color="#FACC15" />
            <Tower3DScene
              timelineStep={timelineStep}
              shaftChargeProgress={shaftChargeProgress}
              dischargeIntensity={dischargeIntensity}
            />
          </Canvas>
        </div>
      ) : (
        <WardenclyffeSvgFallback
          timelineStep={timelineStep}
          shaftChargeProgress={shaftChargeProgress}
          dischargeIntensity={dischargeIntensity}
        />
      )}
    </div>
  );
}
