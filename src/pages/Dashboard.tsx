import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, FolderOpen, TrendingUp, DollarSign } from 'lucide-react';
import StatCard from '../components/StatCard';
import CustomBarChart from '../components/charts/BarChart';
import CustomPieChart from '../components/charts/PieChart';
import CustomLineChart from '../components/charts/LineChart';
import ProgressChart from '../components/charts/ProgressChart';
import { useDashboard } from '../contexts/DashboardContext';
// Dashboard
const Dashboard: React.FC = () => {
  const { data, isLoading } = useDashboard();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Projects"
          value={data.totalProjects}
          icon={FolderOpen}
          color="bg-blue-500"
          trend={12}
          delay={0.1}
        />
        <StatCard
          title="Active Projects"
          value={data.activeProjects}
          icon={BarChart3}
          color="bg-green-500"
          trend={8}
          delay={0.2}
        />
        <StatCard
          title="Team Members"
          value={data.teamMembers}
          icon={Users}
          color="bg-purple-500"
          trend={-2}
          delay={0.3}
        />
        <StatCard
          title="Revenue"
          value={`$${data.revenue.toLocaleString()}`}
          icon={DollarSign}
          color="bg-orange-500"
          trend={15}
          delay={0.4}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomBarChart data={data.projectsData} title="Monthly Projects" />
        <CustomPieChart data={data.teamDistribution} title="Team Distribution" />
        <CustomLineChart data={data.projectsData} title="Revenue Trend" />
        <ProgressChart data={data.taskProgress} title="Task Progress" />
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { user: 'John Doe', action: 'completed task "API Integration"', time: '2 minutes ago' },
            { user: 'Jane Smith', action: 'created new project "Mobile App"', time: '15 minutes ago' },
            { user: 'Mike Johnson', action: 'updated team member role', time: '1 hour ago' },
            { user: 'Sarah Wilson', action: 'deployed to production', time: '2 hours ago' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">{activity.user.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 dark:text-white">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;