import { useState } from "react";
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
import { Send, Loader2, Mail, MapPin, MessageSquare, CheckCircle2 } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const sendEmail = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Unable to deliver message right now. Please email directly at adityaanandofficial@gmail.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden scroll-mt-24"
      aria-label="Contact and Inquiries"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] font-mono tracking-[0.25em] uppercase mb-4 shadow-[0_0_12px_rgba(168,85,247,0.15)]">
            <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
            Dispatch // Open Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground [text-wrap:balance]">
            Get in Touch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto [text-wrap:balance]">
            Have a project in mind, an engineering opportunity, or just want to chat frontend and web tech? Reach out below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-2xl bg-card/40 border border-white/10 backdrop-blur-md p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground [text-wrap:balance]">
              Contact Information
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm open to discussing full-time engineering roles, technical consulting, architecture reviews, and high-impact web initiatives.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <a
                href="mailto:adityaanandofficial@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-[background-color,border-color,color] duration-200 text-sm text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                aria-label="Email Aditya at adityaanandofficial@gmail.com"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary" aria-hidden="true">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs sm:text-sm truncate">
                  adityaanandofficial@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400" aria-hidden="true">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs sm:text-sm">
                  Hyderabad / Bengaluru, India
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span>Typical response time: Within <span className="tabular-nums">24</span> hours</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-2xl bg-card/40 border border-white/10 backdrop-blur-md p-8"
          >
            {isSuccess ? (
              <div className="text-center py-12 space-y-4" role="status" aria-live="polite">
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Message Dispatched!</h4>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Thank you for writing. I have received your message and will reply via email shortly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={handleSubmit(sendEmail)} className="space-y-5" noValidate>
                  <FormField
                    control={control}
                    name="name"
                    rules={{ required: "Please enter your name" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="contact-name" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                          Your Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="contact-name"
                            autoComplete="name"
                            placeholder="Alex Morgan"
                            {...field}
                            className="bg-background/50 border-white/10 focus:border-primary rounded-xl h-11 text-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="email"
                    rules={{
                      required: "Please enter your email",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="contact-email" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="contact-email"
                            type="email"
                            inputMode="email"
                            autoComplete="email"
                            spellCheck={false}
                            placeholder="alex@company.com"
                            {...field}
                            className="bg-background/50 border-white/10 focus:border-primary rounded-xl h-11 text-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="message"
                    rules={{ required: "Please enter your message" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="contact-message" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            id="contact-message"
                            placeholder="Tell me about your project, timeline, or open role…"
                            className="bg-background/50 border-white/10 focus:border-primary rounded-xl min-h-[140px] text-sm resize-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11 rounded-xl shadow-lg shadow-primary/20 transition-[opacity,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                    disabled={loading}
                    aria-label={loading ? "Sending your message…" : "Send message"}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                        Sending Message…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
