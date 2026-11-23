"use client";

import React from "react";
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from "@/data/portfolio";
import { GraduationCap, Award, CheckCircle2, FileText, Compass, Layers, Crosshair } from "lucide-react";

export default function BlueprintEducation() {
  return (
    <section id="education" className="relative py-28 bg-background-primary overflow-hidden border-t border-surface-border/70">
      {/* Background Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-circuit-dense opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-background-elevated border border-surface-border text-xs font-mono text-electric-yellow">
            <span className="w-2 h-2 rounded-full bg-electric-yellow" />
            <span>SECTION 06 // TECHNICAL BLUEPRINT SHEETS</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-text-primary tracking-tight">
            Academic Blueprints:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow via-amber-300 to-[#FFFDF5]">
              Education &amp; Credentials
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
            Presented as precision engineering blueprints — thin technical line drawings detailing undergraduate VLSI curriculum, academic scores, and accredited professional certifications.
          </p>
        </div>

        {/* Blueprint Dual-Sheet Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sheet: Degree & School Blueprints */}
          <div className="lg:col-span-6 rounded-3xl bg-background-secondary border-2 border-dashed border-[#F5F1E6]/15 p-6 sm:p-8 space-y-6 relative text-left shadow-xl shadow-black/80">
            {/* Corner Alignment Reticle Crosshairs */}
            <span className="absolute top-3 left-3 font-mono text-[10px] text-[#F5F1E6]/30">+</span>
            <span className="absolute top-3 right-3 font-mono text-[10px] text-[#F5F1E6]/30">+</span>
            <span className="absolute bottom-3 left-3 font-mono text-[10px] text-[#F5F1E6]/30">+</span>
            <span className="absolute bottom-3 right-3 font-mono text-[10px] text-[#F5F1E6]/30">+</span>

            {/* Blueprint Corner Stamp */}
            <div className="flex items-center justify-between pb-3 border-b border-[#F5F1E6]/15 font-mono text-[11px] text-electric-yellow">
              <span>DWG NO: SKM-ACAD-01</span>
              <span>SCALE: 1:1 &bull; REV: 2026.B</span>
            </div>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.institution} className="p-5 rounded-2xl bg-background-elevated border border-surface-border space-y-3 relative overflow-hidden">
                  {/* Subtle Yellow Milestone Accent Bar */}
                  <div className="absolute top-0 left-0 w-1 inset-y-0 bg-electric-yellow" />

                  <div className="flex flex-wrap items-center justify-between gap-2 pl-2">
                    <span className="px-2.5 py-0.5 rounded bg-surface-highlight font-mono text-[10px] text-electric-yellow">
                      {edu.period}
                    </span>
                    <div className="font-mono text-xs text-emerald-400 font-bold">
                      {edu.scoreLabel}: {edu.score}
                    </div>
                  </div>

                  <div className="pl-2">
                    <h3 className="font-display font-bold text-base sm:text-lg text-text-primary">
                      {edu.degree}
                    </h3>
                    <p className="font-mono text-xs text-text-muted mt-0.5">
                      {edu.institution}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-2 pl-2 text-xs text-text-secondary font-body border-t border-surface-border/60">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-electric-yellow font-mono mt-0.5">&gt;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Engineering Drawing Title Block */}
            <div className="p-3.5 rounded-xl bg-background-primary border border-surface-border font-mono text-[10px] text-text-muted space-y-1">
              <div className="flex justify-between">
                <span>PROJECT: B.E. VLSI DESIGN &amp; TECH</span>
                <span className="text-electric-yellow">APPR: CIT FACULTY</span>
              </div>
              <div className="flex justify-between border-t border-surface-border/60 pt-1">
                <span>INSTITUTION: CHENNAI INST. OF TECH</span>
                <span className="text-emerald-400">STATUS: 100% AUDITED</span>
              </div>
            </div>
          </div>

          {/* Right Sheet: Accredited Certifications Blueprint */}
          <div className="lg:col-span-6 rounded-3xl bg-background-secondary border-2 border-dashed border-[#F5F1E6]/15 p-6 sm:p-8 space-y-6 relative text-left shadow-xl shadow-black/80">
            {/* Corner Alignment Reticle Crosshairs */}
            <span className="absolute top-3 left-3 font-mono text-[10px] text-[#F5F1E6]/30">+</span>
            <span className="absolute top-3 right-3 font-mono text-[10px] text-[#F5F1E6]/30">+</span>
            <span className="absolute bottom-3 left-3 font-mono text-[10px] text-[#F5F1E6]/30">+</span>
            <span className="absolute bottom-3 right-3 font-mono text-[10px] text-[#F5F1E6]/30">+</span>

            <div className="flex items-center justify-between pb-3 border-b border-[#F5F1E6]/15 font-mono text-[11px] text-electric-yellow">
              <span>DWG NO: SKM-CERT-02</span>
              <span>ACCREDITATION: NPTEL &bull; EDUSKILLS &bull; COURSERA</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="p-4 rounded-xl bg-background-elevated border border-surface-border flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded bg-surface-highlight font-mono text-[10px] text-electric-yellow font-semibold">
                        {cert.issuer}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <h4 className="font-display font-bold text-xs text-text-primary leading-snug">
                      {cert.title}
                    </h4>
                  </div>
                  <div className="pt-2 mt-3 border-t border-surface-border/50 text-[10px] font-mono text-text-muted flex justify-between">
                    <span>STATUS</span>
                    <span className="text-emerald-400 font-bold">VERIFIED PASS</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Drawing Annotation Footnote */}
            <div className="p-3.5 rounded-xl bg-background-primary border border-surface-border font-mono text-[10px] text-text-muted space-y-1">
              <div className="flex justify-between">
                <span>CERTIFICATION POLICY: ZERO INVENTED IDS</span>
                <span className="text-emerald-400 font-bold">AUTHENTIC RECORDS</span>
              </div>
              <div className="flex justify-between border-t border-surface-border/60 pt-1">
                <span>EXHIBIT SHEET 02 OF 02</span>
                <span className="text-electric-yellow">VERIFIED CREDENTIALS</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
