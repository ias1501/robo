"use client"
import React, { useState } from 'react';
import { HomeIcon, CogIcon, TemplateIcon, TranslateIcon, BadgeCheckIcon } from '@heroicons/react/solid';

// Import your company logo

// Import a sample user avatar (replace with your actual user avatar)
import Isha from '../../public/assets/Isha.jpg';

const Sidebar = () => {
  // Use state to manage the sub-sections' visibility
  const [showSubsections, setShowSubsections] = useState(false);

  // Function to toggle sub-section visibility
  const toggleSubsections = () => {
    setShowSubsections(!showSubsections);
  };

  return (
    <div className="text-white w-64 p-4 flex flex-col h-screen " style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
  }}>
    {/* Company Name and Logo in a Row */}
    <div className="flex items-center mb-4">
      <img src={"/logo1.png"} alt="Company Logo" className="w-16 h-16 mr-2" />
      <h1 className="text-xl font-semibold">WanderSub</h1>
    </div>

    {/* Main Navigation */}
    <ul className="flex-1">
      <li className="mb-4">
        <a href="/dashboard" className="text-gray-200 hover:text-blue-600 flex items-center">
          <HomeIcon className="w-5 h-5 mr-2" />
          Dashboard
        </a>
      </li>
      <li className="mb-4">
        <a
          href="#"
          className={`text-gray-200 hover:text-blue-600 flex items-center ${
            showSubsections ? 'bg-gray-400' : ''
          }`}
          onClick={toggleSubsections}
        >
          <CogIcon className="w-5 h-5 mr-2" />
          All Records
        </a>

        {/* Sub-sections */}
        {showSubsections && (
          <ul className="ml-4">
            <li className="mb-4">
              <a href="#" className="text-gray-200 hover:text-blue-600">
                pH
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-200 hover:text-blue-600">
                TDS
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-200 hover:text-blue-600">
                Turbidity
              </a>
            </li>
          </ul>
        )}
      </li>
      <li className="mb-4">
        <a href="#" className="text-gray-200 hover:text-blue-600 flex items-center">
          <TemplateIcon className="w-5 h-5 mr-2" />
          ROV statistics
        </a>
      </li>
      <li className="mb-4">
        <a href="#" className="text-gray-200 hover:text-blue-600 flex items-center">
          <BadgeCheckIcon className="w-5 h-5 mr-2" />
          Relative Positioning
        </a>
      </li>
    </ul>

    {/* Divider Line */}
    <hr className="my-4 border-t border-gray-600" />

    {/* User Avatar */}
    <div className="mb-4">
  
      <div className="flex items-center justify-center">
        <img src={"/assets/Isha.jpg"} alt="User Avatar" className="w-16 h-16 rounded-full" />
      </div>
    </div>

    {/* Logout Button */}
    <div className="mt-auto">
      <button
        onClick={() => {
          // Implement your logout logic here
          alert('Logout clicked');
        }}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full w-full"
      >
        Logout
      </button>
    </div>
  </div>
  );
};

export default Sidebar;