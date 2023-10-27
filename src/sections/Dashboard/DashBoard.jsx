import React from "react";

const Dashboard = () => {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-extrabold dark:text-gray-300  text-gray-800 mb-4 text-center">Dashboard</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-2 dark:text-gray-400  text-center">Stats</h2>
      <p className="text-lg text-gray-600 dark:text-gray-500 mb-4 text-center">
        Ethereum Total Stats starting from 06 Jan 2024
      </p>
      <p className="text-blue-500 dark:text-blue-800 text-lg mb-8 cursor-pointer text-center">For detailed stats:</p>

      <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
        <h3 className="text-2xl font-bold border-b-2 mb-4 dark:text-gray-800">Overview</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800">AUM</h3>
            <h3 className="text-xl font-semibold text-gray-800">$ZLP Pool</h3>
            <h3 className="text-xl font-semibold text-gray-800">24h Volume</h3>
            <h3 className="text-xl font-semibold text-gray-800">Long Positions</h3>
            <h3 className="text-xl font-semibold text-gray-800">Short Positions</h3>
          </div>
          <div className="text-right">
            <h3 className="text-xl font-semibold text-blue-500">$34</h3>
            <h3 className="text-xl font-semibold text-blue-500">$34</h3>
            <h3 className="text-xl font-semibold text-blue-500">$0</h3>
            <h3 className="text-xl font-semibold text-blue-500">$0</h3>
            <h3 className="text-xl font-semibold text-blue-500">$0</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold border-b-2 mb-4 dark:text-gray-800">Total Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800">Total Fees</h3>
            <h3 className="text-xl font-semibold text-gray-800">Total Volume</h3>
            <h3 className="text-xl font-semibold text-gray-800">Floor Price Fund</h3>
          </div>
          <div className="text-right">
            <h3 className="text-xl font-semibold text-blue-500">$0</h3>
            <h3 className="text-xl font-semibold text-blue-500">$0</h3>
            <h3 className="text-xl font-semibold text-blue-500">$630,296</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
