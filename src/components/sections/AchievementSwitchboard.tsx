"use client";

import React, { useState } from "react";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { Calendar, ChevronRight } from "lucide-react";

// Realistic 3D-Look Vector Metallic Gold Trophy Component
function MetallicGoldTrophy({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div
      className={`relative w-28 h-32 sm:w-32 sm:h-36 mx-auto transition-transform duration-500 ease-out select-none ${
        isHovered ? "scale-110 -translate-y-2 rotate-1" : "scale-100"
      }`}
    >
      <svg
        viewBox="0 0 160 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
      >
        <defs>
          {/* Metallic Gold Gradients */}
          <linearGradient id="goldCupGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8C6614" />
            <stop offset="25%" stopColor="#D4A017" />
            <stop offset="50%" stopColor="#FFF2A8" />
            <stop offset="75%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#78550B" />
          </linearGradient>

          <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF8CC" />
            <stop offset="50%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#8C6614" />
          </linearGradient>

          <linearGradient id="goldHandleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FACC15" />
            <stop offset="40%" stopColor="#FFF2A8" />
            <stop offset="70%" stopColor="#B38612" />
            <stop offset="100%" stopColor="#5E4306" />
          </linearGradient>

          <linearGradient id="pedestalDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#25241E" />
            <stop offset="50%" stopColor="#141411" />
            <stop offset="100%" stopColor="#0B0B0A" />
          </linearGradient>

          <linearGradient id="plaqueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B38612" />
            <stop offset="50%" stopColor="#FFF8CC" />
            <stop offset="100%" stopColor="#8C6614" />
          </linearGradient>
        </defs>

        {/* --- LEFT & RIGHT SCULPTED HANDLES --- */}
        <g stroke="url(#goldHandleGrad)" strokeWidth="6" strokeLinecap="round" fill="none">
          {/* Left Handle */}
          <path d="M 52 46 C 18 46, 14 84, 52 98" />
          {/* Right Handle */}
          <path d="M 108 46 C 142 46, 146 84, 108 98" />
        </g>

        {/* --- LAUREL WREATH ACCENT AROUND BASE --- */}
        <g fill="#D4A017" opacity="0.9">
          <circle cx="58" cy="88" r="2.5" />
          <circle cx="55" cy="80" r="2" />
          <circle cx="56" cy="72" r="2" />
          <circle cx="102" cy="88" r="2.5" />
          <circle cx="105" cy="80" r="2" />
          <circle cx="104" cy="72" r="2" />
        </g>

        {/* --- MAIN TROPHY CUP BODY --- */}
        {/* Upper Rim Ring */}
        <ellipse cx="80" cy="30" rx="34" ry="7" fill="url(#goldRimGrad)" stroke="#664606" strokeWidth="1" />
        {/* Inner Cup Hollow */}
        <ellipse cx="80" cy="30" rx="28" ry="4.5" fill="#4A3405" />

        {/* Fluted Chalice Body */}
        <path
          d="M 46 30 C 47 70, 56 100, 80 106 C 104 100, 113 70, 114 30 Z"
          fill="url(#goldCupGrad)"
          stroke="#78550B"
          strokeWidth="1.2"
        />

        {/* Polished Surface Reflection Highlight on Cup */}
        <path
          d="M 72 32 C 73 58, 76 86, 80 102 C 81 86, 82 58, 83 32 Z"
          fill="#FFFFFF"
          opacity="0.45"
        />

        {/* Trophy Stem & Knurl */}
        <path d="M 74 106 L 86 106 L 84 122 L 76 122 Z" fill="url(#goldRimGrad)" />
        <ellipse cx="80" cy="122" rx="14" ry="3.5" fill="url(#goldCupGrad)" stroke="#5E4306" strokeWidth="1" />

        {/* --- DARK OBSIDIAN / BRUSHED METAL PEDESTAL --- */}
        {/* Upper Base Layer */}
        <path d="M 62 125 L 98 125 L 104 140 L 56 140 Z" fill="url(#pedestalDarkGrad)" stroke="#34332A" strokeWidth="1.2" />
        {/* Main Base Block */}
        <rect x="50" y="140" width="60" height="26" rx="2" fill="url(#pedestalDarkGrad)" stroke="#34332A" strokeWidth="1.5" />

        {/* Brass / Gold Inscribed Plaque */}
        <rect x="56" y="145" width="48" height="15" rx="1.5" fill="url(#plaqueGrad)" stroke="#5E4306" strokeWidth="0.8" />
        <text
          x="80"
          y="156"
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="bold"
          fontFamily="monospace"
          fill="#1D1C17"
          letterSpacing="0.8"
        >
          VLSID 2026
        </text>

        {/* Pedestal Foot Rim */}
        <rect x="46" y="166" width="68" height="5" rx="1" fill="#1D1C17" stroke="#FACC15" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

export default function AchievementSwitchboard() {
  const [selectedStage, setSelectedStage] = useState<string>("ach-01");
  const [trophyHovered, setTrophyHovered] = useState<boolean>(false);

  // The 5 stages ordered exactly as specified
  const stageData = [
    {
      stageNum: 1,
      badgeLabel: "STAGE 01 — WINNER",
      podiumRank: "1ST PLACE",
      heightDesktop: "h-[390px]",
      stageColor: "border-[#FACC15]",
      accentBg: "bg-[#FACC15]",
      data: ACHIEVEMENTS.find((a) => a.id === "ach-01")!,
    },
    {
      stageNum: 2,
      badgeLabel: "STAGE 02 — 2ND RUNNER",
      podiumRank: "2ND RUNNER",
      heightDesktop: "h-[310px]",
      stageColor: "border-[#EAB308]",
      accentBg: "bg-[#EAB308]",
      data: ACHIEVEMENTS.find((a) => a.id === "ach-02")!,
    },
    {
      stageNum: 3,
      badgeLabel: "STAGE 03 — FINALIST",
      podiumRank: "FINALIST",
      heightDesktop: "h-[270px]",
      stageColor: "border-[#D4A017]",
      accentBg: "bg-[#D4A017]",
      data: ACHIEVEMENTS.find((a) => a.id === "ach-03")!,
    },
    {
      stageNum: 4,
      badgeLabel: "STAGE 04 — SEMIFINALIST",
      podiumRank: "TOP 15",
      heightDesktop: "h-[220px]",
      stageColor: "border-[#34332A]",
      accentBg: "bg-surface-border",
      data: ACHIEVEMENTS.find((a) => a.id === "ach-04")!,
    },
    {
      stageNum: 5,
      badgeLabel: "STAGE 05 — SEMIFINALIST",
      podiumRank: "SEMIFINALIST",
      heightDesktop: "h-[185px]",
      stageColor: "border-[#34332A]",
      accentBg: "bg-surface-border",
      data: ACHIEVEMENTS.find((a) => a.id === "ach-05")!,
    },
  ];

  // Visual layout ordering for the Stepped Podium on desktop:
  // [Stage 4] -> [Stage 2] -> [Stage 1 Centerpiece] -> [Stage 3] -> [Stage 5]
  const desktopPodiumOrder = [
    stageData[3], // Stage 4
    stageData[1], // Stage 2
    stageData[0], // Stage 1 (Centerpiece)
    stageData[2], // Stage 3
    stageData[4], // Stage 5
  ];

  const activeStageItem = stageData.find((s) => s.data.id === selectedStage) || stageData[0];

  return (
    <section id="achievements" className="relative py-28 bg-background-primary overflow-hidden border-t border-surface-border/70">
      {/* Background Volumetric Light */}
      <div className="absolute inset-0 bg-circuit-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-electric-yellow/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-background-elevated border border-surface-border text-xs font-mono text-electric-yellow">
            <span className="w-2 h-2 rounded-full bg-electric-yellow" />
            <span>SECTION 05 // FIVE-STAGE ACHIEVEMENT PODIUM</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-text-primary tracking-tight">
            Engineering Milestones:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow via-amber-300 to-[#FFFDF5]">
              Five-Stage Honors Podium
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
            Architected as a physical, stepped engineering podium. Crowned by the 1st Place international VLSID 2026 design contest victory, validated through authentic competition results.
          </p>
        </div>

        {/* --- DESKTOP STEPPED FIVE-STAGE PODIUM (Hidden on mobile) --- */}
        <div className="hidden lg:grid grid-cols-5 gap-3 items-end max-w-6xl mx-auto pt-16 pb-4">
          {desktopPodiumOrder.map((stage) => {
            const isWinner = stage.stageNum === 1;
            const isSelected = selectedStage === stage.data.id;

            return (
              <div
                key={stage.data.id}
                onClick={() => setSelectedStage(stage.data.id)}
                onMouseEnter={() => isWinner && setTrophyHovered(true)}
                onMouseLeave={() => isWinner && setTrophyHovered(false)}
                className={`flex flex-col justify-end transition-all duration-300 cursor-pointer group ${
                  isSelected ? "scale-[1.02] z-20" : "opacity-85 hover:opacity-100 z-10"
                }`}
              >
                {/* Centerpiece Trophy on Top of Stage 1 */}
                {isWinner && (
                  <div className="mb-2">
                    <MetallicGoldTrophy isHovered={trophyHovered} />
                  </div>
                )}

                {/* Physical Stepped Platform Column */}
                <div
                  className={`${stage.heightDesktop} rounded-2xl bg-background-secondary border-2 transition-all flex flex-col justify-between p-4 relative overflow-hidden shadow-xl shadow-black/80 ${
                    isSelected
                      ? "border-electric-yellow bg-background-elevated"
                      : "border-surface-border hover:border-surface-highlight"
                  }`}
                >
                  {/* Hexagonal Industrial Fastener Rivets */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-surface-border" />
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-surface-border" />
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-surface-border" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-surface-border" />

                  {/* Solid Yellow Active / Position Accent Bar */}
                  <div
                    className={`absolute top-0 inset-x-0 h-1.5 ${
                      isSelected ? "bg-electric-yellow" : stage.accentBg
                    }`}
                  />

                  {/* Top Badge: STAGE 0X — ROLE */}
                  <div className="pt-2 text-left">
                    <div className="font-mono text-[10px] font-bold text-electric-yellow tracking-wider mb-1">
                      {stage.badgeLabel}
                    </div>
                    <h4 className="font-display font-bold text-sm text-text-primary leading-snug line-clamp-2">
                      {stage.data.title}
                    </h4>
                  </div>

                  {/* Middle Summary Details */}
                  <div className="text-left font-mono my-2 space-y-1">
                    <div className="text-[10px] text-text-muted truncate">
                      {stage.data.organization}
                    </div>
                    <div className="inline-flex items-center space-x-1 text-[10px] text-text-muted">
                      <Calendar className="w-3 h-3 text-text-muted" />
                      <span>{stage.data.date}</span>
                    </div>
                  </div>

                  {/* Bottom Podium Block Base Indicator */}
                  <div className="pt-2 border-t border-surface-border/70 flex items-center justify-between font-mono">
                    <span className="text-[9px] text-text-muted uppercase">
                      RANK
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                        isWinner
                          ? "bg-electric-yellow text-black"
                          : isSelected
                          ? "bg-surface-highlight text-electric-yellow border border-surface-border"
                          : "text-text-primary"
                      }`}
                    >
                      {stage.podiumRank}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* --- MOBILE / TABLET VERTICAL 5-STAGE PROGRESSION (Hidden on desktop) --- */}
        <div className="lg:hidden space-y-4 my-8 text-left">
          {/* Trophy Featured Callout on Mobile */}
          <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-background-secondary border border-surface-border mb-4 text-center">
            <MetallicGoldTrophy isHovered={true} />
            <span className="font-mono text-xs font-bold text-electric-yellow uppercase tracking-widest mt-2">
              VLSID 2026 INTERNATIONAL DESIGN CONTEST
            </span>
            <span className="font-display font-extrabold text-xl text-text-primary mt-1">
              1st Place Winner
            </span>
          </div>

          {/* Stepped Cards in Sequence Stage 01 to 05 */}
          {stageData.map((stage) => {
            const isSelected = selectedStage === stage.data.id;
            return (
              <div
                key={stage.data.id}
                onClick={() => setSelectedStage(stage.data.id)}
                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer relative bg-background-secondary shadow-lg shadow-black/60 ${
                  isSelected
                    ? "border-electric-yellow bg-background-elevated"
                    : "border-surface-border hover:border-surface-highlight"
                }`}
              >
                <div className="flex items-center justify-between mb-2 font-mono text-xs">
                  <span className="font-bold text-electric-yellow">
                    {stage.badgeLabel}
                  </span>
                  <span className="text-[10px] text-text-muted">
                    {stage.data.date}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-text-primary mb-1">
                  {stage.data.title}
                </h3>
                <p className="font-mono text-xs text-text-muted mb-2">
                  {stage.data.organization} &bull; {stage.data.event}
                </p>
                <p className="font-body text-xs text-text-secondary leading-relaxed">
                  {stage.data.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* --- SELECTED STAGE TECHNICAL INSPECTOR CARD --- */}
        <div className="mt-8 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-background-secondary border border-surface-border shadow-2xl text-left font-mono relative overflow-hidden">
          {/* Corner Fastener Indicators */}
          <div className="flex items-center justify-between pb-3 border-b border-surface-border text-xs">
            <span className="text-electric-yellow font-bold uppercase tracking-wider">
              // {activeStageItem.badgeLabel} INSPECTION DECK
            </span>
            <span className="text-text-muted">
              DATE: {activeStageItem.data.date}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4">
            <div className="md:col-span-8 space-y-2">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
                {activeStageItem.data.title}
              </h3>
              <p className="font-mono text-xs text-electric-yellow">
                {activeStageItem.data.event} &bull; {activeStageItem.data.organization}
              </p>
              <p className="font-body text-sm text-text-secondary leading-relaxed pt-2">
                {activeStageItem.data.description}
              </p>
            </div>

            <div className="md:col-span-4 p-4 rounded-2xl bg-background-elevated border border-surface-border space-y-2">
              <span className="text-[10px] text-text-muted uppercase block">
                OFFICIAL RECORD
              </span>
              <div className="text-base font-bold text-electric-yellow">
                {activeStageItem.data.award}
              </div>
              <div className="text-[11px] text-emerald-400 font-semibold">
                Authentic Résumé Record
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
