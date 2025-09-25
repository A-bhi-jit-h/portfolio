import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ResumeDownload = () => {
  const handleDownload = () => {
    // In a real implementation, you would link to your actual resume PDF
    // For now, this creates a simple text file as a placeholder
    const resumeContent = `
ABHIJITH U S
AIML Student | Software Developer

Email: abhijith03us@gmail.com
Phone: +91 8714218370
LinkedIn: linkedin.com/in/abhijithus
GitHub: github.com/abhijithus

EDUCATION
• B.Tech in Computer Science and Engineering (AIML) - SCTCE (2022-2026) - CGPA: 6.7
• AISSCE (XII) - Kendriya Vidyalaya Pangode (2022) - 88.4%
• AISSE (X) - Kendriya Vidyalaya Pangode (2020) - 87.4%

PROJECTS
• ARTHAMUDHRA: Malayalam Sign Language Translator
• Tic-Tac-Toe Using AI with Minimax Algorithm

SKILLS
• Languages: Python, C, HTML, CSS, JavaScript
• Libraries: Pandas, Scikit-learn, Matplotlib, NumPy, OpenCV, MediaPipe
• Tools: Jupyter Notebook, VS Code, Git

LEADERSHIP
• Event Coordinator, CSI SCT SB (2023-2025)
• Discord Moderator, µLearn SCTCE (2025-Present)
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abhijith_US_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="py-12 bg-muted/10">
      <div className="container mx-auto px-6">
        <Card className="glass-card border-border max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Download My Resume
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Get a comprehensive overview of my education, projects, skills, and experience 
              in a downloadable format.
            </p>
            
            <Button 
              onClick={handleDownload}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              PDF format • Last updated: January 2025
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResumeDownload;