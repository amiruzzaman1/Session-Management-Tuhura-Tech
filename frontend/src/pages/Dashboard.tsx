import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="/logo.svg" alt="Tuhura Tech" className="h-12 w-auto" />
              <h1 className="text-2xl font-bold text-gray-900">Session Management</h1>
            </div>
            <button
              onClick={handleLogout}
              className="btn-secondary"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Card */}
        <div className="card mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome back, {user?.email}!
          </h2>
          <p className="text-gray-600">
            You're successfully logged in to the Session Management System.
          </p>
        </div>

        {/* User Info Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Profile</h3>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">User ID:</span>
                <span className="ml-2 text-gray-600">{user?.id}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Email:</span>
                <span className="ml-2 text-gray-600">{user?.email}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Roles:</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {user?.roles.map((role) => (
                    <span
                      key={role}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-tuhura-lightBlue text-tuhura-darkBlue"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Session Info</h3>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Status:</span>
                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Session Type:</span>
                <span className="ml-2 text-gray-600">JWT Bearer Token</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Login Time:</span>
                <span className="ml-2 text-gray-600">{new Date().toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            🎓 For Students & Developers
          </h3>
          <p className="text-blue-700">
            This is a demonstration of a secure session management system with separate frontend and backend layers.
            The API layer follows OpenAPI specifications, allowing independent modification of either the frontend
            (React + TypeScript) or backend (Python + FastAPI).
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
