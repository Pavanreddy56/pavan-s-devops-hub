import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Plus, Trash2, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import blogDevOps from "@/assets/blog-devops.jpg";
import blogAWS from "@/assets/blog-aws.jpg";
import blogK8s from "@/assets/blog-k8s.jpg";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  link: string;
}

const defaultPosts: BlogPost[] = [
  {
    title: "Building CI/CD Pipelines with Jenkins & Docker",
    description: "A comprehensive guide to setting up automated CI/CD pipelines using Jenkins and Docker for microservices deployment.",
    image: blogDevOps,
    link: "#",
  },
  {
    title: "AWS Infrastructure as Code with Terraform",
    description: "Learn how to provision and manage AWS infrastructure using Terraform, including best practices and real-world examples.",
    image: blogAWS,
    link: "#",
  },
  {
    title: "Kubernetes Deployment Strategies",
    description: "Explore different deployment strategies in Kubernetes including rolling updates, blue-green, and canary deployments.",
    image: blogK8s,
    link: "#",
  },
];

export const Blog = ({ isEditMode }: { isEditMode: boolean }) => {
  const [posts, setPosts] = useState<BlogPost[]>(defaultPosts);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const addPost = () => {
    setPosts([...posts, {
      title: "New Blog Post",
      description: "Blog post description",
      image: blogDevOps,
      link: "#",
    }]);
    setEditingIndex(posts.length);
  };

  const removePost = (index: number) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  const updatePost = (index: number, field: keyof BlogPost, value: string) => {
    const newPosts = [...posts];
    newPosts[index] = { ...newPosts[index], [field]: value };
    setPosts(newPosts);
  };

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
            Latest Blog Posts
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Insights and tutorials on DevOps and Cloud technologies
          </p>

          {isEditMode && (
            <div className="flex justify-center mb-8">
              <Button onClick={addPost} className="gap-2">
                <Plus className="h-4 w-4" />
                Add Blog Post
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="glass-card h-full overflow-hidden border-primary/20 hover:border-primary/50 transition-all">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    {isEditMode && editingIndex === index ? (
                      <Input
                        value={post.title}
                        onChange={(e) => updatePost(index, "title", e.target.value)}
                        className="mb-2"
                      />
                    ) : (
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                    )}
                    {isEditMode && editingIndex === index ? (
                      <Textarea
                        value={post.description}
                        onChange={(e) => updatePost(index, "description", e.target.value)}
                        className="min-h-[80px]"
                      />
                    ) : (
                      <CardDescription className="text-foreground/70">
                        {post.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardFooter className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(post.link, "_blank")}
                    >
                      Read More
                      <ExternalLink className="ml-2 h-4 w-4" />
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
                          onClick={() => removePost(index)}
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
