import React from 'react';
import { Award, Star, Trophy, Medal, Target, TrendingUp } from 'lucide-react';

const Achievements: React.FC = () => {
  const stats = [
    { label: 'Certificates Earned', value: '12', icon: Award, color: 'text-blue-500' },
    { label: 'Courses Completed', value: '28', icon: Trophy, color: 'text-yellow-500' },
    { label: 'Learning Streak', value: '15 days', icon: Target, color: 'text-green-500' },
    { label: 'Total Points', value: '2,450', icon: Star, color: 'text-purple-500' }
  ];

  const achievements = [
    {
      title: 'React Master',
      description: 'Completed all React courses',
      icon: Award,
      color: 'bg-blue-500',
      earned: true,
      date: '2024-11-15'
    },
    {
      title: 'Fast Learner',
      description: 'Completed 5 courses in one month',
      icon: TrendingUp,
      color: 'bg-green-500',
      earned: true,
      date: '2024-10-28'
    },
    {
      title: 'Perfect Score',
      description: 'Scored 100% on 10 assignments',
      icon: Star,
      color: 'bg-yellow-500',
      earned: true,
      date: '2024-11-20'
    },
    {
      title: 'Community Helper',
      description: 'Helped 50 fellow students',
      icon: Medal,
      color: 'bg-purple-500',
      earned: false,
      progress: 32
    },
    {
      title: 'Marathon Learner',
      description: '100 hours of learning',
      icon: Trophy,
      color: 'bg-orange-500',
      earned: false,
      progress: 75
    },
    {
      title: 'Early Bird',
      description: 'Study for 30 consecutive days',
      icon: Target,
      color: 'bg-red-500',
      earned: false,
      progress: 15
    }
  ];

  const certificates = [
    {
      title: 'Advanced React Development',
      issueDate: '2024-11-15',
      instructor: 'Sarah Johnson',
      hours: 32,
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'UI/UX Design Principles',
      issueDate: '2024-10-28',
      instructor: 'Emma Wilson',
      hours: 28,
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Data Science Fundamentals',
      issueDate: '2024-09-12',
      instructor: 'Dr. Michael Chen',
      hours: 45,
      thumbnail: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Achievements</h1>
        <p className="text-gray-600 mt-1">Track your learning milestones and certificates</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Achievements */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Your Badges</h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className={`p-4 rounded-xl border-2 transition-all ${
                  achievement.earned 
                    ? 'border-gray-200 bg-gray-50' 
                    : 'border-dashed border-gray-300 bg-gray-50/50'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${achievement.color} rounded-xl flex items-center justify-center ${
                      !achievement.earned ? 'opacity-50' : ''
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${achievement.earned ? 'text-gray-800' : 'text-gray-500'}`}>
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      {achievement.earned ? (
                        <p className="text-xs text-green-600 mt-1">Earned on {achievement.date}</p>
                      ) : (
                        <div className="mt-2">
                          <div className="bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${achievement.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{achievement.progress}/100 progress</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Certificates</h2>
          <div className="space-y-4">
            {certificates.map((certificate, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors">
                <div className="flex items-center space-x-4">
                  <img 
                    src={certificate.thumbnail} 
                    alt={certificate.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{certificate.title}</h3>
                    <p className="text-sm text-gray-600">by {certificate.instructor}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>Issued: {certificate.issueDate}</span>
                      <span>{certificate.hours} hours</span>
                    </div>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors">
              View All Certificates
            </button>
          </div>
        </div>
      </div>

      {/* Learning Path Progress */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Current Learning Path</h2>
            <p className="text-blue-100">Full Stack Development Track</p>
          </div>
          <Trophy className="w-8 h-8 text-yellow-300" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Frontend Basics', completed: true },
            { title: 'React Mastery', completed: true },
            { title: 'Backend Development', completed: false, current: true },
            { title: 'Full Stack Project', completed: false }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 ${
                step.completed 
                  ? 'bg-green-400' 
                  : step.current 
                    ? 'bg-yellow-400 text-gray-800' 
                    : 'bg-blue-400'
              }`}>
                {step.completed ? (
                  <Award className="w-6 h-6" />
                ) : (
                  <span className="font-semibold">{index + 1}</span>
                )}
              </div>
              <p className="text-sm font-medium">{step.title}</p>
              {step.current && <p className="text-xs text-blue-200 mt-1">In Progress</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;