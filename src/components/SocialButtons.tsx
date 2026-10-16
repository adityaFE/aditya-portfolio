import { motion } from "framer-motion";
import { socialLinks } from "@/data";

export default function SocialButtons() {
  return (
    <motion.div
      className="flex items-center gap-3 justify-center mt-8"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-xl bg-card/40 hover:bg-white/10 border border-white/10 hover:border-primary/40 text-muted-foreground hover:text-foreground backdrop-blur-md transition-[background-color,border-color,color] duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Aditya's ${social.name} profile (opens in new tab)`}
        >
          <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none px-2 py-0.5 rounded-md bg-background/90 border border-white/10 text-[11px] font-mono text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg" aria-hidden="true">
            {social.name}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
}
