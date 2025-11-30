import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Edit3, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
}

const defaultProjects: Project[] = [
  {
    title: "AWS Infrastructure Automation",
    description: "Automated AWS infrastructure deployment using Terraform and CloudFormation. Implemented VPC, EC2, RDS, and S3 with security best practices.",
    techStack: ["Terraform", "AWS", "CloudFormation", "Python"],
    githubLink: "https://github.com/Pavanreddy56",
  },
  {
    title: "Kubernetes CI/CD Pipeline",
    description: "Built end-to-end CI/CD pipeline using Jenkins, Docker, and Kubernetes on EKS. Automated testing, building, and deployment of microservices.",
    techStack: ["Jenkins", "Docker", "Kubernetes", "EKS", "Helm"],
    githubLink: "https://github.com/Pavanreddy56",
  },
  {
    title: "Ansible Configuration Management",
    description: "Developed Ansible playbooks for automated server configuration, application deployment, and infrastructure management across RHEL and CentOS systems.",
    techStack: ["Ansible", "Linux", "Shell Script", "YAML"],
    githubLink: "https://github.com/Pavanreddy56",
  },
  {
    title: "Monitoring & Logging Solution",
    description: "Implemented comprehensive monitoring using Prometheus, Grafana, and ELK stack. Set up alerts and dashboards for proactive issue detection.",
    techStack: ["Prometheus", "Grafana", "ELK", "CloudWatch"],
    githubLink: "https://github.com/Pavanreddy56",
  },
];

export const Projects = ({ isEditMode }: { isEditMode: boolean }) => {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const addProject = () => {
    setProjects([...projects, {
      title: "New Project",
      description: "Project description",
      techStack: ["Tech1", "Tech2"],
      githubLink: "https://github.com",
    }]);
    setEditingIndex(projects.length);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const updateProject = (index: number, field: keyof Project, value: any) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setProjects(newProjects);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Real-world DevOps implementations and solutions
          </p>

          {isEditMode && (
            <div className="flex justify-center mb-8">
              <Button onClick={addProject} className="gap-2">
                <Plus className="h-4 w-4" />
                Add Project
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="glass-card h-full border-primary/20 hover:border-primary/50 transition-all">
                  <CardHeader>
                    {isEditMode && editingIndex === index ? (
                      <Input
                        value={project.title}
                        onChange={(e) => updateProject(index, "title", e.target.value)}
                        className="text-xl font-bold mb-2"
                      />
                    ) : (
                      <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                    )}
                    {isEditMode && editingIndex === index ? (
                      <Textarea
                        value={project.description}
                        onChange={(e) => updateProject(index, "description", e.target.value)}
                        className="min-h-[100px]"
                      />
                    ) : (
                      <CardDescription className="text-foreground/80">
                        {project.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Button>
                    {isEditMode && (
                      <>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setEditingIndex(editingIndex === index ? null : index)}
                        >
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => removeProject(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
