
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  content: string | string[];
  icon: React.ComponentType<any>;
}

interface SearchResultsProps {
  query: string;
  sections: Section[];
}

const SearchResults = ({ query, sections }: SearchResultsProps) => {
  const searchResults = sections.filter(section => {
    const searchIn = [
      section.title,
      Array.isArray(section.content) ? section.content.join(' ') : section.content
    ].join(' ').toLowerCase();
    
    return searchIn.includes(query.toLowerCase());
  });

  if (searchResults.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-900 mb-2">No results found</h3>
          <p className="text-slate-600">
            Try searching for different keywords or browse the content sections.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900">
        Search Results for "{query}"
      </h2>
      <p className="text-slate-600">
        Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
      </p>
      
      <div className="space-y-4">
        {searchResults.map((section) => {
          const Icon = section.icon;
          return (
            <Card key={section.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-slate-700 line-clamp-3">
                      {Array.isArray(section.content) 
                        ? section.content.join(', ')
                        : section.content
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
