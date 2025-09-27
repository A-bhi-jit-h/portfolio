import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['AIML Student', 'Machine Learning Enthusiast', 'Web Developer', 'Problem Solver'];
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    const typeText = () => {
      if (charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          const deleteText = () => {
            if (charIndex > 0) {
              setDisplayText(currentTitle.slice(0, charIndex - 1));
              charIndex--;
              setTimeout(deleteText, 50);
            } else {
              setCurrentIndex(prevIndex => (prevIndex + 1) % titles.length);
            }
          };
          setTimeout(deleteText, 2000);
        }, 1000);
      }
    };
    typeText();
  }, [currentIndex]);
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full pulse-glow delay-100"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full pulse-glow delay-300"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-secondary rounded-full pulse-glow delay-500"></div>
        <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-primary rounded-full pulse-glow delay-200"></div>
        <div className="absolute bottom-1/4 left-1/6 w-2 h-2 bg-accent rounded-full pulse-glow delay-400"></div>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-animate" style={{
      backgroundImage: `url(${heroBg})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 fade-in scale-in">
            <div className="relative inline-block">
              <img src="https://iili.io/K1xEc2s.jpg" alt="Abhijith U S Profile Photo" className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary/30 object-cover shadow-2xl hover-lift neon-border" onError={e => {
              console.error('Image failed to load:', e);
              e.currentTarget.style.display = 'none';
            }} />
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-accent to-secondary p-1 rotate-slow">
                <div className="w-full h-full rounded-full bg-background"></div>
              </div>
            </div>
          </div>
          
          {/* Greeting */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 fade-in delay-100 glow-text">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in-up delay-200">
            <span className="gradient-text glow-text hover-glow text-cyan-300">Abhijith U S</span>
          </h1>
          
          {/* Animated Title */}
          <div className="h-16 md:h-20 flex items-center justify-center mb-8 fade-in-up delay-300">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary glow-text">
              {displayText}
              <span className="animate-pulse text-accent">|</span>
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed fade-in-up delay-400">
            Aspiring AIML student passionate about machine learning, artificial intelligence, and building innovative web applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-up delay-500">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow hover-lift neon-border" onClick={() => document.querySelector('#projects')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground neon-border hover-lift" onClick={() => document.querySelector('#contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 fade-in-up delay-600">
            <a href="https://github.com/A-bhi-jit-h" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors glow hover-glow p-3 rounded-full border border-transparent hover:border-primary/30">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/a-bhijith-u-s" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors glow hover-glow p-3 rounded-full border border-transparent hover:border-primary/30">
              <Linkedin size={24} />
            </a>
            <a href="mailto:abhijith03us@gmail.com" className="text-muted-foreground hover:text-primary transition-colors glow hover-glow p-3 rounded-full border border-transparent hover:border-primary/30">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors float pulse-glow">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>;
};
export default Hero;