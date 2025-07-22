import React from 'react';
import { motion } from 'framer-motion';
import CustomRadarChart from '../components/charts/RadarChart';
import CustomLineChart from '../components/charts/LineChart';
import CustomBarChart from '../components/charts/BarChart';
import { useDashboard } from '../contexts/DashboardContext';
// analytics
const Analytics: React.FC = () => {
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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Export Data
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomRadarChart data={data.skillMapping} title="Team Skills Overview" />
        <CustomLineChart data={data.projectsData} title="Performance Metrics" />
        <CustomBarChart data={data.projectsData} title="Project Completion Rate" />
        
        {/* Activity Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Activity Heatmap</h3>
          <div className="grid grid-cols-7 gap-1">
            {data.activityData.slice(0, 28).map((day, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-sm ${
                  day.commits > 5 ? 'bg-green-500' :
                  day.commits > 3 ? 'bg-green-400' :
                  day.commits > 1 ? 'bg-green-300' :
                  day.commits > 0 ? 'bg-green-200' :
                  'bg-gray-200 dark:bg-gray-600'
                }`}
                title={`${day.date}: ${day.commits} commits, ${day.tasks} tasks`}
              />
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
            <span>Less</span>
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-gray-200 dark:bg-gray-600 rounded-sm"></div>
              <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
              <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
              <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
              <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
            </div>
            <span>More</span>
          </div>
        </motion.div>
      </div>

      {/* Detailed Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">87%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Project Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">24%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Performance Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">156</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tasks Completed This Month</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Analytics;