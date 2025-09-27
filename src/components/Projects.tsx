import { ExternalLink, Github, Folder } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const Projects = () => {
  const projects = [{
    title: 'ARTHAMUDHRA: Malayalam Sign Language Translator',
    description: 'Developed a comprehensive web application that translates Malayalam sign language gestures into text in real-time. This project aims to bridge communication gaps and make technology more accessible for the hearing-impaired community.',
    technologies: ['Python', 'HTML', 'CSS', 'RandomForestClassifier', 'OpenCV', 'MediaPipe'],
    githubUrl: 'https://github.com/A-bhi-jit-h/ARTHAMUDHRA',
    featured: true
  }, {
    title: 'Tic-Tac-Toe Using AI',
    description: 'Built an intelligent Tic-Tac-Toe game featuring an unbeatable AI opponent powered by the Minimax algorithm. The game demonstrates advanced game theory principles and provides an engaging user experience.',
    technologies: ['Python', 'Minimax Algorithm', 'Game Theory', 'Tkinter'],
    githubUrl: 'https://github.com/A-bhi-jit-h/tic-tac-toe',
    liveUrl: 'https://a-bhi-jit-h.github.io/tic-tac-toe/',
    featured: true
  }, {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing my projects and skills, built with React and featuring smooth animations and professional design.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    githubUrl: 'https://github.com/abhijithus/portfolio',
    liveUrl: '#',
    featured: false
  }];
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  return <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-1 h-1 bg-accent rounded-full pulse-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary rounded-full pulse-glow delay-200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-secondary rounded-full pulse-glow delay-400"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
              My <span className="gradient-text glow-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up delay-200">
              A collection of work that showcases my skills and passion for development
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 slide-in-left">Featured Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => <Card key={index} className="glass-card-glow border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors pulse-glow">
                          <Folder className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                      <div className="flex space-x-2">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Github size={20} />
                        </a>
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => <span key={techIndex} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                          {tech}
                        </span>)}
                    </div>
                    <div className="flex space-x-3">
                      {project.liveUrl && (
                        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => <Card key={index} className="glass-card border-border hover:border-primary/30 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <Folder className="w-5 h-5 text-primary" />
                        <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                      <div className="flex space-x-2">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Github size={18} />
                        </a>
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => <span key={techIndex} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                          {tech}
                        </span>)}
                      {project.technologies.length > 3 && <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.technologies.length - 3} more
                        </span>}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Projects;