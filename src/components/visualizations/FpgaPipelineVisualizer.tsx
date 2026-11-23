"use client";

import React, { useState } from "react";
import { Camera, Cpu, Layers, Scan, CheckCircle2, Play, Pause, RotateCcw } from "lucide-react";

interface FpgaPipelineVisualizerProps {
  className?: string;
}

export default function FpgaPipelineVisualizer({ className = "" }: FpgaPipelineVisualizerProps) {
  const [activeStage, setActiveStage] = useState<number>(2);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  const stages = [
    {
      id: "sensor",
      name: "Camera Input",
      protocol: "MIPI CSI-2",
      metric: "60 FPS / RGB888",
      description: "Direct differential video streaming into FPGA on-chip dual-port BRAM line buffers.",
      icon: Camera,
    },
    {
      id: "spatial",
      name: "Image Processing",
      protocol: "Verilog Fixed-Pt",
      metric: "1 clk / pixel",
      description: "Hardware bilinear downscaling and INT8 normalization systolic pipeline.",
      icon: Layers,
    },
    {
      id: "conv",
      name: "MobileNetV2 SSD Core",
      protocol: "Lattice DSP MACs",
      metric: "64 Parallel MACs",
      description: "Streaming 3x3 depthwise separable convolution accelerator with fused ReLU6.",
      icon: Cpu,
    },
    {
      id: "output",
      name: "Detection Head",
      protocol: "Hardware NMS",
      metric: "~2.0 ms Latency",
      description: "Real-time bounding-box coordinates decoding across 80 classes.",
      icon: Scan,
    },
  ];

  return (
    <div className={`rounded-2xl bg-background-elevated border border-surface-border p-5 text-text-primary ${className}`}>
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-surface-border/70 gap-2">
        <div>
          <span className="font-mono text-[10px] text-electric-yellow uppercase tracking-wider block">
            // INTERACTIVE HARDWARE PIPELINE
          </span>
          <h4 className="font-display font-bold text-base text-text-primary">
            Lattice FPGA CNN Streaming Accelerator
          </h4>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-surface-highlight border border-surface-border text-xs font-mono text-text-secondary hover:text-white"
          >
            {isSimulating ? <Pause className="w-3 h-3 text-electric-yellow" /> : <Play className="w-3 h-3" />}
            <span>{isSimulating ? "Streaming" : "Paused"}</span>
          </button>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px]">
            LATENCY: ~2.0 ms
          </span>
        </div>
      </div>

      {/* Pipeline Stages Flow Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-5">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = activeStage === idx;
          return (
            <div
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`relative p-3.5 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? "bg-surface-elevated border-electric-yellow shadow-md shadow-black/50"
                  : "bg-background-secondary/80 border-surface-border hover:border-electric-yellow/60"
              }`}
            >
              {/* Connected Arrow Indicator for Desktop */}
              {idx < stages.length - 1 && (
                <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-[2px] bg-electric-yellow" />
              )}

              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-text-muted">STAGE 0{idx + 1}</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    isSelected ? "bg-electric-yellow animate-ping" : "bg-surface-border"
                  }`}
                />
              </div>

              <div className="flex items-center space-x-2 mb-1.5">
                <Icon className={`w-4 h-4 ${isSelected ? "text-electric-yellow" : "text-electric-amber"}`} />
                <h5 className="font-display font-semibold text-xs text-text-primary truncate">
                  {stage.name}
                </h5>
              </div>

              <div className="font-mono text-[10px] text-text-muted">{stage.protocol}</div>
              <div className="font-mono text-[11px] font-bold text-electric-yellow mt-1">
                {stage.metric}
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Stage Inspection Box & Mock Detection Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2">
        {/* Stage Specs */}
        <div className="md:col-span-5 p-3.5 rounded-xl bg-background-secondary border border-surface-border space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-electric-yellow uppercase">
              // INSPECTION: {stages[activeStage].name}
            </span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <p className="text-xs text-text-secondary leading-relaxed font-body">
            {stages[activeStage].description}
          </p>
          <div className="pt-2 border-t border-surface-border/60 text-[11px] font-mono space-y-1">
            <div className="flex justify-between text-text-muted">
              <span>TARGET HARDWARE:</span>
              <span className="text-text-primary">Lattice CertusPro NX</span>
            </div>
            <div className="flex justify-between text-text-muted">
              <span>TRAINED CLASSES:</span>
              <span className="text-text-primary">80 Custom Edge Classes</span>
            </div>
            <div className="flex justify-between text-text-muted">
              <span>DATASET VOLUME:</span>
              <span className="text-text-primary">~1.2 Lakh Images</span>
            </div>
          </div>
        </div>

        {/* Mock Detection Display Viewport */}
        <div className="md:col-span-7 relative h-48 rounded-xl bg-background-secondary border border-surface-border overflow-hidden flex flex-col justify-between p-3">
          <div className="absolute inset-0 bg-circuit-dense opacity-30 pointer-events-none" />

          {/* Top Video Overlay Bar */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-electric-yellow">
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>LIVE EDGE ACCEL INGEST</span>
            </span>
            <span>OSD: 1080p @ 60 FPS</span>
          </div>

          {/* Conceptual Bounding Boxes */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="relative w-44 h-28 border border-electric-yellow/80 bg-electric-yellow/5 rounded flex flex-col justify-between p-1.5 shadow-md shadow-black/50">
              <div className="flex justify-between items-center text-[9px] font-mono text-electric-yellow bg-background-primary/90 px-1 py-0.5 rounded">
                <span>TARGET #01: CLASS 14</span>
                <span className="text-emerald-400 font-bold">96.4%</span>
              </div>
              <div className="font-mono text-[9px] text-text-muted text-right">
                BBOX: [X:142, Y:88, W:94, H:120]
              </div>
            </div>
          </div>

          {/* Bottom Telemetry */}
          <div className="relative z-10 flex justify-between font-mono text-[10px] text-text-muted pt-1 border-t border-surface-border/50">
            <span>RESUME METRIC: 2.0 ms / FRAME</span>
            <span className="text-emerald-400">HARDWARE ACCEL VERIFIED</span>
          </div>
        </div>
      </div>
    </div>
  );
}
