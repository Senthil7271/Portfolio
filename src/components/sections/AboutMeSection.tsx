"use client";

import React from "react";
import Link from "next/link";
import {
  User,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  FileText,
  ArrowUpRight,
  Zap,
  Cpu,
  Layers,
  BrainCircuit,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-background-primary overflow-hidden border-t border-surface-border/70"
    >
      {/* Background Volumetric Electrical Laboratory Atmosphere */}
      <div className="absolute inset-0 bg-circuit-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-electric-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-background-elevated border border-surface-border text-xs font-mono text-electric-yellow">
            <User className="w-3.5 h-3.5 text-electric-yellow" />
            <span>SECTION 02 // BIOGRAPHY &amp; ENGINEERING PHILOSOPHY</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-text-primary tracking-tight">
            Architecting Silicon, RTL &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow via-amber-300 to-[#FFFDF5]">
              Real-Time Intelligence
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
            Bridging fundamental semiconductor physics, synthesizable digital hardware, and deterministic edge execution.
          </p>
        </div>

        {/* Main Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Narrative Biography & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-background-elevated/90 border border-surface-border space-y-6 shadow-xl">
              
              {/* Profile Intro Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-border pb-5">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="font-mono text-xs text-electric-yellow mt-0.5 tracking-wider uppercase">
                    {PERSONAL_INFO.degree}
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-text-secondary bg-[#141411] px-3 py-1.5 rounded-lg border border-surface-border">
                  <MapPin className="w-3.5 h-3.5 text-electric-yellow" />
                  <span>Chennai, India</span>
                </div>
              </div>

              {/* In-depth Narrative */}
              <div className="space-y-4 font-body text-sm sm:text-base text-text-secondary leading-relaxed">
                <p>
                  I am an Electronics Engineering undergraduate at{" "}
                  <strong className="text-text-primary font-semibold">Chennai Institute of Technology</strong>,
                  specializing in <span className="text-electric-yellow">VLSI Design and Technology</span> (CGPA 8.56).
                  My engineering passion lies at the intersection of reconfigurable hardware architectures, low-latency firmware, and physical edge intelligence.
                </p>
                <p>
                  Rather than treating hardware as an abstract black box, I approach computing from the transistors upward — from synthesizable Verilog RTL and timing closure in Cadence/Synopsys EDA tools to deterministic RTOS scheduling on Arm Cortex-M85 and INT8 neural quantization on Lattice FPGAs and Hailo-8 NPUs.
                </p>
                <p>
                  My hands-on experience bridges both industrial silicon and high-volume electronics fabrication: from monitoring surface-mount technology (SMT) production lines at{" "}
                  <strong className="text-text-primary font-semibold">Syrma SGS Technology</strong> to architecting custom CPU microarchitectures on FPGA fabric at the{" "}
                  <strong className="text-text-primary font-semibold">CIT VLSI Research Lab</strong>.
                </p>
                <p>
                  As a team lead, I led our multidisciplinary teams to national and international victory, including winning the{" "}
                  <span className="text-electric-yellow font-semibold">VLSID 2026 Design Contest</span> and achieving finalist recognition at the{" "}
                  <span className="text-electric-yellow font-semibold">TRON Programming Contest (Renesas)</span>.
                </p>
              </div>

              {/* Contact Quick Strip */}
              <div className="pt-4 border-t border-surface-border flex flex-wrap items-center gap-4 text-xs font-mono">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center space-x-2 text-text-secondary hover:text-electric-yellow transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-electric-yellow" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <span className="text-surface-border">|</span>
                <span className="flex items-center space-x-2 text-text-secondary">
                  <Phone className="w-3.5 h-3.5 text-electric-yellow" />
                  <span>{PERSONAL_INFO.phone}</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Senthil_Kumar_Mahalingam_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-electric-yellow hover:bg-amber-400 text-black font-mono text-xs font-bold transition-all shadow-md group"
                >
                  <FileText className="w-4 h-4 text-black" />
                  <span>Download Latest Résumé</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <Link
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#141411] hover:bg-[#1D1C17] border border-surface-border hover:border-electric-yellow text-text-primary font-mono text-xs font-medium transition-all"
                >
                  <span>Initiate Contact</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Telemetry Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Academic Credentials Card */}
            <div className="p-5 rounded-2xl bg-background-elevated/90 border border-surface-border space-y-3 shadow-lg">
              <div className="flex items-center space-x-2 text-xs font-mono text-electric-yellow">
                <GraduationCap className="w-4 h-4 text-electric-yellow" />
                <span className="font-semibold uppercase tracking-wider">Academic Foundation</span>
              </div>
              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#141411] border border-surface-border flex items-center justify-between">
                  <div>
                    <div className="text-text-primary font-bold">Chennai Institute of Technology</div>
                    <div className="text-text-secondary text-[11px]">B.E. VLSI Design &amp; Technology (2024–2028)</div>
                  </div>
                  <div className="text-right">
                    <span className="text-electric-yellow font-bold text-sm">8.56</span>
                    <span className="text-text-muted text-[10px] block uppercase">CGPA</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#141411] border border-surface-border flex items-center justify-between">
                  <div>
                    <div className="text-text-primary font-bold">Velammal Bodhi Campus</div>
                    <div className="text-text-secondary text-[11px]">Higher Secondary School (2023–2024)</div>
                  </div>
                  <div className="text-right">
                    <span className="text-electric-yellow font-bold text-sm">93.6%</span>
                    <span className="text-text-muted text-[10px] block uppercase">Board</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industrial & Research Experience Summary Card */}
            <div className="p-5 rounded-2xl bg-background-elevated/90 border border-surface-border space-y-3 shadow-lg">
              <div className="flex items-center space-x-2 text-xs font-mono text-electric-yellow">
                <Briefcase className="w-4 h-4 text-electric-yellow" />
                <span className="font-semibold uppercase tracking-wider">Industrial &amp; Research Internships</span>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#141411] border border-surface-border space-y-1">
                  <div className="flex items-center justify-between text-text-primary font-semibold">
                    <span>VLSI Research Intern</span>
                    <span className="text-[11px] text-text-muted">Nov – Dec 2025</span>
                  </div>
                  <div className="text-text-secondary text-[11px]">
                    Chennai Institute of Technology &bull; Custom CPU RTL on Xilinx FPGA, Cadence &amp; Synopsys EDA timing closure.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#141411] border border-surface-border space-y-1">
                  <div className="flex items-center justify-between text-text-primary font-semibold">
                    <span>Production Intern</span>
                    <span className="text-[11px] text-text-muted">May – Jun 2025</span>
                  </div>
                  <div className="text-text-secondary text-[11px]">
                    Syrma SGS Technology Ltd. &bull; Surface-mount technology (SMT), PCB assembly, AOI inspection, and 100% quality compliance.
                  </div>
                </div>
              </div>
            </div>

            {/* Algorithmic Problem Solving Telemetry Card */}
            <div className="p-5 rounded-2xl bg-background-elevated/90 border border-surface-border space-y-3 shadow-lg">
              <div className="flex items-center space-x-2 text-xs font-mono text-electric-yellow">
                <Code2 className="w-4 h-4 text-electric-yellow" />
                <span className="font-semibold uppercase tracking-wider">Algorithmic Problem Solving</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                <a
                  href={PERSONAL_INFO.codingStats.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#141411] border border-surface-border hover:border-electric-yellow transition-colors group"
                >
                  <div className="text-lg font-bold text-electric-yellow">75</div>
                  <div className="text-[10px] text-text-secondary uppercase">LeetCode</div>
                  <div className="text-[9px] text-text-muted mt-0.5">Rating 1324</div>
                </a>
                <a
                  href={PERSONAL_INFO.codingStats.codechef.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#141411] border border-surface-border hover:border-electric-yellow transition-colors group"
                >
                  <div className="text-lg font-bold text-electric-yellow">100</div>
                  <div className="text-[10px] text-text-secondary uppercase">CodeChef</div>
                  <div className="text-[9px] text-text-muted mt-0.5">Rating 825</div>
                </a>
                <div className="p-2.5 rounded-xl bg-[#141411] border border-surface-border">
                  <div className="text-lg font-bold text-electric-yellow">100</div>
                  <div className="text-[10px] text-text-secondary uppercase">SkillRack</div>
                  <div className="text-[9px] text-text-muted mt-0.5">Verified</div>
                </div>
              </div>
            </div>

            {/* Leadership Record Card */}
            <div className="p-4 rounded-xl bg-[#141411] border border-surface-border flex items-center space-x-3">
              <Award className="w-5 h-5 text-electric-yellow flex-shrink-0" />
              <div className="text-xs font-mono">
                <span className="text-text-primary font-bold">Team Lead:</span>{" "}
                <span className="text-text-secondary">
                  Led 5 national finalist teams (VLSID Winner, TRON Finalist, VEGATHON 2nd Runner-up, SEMICON India Top 15, IESA).
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Three Specialization Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-background-elevated/70 border border-surface-border hover:border-electric-yellow transition-colors space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#141411] border border-surface-border flex items-center justify-center text-electric-yellow group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-base text-text-primary">
              RTL &amp; Silicon Architecture
            </h4>
            <p className="font-body text-xs text-text-secondary leading-relaxed">
              Synthesizable Verilog digital pipelines, custom CPU microarchitectures, Cadence Genus/Innovus synthesis, Synopsys STA timing closure, and FPGA fabric implementation.
            </p>
            <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[10px] text-text-muted">
              <span className="px-2 py-0.5 rounded bg-[#141411] border border-surface-border text-electric-yellow">Verilog RTL</span>
              <span className="px-2 py-0.5 rounded bg-[#141411] border border-surface-border">Vivado</span>
              <span className="px-2 py-0.5 rounded bg-[#141411] border border-surface-border">Cadence EDA</span>
              <span className="px-2 py-0.5 rounded bg-[#141411] border border-surface-border">Synopsys STA</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-background-elevated/70 border border-surface-border hover:border-electric-yellow transition-colors space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#141411] border border-surface-border flex items-center justify-center text-electric-yellow group-hover:scale-105 transition-transform">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-base text-text-primary">
              Deterministic Embedded &amp; RTOS
            </h4>
            <p className="font-body text-xs text-text-secondary leading-relaxed">
              Hard real-time systems programming, μT-Kernel 3.0 porting on 480 MHz Renesas RA8P1 (Arm Cortex-M85), zero-copy DMA buffers, and low-level peripheral driver integration.
            </p>
            <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[10px] text-text-muted">
              <span className="px-2 py-0.5 rounded bg-[#141411] border border-surface-border text-electric-yellow">μT-Kernel 3.0</span>
              <span className="px-2 py-0.5 rounded bg-[#141411] border border-surface-border">Cortex-M85</span>
              <span className="px-2 py-0.5 rounded bg-[#141411] border border-surface-border">Renesas FSP</span>
              <span className="px-2 py-0.5 rounded bg-[#141411] border border-surface-border">Zero-Copy DMA</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-background-elevated/70 border border-surface-border hover:border-electric-yellow transition-colors space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#141411] border border-surface-border flex items-center justify-center text-electric-yellow group-hover:scale-105 transition-transform">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-base text-text-primary">
              Edge AI &amp; Hardware Quantization
            </h4>
            <p className="font-body text-xs text-text-secondary leading-relaxed">
              INT8 post-training quantization, Arm Vela NPU compilation (Ethos-U55), MobileNetV2 SSD on Lattice CertusPro NX FPGA (~2 ms inference), and Hailo-8 PatchCore defect detection.
            </p>
            <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[10px] text-text-muted">
              <span className="px-2 py-0.5 rounded bg-[#141411] border border-surface-border text-electric-yellow">INT8 PTQ</span>
              <span className="px-2 py-0.5 rounded bg-[#141411] border border-surface-border">Ethos-U55</span>
              <span className="px-2 py-0.5 rounded bg-[#141411] border border-surface-border">Hailo-8</span>
              <span className="px-2 py-0.5 rounded bg-[#141411] border border-surface-border">Lattice FPGA</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
