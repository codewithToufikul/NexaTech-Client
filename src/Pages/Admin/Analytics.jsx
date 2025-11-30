import React from 'react';
import { BarChart3, TrendingUp, Users, Eye } from 'lucide-react';

const Analytics = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-gray-400">View your website analytics and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <Eye className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <h3 className="text-gray-400 text-sm font-medium mb-1">Total Views</h3>
          <p className="text-3xl font-bold text-white">12,345</p>
          <p className="text-green-400 text-sm mt-2">+12% from last month</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <Users className="w-6 h-6 text-green-400" />
            </div>
          </div>
          <h3 className="text-gray-400 text-sm font-medium mb-1">Visitors</h3>
          <p className="text-3xl font-bold text-white">8,234</p>
          <p className="text-green-400 text-sm mt-2">+8% from last month</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-yellow-400" />
            </div>
          </div>
          <h3 className="text-gray-400 text-sm font-medium mb-1">Conversion Rate</h3>
          <p className="text-3xl font-bold text-white">3.2%</p>
          <p className="text-green-400 text-sm mt-2">+0.5% from last month</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-500/20 rounded-lg">
              <BarChart3 className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <h3 className="text-gray-400 text-sm font-medium mb-1">Avg. Session</h3>
          <p className="text-3xl font-bold text-white">4:32</p>
          <p className="text-red-400 text-sm mt-2">-2% from last month</p>
        </div>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Analytics Dashboard</h2>
        <p className="text-gray-400">
          Analytics integration coming soon. Connect Google Analytics or other analytics services to view detailed insights.
        </p>
      </div>
    </div>
  );
};

export default Analytics;

