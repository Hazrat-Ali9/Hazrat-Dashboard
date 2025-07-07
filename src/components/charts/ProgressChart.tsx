import React from 'react';
import { motion } from 'framer-motion';

interface ProgressChartProps {
  data: Array<{ name: string; completed: number; total: number }>;
  title: string;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="space-y-4">
        {data.map((item, index) => {
          const percentage = (item.completed / item.total) * 100;
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                <span className="text-gray-500 dark:text-gray-400">{item.completed}/{item.total}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProgressChart;