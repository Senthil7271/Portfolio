"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolio";
import PortraitEnergyFrame from "./PortraitEnergyFrame";
import { ArrowDown, FileText, ChevronRight, Zap, Shield, Cpu, Terminal, Sparkles } from "lucide-react";

export default function TeslaHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth) * 2 - 1,
        y: (e.clientY / innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Volumetric Electrical Laboratory Atmosphere */}
      <div className="absolute inset-0 bg-circuit-grid opacity-60 pointer-events-none" />
      
      {/* Volumetric Radial Light */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-electric-yellow/8 rounded-full blur-[140px] pointer-events-none transition-transform duration-700"
        style={{
          transform: `translate(${mousePos.x * 35 - 375}px, ${mousePos.y * 35 - 275}px)`,
        }}
      />

      {/* Animated Copper Conductor Busbar across Top */}
      <div className="absolute top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A017] to-transparent opacity-40 pointer-events-none">
        <div className="w-48 h-full bg-gradient-to-r from-transparent via-electric-yellow to-transparent animate-[wirePulse_3s_linear_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Top Micro-label Status Bar */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-background-elevated/90 border border-surface-border text-[11px] sm:text-xs font-mono text-electric-yellow backdrop-blur-md shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-electric-yellow animate-pulse flex-shrink-0" />
              <span className="tracking-wide truncate">
                TESLA&apos;S ELECTRIC UNIVERSE &bull; CIT VLSI &amp; EMBEDDED
              </span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-2xl sm:text-5xl lg:text-6xl tracking-tight text-text-primary leading-[1.1] break-words">
                <span className="block text-text-muted text-base sm:text-xl font-mono font-medium tracking-widest uppercase mb-1">
                  {PERSONAL_INFO.name}
                </span>
                ENGINEERING INTELLIGENCE{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow via-amber-300 to-[#FFFDF5]">
                  INTO HARDWARE.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-text-secondary font-body max-w-2xl leading-relaxed">
                {PERSONAL_INFO.subTagline}
              </p>
            </div>

            {/* Technical Keywords Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {PERSONAL_INFO.keywords.map((kw, i) => (
                <span
                  key={kw}
                  className="px-2.5 py-1 rounded-md bg-surface-elevated/80 border border-surface-border text-electric-yellow hover:border-electric-yellow/70 transition-colors"
                >
                  <span className="text-text-muted mr-1.5">0{i + 1} //</span>
                  {kw}
                </span>
              ))}
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="#projects"
                className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-electric-yellow hover:bg-amber-400 text-black font-mono text-xs font-bold shadow-lg shadow-black/50 transition-all group"
              >
                <Zap className="w-4 h-4 fill-current text-black" />
                <span>Explore Tesla Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Senthil_Kumar_Mahalingam_Resume.pdf"
                className="flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-background-elevated hover:bg-surface-highlight border border-surface-border hover:border-electric-yellow text-text-primary font-mono text-xs font-medium transition-all group"
              >
                <FileText className="w-4 h-4 text-electric-yellow group-hover:scale-110 transition-transform" />
                <span>Download Résumé</span>
              </a>

              <Link
                href="/projects"
                className="hidden sm:flex items-center space-x-2 px-4 py-3.5 rounded-xl text-text-secondary hover:text-electric-yellow font-mono text-xs transition-colors"
              >
                <Terminal className="w-4 h-4 text-text-muted" />
                <span>All 14 Repositories &gt;</span>
              </Link>
            </div>

            {/* Authentic Hardware Credentials Ticker */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-surface-border/60 max-w-xl font-mono">
              <div>
                <div className="text-lg sm:text-xl font-bold text-text-primary">8.56</div>
                <div className="text-[11px] text-text-muted">B.E. VLSI CGPA</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-electric-yellow">5+ Awards</div>
                <div className="text-[11px] text-text-muted">VLSID &bull; TRON &bull; CDAC</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-text-primary">14 Repos</div>
                <div className="text-[11px] text-text-muted">Open Source Hardware</div>
              </div>
            </div>

          </div>

          {/* Right Column: Large Portrait with Circular Electromagnetic Field */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px] sm:max-w-[460px]">
              <PortraitEnergyFrame mousePos={mousePos} />
            </div>
          </div>

        </div>

        {/* Scroll To Energize Indicator */}
        <div className="pt-16 flex flex-col items-center justify-center">
          <Link
            href="#identity"
            className="group flex flex-col items-center space-y-2 text-text-muted hover:text-electric-yellow transition-colors"
          >
            <span className="font-mono text-[11px] tracking-widest uppercase">
              SCROLL TO ENERGIZE
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-surface-border group-hover:border-electric-yellow flex items-start justify-center p-1 transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-electric-yellow animate-bounce" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
