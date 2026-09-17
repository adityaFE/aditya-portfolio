import SkillReel from "../SkillReel";
import { skills } from "@/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <SkillReel skills={skills} speed={40} />

        {/* Background gradient orbs */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </section>
  );
}
