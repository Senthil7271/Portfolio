"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolio";
import { ShieldCheck, Zap } from "lucide-react";

interface PortraitEnergyFrameProps {
  mousePos?: { x: number; y: number };
  className?: string;
}

export default function PortraitEnergyFrame({
  mousePos = { x: 0, y: 0 },
  className = "",
}: PortraitEnergyFrameProps) {
  const [imageError, setImageError] = useState(false);

  // Subtle 3D tilt based on pointer position
  const tiltX = (mousePos.y * -6).toFixed(2);
  const tiltY = (mousePos.x * 8).toFixed(2);

  return (
    <div
      className={`relative group perspective-1000 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transition: "transform 0.2s cubic-bezier(0.2, 0, 0, 1)",
      }}
    >
      {/* 1. Behind-the-portrait Circular Electromagnetic Field Structure */}
      <div className="absolute -inset-10 flex items-center justify-center pointer-events-none z-0">
        {/* Outer Rotating Stator Flux Ring */}
        <div className="absolute w-[440px] h-[440px] rounded-full border border-electric-yellow/25 animate-[spin_40s_linear_infinite]" />
        
        {/* Counter-rotating Inner Field Ring */}
        <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-electric-amber/25 animate-[spin_25s_linear_infinite_reverse]" />
        
        {/* Polyphase 4-Quadrant Copper Nodes */}
        <div className="absolute w-[400px] h-[400px] flex items-center justify-between pointer-events-none">
          <span className="w-2.5 h-2.5 rounded-full bg-electric-yellow" />
          <span className="w-2.5 h-2.5 rounded-full bg-electric-yellow" />
        </div>
        <div className="absolute h-[400px] w-[400px] flex flex-col items-center justify-between pointer-events-none">
          <span className="w-2.5 h-2.5 rounded-full bg-electric-amber" />
          <span className="w-2.5 h-2.5 rounded-full bg-electric-amber" />
        </div>

        {/* Diffused Electric Yellow Ambient Spotlight */}
        <div className="absolute w-[340px] h-[340px] rounded-full bg-electric-yellow/10 blur-[70px]" />
      </div>

      {/* 2. Main High-Voltage Laboratory Ceramic / Copper Frame */}
      <div className="relative z-10 rounded-3xl bg-background-elevated/95 border-2 border-surface-border p-3 sm:p-4 overflow-hidden shadow-2xl shadow-black/90">
        
        {/* Subtle Conductive Copper Trim Accent */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A017] to-transparent opacity-80" />
        
        {/* Dynamic Electric Rim Accent (Clean Hairline - Zero Glow) */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-surface-border group-hover:border-electric-yellow transition-colors duration-500" />

        {/* Corner Stator Reticle Nodes */}
        <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-electric-yellow pointer-events-none" />
        <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-electric-yellow pointer-events-none" />
        <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-electric-yellow pointer-events-none" />
        <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-electric-yellow pointer-events-none" />

        {/* Portrait Image Viewport */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[500px] rounded-2xl overflow-hidden bg-background-secondary flex items-center justify-center">
          <Image
            src={imageError ? "/images/profile/profile-photo.svg" : PERSONAL_INFO.photoPlaceholder}
            alt={PERSONAL_INFO.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 460px"
            onError={() => setImageError(true)}
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Bottom Gradient for Contrast */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background-primary via-background-primary/80 to-transparent pointer-events-none" />

          {/* Live Status Badge */}
          <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10 pointer-events-none">
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-background-primary/90 border border-surface-border backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10px] text-text-primary tracking-wider uppercase font-semibold">
                SYSTEM ONLINE
              </span>
            </div>
          </div>

          {/* Bottom Identity Overlay */}
          <div className="absolute bottom-4 inset-x-4 z-10">
            <div className="p-3.5 rounded-xl bg-background-primary/90 border border-surface-border/90 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-text-primary">
                    {PERSONAL_INFO.name}
                  </h4>
                  <p className="font-mono text-[10px] sm:text-[11px] text-electric-yellow">
                    VLSI &bull; FPGA &bull; RTOS SPECIALIST
                  </p>
                </div>
                <div className="flex items-center space-x-1 text-emerald-400 font-mono text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>CIT 2024–28</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Conductor Line */}
        <div className="mt-3 flex items-center justify-between px-2 font-mono text-[10px] text-text-muted">
          <span className="flex items-center space-x-1.5">
            <Zap className="w-3.5 h-3.5 text-electric-yellow" />
            <span>ELECTROMAGNETIC FIELD COUPLING</span>
          </span>
          <span className="text-electric-yellow">ID: SKM-CIT</span>
        </div>
      </div>
    </div>
  );
}
