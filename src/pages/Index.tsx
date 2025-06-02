
import React, { useState } from 'react';
import { Search, BookOpen, Star, ChevronDown, ExternalLink, Image, Type, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContentSection from '@/components/ContentSection';
import NavigationSidebar from '@/components/NavigationSidebar';
import SearchResults from '@/components/SearchResults';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('introduction');
  const [isSearching, setIsSearching] = useState(false);

  const sections = [
    {
      id: 'introduction',
      title: 'Welcome to HyperDoc',
      type: 'text',
      content: 'This is an interactive document that combines multimedia content, hyperlinks, and engaging presentations. Navigate through different sections to explore various content types and interactive elements.',
      icon: BookOpen
    },
    {
      id: 'features',
      title: 'Key Features',
      type: 'list',
      content: [
        'Interactive navigation with smooth scrolling',
        'Multimedia content support',
        'Search functionality across all content',
        'Responsive design for all devices',
        'Rich text formatting capabilities',
        'Expandable content sections'
      ],
      icon: Star
    },
    {
      id: 'multimedia',
      title: 'Multimedia Content',
      type: 'media',
      content: 'HyperDocs support various media types including images, videos, and interactive elements. This creates a rich, engaging experience for users.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      icon: Image
    },
    {
      id: 'links',
      title: 'External Resources',
      type: 'links',
      content: 'Connect your content to external resources and references.',
      links: [
        { title: 'React Documentation', url: 'https://reactjs.org', description: 'Official React documentation' },
        { title: 'Tailwind CSS', url: 'https://tailwindcss.com', description: 'Utility-first CSS framework' },
        { title: 'Lucide Icons', url: 'https://lucide.dev', description: 'Beautiful icon library' }
      ],
      icon: ExternalLink
    },
    {
      id: 'typography',
      title: 'Typography & Formatting',
      type: 'formatted',
      content: `# Heading 1
## Heading 2
### Heading 3

This is a paragraph with **bold text** and *italic text*. You can also include \`inline code\` and create lists:

- First item
- Second item
- Third item

> This is a blockquote that stands out from the regular text.`,
      icon: Type
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
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                HyperDoc
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Star className="w-4 h-4 mr-2" />
                Bookmark
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
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Interactive Digital Documentation
                  </h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Experience the future of documentation with multimedia content, 
                    interactive elements, and seamless navigation.
                  </p>
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
