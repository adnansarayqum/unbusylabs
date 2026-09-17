"use client";

import clsx from "clsx";

const machineLabels = ["CLEAN", "CONNECT", "AUTOMATE", "AMPLIFY"];

export function MachineBox({ active, compact = false }: { active: boolean; compact?: boolean }) {
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

export function Spiral({ active }: { active: boolean }) {
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
