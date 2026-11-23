"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Project } from "@/types";
import {
  TeslaCoilModel,
  InductionMotorModel,
  PolyphaseGeneratorModel,
  ResonantCoilModel,
} from "@/components/tesla/TeslaInventionModels";
import { ExternalLink, Github, Video, ArrowRight, Sparkles, Zap, Info } from "lucide-react";

interface CardProps {
  project: Project;
  index: number;
  isActive: boolean;
  isDragging?: boolean;
  onSelect?: () => void;
  style?: React.CSSProperties;
}

export default function ProjectExhibitionCard({
  project,
  index,
  isActive,
  isDragging = false,
  onSelect,
  style,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showInspiration, setShowInspiration] = useState(false);

  // Render the appropriate Tesla 3D invention model based on project ID
  const renderInventionModel = () => {
    switch (project.id) {
      case "proj-01":
        return <TeslaCoilModel isHovered={isHovered} isDragging={isDragging} active={isActive} />;
      case "proj-02":
        return <InductionMotorModel isHovered={isHovered} isDragging={isDragging} active={isActive} />;
      case "proj-03":
        return <PolyphaseGeneratorModel isHovered={isHovered} isDragging={isDragging} active={isActive} />;
      case "proj-04":
      default:
        return <ResonantCoilModel isHovered={isHovered} isDragging={isDragging} active={isActive} />;
    }
  };

  return (
    <div
      style={style}
      data-cursor="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`project-exhibition-card rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative select-none ${
        isActive
          ? "bg-background-elevated/95 border-2 border-electric-yellow shadow-2xl shadow-black/80 scale-100 z-30"
          : "bg-background-secondary/90 border border-surface-border/80 shadow-lg scale-95 opacity-70 z-10 hover:border-electric-yellow/70 hover:opacity-90"
      }`}
    >
      {/* Top Electromagnetic Trace Header */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-electric-yellow to-transparent opacity-80" />

      {/* 3D Invention Showcase Viewport */}
      <div className="relative w-full h-[230px] bg-gradient-to-b from-background-secondary to-background-elevated flex items-center justify-center overflow-hidden border-b border-surface-border/60">
        {/* Background circular field indicator */}
        <div className="absolute w-44 h-44 rounded-full border border-electric-yellow/20 animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-32 h-32 rounded-full border border-electric-amber/15 animate-[spin_25s_linear_infinite_reverse]" />

        {/* The 3D Tesla Invention */}
        <div className="relative w-full h-full z-10 flex items-center justify-center">
          {renderInventionModel()}
        </div>

        {/* Tesla Invention Pill Tag */}
        <div className="absolute top-3 left-3 z-20 flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-background-primary/85 border border-surface-border text-[10px] font-mono text-electric-yellow backdrop-blur-md">
          <Zap className="w-3 h-3 text-electric-yellow" />
          <span>{project.teslaInspiration.invention.split("(")[0].trim()}</span>
        </div>

        {/* Information Toggle Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setShowInspiration(!showInspiration);
          }}
          className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-background-primary/85 border border-surface-border hover:border-electric-yellow text-text-muted hover:text-white transition-colors"
          title="Tesla Historical Inspiration"
        >
          <Info className="w-3.5 h-3.5" />
        </button>

        {/* Floating Historical Inspiration Overlay */}
        {showInspiration && (
          <div className="absolute inset-0 z-30 bg-background-primary/95 p-5 flex flex-col justify-between text-left font-mono backdrop-blur-md animate-fadeIn">
            <div>
              <span className="text-[10px] text-electric-yellow uppercase font-bold block mb-1">
                // TESLA HISTORICAL INSPIRATION
              </span>
              <h5 className="font-display font-bold text-sm text-text-primary mb-2">
                {project.teslaInspiration.invention}
              </h5>
              <p className="font-body text-xs text-text-secondary leading-relaxed mb-2">
                {project.teslaInspiration.historicalContext}
              </p>
              <div className="p-2 rounded bg-surface-highlight border border-surface-border text-[10px] text-text-primary">
                <span className="text-electric-yellow font-bold">Engineering Metaphor: </span>
                {project.teslaInspiration.metaphor}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowInspiration(false);
              }}
              className="self-end px-3 py-1 rounded bg-electric-yellow text-black font-semibold text-[11px] hover:bg-amber-400 transition-colors"
            >
              Close Info
            </button>
          </div>
        )}
      </div>

      {/* Project Content Body */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4 text-left">
        <div className="space-y-2">
          {/* Category */}
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-electric-yellow">{project.category}</span>
            <span className="text-text-muted">EXHIBIT 0{index + 1}</span>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary leading-snug line-clamp-2">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="font-body text-xs text-text-secondary line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Resume-Supported Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 font-mono text-center pt-1 border-t border-surface-border/60">
          {project.metrics.map((m) => (
            <div key={m.label} className="p-2 rounded-xl bg-background-secondary border border-surface-border/70">
              <div className="text-xs sm:text-sm font-bold text-electric-yellow truncate">{m.value}</div>
              <div className="text-[9px] text-text-muted truncate">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Hardware Platform Badges */}
        <div className="flex flex-wrap gap-1 font-mono text-[10px]">
          {project.hardware.slice(0, 2).map((hw) => (
            <span key={hw} className="px-2 py-0.5 rounded bg-surface-highlight border border-surface-border text-text-muted truncate">
              {hw}
            </span>
          ))}
        </div>

        {/* Action Buttons: Case Study & External Repo/Demo */}
        <div className="pt-2 flex items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-grow flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-electric-yellow hover:bg-amber-400 text-black font-mono text-xs font-bold shadow-md shadow-black/40 transition-all group"
          >
            <span>Explore Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-background-secondary border border-surface-border hover:border-electric-yellow text-text-secondary hover:text-white transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {project.demoVideoUrl && (
            <a
              href={project.demoVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-background-secondary border border-surface-border hover:border-electric-yellow text-electric-yellow transition-colors"
              title="Demo Video"
            >
              <Video className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
