"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ALL_GITHUB_REPOSITORIES, FEATURED_PROJECTS } from "@/data/portfolio";
import { Terminal, Github, Star, ExternalLink, ArrowLeft, Search, Layers, Cpu, ArrowRight } from "lucide-react";

export default function AllProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "FPGA & Hardware",
    "Embedded & RTOS",
    "Edge AI",
    "VLSI & SoC Design",
  ];

  const filteredRepos = ALL_GITHUB_REPOSITORIES.filter((repo) => {
    const matchesCategory = filter === "All" || repo.category === filter;
    const matchesSearch =
      repo.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Back Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-mono text-text-muted hover:text-electric-yellow transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>&lt; Return to Cinematic Homepage</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-background-elevated border border-surface-border text-xs font-mono text-electric-yellow">
          <Terminal className="w-3.5 h-3.5 text-electric-yellow" />
          <span>GITHUB REPOSITORY INDEX // 14 PROJECTS</span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-text-primary tracking-tight">
          All GitHub{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow via-amber-300 to-[#FFFDF5]">
            Engineering Projects
          </span>
        </h1>

        <p className="font-body text-sm sm:text-base text-text-secondary max-w-3xl leading-relaxed">
          Comprehensive catalog of all repositories from{" "}
          <a
            href="https://github.com/Senthil7271"
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric-yellow underline"
          >
            github.com/Senthil7271
          </a>
          . Spanning Verilog RTL accelerators, RTOS kernel ports, RISC-V SoC physical design, and quantized neural networks.
        </p>
      </div>

      {/* Featured Deep Dives Callout */}
      <div className="p-6 rounded-2xl bg-background-secondary border border-surface-border shadow-xl mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-electric-yellow uppercase font-bold tracking-wider block mb-1">
              // FLAGSHIP CASE STUDIES
            </span>
            <h3 className="font-display font-bold text-lg text-text-primary">
              Looking for full interactive hardware pipeline simulations?
            </h3>
            <p className="text-xs text-text-secondary font-body mt-0.5">
              Explore the 4 flagship case studies with custom interactive RTOS, FPGA, KNN, and Wafer scanners.
            </p>
          </div>
          <Link
            href="/#projects"
            className="self-start md:self-auto flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-electric-yellow hover:bg-amber-400 text-black font-mono text-xs font-bold shadow-md shadow-black/40 transition-all shrink-0"
          >
            <span>Explore Flagships</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-all ${
                filter === cat
                  ? "bg-electric-yellow text-black border-electric-amber font-bold shadow-sm"
                  : "bg-background-secondary text-text-secondary border-surface-border hover:border-electric-yellow"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search repositories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-background-secondary border border-surface-border text-xs font-mono text-text-primary focus:border-electric-yellow focus:outline-none"
          />
        </div>
      </div>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((repo) => (
          <div
            key={repo.name}
            className="p-6 rounded-2xl bg-background-secondary border border-surface-border hover:border-electric-yellow/80 transition-all duration-300 flex flex-col justify-between shadow-lg group"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded bg-surface-highlight font-mono text-[10px] text-electric-yellow">
                  {repo.category}
                </span>

                <div className="flex items-center space-x-1 font-mono text-[11px] text-text-muted">
                  <Star className="w-3.5 h-3.5 text-amber-400" />
                  <span>{repo.stars}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-base text-text-primary group-hover:text-electric-yellow transition-colors mb-1">
                {repo.displayName}
              </h3>
              <div className="font-mono text-[11px] text-text-muted mb-3">
                {repo.name} &bull; {repo.language}
              </div>

              {/* Description */}
              <p className="font-body text-xs text-text-secondary leading-relaxed mb-4">
                {repo.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {repo.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-2 py-0.5 rounded bg-background-elevated border border-surface-border font-mono text-[10px] text-text-muted"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Link Action */}
            <div className="pt-3 border-t border-surface-border/60 flex items-center justify-between">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono text-electric-yellow hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Inspect GitHub Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <span className="font-mono text-[10px] text-text-muted">VERIFIED</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
