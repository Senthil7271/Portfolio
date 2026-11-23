import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { FEATURED_PROJECTS } from "@/data/portfolio";
import FpgaPipelineVisualizer from "@/components/visualizations/FpgaPipelineVisualizer";
import RtosSchedulerVisualizer from "@/components/visualizations/RtosSchedulerVisualizer";
import KnnPipelineVisualizer from "@/components/visualizations/KnnPipelineVisualizer";
import WaferInspectionVisualizer from "@/components/visualizations/WaferInspectionVisualizer";
import {
  TeslaCoilModel,
  InductionMotorModel,
  PolyphaseGeneratorModel,
  ResonantCoilModel,
} from "@/components/tesla/TeslaInventionModels";
import {
  ArrowLeft,
  Github,
  Video,
  CheckCircle2,
  Cpu,
  Layers,
  AlertTriangle,
  Lightbulb,
  FileCode,
  Share2,
  Zap,
} from "lucide-react";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return FEATURED_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = FEATURED_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Senthil Kumar Case Study`,
    description: project.abstract,
  };
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = FEATURED_PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const renderInvention = () => {
    switch (project.id) {
      case "proj-01":
        return <TeslaCoilModel active={true} />;
      case "proj-02":
        return <InductionMotorModel active={true} />;
      case "proj-03":
        return <PolyphaseGeneratorModel active={true} />;
      case "proj-04":
      default:
        return <ResonantCoilModel active={true} />;
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-surface-border/70">
        <Link
          href="/#projects"
          className="inline-flex items-center space-x-2 text-xs font-mono text-text-muted hover:text-electric-yellow transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>&lt; Back to Projects</span>
        </Link>

        <div className="flex items-center space-x-2 font-mono text-xs">
          <span className="text-text-muted">ID:</span>
          <span className="text-electric-yellow font-bold">{project.id.toUpperCase()}</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="space-y-4 mb-10">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-full bg-surface-highlight border border-surface-border text-electric-yellow">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            Verified Engineering Case Study
          </span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-text-primary leading-tight">
          {project.title}
        </h1>

        <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed">
          {project.abstract}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-electric-yellow hover:bg-amber-400 text-black font-mono text-xs font-bold shadow-md shadow-black/40 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Official GitHub Repository</span>
            </a>
          )}

          {project.demoVideoUrl && (
            <a
              href={project.demoVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-background-elevated hover:bg-surface-highlight border border-surface-border hover:border-electric-yellow text-electric-yellow font-mono text-xs transition-colors"
            >
              <Video className="w-4 h-4" />
              <span>Watch Demonstration Video</span>
            </a>
          )}
        </div>
      </div>

      {/* Verified Metrics Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {project.metrics.map((m) => (
          <div
            key={m.label}
            className="p-5 rounded-2xl bg-background-secondary border border-surface-border"
          >
            <span className="font-mono text-xs text-text-muted uppercase block mb-1">
              {m.label}
            </span>
            <div className="text-2xl font-bold font-mono text-electric-yellow mb-1">
              {m.value}
            </div>
            {m.description && (
              <p className="text-xs text-text-secondary font-body">{m.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Tesla Inspiration Banner */}
      <div className="p-6 rounded-3xl bg-background-secondary border border-surface-border shadow-xl mb-12 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-56 h-48 bg-background-elevated rounded-2xl border border-surface-border flex items-center justify-center shrink-0 overflow-hidden relative">
          {renderInvention()}
        </div>
        <div className="space-y-2 text-left font-mono">
          <div className="flex items-center space-x-2 text-xs text-electric-yellow">
            <Zap className="w-4 h-4 text-electric-yellow" />
            <span className="uppercase font-bold">TESLA HISTORICAL INSPIRATION</span>
          </div>
          <h3 className="font-display font-bold text-lg text-text-primary">
            {project.teslaInspiration.invention}
          </h3>
          <p className="font-body text-xs text-text-secondary leading-relaxed">
            {project.teslaInspiration.historicalContext}
          </p>
          <div className="p-2.5 rounded-xl bg-surface-highlight border border-surface-border text-xs text-text-primary">
            <span className="text-electric-yellow font-bold">Engineering Metaphor: </span>
            {project.teslaInspiration.metaphor}
          </div>
        </div>
      </div>

      {/* Interactive Simulation Container */}
      <div className="mb-14 space-y-3">
        <div className="flex items-center justify-between font-mono text-xs text-text-muted">
          <span>LIVE HARDWARE &amp; ARCHITECTURE INTERACTIVE SIMULATION</span>
          <span className="text-electric-yellow">INTERACTIVE CANVAS</span>
        </div>
        {project.interactiveType === "fpga-pipeline" && <FpgaPipelineVisualizer />}
        {project.interactiveType === "rtos-scheduler" && <RtosSchedulerVisualizer />}
        {project.interactiveType === "knn-pipeline" && <KnnPipelineVisualizer />}
        {project.interactiveType === "wafer-inspection" && <WaferInspectionVisualizer />}
      </div>

      {/* System Architecture & Pipeline Stages */}
      {project.pipelineStages && (
        <div className="mb-14 space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-surface-border/70">
            <Layers className="w-4 h-4 text-electric-yellow" />
            <h2 className="font-mono text-xs text-electric-yellow uppercase tracking-wider font-semibold">
              // Hardware System Architecture &amp; Pipeline Stages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.pipelineStages.map((stage, idx) => (
              <div
                key={stage.id}
                className="p-5 rounded-xl bg-background-secondary border border-surface-border space-y-2"
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-electric-yellow">STAGE 0{idx + 1}</span>
                  <span className="text-text-muted">{stage.subtitle}</span>
                </div>
                <h3 className="font-display font-bold text-sm text-text-primary">
                  {stage.name}
                </h3>
                <p className="font-body text-xs text-text-secondary leading-relaxed">
                  {stage.description}
                </p>
                <ul className="space-y-1 font-body text-xs text-text-muted pt-2 border-t border-surface-border/60">
                  {stage.details.map((d, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <span className="text-electric-yellow mt-0.5">&gt;</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Problem & Engineering Motivation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-2xl bg-background-secondary border border-surface-border space-y-3">
          <div className="flex items-center space-x-2 font-mono text-xs text-red-400">
            <AlertTriangle className="w-4 h-4" />
            <span className="uppercase font-bold">The Engineering Problem</span>
          </div>
          <p className="font-body text-sm text-text-secondary leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-background-secondary border border-surface-border space-y-3">
          <div className="flex items-center space-x-2 font-mono text-xs text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span className="uppercase font-bold">The Engineered Solution</span>
          </div>
          <p className="font-body text-sm text-text-secondary leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Hardware & Software Stacks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-2xl bg-background-secondary border border-surface-border space-y-3">
          <div className="flex items-center space-x-2 font-mono text-xs text-electric-yellow">
            <Cpu className="w-4 h-4" />
            <span className="uppercase font-bold">// Target Hardware Stack</span>
          </div>
          <ul className="space-y-2 font-mono text-xs text-text-secondary">
            {project.hardware.map((hw) => (
              <li key={hw} className="flex items-center space-x-2 p-2 rounded bg-background-elevated">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-yellow" />
                <span>{hw}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-background-secondary border border-surface-border space-y-3">
          <div className="flex items-center space-x-2 font-mono text-xs text-electric-yellow">
            <FileCode className="w-4 h-4" />
            <span className="uppercase font-bold">// Software, RTL &amp; EDA Toolchains</span>
          </div>
          <ul className="space-y-2 font-mono text-xs text-text-secondary">
            {project.software.map((sw) => (
              <li key={sw} className="flex items-center space-x-2 p-2 rounded bg-background-elevated">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-amber" />
                <span>{sw}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Implementation Details & Technical Challenges */}
      <div className="space-y-8 mb-12">
        {/* Implementation Details */}
        <div className="p-6 sm:p-8 rounded-2xl bg-background-secondary border border-surface-border space-y-4">
          <h2 className="font-display font-bold text-lg text-text-primary">
            Implementation &amp; Verification Methodology
          </h2>
          <ul className="space-y-3 font-body text-sm text-text-secondary leading-relaxed">
            {project.implementationDetails.map((detail, idx) => (
              <li key={idx} className="flex items-start space-x-2.5">
                <span className="text-electric-yellow font-mono font-bold mt-0.5">[{idx + 1}]</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Challenges */}
        <div className="p-6 sm:p-8 rounded-2xl bg-background-secondary border border-surface-border space-y-4">
          <h2 className="font-display font-bold text-lg text-text-primary">
            Key Technical Challenges Overcome
          </h2>
          <ul className="space-y-3 font-body text-sm text-text-secondary leading-relaxed">
            {project.technicalChallenges.map((ch, idx) => (
              <li key={idx} className="flex items-start space-x-2.5">
                <span className="text-electric-yellow font-mono font-bold mt-0.5">&gt;&gt;</span>
                <span>{ch}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lessons Learned */}
        <div className="p-6 sm:p-8 rounded-2xl bg-background-elevated border border-surface-border space-y-4">
          <div className="flex items-center space-x-2 text-electric-yellow">
            <Lightbulb className="w-5 h-5 text-electric-yellow" />
            <h2 className="font-display font-bold text-lg text-text-primary">
              Engineering Lessons Learned
            </h2>
          </div>
          <ul className="space-y-2.5 font-body text-sm text-text-secondary leading-relaxed">
            {project.keyTakeaways.map((lesson, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-emerald-400 mt-0.5">&bull;</span>
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/#projects"
          className="text-text-muted hover:text-electric-yellow transition-colors"
        >
          &lt; Return to Circuit Navigation
        </Link>
        <Link
          href="/projects"
          className="text-electric-yellow hover:underline"
        >
          Explore All 14 GitHub Repositories &gt;
        </Link>
      </div>
    </div>
  );
}
