"use client";

import React, { useEffect, useState } from "react";
import WardenclyffeTower from "./WardenclyffeTower";
import TeslaElectricalArcs from "./TeslaElectricalArcs";
import { Zap, ChevronRight, RotateCcw } from "lucide-react";

interface IntroTransitionProps {
  onComplete: () => void;
  onSkip: () => void;
  isDevOverride?: boolean;
}

export default function TeslaIntroTransition({
  onComplete,
  onSkip,
  isDevOverride = false,
}: IntroTransitionProps) {
  // Timeline:
  // 0: FadeIn (0.0-1.0s)
  // 1: ShaftCharge (1.0-2.0s)
  // 2: DomeDischarge (2.0-3.0s)
  // 3: FullScreenArcs (3.0-4.0s)
  // 4: FadeOut (4.0-5.0s)
  const [timelineStep, setTimelineStep] = useState<number>(0);
  const [shaftCharge, setShaftCharge] = useState<number>(0);
  const [dischargeIntensity, setDischargeIntensity] = useState<number>(0);
  const [statusMessage, setStatusMessage] = useState<string>("WARDENCLYFFE TOWER // SYSTEM EMERGENCE");

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion && !isDevOverride) {
      onSkip();
      return;
    }

    const startTime = performance.now();
    let animFrame: number;

    const tick = (now: number) => {
      const elapsed = (now - startTime) / 1000; // in seconds

      if (elapsed < 1.0) {
        // 0.0 - 1.0s: Fade in tower
        setTimelineStep(0);
        setStatusMessage("WARDENCLYFFE TOWER // SYSTEM EMERGENCE");
      } else if (elapsed < 2.0) {
        // 1.0 - 2.0s: Current climbs shaft
        setTimelineStep(1);
        const p = Math.min(1.0, (elapsed - 1.0) / 1.0);
        setShaftCharge(p);
        setStatusMessage(`HIGH-VOLTAGE CONDUCTOR IONIZING // ${Math.round(p * 100)}%`);
      } else if (elapsed < 3.0) {
        // 2.0 - 3.0s: Dome discharge
        setTimelineStep(2);
        const p = Math.min(1.0, (elapsed - 2.0) / 1.0);
        setDischargeIntensity(0.5 + p * 0.5);
        setStatusMessage("TOROIDAL CUPOLA RESONANCE // 150 kHz DISCHARGE");
      } else if (elapsed < 4.0) {
        // 3.0 - 4.0s: Screen-wide propagation
        setTimelineStep(3);
        setDischargeIntensity(1.0);
        setStatusMessage("ELECTROMAGNETIC FIELD EXPANSION // COUPLING COMPLETE");
      } else if (elapsed < 5.0) {
        // 4.0 - 5.0s: Fade out
        setTimelineStep(4);
        setStatusMessage("REVEALING HARDWARE PORTFOLIO...");
      } else {
        // Complete
        onComplete();
        return;
      }

      animFrame = requestAnimationFrame(tick);
    };

    animFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animFrame);
  }, [onComplete, onSkip, isDevOverride]);

  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-between p-6 sm:p-10 transition-opacity duration-1000 ${
        timelineStep === 4 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Top Bar with Status and Skip Intro Button */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between z-30 font-mono text-xs">
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-background-elevated/90 border border-surface-border text-electric-yellow shadow-md">
          <Zap className="w-3.5 h-3.5 fill-current text-electric-yellow animate-pulse" />
          <span className="tracking-wider uppercase font-semibold">
            {statusMessage}
          </span>
        </div>

        <button
          onClick={onSkip}
          className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-background-elevated/90 border border-surface-border hover:border-electric-yellow text-text-secondary hover:text-white transition-all shadow-md group"
        >
          <span>Skip Intro</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-electric-yellow" />
        </button>
      </div>

      {/* Centerpiece 3D Wardenclyffe Tower Model */}
      <div className="relative w-full flex-grow flex items-center justify-center my-auto z-10">
        <WardenclyffeTower
          timelineStep={timelineStep}
          shaftChargeProgress={shaftCharge}
          dischargeIntensity={dischargeIntensity}
        />

        {/* Dynamic Electrical Arcs Canvas Overlay */}
        <TeslaElectricalArcs
          timelineStep={timelineStep}
          dischargeIntensity={dischargeIntensity}
        />
      </div>

      {/* Bottom Progress Bar & Telemetry Footer */}
      <div className="w-full max-w-xl mx-auto z-30 space-y-2 font-mono text-[10px] text-text-muted text-center">
        <div className="flex justify-between tracking-widest uppercase">
          <span>TESLA&apos;S ELECTRIC UNIVERSE</span>
          <span className="text-electric-yellow">STAGE 0{timelineStep + 1} OF 05</span>
        </div>
        <div className="h-1 w-full rounded-full bg-surface-border overflow-hidden">
          <div
            className="h-full bg-electric-yellow transition-all duration-300"
            style={{ width: `${((timelineStep + 1) / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
