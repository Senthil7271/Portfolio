"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Mail, Github, Linkedin, FileText, Send, CheckCircle2, Copy, Zap, Terminal, Power } from "lucide-react";

export default function ElectricalContactSwitch() {
  const [circuitClosed, setCircuitClosed] = useState(true);
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-background-primary overflow-hidden border-t border-surface-border/70">
      {/* Background Volumetric Glow */}
      <div className="absolute inset-0 bg-circuit-grid opacity-35 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-electric-yellow/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-background-elevated border border-surface-border text-xs font-mono text-electric-yellow">
            <Power className="w-3.5 h-3.5 text-electric-yellow" />
            <span>SECTION 07 // CLOSE THE CIRCUIT</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-text-primary tracking-tight">
            LET&apos;S ENGINEER THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow via-amber-300 to-[#FFFDF5]">
              FUTURE.
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
            Interested in embedded systems, FPGA acceleration, VLSI design, or intelligent hardware? Close the circuit to connect directly.
          </p>
        </div>

        {/* Large Interactive High-Voltage Knife Switch Breaker */}
        <div className="max-w-xl mx-auto mb-16 p-6 rounded-3xl bg-background-secondary border-2 border-surface-border shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left font-mono text-xs">
            <span className="text-electric-yellow font-bold block mb-1">
              // LABORATORY HIGH-VOLTAGE BREAKER
            </span>
            <p className="text-text-muted">
              Toggle the switch to complete the conductive path and energize the direct transmission bus.
            </p>
          </div>

          {/* Knife Switch Lever Control */}
          <button
            type="button"
            onClick={() => setCircuitClosed(!circuitClosed)}
            className={`flex items-center space-x-3 px-6 py-3.5 rounded-2xl border transition-all ${
              circuitClosed
                ? "bg-electric-yellow text-black border-electric-amber font-bold shadow-lg shadow-black/60"
                : "bg-background-elevated text-text-muted border-surface-border hover:border-electric-yellow hover:text-white"
            }`}
          >
            <Power className={`w-5 h-5 ${circuitClosed ? "text-black animate-pulse" : ""}`} />
            <div className="text-left font-mono">
              <div className="text-xs font-bold">
                {circuitClosed ? "CIRCUIT CLOSED" : "CIRCUIT OPEN"}
              </div>
              <div className="text-[10px] opacity-80">
                {circuitClosed ? "ENERGIZED (CLICK TO OPEN)" : "CLICK TO CLOSE"}
              </div>
            </div>
          </button>
        </div>

        {/* Direct Channels & Message Packet Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Direct Links & Resume */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-3xl bg-background-secondary border border-surface-border hover:border-electric-yellow transition-all space-y-4">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
                // DIRECT INBOX
              </span>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-text-primary">
                    Email Address
                  </h3>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-xs text-electric-yellow hover:underline break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-background-elevated border border-surface-border hover:border-electric-yellow text-text-secondary hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="font-mono text-[11px] text-emerald-400">
                  &gt; Copied to clipboard successfully!
                </div>
              )}
            </div>

            {/* Social Network Channels */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-background-secondary border border-surface-border hover:border-electric-yellow text-text-primary flex items-center space-x-3 transition-all"
              >
                <Github className="w-5 h-5 text-electric-yellow" />
                <div>
                  <div className="font-bold">GitHub</div>
                  <div className="text-[10px] text-text-muted">@Senthil7271</div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-background-secondary border border-surface-border hover:border-electric-yellow text-text-primary flex items-center space-x-3 transition-all"
              >
                <Linkedin className="w-5 h-5 text-electric-yellow" />
                <div>
                  <div className="font-bold">LinkedIn</div>
                  <div className="text-[10px] text-text-muted">Senthil Kumar M.</div>
                </div>
              </a>
            </div>

            {/* Resume CTA Card */}
            <div className="p-6 rounded-3xl bg-background-secondary border border-surface-border shadow-xl space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-surface-elevated text-electric-yellow border border-electric-yellow/30">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-text-primary">
                    Curriculum Vitae / Résumé
                  </h3>
                  <p className="font-mono text-[11px] text-text-muted">
                    PDF Document &bull; Verified Academic Edition
                  </p>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Senthil_Kumar_Mahalingam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-electric-yellow hover:bg-amber-400 text-black font-mono text-xs font-bold shadow-md shadow-black/40 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Download Official Résumé (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Message Transmission Terminal */}
          <div className="lg:col-span-7 rounded-3xl bg-background-secondary border border-surface-border p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-surface-border font-mono text-xs">
              <span className="text-electric-yellow">// TRANSMIT MESSAGE PACKET</span>
              <span className="text-text-muted">TERMINAL STATUS: {circuitClosed ? "ENERGIZED" : "STANDBY"}</span>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-background-elevated border border-emerald-500/40 text-center space-y-3 font-mono">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-display font-bold text-base text-text-primary">
                  Packet Transmitted Successfully
                </h4>
                <p className="text-xs text-text-secondary">
                  Thank you for reaching out. You can also write directly to{" "}
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-electric-yellow underline">
                    {PERSONAL_INFO.email}
                  </a>
                  .
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 px-4 py-2 rounded-lg bg-surface-highlight text-xs text-electric-yellow hover:bg-surface-elevated font-semibold"
                >
                  Send Another Packet
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-text-muted">YOUR NAME:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Nikola Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl bg-background-elevated border border-surface-border text-text-primary focus:border-electric-yellow focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-text-muted">YOUR EMAIL:</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. nikola@laboratory.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-background-elevated border border-surface-border text-text-primary focus:border-electric-yellow focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-text-muted">SUBJECT OR PROJECT DOMAIN:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. FPGA Acceleration / Embedded Systems Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-3 rounded-xl bg-background-elevated border border-surface-border text-text-primary focus:border-electric-yellow focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-text-muted">MESSAGE TRANSMISSION:</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share details regarding collaboration, research, or hiring opportunities..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl bg-background-elevated border border-surface-border text-text-primary focus:border-electric-yellow focus:outline-none transition-colors font-body text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-electric-yellow hover:bg-amber-400 text-black font-mono text-xs font-bold shadow-lg shadow-black/40 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT PACKET &gt;</span>
                </button>
              </form>
            )}

            {/* Final Signature Terminal */}
            <div className="pt-4 border-t border-surface-border/60 flex items-center justify-between">
              <span className="font-mono text-[10px] text-text-muted">
                SIGNAL TERMINATION //
              </span>
              
              <div className="flex items-center space-x-2">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-electric-yellow" />
                <div className="w-8 h-8 rounded-xl bg-background-elevated border border-electric-yellow flex items-center justify-center shadow-md shadow-black/50">
                  <span className="font-mono text-xs font-bold text-electric-yellow">SK</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
