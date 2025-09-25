import { Code, Database, Globe, Smartphone, Settings, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'SASS'],
      description: 'Creating responsive and interactive user interfaces'
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL', 'MongoDB'],
      description: 'Building robust server-side applications and APIs'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'GraphQL', 'WebSocket'],
      description: 'Modern web standards and protocols'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'PWA', 'Ionic', 'Mobile UI/UX'],
      description: 'Cross-platform mobile applications'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Vercel'],
      description: 'Cloud infrastructure and deployment automation'
    },
    {
      icon: Settings,
      title: 'Tools & Others',
      skills: ['Git', 'VS Code', 'Figma', 'Jest', 'Webpack', 'Linux'],
      description: 'Development tools and methodologies'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="glass-card border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground">
                        {category.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Proficiency */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Technical Proficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { skill: 'JavaScript/TypeScript', level: 90 },
                { skill: 'React/Next.js', level: 85 },
                { skill: 'Node.js/Express', level: 80 },
                { skill: 'Python/Django', level: 75 },
                { skill: 'Database Design', level: 85 },
                { skill: 'Cloud Services', level: 70 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">{item.skill}</span>
                    <span className="text-primary">{item.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;