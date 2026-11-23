"use client";

import React, { useState } from "react";
import { EXPERIENCES } from "@/data/portfolio";
import { Calendar, CheckCircle2, Factory, Cpu, Layers, Activity, Gauge, Scan } from "lucide-react";

// 1. Syrma SGS: Industrial SMT PCB Assembly & Manufacturing Illustration
function SmtAssemblyIllustration() {
  const [activeZone, setActiveZone] = useState<number>(2); // 0 to 3
  const reflowZones = [
    { name: "Preheat Zone", temp: "150°C", desc: "Flux activation and gentle thermal ramp-up." },
    { name: "Soak Zone", temp: "185°C", desc: "Thermal equalization across PCB components." },
    { name: "Reflow Peak", temp: "245°C", desc: "Lead-free SAC305 solder alloy liquidus state." },
    { name: "Cooling Zone", temp: "60°C", desc: "Controlled solidification to prevent grain stress." },
  ];

  return (
    <div className="p-5 rounded-2xl bg-background-elevated border border-surface-border space-y-4 font-mono text-left">
      <div className="flex items-center justify-between pb-2 border-b border-surface-border text-xs">
        <span className="flex items-center space-x-1.5 text-electric-yellow font-bold">
          <Factory className="w-4 h-4 text-electric-yellow" />
          <span>SMT PRODUCTION &amp; AOI SCHEMATIC</span>
        </span>
        <span className="text-emerald-400 text-[10px]">IPC-A-610 CLASS 2</span>
      </div>

      {/* Assembly Conveyor & Pick-and-Place Head Schematic */}
      <div className="relative h-28 rounded-xl bg-background-secondary border border-surface-border p-3 overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between text-[10px] text-text-muted">
          <span>PICK &amp; PLACE HEAD: 28,000 CPH</span>
          <span className="text-electric-yellow">NOZZLE #04 ACTIVE</span>
        </div>

        {/* Conveyor Track with Moving PCB Panels */}
        <div className="relative w-full h-8 bg-[#1D1C17] rounded border border-surface-border flex items-center px-2 space-x-3 overflow-hidden">
          <div className="w-14 h-5 rounded bg-background-primary border border-electric-yellow/60 flex items-center justify-center text-[9px] text-electric-yellow shrink-0">
            PCB-01
          </div>
          <div className="w-14 h-5 rounded bg-background-primary border border-surface-border flex items-center justify-center text-[9px] text-text-muted shrink-0">
            PCB-02
          </div>
          <div className="w-14 h-5 rounded bg-background-primary border border-surface-border flex items-center justify-center text-[9px] text-text-muted shrink-0">
            PCB-03
          </div>
          {/* AOI Scanner Camera Reticle Overlay */}
          <div className="absolute right-8 inset-y-0 w-8 border-x-2 border-electric-yellow bg-electric-yellow/10 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        <div className="flex justify-between text-[9px] text-text-muted">
          <span>INSPECTION: AOI SOLDER FILLET METRICS</span>
          <span className="text-emerald-400">DEFECT RATE: &lt; 0.02%</span>
        </div>
      </div>

      {/* Interactive Reflow Oven Temperature Profile */}
      <div className="space-y-2">
        <span className="text-[10px] text-text-muted uppercase block">
          // REFLOW SOLDERING THERMAL PROFILE:
        </span>
        <div className="grid grid-cols-4 gap-1.5">
          {reflowZones.map((z, i) => (
            <button
              key={z.name}
              onClick={() => setActiveZone(i)}
              className={`p-2 rounded-lg border text-left transition-all ${
                activeZone === i
                  ? "bg-surface-highlight border-electric-yellow text-electric-yellow"
                  : "bg-background-secondary border-surface-border text-text-muted hover:border-surface-highlight"
              }`}
            >
              <div className="text-[9px] truncate">{z.name}</div>
              <div className="text-xs font-bold mt-0.5">{z.temp}</div>
            </button>
          ))}
        </div>
        <p className="text-[11px] text-text-secondary font-body pt-1">
          {reflowZones[activeZone].desc}
        </p>
      </div>
    </div>
  );
}

