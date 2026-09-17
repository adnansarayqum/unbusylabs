import Image from "next/image";

export function WorkflowMachine() {
  return (
    <div className="hidden justify-center lg:flex" aria-hidden="true">
      {/* The approved reference artwork, shown near its native resolution so it
          stays sharp rather than upscaled and blurry. Mobile gets its own
          illustrated sequence (see HeroFunnel / MachineOutputs) since the
          source image doesn't read legibly at that size. */}
      <Image
        src="/images/hero-machine.png"
        alt=""
        width={1632}
        height={186}
        priority
        className="h-auto w-full max-w-6xl"
      />
    </div>
  );
}
