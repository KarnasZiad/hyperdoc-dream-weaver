import React, { useState } from 'react';
import { Search, User, Code2, GraduationCap, Briefcase, Mail, Github, Linkedin, ExternalLink, Database, Globe, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContentSection from '@/components/ContentSection';
import NavigationSidebar from '@/components/NavigationSidebar';
import SearchResults from '@/components/SearchResults';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('about');
  const [isSearching, setIsSearching] = useState(false);

  const sections = [
    {
      id: 'about',
      title: 'About Me',
      type: 'text',
      content: 'I am Karnas Ziad, a passionate full-stack engineering student with a strong foundation in modern web technologies. Currently pursuing my engineering degree, I combine academic knowledge with practical experience to build innovative solutions. My expertise spans both frontend and backend development, with a focus on creating scalable and user-friendly applications.',
      icon: User
    },
    {
      id: 'skills',
      title: 'Technical Skills',
      type: 'list',
      content: [
        'Frontend: React.js, Angular, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3',
        'Backend: Node.js, Express.js, Spring Boot, Java EE, Python, Django, RESTful APIs',
        'Databases: PostgreSQL, MongoDB, MySQL, Redis',
        'Cloud & DevOps: AWS, Docker, Git, GitHub Actions, Vercel',
        'Mobile: React Native, Flutter (learning)',
        'Tools: VS Code, Figma, Postman, Docker Desktop'
      ],
      icon: Code2
    },
    {
      id: 'projects',
      title: 'Featured Projects',
      type: 'links',
      content: 'Here are some of my key projects that demonstrate my full-stack development capabilities:',
      links: [
        { title: 'E-Commerce Platform', url: 'https://github.com/karnasziad', description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL' },
        { title: 'Task Management App', url: 'https://github.com/karnasziad', description: 'Real-time collaborative task manager using React and WebSocket' },
        { title: 'Weather Dashboard', url: 'https://github.com/karnasziad', description: 'Interactive weather app with data visualization and geolocation' },
        { title: 'Social Media API', url: 'https://github.com/karnasziad', description: 'RESTful API for social media platform with authentication and file upload' }
      ],
      icon: Briefcase
    },
    {
      id: 'education',
      title: 'Education & Certifications',
      type: 'formatted',
      content: `# Current Education
**ENSET Mohammedia - École Normale Supérieure de l'Enseignement Technique**
*Software Engineering Program*
*Expected Graduation: 2025*

# Previous Education
**FST Mohammedia - Faculté des Sciences et Techniques**
*Computer Science and Engineering*

## Relevant Coursework
- Data Structures and Algorithms
- Database Management Systems
- Software Engineering Principles
- Web Development Technologies
- Computer Networks
- System Design
- Object-Oriented Programming (Java)
- Enterprise Application Development

## Certifications & Learning
- **AWS Cloud Practitioner** (In Progress)
- **React Developer Certification** - Meta
- **Full-Stack Web Development** - The Odin Project
- **TypeScript Fundamentals** - Microsoft Learn
- **Spring Boot Fundamentals** - Oracle

> "Continuously learning and adapting to new technologies in the ever-evolving field of software development."`,
      icon: GraduationCap
    },
    {
      id: 'experience',
      title: 'Experience & Internships',
      type: 'media',
      content: 'Through various internships and freelance projects, I have gained practical experience in full-stack development. I have worked on real-world applications, collaborated with development teams, and delivered solutions that meet client requirements.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop',
      icon: Server
    },
    {
      id: 'contact',
      title: 'Get In Touch',
      type: 'links',
      content: 'I am always open to discussing new opportunities, collaborating on projects, or connecting with fellow developers.',
      links: [
        { title: 'Email', url: 'mailto:karnas.ziad@email.com', description: 'karnas.ziad@email.com' },
        { title: 'GitHub', url: 'https://github.com/karnasziad', description: 'View my code repositories and contributions' },
        { title: 'LinkedIn', url: 'https://linkedin.com/in/karnasziad', description: 'Connect with me professionally' },
        { title: 'Portfolio Website', url: 'https://karnasziad.dev', description: 'Visit my complete portfolio' }
      ],
      icon: Mail
    }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(query.length > 0);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Karnas Ziad
              </h1>
              <span className="text-sm text-slate-600 hidden sm:block">Full-Stack Engineering Student</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search my profile..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:karnas.ziad@email.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <NavigationSidebar 
            sections={sections}
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />

          {/* Main Content */}
          <main className="flex-1 space-y-8">
            {isSearching ? (
              <SearchResults query={searchQuery} sections={sections} />
            ) : (
              <>
                {/* Hero Section */}
                <div className="text-center py-12">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Karnas Ziad
                  </h2>
                  <p className="text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
                    Full-Stack Engineering Student | Passionate Developer | Problem Solver
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button asChild>
                      <a href="#projects">
                        <Briefcase className="w-4 h-4 mr-2" />
                        View Projects
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://github.com/karnasziad" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Code2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-slate-900">15+ Projects</h3>
                      <p className="text-sm text-slate-600">Full-stack applications</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Database className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-slate-900">Multiple DBs</h3>
                      <p className="text-sm text-slate-600">SQL & NoSQL experience</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-slate-900">Cloud Ready</h3>
                      <p className="text-sm text-slate-600">AWS & modern deployment</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">
                  {sections.map((section) => (
                    <ContentSection
                      key={section.id}
                      section={section}
                      isActive={activeSection === section.id}
                    />
                  ))}
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
