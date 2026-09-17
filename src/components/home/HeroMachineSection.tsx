import { Hero } from "@/components/home/Hero";
import { WorkflowMachine } from "@/components/machine/WorkflowMachine";
import { ServicePills } from "@/components/home/ServicePills";

export function HeroMachineSection() {
  return (
    <div className="bg-ivory">
      <Hero />
      <div className="container-lab pb-4">
        <WorkflowMachine />
      </div>
      <div className="container-lab hidden pb-4 lg:block">
        <ServicePills />
      </div>
    </div>
  );
}
