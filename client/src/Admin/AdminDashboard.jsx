import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiUsers, FiVideo, FiBarChart2, FiTrendingUp } from 'react-icons/fi';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalVideos: 0,
    newUsersThisMonth: 0,
    videosAddedThisWeek: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const [usersRes, videosRes] = await Promise.all([
          axios.get('https://mn-tech-pvltd-596.onrender.com/api/users', {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get('https://mn-tech-pvltd-596.onrender.com/api/video_upload', {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);

        // Mock data for demonstration - replace with actual API data
        setStats({
          totalUsers: usersRes.data?.pagination?.totalUsers || 0,
          totalVideos: videosRes.data?.length || 0,
          newUsersThisMonth: Math.floor(Math.random() * 50) + 10, // Replace with actual data
          videosAddedThisWeek: Math.floor(Math.random() * 20) + 5 // Replace with actual data
        });
      } catch (err) {
        setError(err.message);
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // Chart data
  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Users',
        data: [12, 19, 8, 15, 22, 17],
        backgroundColor: 'rgba(99, 102, 241, 0.6)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 1,
      },
    ],
  };

  const videoCategoriesData = {
    labels: ['Tutorials', 'Presentations', 'Interviews', 'Events', 'Others'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          'rgba(99, 102, 241, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(239, 68, 68, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
        Error loading dashboard: {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<FiUsers className="text-indigo-500" size={24} />}
          title="Total Users"
          value={stats.totalUsers}
          change={stats.newUsersThisMonth}
          changeText="this month"
          bgColor="bg-indigo-50"
        />
        <StatCard 
          icon={<FiVideo className="text-blue-500" size={24} />}
          title="Total Videos"
          value={stats.totalVideos}
          change={stats.videosAddedThisWeek}
          changeText="this week"
          bgColor="bg-blue-50"
        />
        <StatCard 
          icon={<FiTrendingUp className="text-green-500" size={24} />}
          title="New Users"
          value={stats.newUsersThisMonth}
          change={12} // % change
          changeText="from last month"
          bgColor="bg-green-50"
        />
        <StatCard 
          icon={<FiBarChart2 className="text-yellow-500" size={24} />}
          title="Video Uploads"
          value={stats.videosAddedThisWeek}
          change={8} // % change
          changeText="from last week"
          bgColor="bg-yellow-50"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">User Growth</h3>
          <div className="h-64">
            <Bar 
              data={userGrowthData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Video Categories</h3>
          <div className="h-64">
            <Pie 
              data={videoCategoriesData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
              <div className="bg-indigo-100 p-2 rounded-full mr-4">
                <FiUsers className="text-indigo-500" />
              </div>
              <div>
                <p className="font-medium">New user registered</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// StatCard Component
const StatCard = ({ icon, title, value, change, changeText, bgColor }) => {
  const isPositive = change >= 0;

  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-sm`}>
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className={`mt-4 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        <span className="font-medium">
          {isPositive ? '+' : ''}{change}%
        </span>{' '}
        <span className="text-gray-500">{changeText}</span>
      </div>
    </div>
  );
};

export default AdminDashboard;