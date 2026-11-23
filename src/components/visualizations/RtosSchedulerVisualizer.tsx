"use client";

import React, { useState } from "react";
import { Cpu, Clock, Zap, Layers, Play, Pause, AlertCircle, CheckCircle2 } from "lucide-react";

export default function RtosSchedulerVisualizer() {
  const [selectedView, setSelectedView] = useState<"scheduling" | "interrupts" | "bsp">("scheduling");
  const [selectedTask, setSelectedTask] = useState<string>("task-3");

  const tasks = [
    {
      id: "task-1",
      name: "Sensor & MIPI CSI Ingestion",
      priority: "Priority 2 (High)",
      period: "16.6 ms (60 Hz)",
      state: "Preempting",
      color: "border-electric-yellow text-electric-yellow",
      desc: "Captures camera frames directly into TCM via DMA. Triggers higher priority interrupt upon frame complete.",
    },
    {
      id: "task-2",
      name: "Offline Voice & Speech Pipeline",
      priority: "Priority 3",
      period: "Event Driven",
      state: "Ready Queue",
      color: "border-electric-amber text-electric-amber",
      desc: "Streams I2S MEMS microphone audio buffers and performs keyword spotting in real time.",
    },
    {
      id: "task-3",
      name: "Arm Ethos-U55 NPU Dispatch",
      priority: "Priority 4",
      period: "Non-blocking Async",
      state: "Running on NPU",
      color: "border-emerald-400 text-emerald-400",
      desc: "Offloads Vela-compiled neural graphs to the hardware Ethos-U55 NPU without blocking CPU execution.",
    },
    {
      id: "task-4",
      name: "Parallel LCD GUI Task",
      priority: "Priority 5 (Background)",
      period: "33.3 ms (30 Hz)",
      state: "Waiting on Mutex",
      color: "border-purple-400 text-purple-400",
      desc: "Renders status overlays, touchscreen controls, and diagnostics to the parallel RGB LCD display.",
    },
  ];

  return (
    <div className="rounded-2xl bg-background-elevated border border-surface-border p-5 text-text-primary">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-surface-border/70 gap-2">
        <div>
          <span className="font-mono text-[10px] text-electric-yellow uppercase tracking-wider block">
            // DETERMINISTIC MULTITASKING INSPECTOR
          </span>
          <h4 className="font-display font-bold text-base text-text-primary">
            μT-Kernel 3.0 on Renesas RA8P1 (Arm Cortex-M85)
          </h4>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center space-x-1.5 p-1 rounded-lg bg-background-secondary border border-surface-border text-xs font-mono">
          <button
            onClick={() => setSelectedView("scheduling")}
            className={`px-2.5 py-1 rounded transition-colors ${
              selectedView === "scheduling" ? "bg-electric-yellow text-black font-bold" : "text-text-muted hover:text-white"
            }`}
          >
            Scheduler
          </button>
          <button
            onClick={() => setSelectedView("interrupts")}
            className={`px-2.5 py-1 rounded transition-colors ${
              selectedView === "interrupts" ? "bg-electric-yellow text-black font-bold" : "text-text-muted hover:text-white"
            }`}
          >
            Interrupts
          </button>
          <button
            onClick={() => setSelectedView("bsp")}
            className={`px-2.5 py-1 rounded transition-colors ${
              selectedView === "bsp" ? "bg-electric-yellow text-black font-bold" : "text-text-muted hover:text-white"
            }`}
          >
            BSP / HAL
          </button>
        </div>
      </div>

      {/* Scheduler Interactive Timeline */}
      {selectedView === "scheduling" && (
        <div className="space-y-4 my-5">
          <div className="flex items-center justify-between text-xs font-mono text-text-muted">
            <span>PREEMPTIVE EXECUTION TIMELINE (0 – 20 ms SLICE)</span>
            <span className="text-electric-yellow">PendSV Context Switch: &lt; 420 ns</span>
          </div>

          {/* Task Lanes */}
          <div className="space-y-2">
            {tasks.map((task) => {
              const isSelected = selectedTask === task.id;
              return (
                <div
                  key={task.id}
                  onClick={() => setSelectedTask(task.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-surface-elevated border-electric-yellow"
                      : "bg-background-secondary/80 border-surface-border hover:border-surface-highlight"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${task.color.split(" ")[1]} bg-current`} />
                      <span className="font-display font-semibold text-xs text-text-primary">
                        {task.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 font-mono text-[10px]">
                      <span className="text-text-muted">{task.priority}</span>
                      <span className="px-2 py-0.5 rounded bg-surface-highlight text-electric-yellow">
                        {task.state}
                      </span>
                    </div>
                  </div>

                  {/* Execution Bar Representation */}
                  <div className="h-4 rounded bg-background-primary/80 overflow-hidden flex items-center relative">
                    <div
                      className={`h-full rounded ${
                        task.id === "task-1"
                          ? "w-[25%] bg-electric-yellow ml-[5%]"
                          : task.id === "task-2"
                          ? "w-[30%] bg-electric-amber ml-[35%]"
                          : task.id === "task-3"
                          ? "w-[40%] bg-emerald-500 ml-[10%]"
                          : "w-[18%] bg-purple-500 ml-[75%]"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {selectedView === "interrupts" && (
        <div className="my-5 p-4 rounded-xl bg-background-secondary border border-surface-border space-y-3 font-mono text-xs">
          <div className="text-electric-yellow font-bold pb-2 border-b border-surface-border">
            // HARDWARE VECTOR TABLE & EXCEPTION MAPPINGS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded bg-background-elevated border border-surface-border">
              <span className="text-text-muted block text-[10px]">IRQ 0x0E //</span>
              <span className="text-text-primary font-bold">PendSV Handler</span>
              <p className="text-[11px] text-text-secondary mt-1">
                Executes deterministic register stacking and PSP/MSP context migration in assembly.
              </p>
            </div>
            <div className="p-3 rounded bg-background-elevated border border-surface-border">
              <span className="text-text-muted block text-[10px]">IRQ 0x0F //</span>
              <span className="text-text-primary font-bold">SysTick Timer (1 kHz)</span>
              <p className="text-[11px] text-text-secondary mt-1">
                Drives μT-Kernel 3.0 time-slice counters, delayed wakeups, and periodic scheduling ticks.
              </p>
            </div>
            <div className="p-3 rounded bg-background-elevated border border-surface-border">
              <span className="text-text-muted block text-[10px]">IRQ 0x48 //</span>
              <span className="text-text-primary font-bold">Ethos-U55 NPU IRQ</span>
              <p className="text-[11px] text-text-secondary mt-1">
                Asynchronous hardware interrupt signaling completion of Vela-quantized tensor graph.
              </p>
            </div>
            <div className="p-3 rounded bg-background-elevated border border-surface-border">
              <span className="text-text-muted block text-[10px]">IRQ 0x22 //</span>
              <span className="text-text-primary font-bold">Renesas DTC/DMAC Channels</span>
              <p className="text-[11px] text-text-secondary mt-1">
                Zero-copy DMA transfers between MIPI camera, I2S audio codecs, and SRAM buffers.
              </p>
            </div>
          </div>
        </div>
      )}

      {selectedView === "bsp" && (
        <div className="my-5 p-4 rounded-xl bg-background-secondary border border-surface-border space-y-3 font-mono text-xs">
          <div className="text-electric-yellow font-bold pb-2 border-b border-surface-border">
            // BOARD SUPPORT PACKAGE (BSP) INTEGRATION MAP
          </div>
          <div className="space-y-2 text-[11px]">
            <div className="flex justify-between p-2 rounded bg-background-elevated">
              <span className="text-text-muted">Target SoC:</span>
              <span className="text-text-primary">Renesas RA8P1 (480 MHz Arm Cortex-M85)</span>
            </div>
            <div className="flex justify-between p-2 rounded bg-background-elevated">
              <span className="text-text-muted">NPU Accelerator:</span>
              <span className="text-electric-yellow">Arm Ethos-U55 MicroNPU (128 MACs/clk)</span>
            </div>
            <div className="flex justify-between p-2 rounded bg-background-elevated">
              <span className="text-text-muted">HAL Framework:</span>
              <span className="text-text-primary">Renesas Flexible Software Package (FSP)</span>
            </div>
            <div className="flex justify-between p-2 rounded bg-background-elevated">
              <span className="text-text-muted">Toolchain / IDE:</span>
              <span className="text-text-primary">e² studio + GCC Arm Embedded Toolchain</span>
            </div>
          </div>
        </div>
      )}

      {/* Selected Task Inspection Note */}
      <div className="p-3.5 rounded-xl bg-background-secondary border border-surface-border flex items-start space-x-3 text-xs">
        <Cpu className="w-4 h-4 text-electric-yellow shrink-0 mt-0.5" />
        <div>
          <span className="font-mono text-[10px] text-electric-yellow uppercase">
            Active Inspection: {tasks.find((t) => t.id === selectedTask)?.name}
          </span>
          <p className="text-text-secondary font-body mt-0.5">
            {tasks.find((t) => t.id === selectedTask)?.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
