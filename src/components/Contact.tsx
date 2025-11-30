import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Contact = ({ isEditMode }: { isEditMode: boolean }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactEmail, setContactEmail] = useState("cpreddy.devops@gmail.com");
  const [linkedinUrl, setLinkedinUrl] = useState("https://www.linkedin.com/in/pavan-reddy-cheedeti-918237281");
  const [githubUrl, setGithubUrl] = useState("https://github.com/Pavanreddy56");
  const [instagramUrl, setInstagramUrl] = useState("https://instagram.com");
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the email
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  const socialLinks = [
    { icon: Mail, label: "Email", value: contactEmail, href: `mailto:${contactEmail}`, editable: "contactEmail" },
    { icon: Linkedin, label: "LinkedIn", value: linkedinUrl, href: linkedinUrl, editable: "linkedinUrl" },
    { icon: Github, label: "GitHub", value: githubUrl, href: githubUrl, editable: "githubUrl" },
    { icon: Instagram, label: "Instagram", value: instagramUrl, href: instagramUrl, editable: "instagramUrl" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Let's discuss your next DevOps project
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="glass-card"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="glass-card"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="min-h-[150px] glass-card"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      {isEditMode ? (
                        <div className="flex items-center gap-2">
                          <social.icon className="h-5 w-5 text-primary shrink-0" />
                          <Input
                            value={social.value}
                            onChange={(e) => {
                              if (social.editable === "contactEmail") setContactEmail(e.target.value);
                              if (social.editable === "linkedinUrl") setLinkedinUrl(e.target.value);
                              if (social.editable === "githubUrl") setGithubUrl(e.target.value);
                              if (social.editable === "instagramUrl") setInstagramUrl(e.target.value);
                            }}
                            className="glass-card"
                          />
                        </div>
                      ) : (
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-4 rounded-lg glass-card hover:bg-primary/10 transition-colors group"
                        >
                          <social.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold">{social.label}</p>
                            <p className="text-sm text-muted-foreground truncate">
                              {social.label === "Email" ? social.value : `@${social.label}`}
                            </p>
                          </div>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardContent className="pt-6">
                  <p className="text-center text-lg">
                    Available for freelance projects and full-time opportunities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
