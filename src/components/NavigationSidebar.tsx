
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
        <h3 className="font-semibold text-slate-900 mb-4">Contents</h3>
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
      </div>
    </aside>
  );
};

export default NavigationSidebar;
