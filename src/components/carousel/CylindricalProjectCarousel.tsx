"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { FEATURED_PROJECTS } from "@/data/portfolio";
import ProjectExhibitionCard from "./ProjectExhibitionCard";
import { ChevronLeft, ChevronRight, RotateCw, Layers, ShieldCheck, Zap } from "lucide-react";

export default function CylindricalProjectCarousel() {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [accessibleFlatMode, setAccessibleFlatMode] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const dragDistance = useRef(0);
  const animFrameId = useRef<number | null>(null);

  const N = FEATURED_PROJECTS.length; // 4
  const STEP = (2 * Math.PI) / N; // PI / 2

  // Responsive radius
  const [radius, setRadius] = useState(480);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setRadius(320);
      else if (w < 1024) setRadius(420);
      else setRadius(520);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update active index based on current rotation
  const updateActiveIndex = useCallback((currentRot: number) => {
    // Normalizing angle to [0, 2PI)
    let normalized = (-currentRot) % (2 * Math.PI);
    if (normalized < 0) normalized += 2 * Math.PI;
    const index = Math.round(normalized / STEP) % N;
    setActiveIndex(index);
  }, [STEP, N]);

  // Momentum & snap animation loop
  const snapToNearest = useCallback(() => {
    if (animFrameId.current) cancelAnimationFrame(animFrameId.current);

    const animateSnap = () => {
      // Find nearest target angle
      const targetAngle = Math.round(rotation / STEP) * STEP;
      const diff = targetAngle - rotation;

      if (Math.abs(diff) < 0.002 && Math.abs(velocity.current) < 0.002) {
        setRotation(targetAngle);
        updateActiveIndex(targetAngle);
        velocity.current = 0;
        return;
      }

      // Apply remaining velocity with friction + spring attraction to target
      velocity.current *= 0.92;
      const springForce = diff * 0.12;
      const nextRot = rotation + velocity.current + springForce;

      setRotation(nextRot);
      updateActiveIndex(nextRot);
      animFrameId.current = requestAnimationFrame(animateSnap);
    };

    animFrameId.current = requestAnimationFrame(animateSnap);
  }, [rotation, STEP, updateActiveIndex]);

  // Pointer drag event handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (accessibleFlatMode) return;
    if (animFrameId.current) cancelAnimationFrame(animFrameId.current);

    isPointerDown.current = true;
    startX.current = e.clientX;
    lastX.current = e.clientX;
    dragDistance.current = 0;
    velocity.current = 0;
    setIsDragging(true);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture fails
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return;

    const currentX = e.clientX;
    const dx = currentX - lastX.current;
    lastX.current = currentX;
    dragDistance.current += Math.abs(dx);

    // Angular displacement proportional to horizontal movement
    const sensitivity = 0.0035;
    const deltaAngle = dx * sensitivity;
    velocity.current = deltaAngle;

    setRotation((prev) => {
      const next = prev + deltaAngle;
      updateActiveIndex(next);
      return next;
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;
    setIsDragging(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    snapToNearest();
  };

  // Step rotation by index
  const rotateTo = (index: number) => {
    if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    const targetAngle = -index * STEP;

    const animateTransition = () => {
      setRotation((prev) => {
        const diff = targetAngle - prev;
        if (Math.abs(diff) < 0.004) {
          updateActiveIndex(targetAngle);
          return targetAngle;
        }
        const next = prev + diff * 0.15;
        updateActiveIndex(next);
        animFrameId.current = requestAnimationFrame(animateTransition);
        return next;
      });
    };

    animFrameId.current = requestAnimationFrame(animateTransition);
  };

  const handlePrev = () => {
    const nextIdx = (activeIndex - 1 + N) % N;
    rotateTo(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % N;
    rotateTo(nextIdx);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-background-primary overflow-hidden border-t border-surface-border/70">
      {/* Background Electromagnetic Wave Rings */}
      <div className="absolute inset-0 bg-circuit-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-electric-yellow/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-background-elevated border border-surface-border text-xs font-mono text-electric-yellow">
            <Zap className="w-3.5 h-3.5 text-electric-yellow" />
            <span>SECTION 02 // 3D CYLINDRICAL ROTATION EXHIBITION</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-text-primary tracking-tight">
            Tesla-Powered{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow via-amber-300 to-[#FFFDF5]">
              Project Carousel
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
            Drag horizontally to rotate the cylindrical magnetic stator exhibition. Four flagship engineering projects anchored by 3D Tesla-inspired physical inventions.
          </p>

          {/* Mode Switcher & Navigation Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 font-mono text-xs">
            <button
              onClick={handlePrev}
              className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-background-elevated border border-surface-border hover:border-electric-yellow text-text-secondary hover:text-white transition-colors"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev Project</span>
            </button>

            {FEATURED_PROJECTS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => rotateTo(i)}
                className={`px-3 py-1.5 rounded-xl border transition-all ${
                  activeIndex === i
                    ? "bg-electric-yellow text-black border-electric-amber font-bold shadow-md shadow-black/50"
                    : "bg-background-elevated text-text-muted border-surface-border hover:text-white hover:border-surface-border"
                }`}
              >
                0{i + 1}
              </button>
            ))}

            <button
              onClick={handleNext}
              className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-background-elevated border border-surface-border hover:border-electric-yellow text-text-secondary hover:text-white transition-colors"
              aria-label="Next Project"
            >
              <span>Next Project</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setAccessibleFlatMode(!accessibleFlatMode)}
              className="px-2.5 py-1.5 rounded-lg border border-surface-border/70 text-[10px] text-text-muted hover:text-electric-yellow ml-2"
              title="Toggle Flat Accessible View"
            >
              {accessibleFlatMode ? "3D Cylindrical Mode" : "Flat View"}
            </button>
          </div>
        </div>

        {/* 3D Cylindrical Viewport Stage */}
        {!accessibleFlatMode ? (
          <div
            ref={containerRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            data-cursor={isDragging ? "dragging" : "interactive"}
            className="relative w-full h-[620px] sm:h-[660px] flex items-center justify-center overflow-visible select-none cursor-grab active:cursor-grabbing focus:outline-none"
            style={{ perspective: "1200px" }}
          >
            {/* Magnetic Stator Ground Ring (3D circular floor visual) */}
            <div
              className="absolute w-[680px] h-[680px] rounded-full border-2 border-dashed border-electric-yellow/20 pointer-events-none"
              style={{
                transform: "rotateX(75deg) translateZ(-120px)",
              }}
            >
              <div className="absolute inset-4 rounded-full border border-electric-amber/20 animate-[spin_50s_linear_infinite]" />
              <div className="absolute inset-16 rounded-full border border-surface-border animate-[spin_30s_linear_infinite_reverse]" />
            </div>

            {/* Cylinder Project Cards */}
            {FEATURED_PROJECTS.map((project, i) => {
              const angle = i * STEP + rotation;
              const sin = Math.sin(angle);
              const cos = Math.cos(angle);

              // 3D positioning along cylinder surface
              const x = sin * radius;
              const z = cos * radius - radius; // z ranges from -2*radius to 0

              // Calculate depth attenuation
              const depthFactor = (z + radius * 2) / (radius * 2); // 0 (back) to 1 (front)
              const scale = 0.7 + depthFactor * 0.3;
              const opacity = Math.max(0.15, Math.min(1.0, depthFactor * 1.3 - 0.1));
              const isFront = z > -radius * 0.8;
              const isCurrentActive = activeIndex === i;

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    if (dragDistance.current < 6 && !isCurrentActive) {
                      rotateTo(i);
                    }
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] transition-opacity duration-200 will-change-transform"
                  style={{
                    transform: `translate3d(calc(-50% + ${x}px), -50%, ${z}px) scale(${scale})`,
                    zIndex: Math.round(depthFactor * 100),
                    opacity: opacity,
                    pointerEvents: isFront ? "auto" : "none",
                  }}
                >
                  <ProjectExhibitionCard
                    project={project}
                    index={i}
                    isActive={isCurrentActive}
                    isDragging={isDragging}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          /* Accessible Flat Mode Fallback */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {FEATURED_PROJECTS.map((project, i) => (
              <ProjectExhibitionCard
                key={project.id}
                project={project}
                index={i}
                isActive={true}
              />
            ))}
          </div>
        )}

        {/* Drag Momentum & Rotation Hint */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-muted gap-2 border-t border-surface-border/60">
          <div className="flex items-center space-x-2">
            <RotateCw className="w-3.5 h-3.5 text-electric-yellow animate-spin" />
            <span>DRAG HORIZONTALLY TO ROTATE STAGE &bull; USE ARROW KEYS</span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-electric-yellow">
              ACTIVE EXHIBIT: {FEATURED_PROJECTS[activeIndex]?.shortTitle}
            </span>
            <span className="text-emerald-400 font-bold">4 TESLA INVENTIONS INTEGRATED</span>
          </div>
        </div>

      </div>
    </section>
  );
}
