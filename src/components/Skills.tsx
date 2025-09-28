import { Code, Database, Globe, Smartphone, Settings, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const Skills = () => {
  const skillCategories = [{
    icon: Code,
    title: 'Programming Languages',
    skills: ['Python', 'C', 'JavaScript', 'HTML', 'CSS'],
    description: 'Core programming languages I work with'
  }, {
    icon: Database,
    title: 'Machine Learning & AI',
    skills: ['Pandas', 'Scikit-learn', 'NumPy', 'Matplotlib', 'OpenCV', 'MediaPipe'],
    description: 'Libraries and frameworks for AI/ML development'
  }, {
    icon: Globe,
    title: 'Web Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web APIs'],
    description: 'Building modern web applications and interfaces'
  }, {
    icon: Settings,
    title: 'Development Tools',
    skills: ['Jupyter Notebook', 'VS Code', 'Git', 'GitHub', 'Command Line'],
    description: 'Essential tools for development and collaboration'
  }, {
    icon: Cloud,
    title: 'Algorithms & Techniques',
    skills: ['RandomForestClassifier', 'Minimax Algorithm', 'Computer Vision', 'Data Analysis'],
    description: 'Advanced algorithms and problem-solving techniques'
  }, {
    icon: Smartphone,
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Teamwork', 'Volunteering', 'Leadership', 'Communication'],
    description: 'Essential interpersonal and professional skills'
  }];
  return <section id="skills" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-1.5 h-1.5 bg-primary rounded-full pulse-glow"></div>
        <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-accent rounded-full pulse-glow delay-300"></div>
        <div className="absolute bottom-1/3 left-1/6 w-2 h-2 bg-secondary rounded-full pulse-glow delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
              My <span className="gradient-text glow-text text-sky-300">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up delay-200">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => <Card key={index} className={`glass-card-glow border-border hover:border-primary/30 transition-all duration-300 group hover-lift ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors pulse-glow">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
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
                    {category.skills.map((skill, skillIndex) => <span key={skillIndex} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors hover-lift neon-border">
                        {skill}
                      </span>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Technical Proficiency */}
          <div className="mt-16 fade-in-up delay-300">
            <h3 className="text-2xl font-semibold text-center mb-8 glow-text">
              Technical Proficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[{
              skill: 'Python Programming',
              level: 85
            }, {
              skill: 'Machine Learning',
              level: 80
            }, {
              skill: 'Web Development',
              level: 75
            }, {
              skill: 'Computer Vision',
              level: 70
            }, {
              skill: 'Data Analysis',
              level: 80
            }, {
              skill: 'Problem Solving',
              level: 90
            }].map((item, index) => <div key={index} className={`space-y-2 glass-card p-4 rounded-lg hover-lift ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`} style={{
              animationDelay: `${(index + 6) * 0.1}s`
            }}>
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">{item.skill}</span>
                    <span className="text-primary glow-text">{item.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 neon-border">
                    <div className="bg-gradient-to-r from-primary via-accent to-secondary h-2 rounded-full transition-all duration-1000 ease-out pulse-glow" style={{
                  width: `${item.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;