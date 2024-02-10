import React from 'react';
import { Link } from 'react-router-dom'
interface NavProps {
  // Add any props here if needed
}

const Nav: React.FC<NavProps> = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">REFUGE RECOVERY</Link>

            </div>
            <div className="hidden md:block">
              {/* Navigation links */}
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/meetings" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Meetings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
