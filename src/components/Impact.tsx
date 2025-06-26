import React from 'react';
import { Heart, Star, Trophy, Medal, Target, TrendingUp, Users, Globe, BookOpen, Award } from 'lucide-react';

const Impact: React.FC = () => {
  const stats = [
    { label: 'Lives Impacted', value: '2,450', icon: Heart, color: 'text-red-500' },
    { label: 'Programs Completed', value: '28', icon: Trophy, color: 'text-yellow-500' },
    { label: 'Communities Served', value: '18', icon: Globe, color: 'text-green-500' },
    { label: 'Volunteer Hours', value: '15,420', icon: Star, color: 'text-purple-500' }
  ];

  const achievements = [
    {
      title: 'Education Champion',
      description: 'Completed 10 education programs',
      icon: BookOpen,
      color: 'bg-green-500',
      earned: true,
      date: '2024-11-15'
    },
    {
      title: 'Community Builder',
      description: 'Served 5 different communities',
      icon: Users,
      color: 'bg-blue-500',
      earned: true,
      date: '2024-10-28'
    },
    {
      title: 'Impact Maker',
      description: 'Positively impacted 1000+ lives',
      icon: Heart,
      color: 'bg-red-500',
      earned: true,
      date: '2024-11-20'
    },
    {
      title: 'Sustainability Advocate',
      description: 'Led 5 environmental programs',
      icon: Globe,
      color: 'bg-emerald-500',
      earned: false,
      progress: 60
    },
    {
      title: 'Volunteer Leader',
      description: '500 volunteer hours logged',
      icon: Award,
      color: 'bg-orange-500',
      earned: false,
      progress: 85
    },
    {
      title: 'Change Catalyst',
      description: 'Initiated 3 new programs',
      icon: Target,
      color: 'bg-purple-500',
      earned: false,
      progress: 33
    }
  ];

  const impactStories = [
    {
      title: 'Digital Literacy Success',
      description: 'Empowered 245 rural women with digital skills',
      location: 'Maharashtra',
      impact: '95% employment rate increase',
      thumbnail: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Child Education Initiative',
      description: 'Provided quality education to 320 children',
      location: 'West Bengal',
      impact: '100% literacy achievement',
      thumbnail: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Women Empowerment Program',
      description: 'Leadership training for 180 women',
      location: 'Delhi',
      impact: '75% started own businesses',
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Impact Dashboard</h1>
        <p className="text-gray-600 mt-1">Measuring the change we create together</p>
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
          <h2 className="text-xl font-semibold mb-6">Impact Badges</h2>
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
                              className="bg-green-500 h-2 rounded-full transition-all duration-300"
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

        {/* Impact Stories */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Success Stories</h2>
          <div className="space-y-4">
            {impactStories.map((story, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors">
                <div className="flex items-center space-x-4">
                  <img 
                    src={story.thumbnail} 
                    alt={story.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{story.title}</h3>
                    <p className="text-sm text-gray-600">{story.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>📍 {story.location}</span>
                      <span className="text-green-600 font-medium">{story.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors">
              View All Stories
            </button>
          </div>
        </div>
      </div>

      {/* Current Mission */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Current Mission</h2>
            <p className="text-green-100">Sustainable Development Goals Track</p>
          </div>
          <Target className="w-8 h-8 text-yellow-300" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Quality Education', completed: true, sdg: 'SDG 4' },
            { title: 'Gender Equality', completed: true, sdg: 'SDG 5' },
            { title: 'Decent Work', completed: false, current: true, sdg: 'SDG 8' },
            { title: 'Reduced Inequalities', completed: false, sdg: 'SDG 10' }
          ].map((goal, index) => (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 ${
                goal.completed 
                  ? 'bg-green-400' 
                  : goal.current 
                    ? 'bg-yellow-400 text-gray-800' 
                    : 'bg-green-400/50'
              }`}>
                {goal.completed ? (
                  <Heart className="w-6 h-6" />
                ) : (
                  <span className="font-semibold text-xs">{goal.sdg}</span>
                )}
              </div>
              <p className="text-sm font-medium">{goal.title}</p>
              {goal.current && <p className="text-xs text-green-200 mt-1">In Progress</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Global Impact */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
        <div className="text-center">
          <Globe className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Global Impact</h2>
          <p className="text-red-100 text-lg max-w-3xl mx-auto">
            Together, we're building a more equitable world through education, empowerment, and sustainable development initiatives that create lasting change in communities worldwide.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div>
              <p className="text-3xl font-bold">18</p>
              <p className="text-red-200 text-sm">Countries</p>
            </div>
            <div>
              <p className="text-3xl font-bold">2.4K+</p>
              <p className="text-red-200 text-sm">Lives Changed</p>
            </div>
            <div>
              <p className="text-3xl font-bold">95%</p>
              <p className="text-red-200 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;