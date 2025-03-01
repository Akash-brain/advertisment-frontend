import React from 'react';
import CompanyLayout from '../../layouts/CompanyLayout';
import { FaBriefcase, FaUsers, FaGlobe, FaChartLine } from 'react-icons/fa';

const Profile = () => {
  const stats = [
    { icon: <FaBriefcase />, value: '12+', label: 'Years Experience' },
    { icon: <FaUsers />, value: '5000+', label: 'Brands Served' },
    { icon: <FaGlobe />, value: '6', label: 'Global Offices' },
    { icon: <FaChartLine />, value: '100+', label: 'Team Members' }
  ];

  return (
    <CompanyLayout
      title="Company Profile"
      description="Learn about our journey, mission, and values"
    >
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-red-500 text-3xl mb-4">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2011 with a fresh perspective, Blink Beats is an award-winning advertising agency specializing in digital, offline, sports, and gifting solutions. With experience spanning over 5,000 brands across various sectors, we have demonstrated our expertise in the industry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our strong presence in India, with offices in Mumbai, Delhi, Pune, Ahmedabad, and Dubai, positions us among the largest advertising agencies in the country and one of the few with a global footprint.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/images/m3.jpg" 
              alt="Company Overview" 
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </CompanyLayout>
  );
};

export default Profile; 