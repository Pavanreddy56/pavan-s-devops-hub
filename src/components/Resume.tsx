import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const defaultResumeContent = `PAVAN REDDY CHEEDETI
DevOps Engineer

Contact:
📞 +91 7337531523
✉️ cpreddy.devops@gmail.com
📍 Hyderabad, TG – 501505

Professional Summary:
A Cloud enthusiastic team player with 2 years of experience in DevOps/Cloud Engineering. Expertise in AWS, Docker, Kubernetes, Jenkins, Terraform, and automation.

Experience:
DevOps Engineer - Cognizant (Nov 2023 – Sep 2025)
• Designed and deployed AWS infrastructure using CloudFormation
• Implemented CI/CD pipelines with Jenkins, Git, Maven, and SonarQube
• Containerized and deployed microservices using Docker and Kubernetes
• Automated infrastructure provisioning with Terraform and Ansible
• Integrated monitoring solutions with ELK stack and CloudWatch

Key Skills:
• Cloud: AWS (EC2, VPC, RDS, S3, EKS, CloudFormation)
• Containers: Docker, Kubernetes, Helm
• CI/CD: Jenkins, Maven, Git, SonarQube
• IaC: Terraform, Ansible, CloudFormation
• Scripting: Python, Shell, Groovy
• Monitoring: Prometheus, Grafana, CloudWatch
• OS: RHEL, CentOS, Ubuntu

Education:
Bachelor's Degree - ANURAG University (CVSR)
Graduated: March 2023, CGPA: 3.5/5

Certifications:
• Cloud Training Program Certification
• Employability Skills Training (Mahindra PRIDE)`;

export const Resume = ({ isEditMode }: { isEditMode: boolean }) => {
  const [resumeContent, setResumeContent] = useState(defaultResumeContent);

  const handleDownload = () => {
    // Create a text file with resume content
    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Pavan_Reddy_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
            Resume
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Download or view my professional experience
          </p>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl">Professional Resume</CardTitle>
                <Button onClick={handleDownload} className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </CardHeader>
              <CardContent>
                {isEditMode ? (
                  <Textarea
                    value={resumeContent}
                    onChange={(e) => setResumeContent(e.target.value)}
                    className="min-h-[600px] font-mono text-sm glass-card"
                  />
                ) : (
                  <div className="bg-background/50 p-8 rounded-lg border border-border">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-foreground/90">
                      {resumeContent}
                    </pre>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Button size="lg" onClick={handleDownload} className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                Download Full Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
