
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
}

interface NavigationSidebarProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const NavigationSidebar = ({ sections, activeSection, onSectionClick }: NavigationSidebarProps) => {
  return (
    <aside className="w-64 sticky top-24 h-fit">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="font-semibold text-slate-900 mb-4">Navigation</h3>
        <nav className="space-y-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Button
                key={section.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-left h-auto p-3 hover:bg-blue-50 transition-colors",
                  activeSection === section.id && "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                )}
                onClick={() => onSectionClick(section.id)}
              >
                <Icon className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">{section.title}</span>
              </Button>
            );
          })}
        </nav>
        
        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <h4 className="font-medium text-slate-900 mb-3 text-sm">Quick Links</h4>
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start text-xs" asChild>
              <a href="mailto:karnas.ziad@email.com">Email Me</a>
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-xs" asChild>
              <a href="https://github.com/karnasziad" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-xs" asChild>
              <a href="https://linkedin.com/in/karnasziad" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NavigationSidebar;
