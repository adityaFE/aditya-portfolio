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
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Send, Sparkles } from "lucide-react";
import Card3D from "../Card3D";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

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
                <form onSubmit={form.handleSubmit((data) => mutate(data))} className="space-y-6">
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-primary/90 hover:bg-primary text-white" 
                      disabled={isPending}
                    >
                      {isPending ? (
                        <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4 mr-2" />
                      )}
                      {isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </Form>

              {/* Decorative elements */}
              <div className="absolute -z-10 inset-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>

      {/* Background animation */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        />
      </div>
    </section>
  );
}