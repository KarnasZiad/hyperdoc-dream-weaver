
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User } from 'lucide-react';

const Commentary = () => {
  const commentaries = [
    {
      date: '2024-06-01',
      title: 'The Journey from Theory to Practice',
      content: 'One of the most valuable lessons I\'ve learned during my engineering studies is the stark difference between academic knowledge and real-world application. While university teaches us the fundamentals and theoretical frameworks, building actual projects has shown me the importance of problem-solving, debugging, and adapting to unexpected challenges.',
      readTime: '3 min read'
    },
    {
      date: '2024-05-15',
      title: 'Why Full-Stack Development Appeals to Me',
      content: 'Being a full-stack developer means understanding the complete picture of web development. From crafting user interfaces that delight users to building robust backend systems that handle complex business logic, I enjoy the versatility and continuous learning that comes with this path. Each layer of the stack presents unique challenges and opportunities for growth.',
      readTime: '4 min read'
    },
    {
      date: '2024-04-28',
      title: 'Embracing Modern Technologies',
      content: 'The tech industry evolves rapidly, and staying current is both exciting and challenging. I\'ve found that the key is to focus on fundamental concepts while experimenting with new frameworks and tools. React, TypeScript, and cloud technologies have become essential parts of my toolkit, but I always remain open to learning what comes next.',
      readTime: '2 min read'
    },
    {
      date: '2024-04-10',
      title: 'Building Projects That Matter',
      content: 'Every project I work on teaches me something new. Whether it\'s implementing real-time features with WebSockets, optimizing database queries, or creating responsive designs, each challenge pushes me to grow as a developer. I believe in building applications that solve real problems and provide genuine value to users.',
      readTime: '3 min read'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Thoughts & Reflections
        </h3>
        <p className="text-slate-600">
          Insights from my journey as a software engineering student and developer
        </p>
      </div>
      
      <div className="grid gap-6">
        {commentaries.map((commentary, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(commentary.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {commentary.readTime}
                  </div>
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <User className="w-4 h-4 mr-1" />
                  Karnas Ziad
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                {commentary.title}
              </h4>
              
              <p className="text-slate-700 leading-relaxed">
                {commentary.content}
              </p>
              
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Personal reflection • Engineering student perspective
                  </span>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      Development
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      Learning
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Commentary;