// 2. CIT VLSI Research: Silicon RTL Architecture & Static Timing Analysis (STA) Illustration
function VlsiRtlTimingIllustration() {
  const [clockFreq, setClockFreq] = useState<number>(100); // 100 MHz

  return (
    <div className="p-5 rounded-2xl bg-background-elevated border border-surface-border space-y-4 font-mono text-left">
      <div className="flex items-center justify-between pb-2 border-b border-surface-border text-xs">
        <span className="flex items-center space-x-1.5 text-electric-yellow font-bold">
          <Activity className="w-4 h-4 text-electric-yellow" />
          <span>RTL ARCHITECTURE &amp; STA CLOSURE</span>
        </span>
        <span className="text-emerald-400 text-[10px]">CADENCE &amp; SYNOPSYS</span>
      </div>

      {/* 4-Stage Synthesized Pipeline Datapath */}
      <div className="space-y-1.5">
        <span className="text-[10px] text-text-muted uppercase block">
          // 4-STAGE CPU PIPELINE REGISTER SLACK:
        </span>
        <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-lg bg-background-secondary border border-surface-border">
            <span className="text-text-muted block text-[8px]">STAGE 01</span>
            <span className="font-bold text-text-primary">FETCH</span>
            <div className="text-emerald-400 text-[9px] mt-1">+1.84 ns</div>
          </div>
          <div className="p-2 rounded-lg bg-background-secondary border border-surface-border">
            <span className="text-text-muted block text-[8px]">STAGE 02</span>
            <span className="font-bold text-text-primary">DECODE</span>
            <div className="text-emerald-400 text-[9px] mt-1">+1.42 ns</div>
          </div>
          <div className="p-2 rounded-lg bg-background-secondary border border-electric-yellow/60">
            <span className="text-text-muted block text-[8px]">STAGE 03</span>
            <span className="font-bold text-electric-yellow">EXECUTE</span>
            <div className="text-emerald-400 text-[9px] mt-1">+0.96 ns</div>
          </div>
          <div className="p-2 rounded-lg bg-background-secondary border border-surface-border">
            <span className="text-text-muted block text-[8px]">STAGE 04</span>
            <span className="font-bold text-text-primary">WRITEBACK</span>
            <div className="text-emerald-400 text-[9px] mt-1">+2.10 ns</div>
          </div>
        </div>
      </div>

      {/* Static Timing Analysis (STA) Critical Path Breakdown */}
      <div className="p-3 rounded-xl bg-background-secondary border border-surface-border space-y-2">
        <div className="flex justify-between text-[10px] text-text-muted">
          <span>CRITICAL TIMING PATH: ALU_MUL &rarr; REG_OUT</span>
          <span className="text-electric-yellow font-bold">STA STATUS: MET</span>
        </div>

        {/* Visual Slack Margin Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[9px] text-text-muted">
            <span>Arrival Time: 8.58 ns</span>
            <span>Required Time: 10.00 ns (100 MHz)</span>
          </div>
          <div className="h-3 w-full rounded bg-background-primary border border-surface-border flex items-center overflow-hidden">
            <div className="h-full bg-electric-yellow" style={{ width: "85.8%" }} />
            <div className="h-full bg-emerald-500" style={{ width: "14.2%" }} />
          </div>
          <div className="flex justify-between text-[9px]">
            <span className="text-text-muted">Logic &amp; Interconnect Delay</span>
            <span className="text-emerald-400 font-bold">Worst Slack: +1.42 ns</span>
          </div>
        </div>
      </div>

      {/* Synthesis Tool Details */}
      <div className="flex justify-between text-[10px] text-text-muted pt-1 border-t border-surface-border/60">
        <span>FLOW: RTL &rarr; GENUS &rarr; STA</span>
        <span className="text-text-primary">ZERO TIMING VIOLATIONS</span>
      </div>
    </div>
  );
}

