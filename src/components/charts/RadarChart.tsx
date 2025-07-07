import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

interface RadarChartProps {
  data: Array<{ skill: string; level: number; fullMark: number }>;
  title: string;
}

const CustomRadarChart: React.FC<RadarChartProps> = ({ data, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" className="text-gray-600 dark:text-gray-400" />
          <PolarRadiusAxis />
          <Radar
            name="Skill Level"
            dataKey="level"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default CustomRadarChart;