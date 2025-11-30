import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, GitFork, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const GitHubSection = ({ isEditMode }: { isEditMode: boolean }) => {
  const [githubUrl, setGithubUrl] = useState("https://github.com/Pavanreddy56");
  const [stats] = useState({
    totalRepos: 25,
    stars: 150,
    forks: 45,
  });

  const languages = [
    { name: "Python", percentage: 35, color: "tech-blue" },
    { name: "Shell", percentage: 30, color: "tech-green" },
    { name: "YAML", percentage: 20, color: "tech-purple" },
    { name: "JavaScript", percentage: 10, color: "tech-orange" },
    { name: "Go", percentage: 5, color: "tech-cyan" },
  ];

  return (
    <section id="github" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
            GitHub Activity
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Open source contributions and code repositories
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="glass-card border-tech-blue/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2 text-tech-blue">
                      <Github className="h-5 w-5" />
                      Repositories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">{stats.totalRepos}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="glass-card border-tech-orange/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2 text-tech-orange">
                      <Star className="h-5 w-5" />
                      Total Stars
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">{stats.stars}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="glass-card border-tech-purple/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2 text-tech-purple">
                      <GitFork className="h-5 w-5" />
                      Total Forks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">{stats.forks}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Languages Chart */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Most Used Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">{lang.name}</span>
                      <span className="text-muted-foreground">{lang.percentage}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-${lang.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* GitHub Profile Link */}
            <div className="text-center">
              {isEditMode ? (
                <div className="flex gap-2 max-w-md mx-auto">
                  <Input
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    className="glass-card"
                    placeholder="GitHub profile URL"
                  />
                </div>
              ) : null}
              <Button
                size="lg"
                className="mt-4 bg-primary hover:bg-primary/90"
                onClick={() => window.open(githubUrl, "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
