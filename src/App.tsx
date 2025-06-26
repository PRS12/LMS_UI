import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Programs from './components/Programs';
import ProgramDetail from './components/ProgramDetail';
import Impact from './components/Impact';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showProgramDetail, setShowProgramDetail] = useState(false);

  const renderContent = () => {
    if (showProgramDetail) {
      return <ProgramDetail onBack={() => setShowProgramDetail(false)} />;
    }

    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'programs':
        return <Programs />;
      case 'impact':
        return <Impact />;
      case 'calendar':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Event Calendar</h2>
            <p className="text-gray-600">Schedule and track community events and training sessions</p>
          </div>
        );
      case 'community':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Community Hub</h2>
            <p className="text-gray-600">Connect with volunteers, beneficiaries, and partners</p>
          </div>
        );
      case 'profile':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile Settings</h2>
            <p className="text-gray-600">Manage your volunteer profile and preferences</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Settings</h2>
            <p className="text-gray-600">Configure your learning and volunteer experience</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="ml-64 min-h-screen">
        <header className="bg-white shadow-sm border-b border-gray-100 px-6 py-4 sticky top-0 z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search programs, resources..."
                  className="w-80 pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors relative">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5V3h0z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;