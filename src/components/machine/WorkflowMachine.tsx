"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import {
  FileSpreadsheet,
  Mail,
  ListChecks,
  StickyNote,
  FileText,
  MessageSquare,
  Globe,
  Code2,
  Workflow,
  Sparkles,
  PlaySquare,
  BarChart3,
} from "lucide-react";

type IconType = React.ComponentType<{ size?: number; className?: string }>;

const inputs: { icon: IconType; label: string; rotate: string; bg: string; fg: string }[] = [
  { icon: FileText, label: "Scattered document", rotate: "-rotate-6", bg: "bg-white", fg: "text-ink/50" },
  { icon: ListChecks, label: "Task list", rotate: "rotate-3", bg: "bg-white", fg: "text-ink/70" },
  { icon: FileSpreadsheet, label: "Spreadsheet", rotate: "-rotate-2", bg: "bg-emerald-500", fg: "text-white" },
  { icon: StickyNote, label: "Later? Maybe?", rotate: "rotate-6", bg: "bg-amber-300", fg: "text-ink/70" },
  { icon: Mail, label: "Inbox", rotate: "-rotate-3", bg: "bg-cobalt", fg: "text-white" },
  { icon: MessageSquare, label: "Chat message", rotate: "rotate-2", bg: "bg-teal-400", fg: "text-white" },
];

const outputs: { icon: IconType; label: string; bg: string; fg: string }[] = [
  { icon: Globe, label: "Websites", bg: "bg-cobalt", fg: "text-white" },
  { icon: Code2, label: "Software", bg: "bg-emerald-600", fg: "text-white" },
  { icon: Workflow, label: "Automation", bg: "bg-coral", fg: "text-white" },
  { icon: Sparkles, label: "AI agents", bg: "bg-violet-500", fg: "text-white" },
  { icon: PlaySquare, label: "Content", bg: "bg-red-500", fg: "text-white" },
  { icon: BarChart3, label: "Data", bg: "bg-sky-500", fg: "text-white" },
];

const machineLabels = ["CLEAN", "CONNECT", "AUTOMATE", "AMPLIFY"];

export function WorkflowMachine() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => setIsActive(entries[0]?.isIntersecting ?? false),
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Desktop / tablet: the approved reference artwork, shown near its native
          resolution so it stays sharp rather than upscaled and blurry. */}
      <div className="hidden justify-center lg:flex" aria-hidden="true">
        <Image
          src="/images/hero-machine.png"
          alt=""
          width={990}
          height={130}
          priority
          className="h-auto w-full max-w-4xl"
        />
      </div>

      {/* Mobile / tablet-portrait vertical sequence */}
      <div className="flex flex-col items-center gap-4 lg:hidden" aria-hidden="true">
        <MobileGroup title="Messy inputs" items={inputs} />
        <MobileArrow />
        <Machine active={isActive} compact />
        <MobileArrow />
        <MobileGroup title="Useful outputs" items={outputs} />
      </div>
    </div>
  );
}

function Machine({ active, compact = false }: { active: boolean; compact?: boolean }) {
  return (
    <div
      className={clsx(
        "relative shrink-0 rounded-[28px] border border-border bg-[#F5F3EC] px-5 py-6 shadow-lg",
        compact ? "w-full max-w-xs" : "w-80"
      )}
    >
      {/* Knob on top edge */}
      <span
        aria-hidden
        className="absolute -top-2 left-1/2 h-4 w-8 -translate-x-1/2 rounded-full bg-amber-400 shadow-sm"
      />

      <div className="flex items-center justify-between">
        <span className="rounded-md bg-white px-2.5 py-1 font-display text-xs font-bold text-ink shadow-sm">
          unbusylabs
        </span>
        <span className={clsx("h-2 w-2 rounded-full bg-lime", active && "animate-pulse_dot")} />
      </div>

      <div className="mt-4 flex items-center gap-3">
        {/* Joystick + buttons */}
        <div className="flex shrink-0 flex-col items-center gap-2">
          <div className="relative flex h-10 w-6 items-end justify-center rounded-full bg-ink/10">
            <span className="mb-1 h-2 w-2 rounded-full bg-ink/60" />
          </div>
          <span className="h-2.5 w-2.5 rounded-full bg-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </div>

        {/* Window with spiral gear */}
        <div className="flex flex-1 items-center justify-center rounded-xl bg-[#0c2a4d] py-5 shadow-inner">
          <Spiral active={active} />
        </div>

        {/* Indicator labels */}
        <ul className="shrink-0 space-y-1 text-[10px] font-bold tracking-wide text-ink/60">
          {machineLabels.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Spiral({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width="40"
      height="40"
      className={clsx(active && "animate-spin_slow")}
      fill="none"
    >
      <path
        d="M24 4a20 20 0 1 1-14.1 5.9"
        stroke="#C8FF3D"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M24 12a12 12 0 1 1-8.5 3.5"
        stroke="#FF6B5E"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M24 20a4 4 0 1 1-2.8 1.2" stroke="#3563FF" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function MobileGroup({
  title,
  items,
}: {
  title: string;
  items: { icon: IconType; label: string; bg: string; fg: string }[];
}) {
  return (
    <div className="w-full rounded-xl border border-border bg-[#12141a] p-4">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/50">
        {title}
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {items.map((item) => (
          <div
            key={item.label}
            className={clsx("flex h-14 flex-col items-center justify-center rounded-lg", item.bg)}
          >
            <item.icon size={18} className={item.fg} />
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileArrow() {
  return (
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden>
      <path d="M8 0v20M2 15l6 7 6-7" stroke="#667085" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
