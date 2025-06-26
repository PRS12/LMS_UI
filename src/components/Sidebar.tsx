import React from 'react';
import { 
  Home, 
  BookOpen, 
  Calendar, 
  TrendingUp, 
  Users, 
  Settings, 
  User,
  Heart,
  Search
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'programs', label: 'Programs', icon: BookOpen },
    { id: 'calendar', label: 'Events', icon: Calendar },
    { id: 'impact', label: 'Impact', icon: TrendingUp },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0 z-30">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">ImpactLearn</h1>
            <p className="text-sm text-gray-500">NGO Learning Hub</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                activeTab === item.id
                  ? 'border-r-3 border-green-500 bg-green-50 text-green-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 text-white">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium">Become a Sponsor</span>
          </div>
          <p className="text-xs mt-1 opacity-90">Support our mission</p>
          <button className="mt-2 bg-white text-green-600 px-3 py-1 rounded-lg text-xs font-medium hover:bg-gray-100 transition-colors">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;