export default function ElectricExperienceTimeline() {
  const [activeExp, setActiveExp] = useState<string>("exp-02");

  return (
    <section id="experience" className="relative py-28 bg-background-primary overflow-hidden border-t border-surface-border/70">
      {/* Background Volumetric Light */}
      <div className="absolute inset-0 bg-circuit-grid opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-background-elevated border border-surface-border text-xs font-mono text-electric-yellow">
            <span className="w-2 h-2 rounded-full bg-electric-yellow" />
            <span>SECTION 03 // ELECTRIC TRANSMISSION NETWORK</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-text-primary tracking-tight">
            High-Voltage Transmission:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow via-amber-300 to-[#FFFDF5]">
              Internship Experience
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
            Inspired by Tesla&apos;s long-distance polyphase AC electrical grid — energy flows down heavy copper transmission busbars connecting active surface-mount electronics manufacturing and silicon research substations.
          </p>
        </div>

        {/* Transmission Network with Copper Conductor Spine */}
        <div className="relative">
          
          {/* Heavy Copper Conductor Busbar Spine Running Vertically */}
          <div className="hidden lg:block absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-2 rounded-full bg-gradient-to-b from-[#D4A017] via-electric-yellow to-[#D4A017] opacity-80 pointer-events-none">
            {/* Animated High-speed Electrical Surge Pulse */}
            <div className="w-full h-32 bg-gradient-to-b from-transparent via-[#FFFDF5] to-transparent animate-[wirePulse_3.5s_linear_infinite]" />
          </div>

          <div className="space-y-20">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const isSelected = activeExp === exp.id;
              const isSyrma = exp.id === "exp-01";

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central High-Voltage Transformer Coupling Node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-background-elevated border-2 border-electric-yellow items-center justify-center z-20 shadow-lg shadow-black/80">
                    <span className="w-3 h-3 rounded-full bg-electric-yellow animate-ping" />
                  </div>

                  {/* Column 1: Substation Dossier Card */}
                  <div className="w-full lg:w-[calc(50%-2.5rem)] text-left">
                    <div
                      onClick={() => setActiveExp(exp.id)}
                      className={`p-6 sm:p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer relative bg-background-secondary shadow-xl shadow-black/70 ${
                        isSelected
                          ? "border-electric-yellow bg-background-elevated"
                          : "border-surface-border hover:border-surface-highlight"
                      }`}
                    >
                      {/* Top Position Accent */}
                      <div
                        className={`absolute top-0 inset-x-0 h-1.5 ${
                          isSelected ? "bg-electric-yellow" : "bg-surface-border"
                        }`}
                      />

                      {/* Substation Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 font-mono text-xs pt-1">
                        <div className="flex items-center space-x-2">
                          {isSyrma ? (
                            <Factory className="w-4 h-4 text-electric-yellow" />
                          ) : (
                            <Cpu className="w-4 h-4 text-electric-yellow" />
                          )}
                          <span className="text-electric-yellow font-bold">
                            SUBSTATION 0{idx + 1} // {exp.type.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-text-muted">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-1">
                        {exp.role}
                      </h3>
                      <div className="font-mono text-xs text-text-muted mb-4">
                        {exp.organization} &bull; {exp.location}
                      </div>

                      {/* Verified Resume Metrics Banner */}
                      <div className="space-y-1.5 mb-5 font-mono text-xs">
                        {exp.metrics.map((m) => (
                          <div
                            key={m}
                            className="flex items-center space-x-2 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">{m}</span>
                          </div>
                        ))}
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2 text-xs sm:text-sm text-text-secondary font-body leading-relaxed mb-6">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-electric-yellow font-mono mt-0.5">&gt;</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Busbar */}
                      <div className="pt-3 border-t border-surface-border/60">
                        <span className="font-mono text-[10px] text-text-muted uppercase block mb-2">
                          // Industrial Toolchains &amp; Protocols:
                        </span>
                        <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                          {exp.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-md bg-background-secondary border border-surface-border text-electric-yellow"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Column 2: Dedicated Engineering Visualizer on the Opposite Side */}
                  <div className="w-full lg:w-[calc(50%-2.5rem)]">
                    {isSyrma ? <SmtAssemblyIllustration /> : <VlsiRtlTimingIllustration />}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
