import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";
import Card3D from "../Card3D";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onBlur", // Validate on blur
  });

  const {
    handleSubmit,
    control,
    setFocus,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (errors.name) setFocus("name");
    else if (errors.email) setFocus("email");
    else if (errors.message) setFocus("message");
  }, [errors, setFocus]);

  const sendEmail = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    setLoading(true);
    try {
      await emailjs.send(
        "service_z73xts3",
        "template_fgjbg4n",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-background/95 relative overflow-hidden"
    >
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
                <form onSubmit={handleSubmit(sendEmail)} className="space-y-6">
                  <FormField
                    control={control}
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/90">
                          Name
                        </FormLabel>
                        <FormControl>
                          <motion.div whileHover={{ scale: 1.01 }}>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className={`border border-gray-300 rounded-md px-3 py-2 w-full bg-background/50 backdrop-blur-sm
                                focus:border-primary focus:ring-1 focus:ring-primary
                                ${errors.name ? "border-red-500" : ""}`}
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage>{errors.name?.message}</FormMessage>
                      </FormItem>
                    )}
                  />

                  <form onSubmit={handleSubmit(sendEmail)} noValidate>
                    <FormField
                      control={control}
                      name="email"
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email format",
                        },
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/90">
                            Email
                          </FormLabel>
                          <FormControl>
                            <motion.div whileHover={{ scale: 1.01 }}>
                              <Input
                                type="email"
                                placeholder="Your email"
                                {...field}
                                className={`border rounded-md px-3 py-2 w-full bg-background/50 backdrop-blur-sm 
                              focus:border-primary focus:ring-1 focus:ring-primary
                              ${
                                errors.email
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                              />
                            </motion.div>
                          </FormControl>
                          {errors.email && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-2 p-2 bg-red-900/80 text-red-300 border border-red-500/50 rounded-md text-sm flex items-start gap-2 backdrop-blur-md"
                            >
                              ⚠️ {errors.email.message}
                            </motion.div>
                          )}
                        </FormItem>
                      )}
                    />
                  </form>

                  <FormField
                    control={control}
                    name="message"
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/90">
                          Message
                        </FormLabel>
                        <FormControl>
                          <motion.div whileHover={{ scale: 1.01 }}>
                            <Textarea
                              placeholder="Your message"
                              className={`border border-gray-300 rounded-md px-3 py-2 w-full min-h-[150px] bg-background/50 backdrop-blur-sm
                                focus:border-primary focus:ring-1 focus:ring-primary
                                ${errors.message ? "border-red-500" : ""}`}
                              {...field}
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage>{errors.message?.message}</FormMessage>
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
