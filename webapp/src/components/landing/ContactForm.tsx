import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Building2, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "support@bonusvault.app",
    href: "mailto:support@bonusvault.app",
  },
  {
    icon: Building2,
    label: "Company",
    value: "Horizon Labs LLC",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Typically within 24 hours",
    href: null,
  },
];

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (_values: ContactFormValues) => {
    // Simulate sending
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <section className="py-20 md:py-28 px-4 relative">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-primary text-xs font-semibold uppercase tracking-wider font-sans text-center">
          Contact
        </p>

        {/* Headline */}
        <h2 className="mt-3 text-3xl md:text-5xl font-bold font-display text-foreground text-center leading-tight">
          Get in Touch
        </h2>

        <p className="mt-4 text-muted-foreground text-center max-w-md mx-auto font-sans text-lg">
          Questions about Bonus Vault? We&apos;d love to hear from you.
        </p>

        {/* Two-column layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-display font-semibold text-xl text-foreground">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-sans uppercase tracking-wide">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-foreground font-sans hover:text-primary transition-colors duration-200 mt-0.5 block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground font-sans mt-0.5">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Decorative card */}
            <div className="mt-8 p-5 rounded-xl bg-card border border-border/50 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                We read every message personally and strive to provide helpful, thoughtful
                responses. No bots, no canned replies.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-foreground font-sans">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="bg-secondary/50 border-border/60 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60 font-sans"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-sans text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-foreground font-sans">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              className="bg-secondary/50 border-border/60 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60 font-sans"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-sans text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-foreground font-sans">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What's this about?"
                            className="bg-secondary/50 border-border/60 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60 font-sans"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-sans text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-foreground font-sans">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us how we can help..."
                            rows={5}
                            className="bg-secondary/50 border-border/60 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/60 font-sans resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-sans text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_32px_rgba(74,222,128,0.35)] transition-all duration-300"
                    disabled={form.formState.isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
