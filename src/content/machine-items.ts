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

export type IconType = React.ComponentType<{ size?: number; className?: string }>;

export const messyInputs: { icon: IconType; label: string; rotate: string; bg: string; fg: string }[] = [
  { icon: FileText, label: "Scattered document", rotate: "-rotate-6", bg: "bg-white", fg: "text-ink/50" },
  { icon: ListChecks, label: "Task list", rotate: "rotate-3", bg: "bg-white", fg: "text-ink/70" },
  { icon: FileSpreadsheet, label: "Spreadsheet", rotate: "-rotate-2", bg: "bg-emerald-500", fg: "text-white" },
  { icon: StickyNote, label: "Later? Maybe?", rotate: "rotate-6", bg: "bg-amber-300", fg: "text-ink/70" },
  { icon: Mail, label: "Inbox", rotate: "-rotate-3", bg: "bg-cobalt", fg: "text-white" },
  { icon: MessageSquare, label: "Chat message", rotate: "rotate-2", bg: "bg-teal-400", fg: "text-white" },
];

export const usefulOutputs: { icon: IconType; label: string; bg: string; fg: string }[] = [
  { icon: Globe, label: "Websites", bg: "bg-cobalt", fg: "text-white" },
  { icon: Code2, label: "Software", bg: "bg-emerald-600", fg: "text-white" },
  { icon: Workflow, label: "Automation", bg: "bg-coral", fg: "text-white" },
  { icon: Sparkles, label: "AI agents", bg: "bg-violet-500", fg: "text-white" },
  { icon: PlaySquare, label: "Content", bg: "bg-red-500", fg: "text-white" },
  { icon: BarChart3, label: "Data", bg: "bg-sky-500", fg: "text-white" },
];
