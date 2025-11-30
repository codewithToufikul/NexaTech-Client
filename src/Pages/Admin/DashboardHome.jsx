import React, { useState, useEffect } from 'react';
import { adminAPI } from '../../services/api';
import { Briefcase, FolderKanban, Mail, TrendingUp, Loader } from 'lucide-react';

const DashboardHome = () => {
  const [stats, setStats] = useState({
    services: 0,
    portfolio: 0,
    contacts: 0,
    newContacts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [servicesRes, portfolioRes, contactsRes] = await Promise.all([
        adminAPI.getAllServices(),
        adminAPI.getAllPortfolio(),
        adminAPI.getAllContacts(),
      ]);

      const newContacts = contactsRes.contacts.filter(
        (c) => c.status === 'new'
      ).length;

      setStats({
        services: servicesRes.services?.length || 0,
        portfolio: portfolioRes.portfolio?.length || 0,
        contacts: contactsRes.contacts?.length || 0,
        newContacts,
      });
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Services',
      value: stats.services,
      icon: Briefcase,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Portfolio Items',
      value: stats.portfolio,
      icon: FolderKanban,
      color: 'green',
      gradient: 'from-green-500 to-green-600',
    },
    {
      title: 'Total Contacts',
      value: stats.contacts,
      icon: Mail,
      color: 'yellow',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      title: 'New Contacts',
      value: stats.newContacts,
      icon: TrendingUp,
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening with your content.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-${stat.color}-500/20 rounded-lg`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
              </div>
              <h3 className="text-gray-400 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg text-left transition-colors">
            <Briefcase className="w-5 h-5 text-blue-400 mb-2" />
            <h3 className="text-white font-medium mb-1">Add New Service</h3>
            <p className="text-gray-400 text-sm">Create a new service offering</p>
          </button>
          <button className="p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg text-left transition-colors">
            <FolderKanban className="w-5 h-5 text-green-400 mb-2" />
            <h3 className="text-white font-medium mb-1">Add Portfolio Item</h3>
            <p className="text-gray-400 text-sm">Showcase a new project</p>
          </button>
          <button className="p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg text-left transition-colors">
            <Mail className="w-5 h-5 text-yellow-400 mb-2" />
            <h3 className="text-white font-medium mb-1">View Messages</h3>
            <p className="text-gray-400 text-sm">Check new contact submissions</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

