"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import TeslaIntroTransition from "./TeslaIntroTransition";
import { RotateCcw } from "lucide-react";

export default function TeslaTowerIntro() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isDevOverride, setIsDevOverride] = useState<boolean>(false);

  // Check URL query parameters and dev mode on mount
  useEffect(() => {
    setIsMounted(true);

    const checkUrlParams = () => {
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const hasIntroParam = urlParams.get("intro") === "1";

        if (hasIntroParam) {
          setIsDevOverride(true);
          setIsPlaying(true);
          return;
        }

        // Check if intro has already been viewed in this session
        const hasSeenIntro = sessionStorage.getItem("tesla_tower_intro_viewed") === "true";
        if (hasSeenIntro) {
          setIsPlaying(false);
          return;
        }

        setIsPlaying(true);
      }
    };

    checkUrlParams();
  }, []);

  // Handle body scrolling lock while intro is playing
  useEffect(() => {
    if (isPlaying) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isPlaying]);

  const handleComplete = useCallback(() => {
    setIsPlaying(false);
    try {
      sessionStorage.setItem("tesla_tower_intro_viewed", "true");
    } catch {}
  }, []);

  const handleSkip = useCallback(() => {
    setIsPlaying(false);
    try {
      sessionStorage.setItem("tesla_tower_intro_viewed", "true");
    } catch {}
  }, []);

  const handleReplay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  if (!isMounted) return null;

  const overlayElement = isPlaying ? (
    <aside
      aria-label="Tesla Tower Cinematic Introduction"
      className="fixed inset-0 z-[99999] bg-[#0B0B0A] flex items-center justify-center overflow-hidden transition-opacity duration-1000"
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        top: 0,
        left: 0,
      }}
    >
      {/* Subtle Ambient Circuit Grid */}
      <div className="absolute inset-0 bg-circuit-grid opacity-25 pointer-events-none" />

      {/* Intro Transition Controller */}
      <TeslaIntroTransition
        onComplete={handleComplete}
        onSkip={handleSkip}
        isDevOverride={isDevOverride}
      />
    </aside>
  ) : null;

  return (
    <>
      {/* 1. Main Full-Screen Wardenclyffe Tower Intro Overlay (Portaled into document.body) */}
      {overlayElement && createPortal(overlayElement, document.body)}

      {/* 2. Development Replay Intro Control Pill (Floating in bottom-right) */}
      {!isPlaying && (
        <aside
          aria-label="Developer Intro Controls"
          className="fixed bottom-5 right-5 z-40 flex items-center space-x-2"
        >
          <button
            onClick={handleReplay}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-background-elevated/95 border border-surface-border hover:border-electric-yellow text-xs font-mono text-electric-yellow shadow-2xl backdrop-blur-md transition-all hover:scale-105 group"
            title="Replay Tesla Tower Cinematic Entrance"
          >
            <RotateCcw className="w-3.5 h-3.5 text-electric-yellow group-hover:-rotate-90 transition-transform" />
            <span className="font-semibold">Replay Tesla Intro</span>
          </button>
        </aside>
      )}
    </>
  );
}
