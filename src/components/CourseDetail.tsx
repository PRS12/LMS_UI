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
  Award
} from 'lucide-react';

interface CourseDetailProps {
  onBack: () => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ onBack }) => {
  const [activeLesson, setActiveLesson] = useState(0);

  const course = {
    title: 'Advanced React Development',
    instructor: 'Sarah Johnson',
    rating: 4.8,
    students: 8765,
    duration: '32 hours',
    progress: 65,
    description: 'Master advanced React concepts including hooks, context, performance optimization, and modern patterns. Build production-ready applications with best practices.',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
  };

  const modules = [
    {
      title: 'Getting Started',
      lessons: [
        { title: 'Course Introduction', duration: '5 min', completed: true, type: 'video' },
        { title: 'Setting up the Environment', duration: '12 min', completed: true, type: 'video' },
        { title: 'Project Structure', duration: '8 min', completed: true, type: 'video' }
      ]
    },
    {
      title: 'Advanced Hooks',
      lessons: [
        { title: 'useState and useEffect Deep Dive', duration: '25 min', completed: true, type: 'video' },
        { title: 'Custom Hooks', duration: '18 min', completed: true, type: 'video' },
        { title: 'useContext and useReducer', duration: '22 min', completed: false, type: 'video' },
        { title: 'Hooks Best Practices', duration: '15 min', completed: false, type: 'video' }
      ]
    },
    {
      title: 'Performance Optimization',
      lessons: [
        { title: 'React.memo and useMemo', duration: '20 min', completed: false, type: 'video' },
        { title: 'Code Splitting', duration: '16 min', completed: false, type: 'video' },
        { title: 'Performance Assignment', duration: '30 min', completed: false, type: 'assignment' }
      ]
    },
    {
      title: 'Testing and Deployment',
      lessons: [
        { title: 'Unit Testing Components', duration: '28 min', completed: false, type: 'video' },
        { title: 'Integration Testing', duration: '22 min', completed: false, type: 'video' },
        { title: 'Deployment Strategies', duration: '18 min', completed: false, type: 'video' },
        { title: 'Final Project', duration: '2 hours', completed: false, type: 'project' }
      ]
    }
  ];

  const currentLesson = modules.flatMap(module => module.lessons)[activeLesson];

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
          <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
          <p className="text-gray-600">by {course.instructor}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Player */}
          <div className="bg-black rounded-2xl overflow-hidden aspect-video relative">
            <img 
              src={course.thumbnail} 
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <button className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
            </div>
          </div>

          {/* Course Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Course Overview</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{course.description}</p>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Your Progress</span>
                <span className="text-blue-600 font-medium">{course.progress}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Current Lesson */}
          {currentLesson && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Current Lesson</h2>
                <div className="flex items-center space-x-2">
                  {currentLesson.type === 'video' && <Play className="w-5 h-5 text-blue-500" />}
                  {currentLesson.type === 'assignment' && <FileText className="w-5 h-5 text-orange-500" />}
                  {currentLesson.type === 'project' && <Award className="w-5 h-5 text-purple-500" />}
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{currentLesson.title}</h3>
              <p className="text-gray-600 text-sm mb-4">Duration: {currentLesson.duration}</p>
              <div className="flex space-x-3">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition-colors flex items-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Start Lesson</span>
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
          {/* Course Modules */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Course Content</h3>
            <div className="space-y-4">
              {modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="border border-gray-100 rounded-xl">
                  <div className="p-4 bg-gray-50 rounded-t-xl">
                    <h4 className="font-medium text-gray-800">{module.title}</h4>
                    <p className="text-sm text-gray-500">{module.lessons.length} lessons</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const globalIndex = modules.slice(0, moduleIndex).reduce((acc, m) => acc + m.lessons.length, 0) + lessonIndex;
                      return (
                        <button
                          key={lessonIndex}
                          onClick={() => setActiveLesson(globalIndex)}
                          className={`w-full text-left p-4 hover:bg-gray-50 transition-colors flex items-center justify-between ${
                            activeLesson === globalIndex ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            {lesson.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
                                {lesson.type === 'video' && <Play className="w-3 h-3 text-gray-400" />}
                                {lesson.type === 'assignment' && <FileText className="w-3 h-3 text-gray-400" />}
                                {lesson.type === 'project' && <Award className="w-3 h-3 text-gray-400" />}
                              </div>
                            )}
                            <div>
                              <p className="font-medium text-sm">{lesson.title}</p>
                              <p className="text-xs text-gray-500">{lesson.duration}</p>
                            </div>
                          </div>
                          {!lesson.completed && globalIndex > activeLesson && (
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

          {/* Instructor */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Instructor</h3>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">SJ</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{course.instructor}</h4>
                <p className="text-sm text-gray-600">Senior React Developer</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.9 instructor rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;