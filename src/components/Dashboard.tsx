import React from 'react';
import { 
  Clock, 
  TrendingUp, 
  BookOpen, 
  Heart,
  Play,
  ChevronRight,
  Calendar,
  Users,
  Target,
  Globe
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Active Programs', value: '24', icon: BookOpen, color: 'bg-green-500' },
    { label: 'Lives Impacted', value: '1,247', icon: Heart, color: 'bg-red-500' },
    { label: 'Volunteer Hours', value: '3,420', icon: Clock, color: 'bg-emerald-500' },
    { label: 'Communities Served', value: '18', icon: Globe, color: 'bg-orange-500' },
  ];

  const activePrograms = [
    {
      id: 1,
      title: 'Digital Literacy for Rural Communities',
      progress: 75,
      nextSession: 'Computer Basics Workshop',
      coordinator: 'Maria Santos',
      thumbnail: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Women Empowerment Training',
      progress: 45,
      nextSession: 'Leadership Skills',
      coordinator: 'Dr. Priya Sharma',
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Child Education Support',
      progress: 90,
      nextSession: 'Reading Assessment',
      coordinator: 'James Wilson',
      thumbnail: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const upcomingEvents = [
    { title: 'Community Health Workshop', date: 'Tomorrow', location: 'Village Center' },
    { title: 'Volunteer Training Session', date: 'Dec 15', location: 'Main Office' },
    { title: 'Fundraising Gala', date: 'Dec 18', location: 'City Hall' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, Alex!</h1>
          <p className="text-gray-600 mt-1">Ready to make a difference today?</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-colors flex items-center space-x-2">
            <Play className="w-4 h-4" />
            <span>Continue Program</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Programs */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Active Programs</h2>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {activePrograms.map((program) => (
              <div key={program.id} className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                <img 
                  src={program.thumbnail} 
                  alt={program.title}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{program.title}</h3>
                  <p className="text-sm text-gray-600">{program.coordinator}</p>
                  <p className="text-xs text-green-600 mt-1">Next: {program.nextSession}</p>
                  <div className="mt-2">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${program.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{program.progress}% complete</p>
                  </div>
                </div>
                <Play className="w-8 h-8 text-green-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Upcoming Events</h2>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div>
                    <h3 className="font-semibold text-gray-800">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-red-600">{event.date}</p>
                    <p className="text-xs text-gray-500">Scheduled</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Streak */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Impact Streak</h2>
                <p className="text-red-100 mt-1">Consecutive days of service!</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">12</p>
                <p className="text-red-100 text-sm">Days</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-red-400 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
        <div className="text-center">
          <Target className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-green-100 text-lg max-w-3xl mx-auto">
            Empowering communities through education, skill development, and sustainable programs that create lasting positive change in the lives of those we serve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;