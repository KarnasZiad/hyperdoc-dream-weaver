
import React, { useState, useEffect } from 'react';

const SkillsMindmap = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const skills = {
    frontend: [
      { name: 'React', x: 150, y: 80, level: 'Expert', description: 'Advanced React development with hooks and context' },
      { name: 'TypeScript', x: 120, y: 130, level: 'Advanced', description: 'Type-safe development and enterprise patterns' },
      { name: 'Angular', x: 180, y: 150, level: 'Intermediate', description: 'Component-based architecture and RxJS' },
      { name: 'Next.js', x: 100, y: 180, level: 'Advanced', description: 'Full-stack React framework with SSR/SSG' },
      { name: 'Tailwind', x: 200, y: 110, level: 'Expert', description: 'Utility-first CSS framework mastery' }
    ],
    backend: [
      { name: 'Node.js', x: 650, y: 80, level: 'Advanced', description: 'Scalable server-side JavaScript applications' },
      { name: 'Spring Boot', x: 620, y: 150, level: 'Intermediate', description: 'Java enterprise application development' },
      { name: 'Python', x: 680, y: 130, level: 'Advanced', description: 'Django, Flask, and data processing' },
      { name: 'Express.js', x: 590, y: 110, level: 'Advanced', description: 'RESTful APIs and middleware development' },
      { name: 'GraphQL', x: 710, y: 160, level: 'Intermediate', description: 'API query language and runtime' }
    ],
    database: [
      { name: 'PostgreSQL', x: 200, y: 330, level: 'Advanced', description: 'Relational database design and optimization' },
      { name: 'MongoDB', x: 250, y: 360, level: 'Advanced', description: 'NoSQL document database and aggregation' },
      { name: 'Redis', x: 150, y: 370, level: 'Intermediate', description: 'In-memory caching and session storage' },
      { name: 'Prisma', x: 300, y: 340, level: 'Advanced', description: 'Type-safe database ORM and migrations' }
    ],
    cloud: [
      { name: 'AWS', x: 580, y: 330, level: 'Intermediate', description: 'EC2, S3, Lambda, and cloud architecture' },
      { name: 'Docker', x: 550, y: 360, level: 'Advanced', description: 'Containerization and deployment' },
      { name: 'Vercel', x: 620, y: 370, level: 'Advanced', description: 'Frontend deployment and edge functions' },
      { name: 'GitHub Actions', x: 520, y: 340, level: 'Intermediate', description: 'CI/CD workflows and automation' }
    ],
    tools: [
      { name: 'Git', x: 400, y: 100, level: 'Expert', description: 'Version control and collaboration workflows' },
      { name: 'VS Code', x: 430, y: 340, level: 'Expert', description: 'Advanced IDE usage and extensions' },
      { name: 'Figma', x: 370, y: 340, level: 'Intermediate', description: 'UI/UX design and prototyping' }
    ]
  };

  const categories = [
    { name: 'Frontend', x: 250, y: 120, color: '#6366f1', skills: skills.frontend },
    { name: 'Backend', x: 550, y: 120, color: '#10b981', skills: skills.backend },
    { name: 'Database', x: 250, y: 300, color: '#f59e0b', skills: skills.database },
    { name: 'Cloud & DevOps', x: 550, y: 300, color: '#ef4444', skills: skills.cloud },
    { name: 'Tools', x: 400, y: 220, color: '#8b5cf6', skills: skills.tools }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return '#059669';
      case 'Advanced': return '#3b82f6';
      case 'Intermediate': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getNodeOpacity = (skillName: string) => {
    if (!hoveredNode) return 1;
    return hoveredNode === skillName ? 1 : 0.3;
  };

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl overflow-hidden border border-slate-200 shadow-lg">
      <svg width="100%" height="100%" viewBox="0 0 800 500" className="absolute inset-0">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>

        {/* Animated background patterns */}
        <circle 
          cx="400" 
          cy="250" 
          r={120 + animationPhase * 5} 
          fill="none" 
          stroke="#e2e8f0" 
          strokeWidth="1" 
          opacity="0.3"
        />
        <circle 
          cx="400" 
          cy="250" 
          r={180 + animationPhase * 8} 
          fill="none" 
          stroke="#e2e8f0" 
          strokeWidth="1" 
          opacity="0.2"
        />

        {/* Connection lines */}
        {categories.map((category) => (
          <g key={category.name}>
            <line 
              x1="400" 
              y1="250" 
              x2={category.x} 
              y2={category.y} 
              stroke={category.color} 
              strokeWidth="3" 
              opacity="0.6"
              className="transition-all duration-300"
            />
            {category.skills.map((skill) => (
              <line
                key={skill.name}
                x1={category.x}
                y1={category.y}
                x2={skill.x}
                y2={skill.y}
                stroke={category.color}
                strokeWidth="2"
                opacity={getNodeOpacity(skill.name) * 0.4}
                className="transition-all duration-300"
              />
            ))}
          </g>
        ))}

        {/* Central node */}
        <circle 
          cx="400" 
          cy="250" 
          r="45" 
          fill="url(#centerGradient)" 
          stroke="#1e40af" 
          strokeWidth="3"
          filter="url(#glow)"
          className="transition-all duration-300 hover:r-50"
        />
        <text 
          x="400" 
          y="255" 
          textAnchor="middle" 
          fill="white" 
          fontSize="14" 
          fontWeight="bold"
          className="pointer-events-none"
        >
          Karnas Ziad
        </text>

        {/* Category nodes */}
        {categories.map((category) => (
          <g key={category.name}>
            <circle 
              cx={category.x} 
              cy={category.y} 
              r="30" 
              fill={category.color} 
              stroke="white" 
              strokeWidth="3"
              className="transition-all duration-300 hover:r-35 cursor-pointer"
              filter="url(#glow)"
            />
            <text 
              x={category.x} 
              y={category.y + 5} 
              textAnchor="middle" 
              fill="white" 
              fontSize="11" 
              fontWeight="bold"
              className="pointer-events-none"
            >
              {category.name}
            </text>
          </g>
        ))}

        {/* Skill nodes */}
        {categories.map((category) =>
          category.skills.map((skill) => (
            <g key={skill.name}>
              <circle
                cx={skill.x}
                cy={skill.y}
                r="18"
                fill={getLevelColor(skill.level)}
                stroke="white"
                strokeWidth="2"
                opacity={getNodeOpacity(skill.name)}
                className="transition-all duration-300 hover:r-22 cursor-pointer"
                onMouseEnter={() => setHoveredNode(skill.name)}
                onMouseLeave={() => setHoveredNode(null)}
                filter="url(#glow)"
              />
              <text
                x={skill.x}
                y={skill.y + 4}
                textAnchor="middle"
                fill="white"
                fontSize="9"
                fontWeight="bold"
                className="pointer-events-none"
                opacity={getNodeOpacity(skill.name)}
              >
                {skill.name}
              </text>
            </g>
          ))
        )}
      </svg>

      {/* Skill details tooltip */}
      {hoveredNode && (
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-200 max-w-xs">
          {categories.map(category => {
            const skill = category.skills.find(s => s.name === hoveredNode);
            if (!skill) return null;
            return (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-900">{skill.name}</h4>
                  <span 
                    className="px-2 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: getLevelColor(skill.level) }}
                  >
                    {skill.level}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{skill.description}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
        <h4 className="text-sm font-semibold text-slate-900 mb-3">Skill Levels</h4>
        <div className="space-y-2">
          {[
            { level: 'Expert', color: '#059669', description: 'Production-ready expertise' },
            { level: 'Advanced', color: '#3b82f6', description: 'Strong proficiency' },
            { level: 'Intermediate', color: '#f59e0b', description: 'Solid understanding' }
          ].map(({ level, color, description }) => (
            <div key={level} className="flex items-center text-xs">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: color }}
              ></div>
              <span className="font-medium mr-2">{level}:</span>
              <span className="text-slate-600">{description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category legend */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
        <h4 className="text-sm font-semibold text-slate-900 mb-3">Categories</h4>
        <div className="grid grid-cols-1 gap-2">
          {categories.map(category => (
            <div key={category.name} className="flex items-center text-xs">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: category.color }}
              ></div>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interaction hint */}
      <div className="absolute bottom-4 right-4 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-xs">
        💡 Hover over skills for details
      </div>
    </div>
  );
};

export default SkillsMindmap;
