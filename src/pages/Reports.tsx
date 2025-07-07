import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Filter, Calendar, FileText, TrendingUp, Users, Clock } from 'lucide-react';

const Reports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const reportData = [
    {
      title: 'Monthly Performance Report',
      description: 'Comprehensive overview of team and project performance',
      type: 'PDF',
      size: '2.4 MB',
      date: '2024-02-01',
      icon: TrendingUp,
      color: 'bg-blue-500'
    },
    {
      title: 'Team Productivity Analysis',
      description: 'Detailed analysis of individual and team productivity metrics',
      type: 'Excel',
      size: '1.8 MB',
      date: '2024-02-01',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Project Timeline Report',
      description: 'Project milestones and timeline analysis',
      type: 'PDF',
      size: '3.2 MB',
      date: '2024-02-01',
      icon: Clock,
      color: 'bg-purple-500'
    },
    {
      title: 'Resource Utilization',
      description: 'Analysis of resource allocation and utilization',
      type: 'PDF',
      size: '1.9 MB',
      date: '2024-02-01',
      icon: FileText,
      color: 'bg-orange-500'
    }
  ];

  const metrics = [
    { label: 'Total Reports Generated', value: '2,847', change: '+12%' },
    { label: 'Average Response Time', value: '2.3s', change: '-8%' },
    { label: 'Data Accuracy', value: '99.7%', change: '+0.3%' },
    { label: 'System Uptime', value: '99.99%', change: '+0.01%' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Reports</h1>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-5 h-5" />
            <span>Export All</span>
          </button>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{metric.label}</div>
            <div className={`text-sm mt-2 ${
              metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {metric.change} from last period
            </div>
          </motion.div>
        ))}
      </div>

      {/* Period Selection */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Report Period</h3>
        <div className="flex space-x-3">
          {['week', 'month', 'quarter', 'year'].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedPeriod === period
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Available Reports */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Available Reports</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reportData.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${report.color} rounded-lg flex items-center justify-center`}>
                    <report.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {report.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {report.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{report.type}</span>
                        <span>{report.size}</span>
                        <span>{new Date(report.date).toLocaleDateString()}</span>
                      </div>
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                        <Download className="w-4 h-4" />
                        <span className="text-sm">Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Generate Custom Report */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Generate Custom Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Report Type
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
              <option>Performance Report</option>
              <option>Team Analysis</option>
              <option>Project Timeline</option>
              <option>Resource Utilization</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Date Range
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Format
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>
        </div>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Generate Report
        </button>
      </div>
    </motion.div>
  );
};

export default Reports;