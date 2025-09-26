import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration - Replace with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'your_service_id';
  const EMAILJS_TEMPLATE_ID = 'your_template_id';
  const EMAILJS_PUBLIC_KEY = 'your_public_key';
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'abhijith03us@gmail.com'
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const contactInfo = [{
    icon: Mail,
    label: 'Email',
    value: 'abhijith03us@gmail.com',
    href: 'mailto:abhijith03us@gmail.com'
  }, {
    icon: Phone,
    label: 'Phone',
    value: '+91 8714218370',
    href: 'tel:+918714218370'
  }, {
    icon: MapPin,
    label: 'Location',
    value: 'Kerala, India',
    href: '#'
  }];
  const socialLinks = [{
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/abhijithus',
    username: '@abhijithus'
  }, {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/abhijithus',
    username: 'Abhijith U S'
  }];
  return <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text text-zinc-50">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="bg-background border-border focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="bg-background border-border focus:border-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="bg-background border-border focus:border-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="bg-background border-border focus:border-primary resize-none" />
                  </div>
                  
                  <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50">
                    <Send className="w-4 h-4 mr-2" />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href !== '#' ? <a href={info.href} className="text-foreground hover:text-primary transition-colors">
                            {info.value}
                          </a> : <p className="text-foreground">{info.value}</p>}
                      </div>
                    </div>)}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Follow Me
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/10 transition-colors group">
                      <social.icon className="w-5 h-5 text-primary group-hover:text-primary/80" />
                      <div>
                        <p className="text-foreground group-hover:text-primary transition-colors">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {social.username}
                        </p>
                      </div>
                    </a>)}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="glass-card border-border">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Open to Opportunities
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    I'm actively seeking internships and entry-level positions in AI/ML and software development.
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-500 font-medium">Available</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;