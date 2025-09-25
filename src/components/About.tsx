import { User, MapPin, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Years of Experience', value: '3+' },
    { icon: Award, label: 'Projects Completed', value: '25+' },
    { icon: User, label: 'Happy Clients', value: '15+' },
    { icon: MapPin, label: 'Location', value: 'Your City' },
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
                I'm a passionate developer who loves creating amazing digital experiences
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 3 years of experience in software development, I specialize in building 
                  modern web applications using cutting-edge technologies. My journey started with 
                  a curiosity about how things work, which led me to pursue computer science and 
                  fall in love with programming.
                </p>
                
                <p>
                  I believe in writing clean, maintainable code and staying up-to-date with the 
                  latest industry trends. When I'm not coding, you can find me exploring new 
                  technologies, contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
                
                <p>
                  My goal is to create solutions that not only meet technical requirements but 
                  also provide exceptional user experiences. I'm always excited to take on new 
                  challenges and collaborate with like-minded professionals.
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