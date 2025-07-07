import React, { createContext, useContext, useState, useEffect } from 'react';
// Dashboard context
interface DashboardData {
  totalProjects: number;
  activeProjects: number;
  completedTasks: number;
  teamMembers: number;
  revenue: number;
  projectsData: Array<{ month: string; projects: number; revenue: number }>;
  teamDistribution: Array<{ role: string; count: number; color: string }>;
  taskProgress: Array<{ name: string; completed: number; total: number }>;
  skillMapping: Array<{ skill: string; level: number; fullMark: number }>;
  activityData: Array<{ date: string; commits: number; tasks: number }>;
}

interface DashboardContextType {
  data: DashboardData;
  refreshData: () => void;
  isLoading: boolean;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DashboardData>({
    totalProjects: 0,
    activeProjects: 0,
    completedTasks: 0,
    teamMembers: 0,
    revenue: 0,
    projectsData: [],
    teamDistribution: [],
    taskProgress: [],
    skillMapping: [],
    activityData: []
  });

  const generateMockData = (): DashboardData => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const roles = [
      { role: 'Frontend Engineer', count: 8, color: '#3B82F6' },
      { role: 'Backend Engineer', count: 6, color: '#8B5CF6' },
      { role: 'Full Stack Engineer', count: 4, color: '#10B981' },
      { role: 'System Administrator', count: 2, color: '#F59E0B' }
    ];

    return {
      totalProjects: Math.floor(Math.random() * 50) + 25,
      activeProjects: Math.floor(Math.random() * 15) + 10,
      completedTasks: Math.floor(Math.random() * 200) + 150,
      teamMembers: 20,
      revenue: Math.floor(Math.random() * 500000) + 250000,
      projectsData: months.map(month => ({
        month,
        projects: Math.floor(Math.random() * 15) + 5,
        revenue: Math.floor(Math.random() * 100000) + 50000
      })),
      teamDistribution: roles,
      taskProgress: [
        { name: 'Frontend Development', completed: Math.floor(Math.random() * 80) + 20, total: 100 },
        { name: 'Backend Development', completed: Math.floor(Math.random() * 70) + 30, total: 100 },
        { name: 'Testing', completed: Math.floor(Math.random() * 60) + 40, total: 100 },
        { name: 'Deployment', completed: Math.floor(Math.random() * 90) + 10, total: 100 }
      ],
      skillMapping: [
        { skill: 'React', level: Math.floor(Math.random() * 30) + 70, fullMark: 100 },
        { skill: 'Node.js', level: Math.floor(Math.random() * 25) + 75, fullMark: 100 },
        { skill: 'TypeScript', level: Math.floor(Math.random() * 20) + 80, fullMark: 100 },
        { skill: 'Python', level: Math.floor(Math.random() * 35) + 65, fullMark: 100 },
        { skill: 'AWS', level: Math.floor(Math.random() * 40) + 60, fullMark: 100 },
        { skill: 'Docker', level: Math.floor(Math.random() * 30) + 70, fullMark: 100 }
      ],
      activityData: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        commits: Math.floor(Math.random() * 10),
        tasks: Math.floor(Math.random() * 5)
      }))
    };
  };

  const refreshData = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setData(generateMockData());
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    refreshData();
    // Set up real-time data updates
    const interval = setInterval(refreshData, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardContext.Provider value={{ data, refreshData, isLoading }}>
      {children}
    </DashboardContext.Provider>
  );
};