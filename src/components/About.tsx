import { User, MapPin, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Academic Year', value: '2022-2026' },
    { icon: Award, label: 'Current CGPA', value: '6.7' },
    { icon: User, label: 'Projects Built', value: '5+' },
    { icon: MapPin, label: 'Location', value: 'Kerala, India' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know me better and learn about my journey in tech
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Passionate about AI/ML and creating intelligent solutions
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm currently pursuing B.Tech in Computer Science and Engineering with specialization 
                  in Artificial Intelligence and Machine Learning at Sree Chitra Tirunal College of Engineering. 
                  My journey in tech began with a fascination for how machines can learn and solve complex problems.
                </p>
                
                <p>
                  I have hands-on experience in developing machine learning applications, including a 
                  Malayalam Sign Language Translator and AI-powered games. I'm particularly interested 
                  in computer vision, natural language processing, and developing accessible technology solutions.
                </p>
                
                <p>
                  When I'm not coding, you'll find me organizing technical events as an Event Coordinator 
                  for CSI SCT SB, moderating tech communities, or exploring the latest advancements in AI. 
                  I believe in continuous learning and sharing knowledge with the community.
                </p>
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="glass-card p-8 text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                  <User size={80} className="text-primary-foreground" />
                </div>
                <p className="text-muted-foreground">
                  Add your professional photo here
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card border-border">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-foreground mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;