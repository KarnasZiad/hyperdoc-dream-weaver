
import React from 'react';

const SkillsMindmap = () => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 800 400" className="absolute inset-0">
        {/* Central node */}
        <circle cx="400" cy="200" r="40" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
        <text x="400" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          Karnas
        </text>
        
        {/* Frontend branch */}
        <line x1="400" y1="200" x2="250" y2="120" stroke="#6366f1" strokeWidth="2" />
        <circle cx="250" cy="120" r="25" fill="#6366f1" />
        <text x="250" y="125" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
          Frontend
        </text>
        
        {/* Frontend skills */}
        <line x1="250" y1="120" x2="150" y2="80" stroke="#8b5cf6" strokeWidth="1" />
        <circle cx="150" cy="80" r="15" fill="#8b5cf6" />
        <text x="150" y="85" textAnchor="middle" fill="white" fontSize="8">React</text>
        
        <line x1="250" y1="120" x2="180" y2="150" stroke="#8b5cf6" strokeWidth="1" />
        <circle cx="180" cy="150" r="15" fill="#8b5cf6" />
        <text x="180" y="155" textAnchor="middle" fill="white" fontSize="8">Angular</text>
        
        <line x1="250" y1="120" x2="120" y2="130" stroke="#8b5cf6" strokeWidth="1" />
        <circle cx="120" cy="130" r="15" fill="#8b5cf6" />
        <text x="120" y="135" textAnchor="middle" fill="white" fontSize="8">TypeScript</text>
        
        {/* Backend branch */}
        <line x1="400" y1="200" x2="550" y2="120" stroke="#10b981" strokeWidth="2" />
        <circle cx="550" cy="120" r="25" fill="#10b981" />
        <text x="550" y="125" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
          Backend
        </text>
        
        {/* Backend skills */}
        <line x1="550" y1="120" x2="650" y2="80" stroke="#059669" strokeWidth="1" />
        <circle cx="650" cy="80" r="15" fill="#059669" />
        <text x="650" y="85" textAnchor="middle" fill="white" fontSize="8">Node.js</text>
        
        <line x1="550" y1="120" x2="620" y2="150" stroke="#059669" strokeWidth="1" />
        <circle cx="620" cy="150" r="15" fill="#059669" />
        <text x="620" y="155" textAnchor="middle" fill="white" fontSize="8">Spring</text>
        
        <line x1="550" y1="120" x2="680" y2="130" stroke="#059669" strokeWidth="1" />
        <circle cx="680" cy="130" r="15" fill="#059669" />
        <text x="680" y="135" textAnchor="middle" fill="white" fontSize="8">Python</text>
        
        {/* Database branch */}
        <line x1="400" y1="200" x2="300" y2="300" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="300" cy="300" r="25" fill="#f59e0b" />
        <text x="300" y="305" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
          Database
        </text>
        
        {/* Database skills */}
        <line x1="300" y1="300" x2="200" y2="330" stroke="#d97706" strokeWidth="1" />
        <circle cx="200" cy="330" r="15" fill="#d97706" />
        <text x="200" y="335" textAnchor="middle" fill="white" fontSize="8">PostgreSQL</text>
        
        <line x1="300" y1="300" x2="250" y2="360" stroke="#d97706" strokeWidth="1" />
        <circle cx="250" cy="360" r="15" fill="#d97706" />
        <text x="250" y="365" textAnchor="middle" fill="white" fontSize="8">MongoDB</text>
        
        {/* Cloud branch */}
        <line x1="400" y1="200" x2="500" y2="300" stroke="#ef4444" strokeWidth="2" />
        <circle cx="500" cy="300" r="25" fill="#ef4444" />
        <text x="500" y="305" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
          Cloud
        </text>
        
        {/* Cloud skills */}
        <line x1="500" y1="300" x2="580" y2="330" stroke="#dc2626" strokeWidth="1" />
        <circle cx="580" cy="330" r="15" fill="#dc2626" />
        <text x="580" y="335" textAnchor="middle" fill="white" fontSize="8">AWS</text>
        
        <line x1="500" y1="300" x2="550" y2="360" stroke="#dc2626" strokeWidth="1" />
        <circle cx="550" cy="360" r="15" fill="#dc2626" />
        <text x="550" y="365" textAnchor="middle" fill="white" fontSize="8">Docker</text>
      </svg>
      
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg p-3">
        <h4 className="text-sm font-semibold text-slate-900 mb-2">Skills Overview</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span>Core</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
            <span>Frontend</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span>Backend</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
            <span>Database</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsMindmap;
