import { useState } from "react";
import { Download, Mail, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpeg";

export const Hero = ({ isEditMode }: { isEditMode: boolean }) => {
  const [name, setName] = useState("PAVAN REDDY CHEEDETI");
  const [title, setTitle] = useState("DevOps Engineer | AWS | Cloud | Automation");
  const [bio, setBio] = useState(
    "A Cloud enthusiastic team player with 2 years of experience in DevOps/Cloud Engineering. Expertise in AWS, Docker, Kubernetes, Jenkins, Terraform, and automation. Passionate about building scalable cloud infrastructure and implementing CI/CD pipelines."
  );

  const handleDownloadResume = () => {
    // In a real implementation, this would download an actual PDF
    const link = document.createElement("a");
    link.href = "#resume";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-primary animate-glow">
              <img
                src={profilePhoto}
                alt="Pavan Reddy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {isEditMode ? (
            <div className="space-y-4 max-w-2xl mx-auto">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-center text-2xl font-bold glass-card"
              />
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-center text-xl glass-card"
              />
              <Textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="text-center glass-card min-h-[120px]"
              />
            </div>
          ) : (
            <>
              <h1 className="text-5xl md:text-7xl font-bold glow-text animate-float">
                {name}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold">
                {title}
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                {bio}
              </p>
            </>
          )}

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="glass-card hover:bg-primary/10"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};
