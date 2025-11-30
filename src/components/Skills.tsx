import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

const defaultSkills = [
  { name: "AWS", color: "tech-orange" },
  { name: "Docker", color: "tech-cyan" },
  { name: "Kubernetes", color: "tech-blue" },
  { name: "Jenkins", color: "tech-purple" },
  { name: "Terraform", color: "tech-purple" },
  { name: "Linux", color: "tech-green" },
  { name: "GitHub", color: "tech-blue" },
  { name: "CI/CD", color: "tech-cyan" },
  { name: "Ansible", color: "tech-pink" },
  { name: "Python", color: "tech-blue" },
  { name: "Shell Scripting", color: "tech-green" },
  { name: "CloudFormation", color: "tech-orange" },
  { name: "EKS", color: "tech-cyan" },
  { name: "Monitoring", color: "tech-purple" },
  { name: "MySQL", color: "tech-blue" },
  { name: "PostgreSQL", color: "tech-cyan" },
];

export const Skills = ({ isEditMode }: { isEditMode: boolean }) => {
  const [skills, setSkills] = useState(defaultSkills);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim()) {
      const colors = ["tech-blue", "tech-cyan", "tech-green", "tech-purple", "tech-pink", "tech-orange"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setSkills([...skills, { name: newSkill, color: randomColor }]);
      setNewSkill("");
    }
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
            Technical Skills
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Technologies and tools I work with
          </p>

          {isEditMode && (
            <div className="flex gap-2 mb-8 max-w-md mx-auto">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add new skill"
                onKeyPress={(e) => e.key === "Enter" && addSkill()}
                className="glass-card"
              />
              <Button onClick={addSkill} size="icon" className="shrink-0">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}

          <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className={`relative glass-card px-6 py-3 rounded-full bg-${skill.color}/10 border-${skill.color}/30 border-2 shadow-lg hover:shadow-xl transition-all`}
              >
                <span className={`text-${skill.color} font-semibold`}>
                  {skill.name}
                </span>
                {isEditMode && (
                  <button
                    onClick={() => removeSkill(index)}
                    className="absolute -top-2 -right-2 bg-destructive rounded-full p-1"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
