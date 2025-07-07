import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Calendar, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'on-hold' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  progress: number;
  dueDate: string;
  assignedMembers: string[];
  tasks: number;
  completedTasks: number;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'Modern e-commerce platform with React and Node.js',
      status: 'active',
      priority: 'high',
      progress: 75,
      dueDate: '2024-03-15',
      assignedMembers: ['John Doe', 'Jane Smith', 'Mike Johnson'],
      tasks: 45,
      completedTasks: 34
    },
    {
      id: '2',
      name: 'Mobile App Development',
      description: 'Cross-platform mobile application using React Native',
      status: 'active',
      priority: 'medium',
      progress: 45,
      dueDate: '2024-04-20',
      assignedMembers: ['Jane Smith', 'Sarah Wilson'],
      tasks: 32,
      completedTasks: 14
    },
    {
      id: '3',
      name: 'API Refactoring',
      description: 'Modernize legacy API endpoints and improve performance',
      status: 'completed',
      priority: 'low',
      progress: 100,
      dueDate: '2024-02-28',
      assignedMembers: ['Mike Johnson'],
      tasks: 18,
      completedTasks: 18
    },
    {
      id: '4',
      name: 'Cloud Migration',
      description: 'Migrate existing infrastructure to AWS',
      status: 'on-hold',
      priority: 'high',
      progress: 30,
      dueDate: '2024-05-10',
      assignedMembers: ['Sarah Wilson', 'John Doe'],
      tasks: 25,
      completedTasks: 8
    }
  ];

  const statusColors = {
    active: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'on-hold': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  const priorityColors = {
    low: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
    medium: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>New Project</span>
        </button>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{projects.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-green-600">
                {projects.filter(p => p.status === 'active').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Projects</div>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {projects.filter(p => p.status === 'completed').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-orange-600">
                {projects.filter(p => p.status === 'on-hold').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">On Hold</div>
            </div>
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
        {['all', 'active', 'completed', 'on-hold'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === status
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <div className="flex space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[project.status]}`}>
                  {project.status}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${priorityColors[project.priority]}`}>
                  {project.priority}
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {project.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Progress</span>
                <span className="font-medium text-gray-900 dark:text-white">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {new Date(project.dueDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {project.assignedMembers.length} members
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Tasks</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {project.completedTasks}/{project.tasks}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;