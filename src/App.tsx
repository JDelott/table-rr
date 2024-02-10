import React from 'react';

interface MeetingData {
  time: string;
  meeting: string;
  location: string;
  address: string;
  region: string;
}

const data: MeetingData[] = [
  { time: '9:00 AM', meeting: 'Team Meeting', location: 'Office', address: '123 Main St', region: 'North' },
  { time: '11:00 AM', meeting: 'Client Presentation', location: 'Conference Room A', address: '456 Elm St', region: 'South' },
  { time: '2:00 PM', meeting: 'Project Review', location: 'Zoom', address: '', region: 'East' },
  { time: '4:00 PM', meeting: 'Training Session', location: 'Training Room', address: '789 Oak St', region: 'West' },
];

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meeting</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.meeting}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
