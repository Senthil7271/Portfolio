import React from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Github, Linkedin, Mail, Code, Terminal, ArrowUp, Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-background-primary border-t border-surface-border/80 pt-16 pb-12 overflow-hidden">
      {/* Electrical Wire Trace along top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric-yellow to-transparent opacity-80" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-background-elevated border border-surface-border flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-electric-yellow">SK</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-text-primary tracking-wide">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="font-mono text-xs text-text-muted">
                  {PERSONAL_INFO.degree} &bull; {PERSONAL_INFO.institution}
                </p>
              </div>
            </div>
            <p className="text-sm text-text-secondary max-w-md font-body leading-relaxed">
              &quot;Powered by Engineering — From Electrons to Intelligence.&quot; Designing custom FPGA accelerators,
              hard real-time embedded systems, and resource-constrained Edge AI pipelines.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-background-elevated border border-surface-border hover:border-electric-yellow text-text-secondary hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-background-elevated border border-surface-border hover:border-electric-yellow text-text-secondary hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-background-elevated border border-surface-border hover:border-electric-yellow text-text-secondary hover:text-white transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-background-elevated border border-surface-border hover:border-electric-yellow text-text-secondary hover:text-white transition-colors"
                aria-label="LeetCode Profile"
              >
                <Code className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Direct Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-electric-yellow uppercase tracking-wider font-semibold">
              // Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono text-text-secondary">
              <li>
                <Link href="/#about" className="hover:text-text-primary transition-colors flex items-center space-x-1.5">
                  <span className="text-electric-yellow">&gt;</span>
                  <span>About Me &amp; Philosophy</span>
                </Link>
              </li>
              <li>
                <Link href="/#identity" className="hover:text-text-primary transition-colors flex items-center space-x-1.5">
                  <span className="text-electric-yellow">&gt;</span>
                  <span>Electromagnetic Field Core</span>
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-text-primary transition-colors flex items-center space-x-1.5">
                  <span className="text-electric-yellow">&gt;</span>
                  <span>Tesla Circuit Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-text-primary transition-colors flex items-center space-x-1.5">
                  <span className="text-electric-yellow">&gt;</span>
                  <span>All 14 Repositories</span>
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-text-primary transition-colors flex items-center space-x-1.5">
                  <span className="text-electric-yellow">&gt;</span>
                  <span>Experience Timeline</span>
                </Link>
              </li>
              <li>
                <Link href="/#achievements" className="hover:text-text-primary transition-colors flex items-center space-x-1.5">
                  <span className="text-electric-yellow">&gt;</span>
                  <span>Switchboard Milestones</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical Telemetry */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-electric-yellow uppercase tracking-wider font-semibold">
              // System Telemetry
            </h4>
            <div className="space-y-2 font-mono text-[11px] text-text-muted">
              <div className="p-2.5 rounded-lg bg-background-elevated border border-surface-border space-y-1">
                <div className="flex justify-between">
                  <span>SPECIALIZATION:</span>
                  <span className="text-electric-yellow">VLSI &bull; FPGA &bull; RTOS</span>
                </div>
                <div className="flex justify-between">
                  <span>ACADEMIC CGPA:</span>
                  <span className="text-text-primary">8.56 / 10.0</span>
                </div>
                <div className="flex justify-between">
                  <span>HSC BOARD:</span>
                  <span className="text-text-primary">93.6%</span>
                </div>
                <div className="flex justify-between">
                  <span>STATUS:</span>
                  <span className="text-emerald-400">Available for Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Signature Line */}
        <div className="pt-8 border-t border-surface-border/50 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-muted gap-4">
          <div className="flex items-center space-x-2">
            <Cpu className="w-3.5 h-3.5 text-electric-yellow" />
            <span>&copy; {new Date().getFullYear()} Senthil Kumar Mahalingam. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[11px] text-text-muted">
              Obsidian &amp; Electric Yellow &bull; Built with Next.js 14 &amp; Three.js
            </span>
            <a
              href="#"
              className="p-1.5 rounded bg-background-elevated border border-surface-border hover:border-electric-yellow text-text-secondary hover:text-white transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
