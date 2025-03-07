import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertContactSchema } from "@shared/schema";
import { Send, Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";
import Card3D from "../Card3D";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendEmail = async (data: { name: any; email: any; message: any; }) => {
    setLoading(true);
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      };

      await emailjs.send(
        "service_z73xts3",
        "template_fgjbg4n",
        templateParams,
        "lj8yOkXWBUcPtVU00"
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Get in Touch
          </h2>

          <Card3D className="max-w-2xl mx-auto">
            <div className="p-8 relative">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(sendEmail)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/90">Name</FormLabel>
                        <FormControl>
                          <motion.div whileHover={{ scale: 1.01 }}>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="bg-background/50 backdrop-blur-sm border-primary/10 focus:border-primary/30"
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/90">Email</FormLabel>
                        <FormControl>
                          <motion.div whileHover={{ scale: 1.01 }}>
                            <Input 
                              type="email" 
                              placeholder="Your email" 
                              {...field} 
                              className="bg-background/50 backdrop-blur-sm border-primary/10 focus:border-primary/30"
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/90">Message</FormLabel>
                        <FormControl>
                          <motion.div whileHover={{ scale: 1.01 }}>
                            <Textarea
                              placeholder="Your message"
                              className="min-h-[150px] bg-background/50 backdrop-blur-sm border-primary/10 focus:border-primary/30"
                              {...field}
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.div
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-primary/90 hover:bg-primary text-white"
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4 mr-2" />
                      )}
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </section>
  );
}
