import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiLeetcode, SiInstagram } from "react-icons/si";
import Card3D from "./Card3D";

const socialLinks = [
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/yourusername",
    color: "hover:text-[#333333]",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://linkedin.com/in/yourusername",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/yourusername",
    color: "hover:text-[#FFA116]",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://instagram.com/yourusername",
    color: "hover:text-[#E4405F]",
  },
];

export default function SocialButtons() {
  return (
    <motion.div 
      className="flex gap-4 justify-center mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {socialLinks.map((social, index) => (
        <Card3D 
          key={social.name}
          className="relative group"
        >
          <motion.a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              block p-4 backdrop-blur-sm bg-background/30 rounded-xl
              transform transition-all duration-300
              ${social.color}
            `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{
              rotateY: {
                duration: 0.6,
                ease: "easeOut",
              }
            }}
          >
            <social.icon className="w-6 h-6 transition-colors duration-300" />
            <motion.span
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                opacity-0 group-hover:opacity-100 text-sm text-foreground/70
                transition-opacity duration-300 whitespace-nowrap"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
            >
              {social.name}
            </motion.span>
          </motion.a>
        </Card3D>
      ))}
    </motion.div>
  );
}
