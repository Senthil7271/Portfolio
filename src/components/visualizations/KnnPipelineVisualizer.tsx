"use client";

import React, { useState } from "react";
import { Cpu, RotateCcw, FastForward, CheckCircle, ArrowRight, Zap, Play } from "lucide-react";

export default function KnnPipelineVisualizer() {
  const [clockCycle, setClockCycle] = useState<number>(3);
  const [activeStage, setActiveStage] = useState<number>(1);

  const stepClock = () => {
    setClockCycle((prev) => (prev % 6) + 1);
  };

  const resetClock = () => {
    setClockCycle(1);
  };

  return (
    <div className="rounded-2xl bg-background-elevated border border-surface-border p-5 text-text-primary">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-surface-border/70 gap-2">
        <div>
          <span className="font-mono text-[10px] text-electric-yellow uppercase tracking-wider block">
            // RTL PIPELINE & CLOCK CYCLE SIMULATOR
          </span>
          <h4 className="font-display font-bold text-base text-text-primary">
            3-Stage Pipelined KNN Accelerator (ZedBoard FPGA)
          </h4>
        </div>

        {/* Clock Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={resetClock}
            className="p-1.5 rounded bg-surface-highlight border border-surface-border text-text-muted hover:text-white"
            title="Reset Clock"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={stepClock}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-electric-yellow hover:bg-amber-400 text-black font-mono text-xs font-bold shadow-md shadow-black/40"
          >
            <FastForward className="w-3.5 h-3.5" />
            <span>STEP CLK (Cycle {clockCycle})</span>
          </button>
        </div>
      </div>

      {/* Clock Cycle & Throughput Telemetry */}
      <div className="grid grid-cols-3 gap-3 my-4 font-mono text-xs">
        <div className="p-3 rounded-xl bg-background-secondary border border-surface-border">
          <span className="text-[10px] text-text-muted block">ACTIVE CLK CYCLE:</span>
          <span className="text-base font-bold text-electric-yellow">Cycle #{clockCycle}</span>
        </div>
        <div className="p-3 rounded-xl bg-background-secondary border border-surface-border">
          <span className="text-[10px] text-text-muted block">STEADY-STATE RATE:</span>
          <span className="text-base font-bold text-emerald-400">1 Result / Clk</span>
        </div>
        <div className="p-3 rounded-xl bg-background-secondary border border-surface-border">
          <span className="text-[10px] text-text-muted block">INFERENCE LATENCY:</span>
          <span className="text-base font-bold text-text-primary">40 ns Deterministic</span>
        </div>
      </div>

      {/* Interactive 3-Stage Datapath Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        
        {/* Stage 1 */}
        <div
          onClick={() => setActiveStage(1)}
          className={`p-4 rounded-xl border cursor-pointer transition-all ${
            activeStage === 1
              ? "bg-surface-elevated border-electric-yellow shadow-md shadow-black/50"
              : "bg-background-secondary/80 border-surface-border hover:border-electric-yellow/60"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-electric-yellow font-bold">STAGE 1 // RTL</span>
            <span className="px-2 py-0.5 rounded bg-surface-highlight font-mono text-[9px] text-text-muted">
              REG_A
            </span>
          </div>
          <h5 className="font-display font-bold text-sm text-text-primary mb-1">
            Distance Calculation
          </h5>
          <div className="font-mono text-xs text-electric-yellow bg-background-primary/80 p-2 rounded mb-2">
            d_i = (X_i - Y_i)^2
          </div>
          <p className="font-body text-xs text-text-secondary leading-relaxed">
            Parallel subtractor and fixed-point squaring array computed across all feature dimensions simultaneously.
          </p>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-text-muted pt-2 border-t border-surface-border/60">
            <span>PACKET: #{clockCycle}</span>
            <span className="text-electric-yellow">1 Clk Delay</span>
          </div>
        </div>

        {/* Stage 2 */}
        <div
          onClick={() => setActiveStage(2)}
          className={`p-4 rounded-xl border cursor-pointer transition-all ${
            activeStage === 2
              ? "bg-surface-elevated border-electric-yellow shadow-md shadow-black/50"
              : "bg-background-secondary/80 border-surface-border hover:border-electric-yellow/60"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-electric-yellow font-bold">STAGE 2 // RTL</span>
            <span className="px-2 py-0.5 rounded bg-surface-highlight font-mono text-[9px] text-text-muted">
              REG_B
            </span>
          </div>
          <h5 className="font-display font-bold text-sm text-text-primary mb-1">
            Adder Tree Summation
          </h5>
          <div className="font-mono text-xs text-electric-yellow bg-background-primary/80 p-2 rounded mb-2">
            Sum = &Sigma; d_i
          </div>
          <p className="font-body text-xs text-text-secondary leading-relaxed">
            Balanced log2(N) binary adder tree aggregating squared differences into cumulative Euclidean distances.
          </p>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-text-muted pt-2 border-t border-surface-border/60">
            <span>PACKET: #{Math.max(1, clockCycle - 1)}</span>
            <span className="text-electric-yellow">1 Clk Delay</span>
          </div>
        </div>

        {/* Stage 3 */}
        <div
          onClick={() => setActiveStage(3)}
          className={`p-4 rounded-xl border cursor-pointer transition-all ${
            activeStage === 3
              ? "bg-surface-elevated border-electric-yellow shadow-md shadow-black/50"
              : "bg-background-secondary/80 border-surface-border hover:border-electric-yellow/60"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-electric-yellow font-bold">STAGE 3 // RTL</span>
            <span className="px-2 py-0.5 rounded bg-surface-highlight font-mono text-[9px] text-emerald-400">
              OUT_VALID
            </span>
          </div>
          <h5 className="font-display font-bold text-sm text-text-primary mb-1">
            Nearest Neighbor Sort
          </h5>
          <div className="font-mono text-xs text-emerald-400 bg-background-primary/80 p-2 rounded mb-2">
            Class = Min(Dist) Vote
          </div>
          <p className="font-body text-xs text-text-secondary leading-relaxed">
            Systolic minimum-finding comparator array outputting dominant class label without insertion bubbles.
          </p>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-text-muted pt-2 border-t border-surface-border/60">
            <span>CLASSIFIED: #{Math.max(0, clockCycle - 2)}</span>
            <span className="text-emerald-400 font-bold">1 Result/Cycle</span>
          </div>
        </div>

      </div>

      {/* Latency vs Throughput Distinction Banner */}
      <div className="p-3.5 rounded-xl bg-background-secondary border border-surface-border flex items-center justify-between text-xs font-mono">
        <span className="text-text-muted">
          HARDWARE DISTINCTION: Latency is 3 cycles (40 ns initial fill); Steady-state throughput is 1 decision every single clock cycle.
        </span>
        <span className="text-emerald-400 font-bold shrink-0 ml-2">VERILOG RTL VALIDATED</span>
      </div>
    </div>
  );
}
