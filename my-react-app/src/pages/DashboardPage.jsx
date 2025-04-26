
import React, { useState } from 'react';
import { Users, Box, Star } from 'lucide-react';

const DashboardPage = () => {
  const [userType, setUserType] = useState('buyer');

  const BuyerDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">Recent Orders</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Box className="w-5 h-5 text-purple-600 mr-2" />
              <span>Order #12345</span>
            </div>
            <span className="text-green-500">Delivered</span>
          </div>
          {/* Add more orders here */}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">Saved Items</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span>Gaming Mouse</span>
            </div>
            <button className="text-purple-600">View</button>
          </div>
          {/* Add more saved items */}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">Recent Reviews</h3>
        <div className="space-y-4">
          {/* Add reviews */}
        </div>
      </div>
    </div>
  );

  const SellerDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">Active Listings</h3>
        <div className="space-y-4">
          {/* Add listings */}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">Orders to Fulfill</h3>
        <div className="space-y-4">
          {/* Add orders */}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">Sales Analytics</h3>
        <div className="space-y-4">
          {/* Add analytics */}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-purple-600">Dashboard</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setUserType('buyer')}
            className={`px-4 py-2 rounded-md transition-colors ${
              userType === 'buyer' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Buyer
          </button>
          <button
            onClick={() => setUserType('seller')}
            className={`px-4 py-2 rounded-md transition-colors ${
              userType === 'seller' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Seller
          </button>
        </div>
      </div>

      {userType === 'buyer' ? <BuyerDashboard /> : <SellerDashboard />}
    </div>
  );
};

export default DashboardPage;
