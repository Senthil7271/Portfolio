import React from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, Home, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-background-secondary border border-surface-border shadow-2xl relative overflow-hidden">
        {/* Ambient Light */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-electric-yellow/8 rounded-full blur-[50px] pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-surface-highlight border border-surface-border flex items-center justify-center mx-auto text-electric-yellow">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-electric-yellow tracking-widest uppercase block">
            ERROR CODE // 0x404
          </span>
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-text-primary">
            Circuit Bus Fault: Page Not Found
          </h1>
          <p className="font-body text-xs text-text-secondary leading-relaxed">
            The requested address or silicon module does not exist in memory. Check the routing table or return to the main control deck.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-electric-yellow hover:bg-amber-400 text-black font-bold shadow-md shadow-black/40 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-background-elevated hover:bg-surface-highlight border border-surface-border text-text-primary transition-colors"
          >
            <span>All Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
