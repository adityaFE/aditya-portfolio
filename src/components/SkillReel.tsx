import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SkillCube from "./three/SkillCube";
import InfiniteReel from "./shared/InfiniteReel";
import { Skill } from "@/data";
import { Badge } from "@/components/ui/badge";

interface SkillReelProps {
  skills: Skill[];
  speed?: number;
}

const CARD_WIDTH = 280;
const GAP = 20;

export default function SkillReel({ skills, speed = 40 }: SkillReelProps) {
  return (
    <InfiniteReel<Skill>
      items={skills}
      speed={speed}
      cardWidth={CARD_WIDTH}
      gap={GAP}
      className="py-4"
      renderItem={(skill) => (
        <Card className="group h-full bg-card/40 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-[border-color,box-shadow] duration-300 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <SkillCube icon={skill.icon} color={skill.color} />
            <div className="mt-4 flex items-center gap-2">
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
            </div>
            <Badge
              variant="outline"
              className="mt-2 text-[10px] px-2 py-0.5 border-white/10 text-muted-foreground font-mono"
            >
              {skill.category}
            </Badge>
            {skill.description && (
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed line-clamp-2">
                {skill.description}
              </p>
            )}
          </CardContent>
        </Card>
      )}
    />
  );
}
