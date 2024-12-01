import React, { useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';

const ManageBranches = () => {
  const [branches, setBranches] = useState([]);
  const [branchName, setBranchName] = useState('');

  const addBranch = () => {
    if (branchName) {
      setBranches([...branches, branchName]);
      setBranchName('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <h2 className="text-3xl font-bold mb-4">Manage Branches</h2>
          <div className="bg-white p-6 shadow rounded mb-6">
            <input
              type="text"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              placeholder="Enter branch name"
              className="border p-2 rounded w-full mb-3"
            />
            <button
              onClick={addBranch}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Branch
            </button>
          </div>
          <h3 className="text-xl font-bold mb-4">Branch List</h3>
          <ul className="bg-white shadow rounded p-4">
            {branches.map((branch, index) => (
              <li key={index} className="p-2 border-b last:border-none">
                {branch}
              </li>
            ))}
          </ul>
        </main>
      </div>
      <AdminFooter />
    </div>
  );
};

export default ManageBranches;
