import { IconType } from "react-icons";
import { SiGithub, SiLinkedin, SiLeetcode, SiInstagram } from "react-icons/si";

export interface SocialLink {
  name: string;
  icon: IconType;
  url: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/adityaFE",
    color: "hover:text-[#333333]",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/aditya-anand-4a843516a/",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/aditya_2021/",
    color: "hover:text-[#FFA116]",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://www.instagram.com/adiiiii.exe/",
    color: "hover:text-[#E4405F]",
  },
];
