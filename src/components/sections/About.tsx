import { motion } from "framer-motion";
import Card3D from "../Card3D";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
            About Me
          </h2>

          <Card3D className="bg-card/30">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                    Passionate Frontend Developer
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    With over 3 years of experience in frontend development, I
                    specialize in building scalable, performant web applications
                    using modern technologies like React, TypeScript, and
                    Three.js. I'm passionate about creating exceptional user
                    experiences and writing clean, maintainable code.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mt-4">
                    I enjoy working on challenging projects that push the
                    boundaries of what's possible on the web, while maintaining
                    a strong focus on accessibility and best practices.
                  </p>
                </motion.div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Frontend Architecture",
                      description: "Designing scalable and maintainable frontend architectures",
                    },
                    {
                      title: "Performance Optimization",
                      description: "Optimizing web applications for speed and efficiency",
                    },
                    {
                      title: "UI/UX Development",
                      description: "Creating beautiful and intuitive user interfaces",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    >
                      <Card3D className="bg-background/30 p-4">
                        <h4 className="font-medium mb-2 bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
                          {item.title}
                        </h4>
                        <p className="text-sm text-foreground/70">
                          {item.description}
                        </p>
                      </Card3D>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>

      {/* Background elements */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
}