import { Users, Calendar, Award, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const Leadership = () => {
  const experiences = [{
    title: 'Event Coordinator',
    organization: 'CSI SCT SB (Computer Society of India)',
    duration: '2023 - 2025',
    location: 'Sree Chitra Tirunal College of Engineering',
    description: 'Organized and coordinated technical events including Python bootcamp sessions, helping students enhance their programming skills and technical knowledge.',
    achievements: ['Successfully organized Python bootcamp for 50+ students', 'Coordinated multiple technical workshops and seminars', 'Enhanced student engagement in programming activities'],
    icon: Award,
    current: true
  }, {
    title: 'Discord Moderator',
    organization: 'µLearn SCTCE',
    duration: '2025 - Present',
    location: 'Sree Chitra Tirunal College of Engineering',
    description: 'Managing community engagement and coordination on the official Discord server, facilitating discussions and maintaining a positive learning environment.',
    achievements: ['Moderate discussions for 200+ community members', 'Facilitate peer-to-peer learning and collaboration', 'Maintain community guidelines and positive environment'],
    icon: MessageSquare,
    current: true
  }];
  const skills = ['Event Planning & Management', 'Community Building', 'Team Leadership', 'Public Speaking', 'Technical Mentoring', 'Conflict Resolution'];
  return <section id="leadership" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leadership & <span className="gradient-text text-zinc-50">Extracurriculars</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building communities and organizing events to foster learning and collaboration
            </p>
          </div>

          {/* Leadership Experiences */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => <Card key={index} className={`glass-card border-border hover:border-primary/30 transition-all duration-300 ${exp.current ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${exp.current ? 'bg-primary/20' : 'bg-primary/10'}`}>
                        <exp.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground mb-2">
                          {exp.title}
                          {exp.current && <span className="ml-3 px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                              Current
                            </span>}
                        </CardTitle>
                        <p className="text-lg text-primary font-medium mb-1">
                          {exp.organization}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <span className="hidden sm:block">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-foreground font-medium">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => <li key={achIndex} className="flex items-start space-x-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Leadership Skills */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center space-x-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span>Leadership Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => <span key={index} className="px-3 py-2 text-sm bg-primary/10 text-primary rounded-lg border border-primary/20 text-center">
                      {skill}
                    </span>)}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <div className="text-muted-foreground">Students Mentored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-muted-foreground">Events Organized</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2</div>
                    <div className="text-muted-foreground">Leadership Roles</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Leadership;