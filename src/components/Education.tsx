import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const Education = () => {
  const educationData = [{
    degree: 'B.Tech in Computer Science and Engineering',
    specialization: 'Artificial Intelligence and Machine Learning',
    institution: 'Sree Chitra Tirunal College of Engineering',
    duration: '2022 - 2026',
    cgpa: '6.7',
    location: 'Thiruvananthapuram, Kerala',
    icon: GraduationCap,
    current: true
  }, {
    degree: 'AISSCE (XII)',
    specialization: 'Science',
    institution: 'Kendriya Vidyalaya Pangode',
    duration: '2022',
    cgpa: '88.4%',
    location: 'Thiruvananthapuram, Kerala',
    icon: Award,
    current: false
  }, {
    degree: 'AISSE (X)',
    specialization: 'Secondary Education',
    institution: 'Kendriya Vidyalaya Pangode',
    duration: '2020',
    cgpa: '87.4%',
    location: 'Thiruvananthapuram, Kerala',
    icon: Award,
    current: false
  }];
  return <section id="education" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text text-slate-50">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic journey and achievements that shaped my foundation in technology
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => <Card key={index} className={`glass-card border-border hover:border-primary/30 transition-all duration-300 ${edu.current ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${edu.current ? 'bg-primary/20' : 'bg-primary/10'}`}>
                        <edu.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground mb-2">
                          {edu.degree}
                          {edu.current && <span className="ml-3 px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                              Current
                            </span>}
                        </CardTitle>
                        {edu.specialization && <p className="text-lg text-primary font-medium">
                            {edu.specialization}
                          </p>}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-primary font-semibold">
                        <Award className="w-4 h-4" />
                        <span>{edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="glass-card border-border max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Academic Focus
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  My academic journey has been focused on building a strong foundation in computer science 
                  fundamentals while specializing in cutting-edge AI and ML technologies. Through coursework 
                  and practical projects, I've developed expertise in machine learning algorithms, data structures, 
                  and software engineering principles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Education;