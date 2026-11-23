"use client";

import React, { useEffect, useRef } from "react";

export default function ElectricBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Node grid representing laboratory high-voltage electrical network
    interface CircuitNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      pulse: number;
      pulseSpeed: number;
    }

    const nodeCount = Math.min(30, Math.floor((width * height) / 50000));
    const nodes: CircuitNode[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        pulse: Math.random(),
        pulseSpeed: 0.005 + Math.random() * 0.01,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Subtle metallic obsidian grid
      const gridSize = 80;
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(52, 51, 42, 0.25)";

      const startX = -(time * 4) % gridSize;
      for (let x = startX; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and connect nodes with crisp electrical traces
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.pulse = (node.pulse + node.pulseSpeed) % 1;

        // Draw node junction (electric yellow)
        const alpha = 0.2 + Math.sin(node.pulse * Math.PI) * 0.35;
        ctx.fillStyle = `rgba(234, 179, 8, ${alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes with circuit lines
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const lineAlpha = (1 - dist / 180) * 0.12;
            ctx.strokeStyle = `rgba(250, 204, 21, ${lineAlpha})`;
            ctx.lineWidth = 0.8;

            // Orthogonal circuit trace
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            const midX = node.x + dx * 0.5;
            ctx.lineTo(midX, node.y);
            ctx.lineTo(midX, other.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();

            // Occasional traveling electrical pulse
            if (Math.sin(time * 2 + i + j) > 0.88) {
              const travelProgress = (time * 1.5 + i * 0.3) % 1;
              const px = node.x + dx * travelProgress;
              const py = node.y + dy * travelProgress;
              ctx.fillStyle = "rgba(255, 253, 245, 0.8)";
              ctx.beginPath();
              ctx.arc(px, py, 1.4, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      aria-hidden="true"
    />
  );
}
