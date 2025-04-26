
import React, { useState } from 'react';
import { Truck } from 'lucide-react';

const DeliveryPage = () => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    pincode: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle delivery submission
    console.log('Delivery info:', deliveryInfo);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-8">
          <Truck className="w-8 h-8 text-purple-600 mr-3" />
          <h1 className="text-3xl font-bold text-purple-600">Delivery Details</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={deliveryInfo.fullName}
                  onChange={(e) => setDeliveryInfo({...deliveryInfo, fullName: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  rows="3"
                  value={deliveryInfo.address}
                  onChange={(e) => setDeliveryInfo({...deliveryInfo, address: e.target.value})}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    value={deliveryInfo.city}
                    onChange={(e) => setDeliveryInfo({...deliveryInfo, city: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    value={deliveryInfo.pincode}
                    onChange={(e) => setDeliveryInfo({...deliveryInfo, pincode: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={deliveryInfo.phone}
                  onChange={(e) => setDeliveryInfo({...deliveryInfo, phone: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition-colors font-medium"
          >
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryPage;
