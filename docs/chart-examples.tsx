import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
// chat examples
// Example data sets for each chart type
export const chartExamples = {
  // Bar Chart Example: Sprint Velocity Comparison
  barChart: {
    title: "Sprint Velocity by Team (Story Points)",
    data: [
      { team: "Frontend", velocity: 45, target: 40, color: "#3B82F6" },
      { team: "Backend", velocity: 38, target: 35, color: "#8B5CF6" },
      { team: "Mobile", velocity: 32, target: 30, color: "#10B981" },
      { team: "DevOps", velocity: 28, target: 25, color: "#F59E0B" },
      { team: "QA", velocity: 35, target: 30, color: "#EF4444" }
    ],
    insights: [
      "Frontend team exceeding target by 12.5%",
      "All teams meeting or exceeding velocity targets",
      "Mobile team showing consistent improvement"
    ]
  },

  // Pie Chart Example: Project Status Distribution
  pieChart: {
    title: "Project Status Distribution (Q1 2024)",
    total: 48,
    data: [
      { status: "Active", count: 18, percentage: 37.5, color: "#3B82F6" },
      { status: "Completed", count: 15, percentage: 31.3, color: "#10B981" },
      { status: "Planning", count: 8, percentage: 16.7, color: "#F59E0B" },
      { status: "On Hold", count: 5, percentage: 10.4, color: "#6B7280" },
      { status: "Cancelled", count: 2, percentage: 4.2, color: "#EF4444" }
    ],
    insights: [
      "68.8% of projects are active or completed",
      "Low cancellation rate (4.2%) indicates good project selection",
      "16.7% in planning phase suggests healthy pipeline"
    ]
  },

  // Line Chart Example: Team Velocity Trend
  lineChart: {
    title: "Team Velocity Trend (Last 12 Sprints)",
    data: [
      { sprint: "Sprint 1", frontend: 32, backend: 28, mobile: 25 },
      { sprint: "Sprint 2", frontend: 38, backend: 31, mobile: 27 },
      { sprint: "Sprint 3", frontend: 35, backend: 29, mobile: 29 },
      { sprint: "Sprint 4", frontend: 42, backend: 35, mobile: 31 },
      { sprint: "Sprint 5", frontend: 45, backend: 38, mobile: 32 },
      { sprint: "Sprint 6", frontend: 41, backend: 36, mobile: 34 }
    ],
    annotations: [
      { sprint: "Sprint 4", event: "New team member onboarded" },
      { sprint: "Sprint 6", event: "Holiday period impact" }
    ],
    insights: [
      "Frontend team shows 28% velocity improvement",
      "All teams trending upward with minor fluctuations",
      "Mobile team most consistent with steady growth"
    ]
  },

  // Area Chart Example: Cumulative Story Points
  areaChart: {
    title: "Cumulative Story Points by Team (Sprint Progress)",
    data: [
      { sprint: "Sprint 1", frontend: 45, backend: 38, mobile: 32, total: 115 },
      { sprint: "Sprint 2", frontend: 90, backend: 76, mobile: 64, total: 230 },
      { sprint: "Sprint 3", frontend: 135, backend: 114, mobile: 96, total: 345 },
      { sprint: "Sprint 4", frontend: 180, backend: 152, mobile: 128, total: 460 },
      { sprint: "Sprint 5", frontend: 225, backend: 190, mobile: 160, total: 575 },
      { sprint: "Sprint 6", frontend: 270, backend: 228, mobile: 192, total: 690 }
    ],
    colors: {
      frontend: "#3B82F6",
      backend: "#8B5CF6",
      mobile: "#10B981"
    },
    insights: [
      "Total delivery of 690 story points over 6 sprints",
      "Frontend team contributing 39% of total delivery",
      "Consistent delivery pace across all teams"
    ]
  },

  // Radar Chart Example: Team Performance Assessment
  radarChart: {
    title: "Team Performance Assessment (Q1 2024)",
    dimensions: [
      "Technical Skills",
      "Communication",
      "Problem Solving",
      "Collaboration",
      "Innovation",
      "Delivery Speed"
    ],
    teams: [
      {
        name: "Frontend Team",
        scores: [85, 78, 82, 90, 75, 88],
        color: "#3B82F6"
      },
      {
        name: "Backend Team",
        scores: [90, 72, 88, 85, 80, 82],
        color: "#8B5CF6"
      },
      {
        name: "Mobile Team",
        scores: [80, 85, 75, 88, 82, 78],
        color: "#10B981"
      }
    ],
    benchmark: [80, 75, 80, 85, 70, 85],
    insights: [
      "Frontend team excels in collaboration (90/100)",
      "Backend team leads in technical skills (90/100)",
      "Mobile team strongest in communication (85/100)",
      "All teams above benchmark in most areas"
    ]
  },

  // Doughnut Chart Example: Sprint Progress
  doughnutChart: {
    title: "Sprint Progress Overview",
    centerMetric: {
      value: "73%",
      label: "Sprint Completion",
      subtitle: "156 of 214 points"
    },
    segments: [
      { label: "Completed", value: 156, percentage: 73, color: "#10B981" },
      { label: "In Progress", value: 32, percentage: 15, color: "#F59E0B" },
      { label: "To Do", value: 26, percentage: 12, color: "#6B7280" }
    ],
    total: 214,
    insights: [
      "On track for sprint completion",
      "88% of work started or completed",
      "Healthy distribution of work in progress"
    ]
  },

  // Mixed Chart Example: Velocity vs Quality
  mixedChart: {
    title: "Sprint Performance: Velocity vs Quality",
    timeRange: "Last 8 sprints",
    primaryChart: {
      type: "bar",
      metric: "Story Points Completed",
      data: [32, 38, 35, 42, 45, 41, 39, 44],
      color: "#3B82F6",
      yAxis: "left"
    },
    secondaryChart: {
      type: "line",
      metric: "Defect Rate (%)",
      data: [8.5, 6.2, 7.1, 4.8, 3.9, 5.2, 4.1, 3.5],
      color: "#EF4444",
      yAxis: "right"
    },
    insights: [
      "Velocity increased 37% while defect rate decreased 59%",
      "Inverse correlation between velocity and defects",
      "Quality improvements alongside productivity gains"
    ]
  },

  // Calendar Heatmap Example: Team Activity
  calendarHeatmap: {
    title: "Team Activity Heatmap (Last 6 Months)",
    metric: "Story Points Completed",
    timeRange: "2024-01-01 to 2024-06-30",
    colorScale: {
      none: "#F3F4F6",
      low: "#DBEAFE",
      medium: "#93C5FD",
      high: "#3B82F6",
      highest: "#1E40AF"
    },
    patterns: [
      "Higher activity on Tuesdays-Thursdays",
      "Reduced activity during holiday periods",
      "Sprint end spikes visible every 2 weeks"
    ],
    insights: [
      "Peak productivity mid-week",
      "Clear sprint cycle patterns",
      "Consistent team engagement over 6 months"
    ]
  }
};

