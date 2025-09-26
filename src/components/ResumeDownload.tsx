import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import jsPDF from 'jspdf';

const ResumeDownload = () => {
  const handleDownload = () => {
    const pdf = new jsPDF();
    
    // Set font and title
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('ABHIJITH U S', 20, 30);
    
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');
    pdf.text('AIML Student | Software Developer', 20, 40);
    
    // Contact Information
    pdf.setFontSize(12);
    pdf.text('Email: abhijith03us@gmail.com', 20, 55);
    pdf.text('Phone: +91 8714218370', 20, 65);
    pdf.text('LinkedIn: www.linkedin.com/in/a-bhijith-u-s', 20, 75);
    pdf.text('GitHub: https://github.com/A-bhi-jit-h', 20, 85);
    
    // Education Section
    pdf.setFont('helvetica', 'bold');
    pdf.text('EDUCATION', 20, 105);
    pdf.setFont('helvetica', 'normal');
    pdf.text('• B.Tech in Computer Science and Engineering (AIML)', 20, 115);
    pdf.text('  SCTCE (2022-2026) - CGPA: 6.7', 25, 125);
    pdf.text('• AISSCE (XII) - Kendriya Vidyalaya Pangode (2022) - 88.4%', 20, 135);
    pdf.text('• AISSE (X) - Kendriya Vidyalaya Pangode (2020) - 87.4%', 20, 145);
    
    // Projects Section
    pdf.setFont('helvetica', 'bold');
    pdf.text('PROJECTS', 20, 165);
    pdf.setFont('helvetica', 'normal');
    pdf.text('• ARTHAMUDHRA: Malayalam Sign Language Translator', 20, 175);
    pdf.text('• Tic-Tac-Toe Using AI with Minimax Algorithm', 20, 185);
    
    // Skills Section
    pdf.setFont('helvetica', 'bold');
    pdf.text('SKILLS', 20, 205);
    pdf.setFont('helvetica', 'normal');
    pdf.text('• Languages: Python, C, HTML, CSS, JavaScript', 20, 215);
    pdf.text('• Libraries: Pandas, Scikit-learn, Matplotlib, NumPy, OpenCV, MediaPipe', 20, 225);
    pdf.text('• Tools: Jupyter Notebook, VS Code, Git', 20, 235);
    
    // Leadership Section
    pdf.setFont('helvetica', 'bold');
    pdf.text('LEADERSHIP', 20, 255);
    pdf.setFont('helvetica', 'normal');
    pdf.text('• Event Coordinator, CSI SCT SB (2023-2025)', 20, 265);
    pdf.text('• Discord Moderator, µLearn SCTCE (2025-Present)', 20, 275);
    
    // Save the PDF
    pdf.save('Abhijith_US_Resume.pdf');
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