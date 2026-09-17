import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SkillCube from "./three/SkillCube";
import { Progress } from "@/components/ui/progress";
import InfiniteReel from "./shared/InfiniteReel";
import { Skill } from "@/data";

interface SkillReelProps {
  skills: Skill[];
  speed?: number;
}

const CARD_WIDTH = 260;
const GAP = 24;

export default function SkillReel({ skills, speed = 60 }: SkillReelProps) {
  return (
    <InfiniteReel<Skill>
      items={skills}
      speed={speed}
      cardWidth={CARD_WIDTH}
      gap={GAP}
      className="py-8 bg-background"
      renderItem={(skill) => (
        <Card className="h-full bg-background/80 border-primary/30 shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6 flex flex-col items-center">
            <SkillCube icon={skill.icon} color={skill.color} />
            <h3 className="text-lg font-semibold mt-4 bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent text-center">
              {skill.name}
            </h3>
            {skill.description && (
              <p className="text-xs text-foreground/70 mt-2 text-center">
                {skill.description}
              </p>
            )}
            {typeof skill.level === "number" && (
              <div className="w-full mt-4">
                <Progress value={skill.level} className="h-2 bg-primary/10" />
                <p className="text-xs text-foreground/60 mt-1 text-center">
                  {skill.level}% proficiency
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    />
  );
}
