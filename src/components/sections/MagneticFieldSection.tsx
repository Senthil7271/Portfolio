"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, Zap, ArrowRight, Layers, Compass, ExternalLink } from "lucide-react";

interface Domain {
  id: string;
  name: string;
  tagline: string;
  description: string;
  angle: number; // in degrees for circular layout
  tech: string[];
  targetHash: string;
}

const DOMAINS: Domain[] = [
  {
    id: "fpga",
    name: "FPGA Development",
    tagline: "Custom hardware architectures & streaming acceleration",
    description:
      "Synthesizable Verilog RTL digital pipelines, systolic arrays, and hardware CNN accelerators on Lattice CertusPro NX and Xilinx Zynq platforms.",
    angle: 0,
    tech: ["Verilog RTL", "Vivado", "Lattice Radiant", "Systolic MACs"],
    targetHash: "#projects",
  },
  {
    id: "embedded",
    name: "Embedded Systems",
    tagline: "Deterministic low-level firmware & hardware abstraction",
    description:
      "Bare-metal development, Board Support Packages (BSP), DMA channels, and communication buses (UART, SPI, I2C, I2S) across Renesas RA8P1 & Arm architectures.",
    angle: 90,
    tech: ["Cortex-M85", "BSP Integration", "FSP HAL", "Zero-Copy DMA"],
    targetHash: "#experience",
  },
  {
    id: "vlsi",
    name: "VLSI Design",
    tagline: "ASIC RTL-to-GDSII flow, synthesis & timing closure",
    description:
      "Custom CPU microarchitecture implementation, static timing analysis (STA), power optimization, and logic synthesis using Cadence and Synopsys EDA tools.",
    angle: 180,
    tech: ["Cadence Genus", "Synopsys DC", "Static Timing", "RTL Verification"],
    targetHash: "#achievements",
  },
  {
    id: "edge-ai",
    name: "Edge AI & RTOS",
    tagline: "Quantized neural inference & deterministic real-time systems",
    description:
      "μT-Kernel 3.0 preemptive multitasking alongside TensorFlow Lite INT8 post-training quantization on Arm Ethos-U55 NPU and Cortex-M7 silicon.",
    angle: 270,
    tech: ["μT-Kernel 3.0", "Ethos-U55", "TFLite INT8", "Vela Compiler"],
    targetHash: "#toolkit",
  },
];

export default function MagneticFieldSection() {
  const [activeDomain, setActiveDomain] = useState<string>("fpga");

  const current = DOMAINS.find((d) => d.id === activeDomain) || DOMAINS[0];

  return (
    <section id="identity" className="relative py-24 bg-background-primary overflow-hidden border-t border-surface-border/70">
      {/* Background Volumetric Light */}
      <div className="absolute inset-0 bg-circuit-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-electric-yellow/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-background-elevated border border-surface-border text-xs font-mono text-electric-yellow">
            <Compass className="w-3.5 h-3.5 text-electric-yellow" />
            <span>SECTION 01 // ROTATING MAGNETIC FIELDS</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-text-primary tracking-tight">
            Engineering Identity:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow via-amber-300 to-[#FFFDF5]">
              The Electromagnetic Core
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
            Inspired by Nikola Tesla&apos;s fundamental discovery of rotating magnetic fields (1882) — four core engineering disciplines acting as electromagnetic poles driving intelligent hardware.
          </p>
        </div>

        {/* Interactive Stator Field Visualizer Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left: The Circular Rotating Magnetic Flux Chamber */}
          <div className="lg:col-span-6 flex items-center justify-center p-6 relative">
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full border border-surface-border/80 flex items-center justify-center bg-background-secondary/80 backdrop-blur-md shadow-2xl">
              
              {/* Rotating Stator Rings */}
              <div className="absolute inset-4 rounded-full border border-dashed border-electric-yellow/30 animate-[spin_35s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-electric-amber/25 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-20 rounded-full border border-[#F5F1E6]/15 animate-[spin_15s_linear_infinite]" />

              {/* Electromagnetic Flux Field Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="fluxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EAB308" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#FACC15" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFFDF5" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                {/* 4 Quadrant Flux Ellipses */}
                <ellipse cx="200" cy="200" rx="140" ry="60" fill="none" stroke="url(#fluxGrad)" strokeWidth="1.2" strokeDasharray="6 4" className="animate-[pulseSubtle_3s_ease-in-out_infinite]" />
                <ellipse cx="200" cy="200" rx="60" ry="140" fill="none" stroke="url(#fluxGrad)" strokeWidth="1.2" strokeDasharray="6 4" className="animate-[pulseSubtle_3s_ease-in-out_infinite_reverse]" />
                <circle cx="200" cy="200" r="150" fill="none" stroke="#34332A" strokeWidth="1" />
              </svg>

              {/* Central Energy Rotor Core - Crisp Hairline Border */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-background-elevated border-2 border-electric-yellow flex flex-col items-center justify-center shadow-xl shadow-black/80">
                <span className="font-mono text-[10px] text-text-muted">STATOR</span>
                <span className="font-display font-extrabold text-base text-electric-yellow">SK</span>
                <span className="font-mono text-[9px] text-emerald-400">CIT &bull; 8.56</span>
              </div>

              {/* 4 Magnetic Pole Nodes around Perimeter */}
              {DOMAINS.map((domain, idx) => {
                const rad = (domain.angle * Math.PI) / 180;
                const r = 155; // radius in px from center (200, 200)
                const x = 200 + r * Math.cos(rad);
                const y = 200 + r * Math.sin(rad);
                const isSelected = activeDomain === domain.id;

                return (
                  <button
                    key={domain.id}
                    onClick={() => setActiveDomain(domain.id)}
                    style={{ left: `${(x / 400) * 100}%`, top: `${(y / 400) * 100}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-2xl border transition-all z-20 ${
                      isSelected
                        ? "bg-electric-yellow text-black border-electric-amber font-bold shadow-lg shadow-black/60 scale-110"
                        : "bg-background-elevated text-text-secondary border-surface-border hover:border-electric-yellow hover:text-white"
                    }`}
                    title={domain.name}
                  >
                    <span className="font-mono text-xs font-bold block">
                      POLE 0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Active Magnetic Domain Inspector Card */}
          <div className="lg:col-span-6 text-left">
            <div className="p-6 sm:p-8 rounded-3xl bg-background-secondary border border-surface-border shadow-xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-electric-yellow/5 rounded-full blur-[70px] pointer-events-none" />

              <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-surface-border">
                <span className="text-electric-yellow uppercase">
                  // MAGNETIC POLE 0{DOMAINS.findIndex((d) => d.id === current.id) + 1}
                </span>
                <span className="text-emerald-400 font-bold">ELECTROMAGNETIC FIELD ACTIVE</span>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl text-text-primary mb-1">
                  {current.name}
                </h3>
                <p className="font-mono text-xs text-electric-yellow mb-3">
                  {current.tagline}
                </p>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Technologies in this Pole */}
              <div className="space-y-2 pt-2 border-t border-surface-border/60">
                <span className="font-mono text-[11px] text-text-muted uppercase block">
                  // Core Toolchains &amp; Hardware:
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-surface-highlight border border-surface-border font-mono text-xs text-text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Jump Link */}
              <div className="pt-2">
                <Link
                  href={current.targetHash}
                  className="inline-flex items-center space-x-2 text-xs font-mono text-electric-yellow hover:text-white transition-colors"
                >
                  <span>Explore Associated Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
