"use client";

import { useEffect, useRef, useState } from "react";
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

const inputs = [
  { icon: FileSpreadsheet, label: "Spreadsheet" },
  { icon: Mail, label: "Inbox" },
  { icon: ListChecks, label: "Task list" },
  { icon: StickyNote, label: "Sticky note" },
  { icon: FileText, label: "Scattered document" },
  { icon: MessageSquare, label: "Chat message" },
];

const outputs = [
  { icon: Globe, label: "Websites", color: "bg-cobalt" },
  { icon: Code2, label: "Software", color: "bg-ink" },
  { icon: Workflow, label: "Automation", color: "bg-emerald-600" },
  { icon: Sparkles, label: "AI agents", color: "bg-violet-600" },
  { icon: PlaySquare, label: "Content", color: "bg-coral" },
  { icon: BarChart3, label: "Data", color: "bg-amber-500" },
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
    <div ref={sectionRef} aria-hidden="true">
      {/* Desktop / tablet horizontal machine */}
      <div className="hidden lg:block">
        <div className="relative flex items-center gap-6 rounded-xl2 border border-border bg-white/60 p-8">
          <ConveyorLane items={inputs} active={isActive} direction="in" />
          <Machine active={isActive} />
          <ConveyorLane items={outputs} active={isActive} direction="out" />
        </div>
      </div>

      {/* Mobile / tablet-portrait vertical sequence */}
      <div className="flex flex-col items-center gap-4 lg:hidden">
        <MobileGroup title="Messy inputs" items={inputs} />
        <MobileArrow />
        <Machine active={isActive} compact />
        <MobileArrow />
        <MobileGroup title="Useful outputs" items={outputs} />
      </div>
    </div>
  );
}

function ConveyorLane({
  items,
  active,
  direction,
}: {
  items: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string }[];
  active: boolean;
  direction: "in" | "out";
}) {
  return (
    <div className="flex-1">
      <div className="relative overflow-hidden rounded-xl border border-border bg-ivory p-4">
        <div
          className={clsx(
            "flex gap-3",
            active && "animate-conveyor",
            direction === "out" && "flex-row-reverse"
          )}
        >
          {items.map((item) => (
            <div
              key={item.label}
              className="flex h-16 w-16 shrink-0 flex-col items-center justify-center gap-1 rounded-lg border border-border bg-white shadow-sm"
            >
              <item.icon size={20} className="text-ink/70" />
            </div>
          ))}
        </div>
        <div className="mt-3 h-2 rounded-full bg-border" />
      </div>
    </div>
  );
}

function Machine({ active, compact = false }: { active: boolean; compact?: boolean }) {
  return (
    <div
      className={clsx(
        "relative shrink-0 rounded-xl2 border border-border bg-ink px-6 py-6 text-white",
        compact ? "w-full max-w-xs" : "w-72"
      )}
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-bold">unbusylabs</span>
        <span
          className={clsx(
            "h-2 w-2 rounded-full bg-lime",
            active && "animate-pulse_dot"
          )}
        />
      </div>

      <div className="mt-4 flex items-center justify-center gap-3 rounded-lg bg-white/5 py-6">
        <Gear active={active} reverse={false} />
        <Gear active={active} reverse />
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] font-semibold tracking-wide text-white/70">
        {machineLabels.map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ul>
    </div>
  );
}

function Gear({ active, reverse }: { active: boolean; reverse: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      className={clsx(
        "text-lime",
        active && (reverse ? "animate-spin_slow_reverse" : "animate-spin_slow")
      )}
      fill="none"
    >
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <path
        d="M12 2v3M12 19v3M22 12h-3M5 12H2M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12M19.07 19.07l-2.12-2.12M7.05 7.05 4.93 4.93"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MobileGroup({
  title,
  items,
}: {
  title: string;
  items: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string }[];
}) {
  return (
    <div className="w-full rounded-xl border border-border bg-white p-4">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate">
        {title}
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex h-14 flex-col items-center justify-center rounded-lg border border-border bg-ivory"
          >
            <item.icon size={18} className="text-ink/70" />
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
