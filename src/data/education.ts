export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Technology",
    institution: "Heritage Institute of Technology",
    period: "2017 - 2021",
    description:
      "Bachelor's degree in Information Technology with a focus on Web Development",
  },
  {
    degree: "High School",
    institution: "Don Bosco Academy",
    period: "2014 - 2016",
    description: "Completed High School with a focus on Science and Maths",
  },
];
