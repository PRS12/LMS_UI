import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Play,
  BookOpen,
  Heart,
  ChevronDown,
  MapPin,
  Target
} from 'lucide-react';

const Programs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'education', label: 'Education' },
    { id: 'health', label: 'Health & Wellness' },
    { id: 'empowerment', label: 'Women Empowerment' },
    { id: 'environment', label: 'Environment' },
    { id: 'skills', label: 'Skill Development' },
  ];

  const programs = [
    {
      id: 1,
      title: 'Digital Literacy for Rural Communities',
      coordinator: 'Maria Santos',
      category: 'education',
      impact: 4.8,
      beneficiaries: 245,
      duration: '6 months',
      progress: 65,
      thumbnail: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      budget: '$15,000',
      status: 'Active',
      location: 'Rural Maharashtra',
      enrolled: true
    },
    {
      id: 2,
      title: 'Women Empowerment & Leadership',
      coordinator: 'Dr. Priya Sharma',
      category: 'empowerment',
      impact: 4.9,
      beneficiaries: 180,
      duration: '4 months',
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      budget: '$12,500',
      status: 'Planning',
      location: 'Urban Delhi',
      enrolled: false
    },
    {
      id: 3,
      title: 'Child Education Support Program',
      coordinator: 'James Wilson',
      category: 'education',
      impact: 4.7,
      beneficiaries: 320,
      duration: '12 months',
      progress: 90,
      thumbnail: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      budget: '$25,000',
      status: 'Active',
      location: 'West Bengal',
      enrolled: true
    },
    {
      id: 4,
      title: 'Community Health Awareness',
      coordinator: 'Dr. Sarah Ahmed',
      category: 'health',
      impact: 4.6,
      beneficiaries: 450,
      duration: '8 months',
      progress: 25,
      thumbnail: 'https://images.pexels.com/photos/6303773/pexels-photo-6303773.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      budget: '$18,000',
      status: 'Active',
      location: 'Tamil Nadu',
      enrolled: true
    },
    {
      id: 5,
      title: 'Sustainable Agriculture Training',
      coordinator: 'Rajesh Kumar',
      category: 'environment',
      impact: 4.5,
      beneficiaries: 150,
      duration: '6 months',
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      budget: '$20,000',
      status: 'Planning',
      location: 'Punjab',
      enrolled: false
    },
    {
      id: 6,
      title: 'Vocational Skills Development',
      coordinator: 'Anita Patel',
      category: 'skills',
      impact: 4.4,
      beneficiaries: 200,
      duration: '10 months',
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      budget: '$22,000',
      status: 'Planning',
      location: 'Karnataka',
      enrolled: false
    }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.coordinator.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Our Programs</h1>
          <p className="text-gray-600 mt-1">Empowering communities through impactful initiatives</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Program Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map((program) => (
          <div key={program.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden group">
            <div className="relative">
              <img 
                src={program.thumbnail} 
                alt={program.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  program.status === 'Active' ? 'bg-green-100 text-green-800' :
                  program.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {program.status}
                </span>
              </div>
              {program.enrolled && (
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1">
                    <Heart className="w-3 h-3" />
                    <span>Joined</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-green-600 transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">by {program.coordinator}</p>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{program.location}</span>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
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
              </div>

              {program.enrolled && program.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-green-600 font-medium">{program.progress}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${program.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">{program.budget}</span>
                <button className={`px-4 py-2 rounded-xl font-medium transition-colors flex items-center space-x-2 ${
                  program.enrolled 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  {program.enrolled ? (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Continue</span>
                    </>
                  ) : (
                    <>
                      <Heart className="w-4 h-4" />
                      <span>Join</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPrograms.length === 0 && (
        <div className="text-center py-12">
          <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No programs found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Programs;