
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  title: string;
  type: string;
  content: string | string[];
  icon: React.ComponentType<any>;
  image?: string;
  links?: Array<{
    title: string;
    url: string;
    description: string;
  }>;
}

interface ContentSectionProps {
  section: Section;
  isActive: boolean;
}

const ContentSection = ({ section, isActive }: ContentSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const Icon = section.icon;

  const renderContent = () => {
    switch (section.type) {
      case 'list':
        return (
          <ul className="space-y-2">
            {(section.content as string[]).map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        );
      
      case 'media':
        return (
          <div className="space-y-4">
            <p className="text-slate-700">{section.content as string}</p>
            {section.image && (
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}
          </div>
        );
      
      case 'links':
        return (
          <div className="space-y-4">
            <p className="text-slate-700">{section.content as string}</p>
            <div className="grid gap-3">
              {section.links?.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-slate-900 group-hover:text-blue-600">
                        {link.title}
                      </h4>
                      <p className="text-sm text-slate-600">{link.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      
      case 'formatted':
        return (
          <div className="prose prose-slate max-w-none">
            <pre className="whitespace-pre-wrap text-slate-700 font-sans text-base leading-relaxed">
              {section.content as string}
            </pre>
          </div>
        );
      
      default:
        return <p className="text-slate-700 leading-relaxed">{section.content as string}</p>;
    }
  };

  return (
    <Card 
      id={section.id}
      className={cn(
        "transition-all duration-300 hover:shadow-md",
        isActive && "ring-2 ring-blue-500 ring-opacity-50"
      )}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <CardTitle className="text-xl font-semibold text-slate-900">
              {section.title}
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2"
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0">
          {renderContent()}
        </CardContent>
      )}
    </Card>
  );
};

export default ContentSection;
