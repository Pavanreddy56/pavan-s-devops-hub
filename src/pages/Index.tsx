import { useState } from "react";
import { Edit3, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { GitHubSection } from "@/components/GitHubSection";
import { Blog } from "@/components/Blog";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { toast } = useToast();

  const toggleEditMode = () => {
    if (isEditMode) {
      toast({
        title: "Changes Saved",
        description: "Your portfolio has been updated successfully.",
      });
    }
    setIsEditMode(!isEditMode);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Edit Mode Toggle */}
      <Button
        onClick={toggleEditMode}
        className="fixed bottom-8 right-8 z-50 rounded-full w-14 h-14 shadow-lg animate-glow"
        size="icon"
      >
        {isEditMode ? <Save className="h-5 w-5" /> : <Edit3 className="h-5 w-5" />}
      </Button>

      <Hero isEditMode={isEditMode} />
      <Skills isEditMode={isEditMode} />
      <Projects isEditMode={isEditMode} />
      <GitHubSection isEditMode={isEditMode} />
      <Blog isEditMode={isEditMode} />
      <Resume isEditMode={isEditMode} />
      <Contact isEditMode={isEditMode} />
      <Footer />
    </div>
  );
};

export default Index;
