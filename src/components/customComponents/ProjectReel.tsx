import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import InfiniteReel from "../shared/InfiniteReel";
import { Project } from "@/data";

interface ProjectReelProps {
  projects: Project[];
  speed?: number;
}

const CARD_WIDTH = 320;
const GAP = 24;

export default function ProjectReel({ projects, speed = 40 }: ProjectReelProps) {
  return (
    <InfiniteReel<Project>
      items={projects}
      speed={speed}
      cardWidth={CARD_WIDTH}
      gap={GAP}
      className="py-10"
      renderItem={(project) => (
        <Card className="h-full bg-card/80 backdrop-blur border-primary/20">
          <CardContent className="p-5 flex flex-col h-full">
            {/* Image */}
            <motion.div
              className="overflow-hidden rounded-md"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-semibold mt-4">{project.title}</h3>

            {/* Description */}
            <p className="text-sm text-foreground/70 mt-2 line-clamp-3">
              {project.description}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-1 mt-3">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Actions */}
            <div className="flex gap-2 pt-4">
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Live
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    />
  );
}