// React component examples for each chart type
export const ChartComponents = {
  // Bar Chart Component
  BarChartExample: () => {
    const data = chartExamples.barChart.data;
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">{chartExamples.barChart.title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="team" />
            <YAxis />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="velocity" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="target" fill="#E5E7EB" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  },

  // Pie Chart Component
  PieChartExample: () => {
    const data = chartExamples.pieChart.data;
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">{chartExamples.pieChart.title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="count"
              label={({ status, percentage }) => `${status}: ${percentage}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  },

  // Line Chart Component
  LineChartExample: () => {
    const data = chartExamples.lineChart.data;
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">{chartExamples.lineChart.title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="sprint" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="frontend" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="backend" 
              stroke="#8B5CF6" 
              strokeWidth={3}
              dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="mobile" 
              stroke="#10B981" 
              strokeWidth={3}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },

  // Area Chart Component
  AreaChartExample: () => {
    const data = chartExamples.areaChart.data;
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">{chartExamples.areaChart.title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="sprint" />
            <YAxis />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="frontend" 
              stackId="1" 
              stroke="#3B82F6" 
              fill="#3B82F6" 
              fillOpacity={0.6}
            />
            <Area 
              type="monotone" 
              dataKey="backend" 
              stackId="1" 
              stroke="#8B5CF6" 
              fill="#8B5CF6" 
              fillOpacity={0.6}
            />
            <Area 
              type="monotone" 
              dataKey="mobile" 
              stackId="1" 
              stroke="#10B981" 
              fill="#10B981" 
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  },

  // Radar Chart Component
  RadarChartExample: () => {
    const data = chartExamples.radarChart.dimensions.map((dimension, index) => ({
      skill: dimension,
      frontend: chartExamples.radarChart.teams[0].scores[index],
      backend: chartExamples.radarChart.teams[1].scores[index],
      mobile: chartExamples.radarChart.teams[2].scores[index],
      fullMark: 100
    }));

    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">{chartExamples.radarChart.title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <PolarRadiusAxis />
            <Radar
              name="Frontend Team"
              dataKey="frontend"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.3}
            />
            <Radar
              name="Backend Team"
              dataKey="backend"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
            <Radar
              name="Mobile Team"
              dataKey="mobile"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
};

// Usage examples and best practices
export const usageGuidelines = {
  barChart: {
    bestFor: [
      "Comparing discrete categories",
      "Ranking performance metrics",
      "Showing progress against targets",
      "Resource allocation visualization"
    ],
    avoid: [
      "Too many categories (>10)",
      "Non-zero baseline without justification",
      "3D effects or unnecessary styling",
      "Inconsistent bar widths"
    ]
  },
  
  pieChart: {
    bestFor: [
      "Parts of a whole (3-6 categories)",
      "Resource distribution",
      "Status breakdowns",
      "Simple proportional data"
    ],
    avoid: [
      "More than 6-7 segments",
      "Comparing multiple pie charts",
      "3D effects or tilted views",
      "Starting segments at random positions"
    ]
  },
  
  lineChart: {
    bestFor: [
      "Trends over time",
      "Continuous data",
      "Multiple metric comparison",
      "Pattern identification"
    ],
    avoid: [
      "Too many overlapping lines",
      "Inconsistent time intervals",
      "Missing data without explanation",
      "Y-axis manipulation"
    ]
  },
  
  areaChart: {
    bestFor: [
      "Cumulative progress",
      "Stacked categories",
      "Volume emphasis",
      "Proportional relationships"
    ],
    avoid: [
      "Too many thin areas",
      "Changing stack order",
      "Similar colors for adjacent areas",
      "Missing baseline reference"
    ]
  },
  
  radarChart: {
    bestFor: [
      "Multi-dimensional comparison",
      "Skill assessments",
      "Balanced scorecards",
      "Performance profiles"
    ],
    avoid: [
      "Too many dimensions (>8)",
      "Different scales per dimension",
      "Arbitrary dimension ordering",
      "Missing context or benchmarks"
    ]
  }
};

export default chartExamples;