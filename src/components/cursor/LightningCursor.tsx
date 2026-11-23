"use client";

import React, { useEffect, useRef, useState } from "react";

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

interface TrailPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  time: number;
}

export default function LightningCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [cursorState, setCursorState] = useState<"normal" | "interactive" | "card" | "dragging">("normal");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const prevMousePos = useRef({ x: -100, y: -100 });
  const velocity = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);
  const lastMoveTime = useRef(0);
  const dragActive = useRef(false);

  const particles = useRef<SparkParticle[]>([]);
  const trail = useRef<TrailPoint[]>([]);
  const MAX_PARTICLES = 36;
  const MAX_TRAIL = 16;

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const handlePointerMove = (e: PointerEvent) => {
      const now = performance.now();
      const dt = Math.max(1, now - lastMoveTime.current);
      lastMoveTime.current = now;

      prevMousePos.current = { ...mousePos.current };
      mousePos.current = { x: e.clientX, y: e.clientY };

      const dx = mousePos.current.x - prevMousePos.current.x;
      const dy = mousePos.current.y - prevMousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      velocity.current = {
        x: (dx / dt) * 16,
        y: (dy / dt) * 16,
      };

      isMoving.current = dist > 1.2;

      // Add to trail
      trail.current.unshift({
        x: e.clientX,
        y: e.clientY,
        vx: velocity.current.x,
        vy: velocity.current.y,
        time: now,
      });
      if (trail.current.length > MAX_TRAIL) {
        trail.current.pop();
      }

      // Spawn electrical sparks on faster motion (Electric Yellow / Gold)
      if (dist > 8 && particles.current.length < MAX_PARTICLES) {
        const sparkCount = Math.min(3, Math.floor(dist / 14));
        for (let i = 0; i < sparkCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 0.5 + Math.random() * 2.2;
          particles.current.push({
            x: e.clientX,
            y: e.clientY,
            vx: Math.cos(angle) * speed + velocity.current.x * 0.15,
            vy: Math.sin(angle) * speed + velocity.current.y * 0.15,
            life: 1.0,
            maxLife: 15 + Math.random() * 15,
            size: 1 + Math.random() * 1.8,
            color: Math.random() > 0.4 ? "#FACC15" : "#D4A017",
          });
        }
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.closest("[data-cursor='dragging']") || dragActive.current) {
          setCursorState("dragging");
        } else if (target.closest("[data-cursor='card']") || target.closest(".project-exhibition-card")) {
          setCursorState("card");
        } else if (
          target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("[role='button']") ||
          target.closest("[data-cursor='interactive']")
        ) {
          setCursorState("interactive");
        } else {
          setCursorState("normal");
        }
      }
    };

    const handlePointerDown = () => {
      setIsMouseDown(true);
      for (let i = 0; i < 8; i++) {
        if (particles.current.length >= MAX_PARTICLES) break;
        const angle = (i / 8) * Math.PI * 2 + (Math.random() - 0.5);
        const speed = 2 + Math.random() * 3.5;
        particles.current.push({
          x: mousePos.current.x,
          y: mousePos.current.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1.0,
          maxLife: 20 + Math.random() * 12,
          size: 1.2 + Math.random() * 2,
          color: i % 2 === 0 ? "#FACC15" : "#FFFDF5",
        });
      }
    };

    const handlePointerUp = () => {
      setIsMouseDown(false);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    let animId: number;
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const render = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      const ctx = canvasRef.current?.getContext("2d");
      if (ctx && canvasRef.current) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        // Draw electrical filament trail in electric yellow/gold (No blurry border glow)
        if (trail.current.length > 2) {
          ctx.beginPath();
          ctx.moveTo(trail.current[0].x, trail.current[0].y);

          for (let i = 1; i < trail.current.length; i++) {
            const pt = trail.current[i];
            const jitterX = (Math.random() - 0.5) * 1.5;
            const jitterY = (Math.random() - 0.5) * 1.5;
            ctx.lineTo(pt.x + jitterX, pt.y + jitterY);
          }

          ctx.strokeStyle = "rgba(234, 179, 8, 0.4)";
          ctx.lineWidth = 1.4;
          ctx.stroke();

          // Inner crisp white-yellow core
          ctx.beginPath();
          ctx.moveTo(trail.current[0].x, trail.current[0].y);
          for (let i = 1; i < Math.min(6, trail.current.length); i++) {
            ctx.lineTo(trail.current[i].x, trail.current[i].y);
          }
          ctx.strokeStyle = "rgba(250, 204, 21, 0.75)";
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Draw active electrical spark particles
        for (let i = particles.current.length - 1; i >= 0; i--) {
          const p = particles.current[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.92;
          p.vy *= 0.92;
          p.life -= 1 / p.maxLife;

          if (p.life <= 0) {
            particles.current.splice(i, 1);
            continue;
          }

          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.life;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1.0;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
        aria-hidden="true"
      />

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-[4px] -translate-y-[4px] will-change-transform select-none"
        aria-hidden="true"
      >
        <div className="relative">
          {/* Main Sharp Electric Yellow Lightning Bolt (No glowing border) */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-150 drop-shadow-md ${
              isMouseDown ? "scale-125" : cursorState === "interactive" ? "scale-110" : "scale-100"
            }`}
          >
            {/* Glowing Lightning Bolt Geometry in Electric Yellow & Metallic Amber */}
            <polygon
              points="11,1 3,13 10,13 8,22 19,9 12,9"
              fill="#FACC15"
              stroke="#D4A017"
              strokeWidth="1.2"
              strokeLinejoin="miter"
            />

            {/* Inner Electric White Spark Core */}
            <polygon
              points="11,3 5,12 10,12 9,19 17,9 12,9"
              fill="#FFFDF5"
            />

            {/* Click Hotspot Dot at Tip */}
            <circle cx="11" cy="2" r="1" fill="#FFFFFF" />
          </svg>

          {/* State 1: Crisp Circular Magnetic Field Ring (No blur/glow) */}
          {cursorState === "interactive" && (
            <div className="absolute -top-2 -left-2 w-9 h-9 rounded-full border border-electric-yellow/80 animate-spin border-dashed pointer-events-none" />
          )}

          {/* State 2: Charged Grip Indicator when dragging carousel */}
          {cursorState === "dragging" && (
            <div className="absolute -top-3 -left-3 w-11 h-11 rounded-full border border-electric-yellow bg-electric-yellow/10 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-yellow animate-ping" />
            </div>
          )}

          {/* State 3: Electric Filaments when hovering project cards */}
          {cursorState === "card" && (
            <div className="absolute -top-1.5 -left-1.5 w-8 h-8 rounded-full border border-electric-yellow/60 animate-ping opacity-60" />
          )}
        </div>
      </div>
    </>
  );
}
