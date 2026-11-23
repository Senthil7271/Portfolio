"use client";

import React, { useEffect, useRef } from "react";

interface ElectricalArcsProps {
  timelineStep: number; // 0: FadeIn, 1: ShaftCharge, 2: DomeDischarge, 3: FullScreenPropagation, 4: FadeOut
  dischargeIntensity: number; // 0 to 1
}

interface Point {
  x: number;
  y: number;
}

export default function TeslaElectricalArcs({
  timelineStep,
  dischargeIntensity,
}: ElectricalArcsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    // Helper to generate fractal lightning path
    const createLightningBolt = (
      start: Point,
      end: Point,
      displace: number,
      minDisplace: number
    ): Point[] => {
      const points: Point[] = [start, end];
      let currentDisplace = displace;

      while (currentDisplace > minDisplace) {
        for (let i = points.length - 1; i > 0; i--) {
          const p1 = points[i - 1];
          const p2 = points[i];
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;

          // Perpendicular offset vector
          const normalX = -(p2.y - p1.y);
          const normalY = p2.x - p1.x;
          const len = Math.hypot(normalX, normalY) || 1;

          const offset = (Math.random() - 0.5) * currentDisplace;
          const newPoint: Point = {
            x: midX + (normalX / len) * offset,
            y: midY + (normalY / len) * offset,
          };

          points.splice(i, 0, newPoint);
        }
        currentDisplace *= 0.52;
      }

      return points;
    };

    const drawBolt = (
      points: Point[],
      color: string,
      lineWidth: number,
      opacity: number
    ) => {
      if (points.length < 2) return;
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.globalAlpha = opacity;
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
      ctx.globalAlpha = 1.0;
    };

    const render = () => {
      const w = (canvas.width = window.innerWidth);
      const h = (canvas.height = window.innerHeight);

      ctx.clearRect(0, 0, w, h);

      // Cupola Apex Coordinates roughly in center-upper viewport
      const domeX = w / 2;
      const domeY = h * 0.36;

      // 1. Stage 2 (2.0–3.0s): Arcs erupting outward from the top dome
      if (timelineStep === 2) {
        const numArcs = Math.floor(4 + Math.random() * 5);

        for (let i = 0; i < numArcs; i++) {
          const angle = -Math.PI * 0.9 + Math.random() * Math.PI * 0.8; // Upward hemisphere
          const dist = 90 + Math.random() * 160 * dischargeIntensity;
          const targetX = domeX + Math.cos(angle) * dist;
          const targetY = domeY + Math.sin(angle) * dist;

          const bolt = createLightningBolt(
            { x: domeX + (Math.random() - 0.5) * 60, y: domeY + (Math.random() - 0.5) * 20 },
            { x: targetX, y: targetY },
            45,
            6
          );

          // Outer yellow glow
          drawBolt(bolt, "#EAB308", 4, 0.75);
          // Sharp electric yellow core
          drawBolt(bolt, "#FACC15", 2, 0.95);
          // Hot white center line
          drawBolt(bolt, "#FFFDF5", 1, 1.0);
        }
      }

      // 2. Stage 3 (3.0–4.0s): Screen-wide branching filaments
      if (timelineStep === 3) {
        const branches = 6 + Math.floor(Math.random() * 6);

        for (let i = 0; i < branches; i++) {
          // Strike to edges of viewport
          const targetX = Math.random() > 0.5 ? (Math.random() > 0.5 ? w * 0.05 : w * 0.95) : Math.random() * w;
          const targetY = Math.random() > 0.5 ? h * 0.05 : h * 0.95;

          const mainBolt = createLightningBolt(
            { x: domeX + (Math.random() - 0.5) * 80, y: domeY },
            { x: targetX, y: targetY },
            120,
            8
          );

          // Outer warm gold
          drawBolt(mainBolt, "#D4A017", 5, 0.6);
          // Electric yellow core
          drawBolt(mainBolt, "#FACC15", 2.5, 0.9);
          // White lightning flash
          drawBolt(mainBolt, "#FFFDF5", 1.2, 1.0);

          // Sub-branching fork
          if (mainBolt.length > 5 && Math.random() > 0.3) {
            const forkOrigin = mainBolt[Math.floor(mainBolt.length * 0.45)];
            const forkTarget: Point = {
              x: forkOrigin.x + (Math.random() - 0.5) * 180,
              y: forkOrigin.y + (Math.random() - 0.5) * 180,
            };
            const forkBolt = createLightningBolt(forkOrigin, forkTarget, 40, 5);
            drawBolt(forkBolt, "#FACC15", 1.5, 0.8);
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [timelineStep, dischargeIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
    />
  );
}
