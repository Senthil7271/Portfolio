"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SKILL_CATEGORIES, FEATURED_PROJECTS } from "@/data/portfolio";
import { Sliders, Radio, Activity, Cpu, ArrowRight, Zap, Terminal } from "lucide-react";

export default function LaboratorySkillBoard() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [waveformType, setWaveformType] = useState<"sine" | "square" | "pulse" | "sawtooth">("square");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  // When category changes, set a matching waveform
  const handleCategorySelect = (idx: number) => {
    setActiveCategoryIndex(idx);
    setSelectedSkill(null);
    if (idx === 0) setWaveformType("square"); // FPGA / Clock
    else if (idx === 1) setWaveformType("pulse"); // Embedded / PWM
    else if (idx === 2) setWaveformType("square"); // VLSI / Digital Logic
    else if (idx === 3) setWaveformType("pulse"); // RTOS / Task Preemption
    else if (idx === 4) setWaveformType("sine"); // Edge AI / Quantized Tensors
    else if (idx === 5) setWaveformType("sawtooth"); // Programming Languages
    else if (idx === 6) setWaveformType("pulse"); // Communication Protocols
    else setWaveformType("sine"); // Engineering Tools
  };

  // Oscilloscope Canvas Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const renderScope = () => {
      t += 0.04;
      const w = (canvas.width = canvas.clientWidth);
      const h = (canvas.height = canvas.clientHeight);

      ctx.clearRect(0, 0, w, h);

      // CRT phosphor grid lines
      ctx.strokeStyle = "rgba(234, 179, 8, 0.12)";
      ctx.lineWidth = 1;
      const step = 24;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Live waveform trace - Crisp Hairline
      ctx.beginPath();
      ctx.strokeStyle = "#FACC15";
      ctx.lineWidth = 2;

      const midY = h / 2;
      const amp = h * 0.32;

      for (let x = 0; x < w; x++) {
        const normX = (x / w) * Math.PI * 8;
        let y = midY;

        if (waveformType === "sine") {
          y = midY + Math.sin(normX - t * 3) * amp;
        } else if (waveformType === "square") {
          y = midY + (Math.sin(normX - t * 3) >= 0 ? amp * 0.85 : -amp * 0.85);
        } else if (waveformType === "sawtooth") {
          y = midY + (((normX - t * 3) % Math.PI) / Math.PI - 0.5) * amp * 1.8;
        } else if (waveformType === "pulse") {
          const mod = (normX - t * 3) % (Math.PI * 2);
          y = midY + (mod < 0.6 ? amp : -amp * 0.3);
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animId = requestAnimationFrame(renderScope);
    };

    renderScope();

    return () => cancelAnimationFrame(animId);
  }, [waveformType]);

  // Find linked projects for selected skill
  const skillObj = activeCategory?.items.find((item) => item.name === selectedSkill);
  const connectedSlugs = skillObj?.relatedProjects || [];
  const connectedProjects = FEATURED_PROJECTS.filter((p) => connectedSlugs.includes(p.slug));

  return (
    <section id="skills" className="relative py-24 bg-background-primary overflow-hidden border-t border-surface-border/70">
      <span id="toolkit" className="absolute -top-24" />
      {/* Background Volumetric Glow */}
      <div className="absolute inset-0 bg-circuit-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-background-elevated border border-surface-border text-xs font-mono text-electric-yellow">
            <Activity className="w-3.5 h-3.5 text-electric-yellow" />
            <span>SECTION 04 // LABORATORY INSTRUMENTATION</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-text-primary tracking-tight">
            Electrical Laboratory:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow via-amber-300 to-[#FFFDF5]">
              Control Board
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
            Modeled after high-voltage research benches — toggle rotary switches to inspect verified engineering capabilities and observe live signals.
          </p>
        </div>

        {/* Main Control Board Chassis */}
        <div className="p-6 sm:p-10 rounded-3xl bg-background-secondary border-2 border-surface-border shadow-2xl relative">
          
          {/* Top Chassis Panel: Oscilloscope CRT Display + Subsystem Telemetry */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-surface-border items-center">
            
            {/* Oscilloscope CRT Viewport */}
            <div className="lg:col-span-7 rounded-2xl bg-black border-2 border-surface-border p-4 shadow-inner relative overflow-hidden">
              <div className="flex items-center justify-between pb-2 text-[10px] font-mono text-electric-yellow border-b border-surface-border/50">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-electric-yellow animate-pulse" />
                  <span>CRT OSCILLOSCOPE CHANNEL A</span>
                </span>
                <span>TIMEBASE: 10us/DIV &bull; V/DIV: 2.0V</span>
              </div>

              <div className="relative w-full h-36 sm:h-44">
                <canvas ref={canvasRef} className="w-full h-full block" />
              </div>

              <div className="flex items-center justify-between pt-2 text-[10px] font-mono text-text-muted border-t border-surface-border/50">
                <span>MODE: {waveformType.toUpperCase()} TRIGGER</span>
                <span className="text-emerald-400">SIGNAL LOCK: 100%</span>
              </div>
            </div>

            {/* Instrument Control Dial Switcher */}
            <div className="lg:col-span-5 space-y-4 text-left font-mono">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-electric-yellow uppercase font-bold block mb-1">
                    // ROTARY SELECTOR BUS
                  </span>
                  <p className="text-xs text-text-secondary font-body">
                    Rotate mechanical dial to route signal bus across 8 laboratory banks.
                  </p>
                </div>

                {/* Mechanical Rotary Dial Knob with Needle Pointer */}
                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-surface-border bg-background-primary flex items-center justify-center">
                    {/* Radial Dial Tick Marks */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                      <span
                        key={deg}
                        style={{ transform: `rotate(${deg}deg) translateY(-26px)` }}
                        className={`absolute w-1 h-1.5 rounded-full ${
                          activeCategoryIndex === i ? "bg-electric-yellow" : "bg-surface-border"
                        }`}
                      />
                    ))}
                    {/* Center Knob with Pointer Indicator */}
                    <div
                      style={{ transform: `rotate(${activeCategoryIndex * 45}deg)` }}
                      className="w-10 h-10 rounded-full bg-surface-elevated border-2 border-electric-yellow flex flex-col items-center justify-start pt-1 transition-transform duration-500 shadow-md shadow-black/80"
                    >
                      <div className="w-1 h-2.5 rounded-full bg-electric-yellow" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 8 Rotary Switch Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {SKILL_CATEGORIES.map((cat, i) => (
                  <button
                    key={cat.category}
                    onClick={() => handleCategorySelect(i)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                      activeCategoryIndex === i
                        ? "bg-electric-yellow text-black border-electric-amber font-bold shadow-md shadow-black/50"
                        : "bg-background-elevated text-text-secondary border-surface-border hover:border-electric-yellow hover:text-white"
                    }`}
                  >
                    <span className="truncate">{cat.category.split("&")[0].trim()}</span>
                    <span className="text-[10px] opacity-75 shrink-0 ml-1">CH{i + 1}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Chassis Panel: Active Subsystem Toolchains & Project Links */}
          <div className="pt-8 text-left space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
              <div>
                <h3 className="font-display font-bold text-xl text-text-primary">
                  Channel {activeCategoryIndex + 1}: {activeCategory?.category}
                </h3>
                <p className="font-body text-xs text-text-secondary mt-0.5">
                  {activeCategory?.description}
                </p>
              </div>
              <span className="font-mono text-xs text-electric-yellow">
                {activeCategory?.items.length} INSTRUMENTS VERIFIED
              </span>
            </div>

            {/* Skills Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {activeCategory?.items.map((item) => {
                const isSelected = selectedSkill === item.name;
                const hasConnections = item.relatedProjects.length > 0;

                return (
                  <div
                    key={item.name}
                    onClick={() => setSelectedSkill(isSelected ? null : item.name)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-surface-elevated border-electric-yellow shadow-lg shadow-black/60"
                        : "bg-background-elevated/80 border-surface-border hover:border-electric-yellow/70"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-text-primary">
                        {item.name}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-highlight font-mono text-[10px] text-electric-yellow">
                        {item.level}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-text-muted pt-1">
                      <span>TRACE LINK:</span>
                      {hasConnections ? (
                        <span className="text-emerald-400">
                          {item.relatedProjects.length} Project{item.relatedProjects.length > 1 ? "s" : ""}
                        </span>
                      ) : (
                        <span>Verified Core</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connected Project Trigger Card */}
            {connectedProjects.length > 0 && (
              <div className="p-4 rounded-2xl bg-background-elevated border border-electric-yellow/50 space-y-2 animate-fadeIn font-mono">
                <span className="text-[11px] text-electric-yellow uppercase font-bold tracking-wider block">
                  // RESUME IMPLEMENTATIONS POWERED BY &quot;{selectedSkill}&quot;:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {connectedProjects.map((p) => (
                    <Link
                      key={p.id}
                      href={`/projects/${p.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-surface-highlight hover:bg-surface-elevated border border-surface-border hover:border-electric-yellow transition-colors group"
                    >
                      <div>
                        <div className="font-display font-bold text-xs text-text-primary group-hover:text-electric-yellow">
                          {p.title}
                        </div>
                        <div className="text-[10px] text-text-muted">{p.category}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-electric-yellow group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
