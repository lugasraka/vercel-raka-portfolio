import { Hero } from "@/app/(sections)/hero";
import { About } from "@/app/(sections)/about";
import { Experience } from "@/app/(sections)/experience";
import { Projects } from "@/app/(sections)/projects";
import { Education } from "@/app/(sections)/education";
import { Contact } from "@/app/(sections)/contact";
import { experience } from "@/lib/experience";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl border-x border-border-subtle/60">
      <Hero />
      <About />
      <Experience items={experience} />
      <Projects items={projects} />
      <Education />
      <Contact />
    </div>
  );
}
