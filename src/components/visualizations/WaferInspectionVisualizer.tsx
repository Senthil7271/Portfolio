"use client";

import React, { useState } from "react";
import { Cpu, Scan, CheckCircle2, Sliders, ShieldCheck, Database, Layers } from "lucide-react";

const DEFECT_CLASSES = [
  "Center",
  "Donut",
  "Edge-Loc",
  "Edge-Ring",
  "Loc",
  "Random",
  "Scratch",
  "Near-Full",
  "Ring-Cluster",
  "Die-Chipping",
  "Clean/No-Defect",
];

export default function WaferInspectionVisualizer() {
  const [selectedDefect, setSelectedDefect] = useState<string>("Edge-Ring");
  const [activeTab, setActiveTab] = useState<"compression" | "wafer">("compression");

  return (
    <div className="rounded-2xl bg-background-elevated border border-surface-border p-5 text-text-primary">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-surface-border/70 gap-2">
        <div>
          <span className="font-mono text-[10px] text-electric-yellow uppercase tracking-wider block">
            // INT8 QUANTIZATION & EMBEDDED METROLOGY
          </span>
          <h4 className="font-display font-bold text-base text-text-primary">
            Edge AI Semiconductor Wafer Defect Classification
          </h4>
        </div>

        <div className="flex items-center space-x-1.5 p-1 rounded-lg bg-background-secondary border border-surface-border text-xs font-mono">
          <button
            onClick={() => setActiveTab("compression")}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === "compression" ? "bg-electric-yellow text-black font-semibold" : "text-text-muted hover:text-white"
            }`}
          >
            Model Compression
          </button>
          <button
            onClick={() => setActiveTab("wafer")}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === "wafer" ? "bg-electric-yellow text-black font-semibold" : "text-text-muted hover:text-white"
            }`}
          >
            Wafer Map Scanner
          </button>
        </div>
      </div>

      {/* View 1: FP32 vs INT8 Compression Bar Comparison */}
      {activeTab === "compression" && (
        <div className="space-y-6 my-5">
          <div className="space-y-4">
            {/* FP32 Baseline */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-text-secondary">FP32 Baseline Model (MobileNetV2 Float):</span>
                <span className="text-text-muted font-bold">2.0 MB (100%)</span>
              </div>
              <div className="h-6 w-full rounded-lg bg-background-secondary border border-surface-border p-1 flex items-center">
                <div className="h-full w-full rounded bg-surface-highlight flex items-center px-3">
                  <span className="font-mono text-[10px] text-text-muted">32-bit Floating Point Weights</span>
                </div>
              </div>
            </div>

            {/* INT8 Quantized Model */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-electric-yellow font-bold">TFLite INT8 Quantized (Post-Training):</span>
                <span className="text-emerald-400 font-bold">694 KB (~34.7% of Original Size)</span>
              </div>
              <div className="h-6 w-full rounded-lg bg-background-secondary border border-surface-border p-1 flex items-center">
                <div
                  className="h-full rounded bg-gradient-to-r from-electric-amber to-electric-yellow flex items-center px-3 shadow-md shadow-black/40"
                  style={{ width: "34.7%" }}
                >
                  <span className="font-mono text-[10px] text-black font-bold whitespace-nowrap">
                    694 KB &bull; INT8
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-background-secondary border border-surface-border">
              <span className="text-[10px] text-text-muted block">DEFECT CLASSES:</span>
              <span className="text-lg font-bold text-electric-yellow">11 Classes</span>
            </div>
            <div className="p-3 rounded-xl bg-background-secondary border border-surface-border">
              <span className="text-[10px] text-text-muted block">VALIDATED ACCURACY:</span>
              <span className="text-lg font-bold text-emerald-400">~85%</span>
            </div>
            <div className="p-3 rounded-xl bg-background-secondary border border-surface-border">
              <span className="text-[10px] text-text-muted block">FOOTPRINT REDUCTION:</span>
              <span className="text-lg font-bold text-text-primary">&gt; 65% Saved</span>
            </div>
          </div>

          {/* Embedded Deployment Info */}
          <div className="p-3.5 rounded-xl bg-background-secondary border border-surface-border text-xs font-mono space-y-1 text-text-secondary">
            <div className="flex justify-between">
              <span>TARGET HARDWARE:</span>
              <span className="text-text-primary">Arm Cortex-M7 Core</span>
            </div>
            <div className="flex justify-between">
              <span>DEVELOPMENT ENVIRONMENT:</span>
              <span className="text-text-primary">NXP MCUXpresso IDE / SDK</span>
            </div>
            <div className="flex justify-between">
              <span>EXPORTED ARTIFACTS:</span>
              <span className="text-text-primary">ONNX Runtime &amp; TFLite FlatBuffers</span>
            </div>
          </div>
        </div>
      )}

      {/* View 2: Interactive Wafer Map Scanner */}
      {activeTab === "wafer" && (
        <div className="space-y-4 my-5">
          <div className="flex items-center justify-between text-xs font-mono text-text-muted">
            <span>SELECT WAFER DEFECT CLASS SIGNATURE:</span>
            <span className="text-electric-yellow">Active: {selectedDefect}</span>
          </div>

          {/* Defect Class Filter Buttons */}
          <div className="flex flex-wrap gap-1.5">
            {DEFECT_CLASSES.map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedDefect(cls)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${
                  selectedDefect === cls
                    ? "bg-electric-yellow text-black border-electric-amber font-semibold shadow-sm"
                    : "bg-background-secondary text-text-muted border-surface-border hover:border-surface-highlight"
                }`}
              >
                {cls}
              </button>
            ))}
          </div>

          {/* Wafer Scanning Reticle Box */}
          <div className="relative h-44 rounded-xl bg-background-secondary border border-surface-border overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-circuit-dense opacity-20 pointer-events-none" />

            {/* Simulated 300mm Silicon Wafer Circle - Clean Border */}
            <div className="relative w-36 h-36 rounded-full border-2 border-electric-yellow/60 bg-background-elevated/70 flex items-center justify-center shadow-lg shadow-black/60">
              {/* Wafer Flat / Notch */}
              <div className="absolute bottom-0 w-8 h-1 bg-surface-border rounded-t" />

              {/* Defect Pattern Mock Illustration */}
              <div className="flex flex-col items-center justify-center font-mono text-center p-2">
                <span className="text-[10px] text-text-muted uppercase">Pattern:</span>
                <span className="text-xs font-bold text-electric-yellow">{selectedDefect}</span>
                <span className="text-[9px] text-emerald-400 mt-1">Confidence: 86.8%</span>
              </div>
            </div>

            {/* Scanning Line - Crisp Hairline */}
            <div className="absolute inset-y-0 w-[2px] bg-electric-yellow animate-[pulseSubtle_2s_ease-in-out_infinite]" />
          </div>
        </div>
      )}

      {/* Footer Assurance */}
      <div className="p-3 rounded-xl bg-background-secondary border border-surface-border flex items-center justify-between text-xs font-mono text-text-muted">
        <span>Validation: MCUXpresso Target Deployment</span>
        <span className="text-emerald-400 font-bold">100% RESUME-VERIFIED METRICS</span>
      </div>
    </div>
  );
}
