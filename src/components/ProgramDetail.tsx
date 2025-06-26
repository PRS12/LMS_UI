import React, { useState } from 'react';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  Download, 
  CheckCircle, 
  Lock,
  ArrowLeft,
  BookOpen,
  FileText,
  Heart,
  MapPin,
  Target
} from 'lucide-react';

interface ProgramDetailProps {
  onBack: () => void;
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({ onBack }) => {
  const [activeModule, setActiveModule] = useState(0);

  const program = {
    title: 'Digital Literacy for Rural Communities',
    coordinator: 'Maria Santos',
    impact: 4.8,
    beneficiaries: 245,
    duration: '6 months',
    progress: 65,
    location: 'Rural Maharashtra',
    description: 'Empowering rural communities with essential digital skills to bridge the technology gap and create opportunities for economic growth and social development.',
    thumbnail: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
  };

  const modules = [
    {
      title: 'Program Introduction',
      sessions: [
        { title: 'Welcome & Community Assessment', duration: '2 hours', completed: true, type: 'workshop' },
        { title: 'Understanding Digital Divide', duration: '1.5 hours', completed: true, type: 'presentation' },
        { title: 'Setting Learning Goals', duration: '1 hour', completed: true, type: 'activity' }
      ]
    },
    {
      title: 'Basic Computer Skills',
      sessions: [
        { title: 'Computer Fundamentals', duration: '3 hours', completed: true, type: 'workshop' },
        { title: 'Operating System Basics', duration: '2 hours', completed: true, type: 'hands-on' },
        { title: 'File Management', duration: '2 hours', completed: false, type: 'practice' },
        { title: 'Basic Troubleshooting', duration: '1.5 hours', completed: false, type: 'workshop' }
      ]
    },
    {
      title: 'Internet & Communication',
      sessions: [
        { title: 'Internet Basics & Safety', duration: '2.5 hours', completed: false, type: 'workshop' },
        { title: 'Email Communication', duration: '2 hours', completed: false, type: 'hands-on' },
        { title: 'Social Media Awareness', duration: '1.5 hours', completed: false, type: 'discussion' }
      ]
    },
    {
      title: 'Digital Services & Applications',
      sessions: [
        { title: 'Government Digital Services', duration: '3 hours', completed: false, type: 'workshop' },
        { title: 'Online Banking Basics', duration: '2 hours', completed: false, type: 'demo' },
        { title: 'Digital Payment Systems', duration: '2 hours', completed: false, type: 'hands-on' },
        { title: 'Community Impact Assessment', duration: '2 hours', completed: false, type: 'evaluation' }
      ]
    }
  ];

  const currentSession = modules.flatMap(module => module.sessions)[activeModule];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{program.title}</h1>
          <p className="text-gray-600">Coordinated by {program.coordinator}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Program Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Media */}
          <div className="bg-black rounded-2xl overflow-hidden aspect-video relative">
            <img 
              src={program.thumbnail} 
              alt={program.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <button className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
            </div>
          </div>

          {/* Program Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Program Overview</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{program.impact}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{program.beneficiaries}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{program.location}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{program.description}</p>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Program Progress</span>
                <span className="text-green-600 font-medium">{program.progress}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${program.progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Current Session */}
          {currentSession && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Current Session</h2>
                <div className="flex items-center space-x-2">
                  {currentSession.type === 'workshop' && <BookOpen className="w-5 h-5 text-green-500" />}
                  {currentSession.type === 'hands-on' && <Target className="w-5 h-5 text-blue-500" />}
                  {currentSession.type === 'presentation' && <FileText className="w-5 h-5 text-orange-500" />}
                  {currentSession.type === 'activity' && <Heart className="w-5 h-5 text-red-500" />}
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{currentSession.title}</h3>
              <p className="text-gray-600 text-sm mb-4">Duration: {currentSession.duration}</p>
              <div className="flex space-x-3">
                <button className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition-colors flex items-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Start Session</span>
                </button>
                <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-200 transition-colors flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Resources</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Program Modules */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Program Modules</h3>
            <div className="space-y-4">
              {modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="border border-gray-100 rounded-xl">
                  <div className="p-4 bg-gray-50 rounded-t-xl">
                    <h4 className="font-medium text-gray-800">{module.title}</h4>
                    <p className="text-sm text-gray-500">{module.sessions.length} sessions</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {module.sessions.map((session, sessionIndex) => {
                      const globalIndex = modules.slice(0, moduleIndex).reduce((acc, m) => acc + m.sessions.length, 0) + sessionIndex;
                      return (
                        <button
                          key={sessionIndex}
                          onClick={() => setActiveModule(globalIndex)}
                          className={`w-full text-left p-4 hover:bg-gray-50 transition-colors flex items-center justify-between ${
                            activeModule === globalIndex ? 'bg-green-50 border-r-2 border-green-500' : ''
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            {session.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
                                {session.type === 'workshop' && <BookOpen className="w-3 h-3 text-gray-400" />}
                                {session.type === 'hands-on' && <Target className="w-3 h-3 text-gray-400" />}
                                {session.type === 'presentation' && <FileText className="w-3 h-3 text-gray-400" />}
                                {session.type === 'activity' && <Heart className="w-3 h-3 text-gray-400" />}
                              </div>
                            )}
                            <div>
                              <p className="font-medium text-sm">{session.title}</p>
                              <p className="text-xs text-gray-500">{session.duration}</p>
                            </div>
                          </div>
                          {!session.completed && globalIndex > activeModule && (
                            <Lock className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coordinator */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Program Coordinator</h3>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">MS</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{program.coordinator}</h4>
                <p className="text-sm text-gray-600">Community Development Specialist</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.9 coordinator rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;