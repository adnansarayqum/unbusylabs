import { Hero } from "@/components/home/Hero";
import { WorkflowMachine } from "@/components/machine/WorkflowMachine";
import { ServicePills } from "@/components/home/ServicePills";

export function HeroMachineSection() {
  return (
    <div className="bg-ivory">
      <Hero />
      <div className="container-lab pb-10">
        <WorkflowMachine />
      </div>
      <div className="container-lab">
        <ServicePills />
      </div>
    </div>
  );
}
