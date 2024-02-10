import React, { useState } from 'react';

// Define interface and sample data
interface MeetingData {
  time: string;
  meeting: string;
  location: string;
  address: string;
  region: string;
  day: string;
  type: string;
}

const data: MeetingData[] = [
  { time: '9:00 AM', meeting: 'Team Meeting', location: 'Office', address: '123 Main St', region: 'North', day: 'Monday', type: 'English' },
  { time: '11:00 AM', meeting: 'Client Presentation', location: 'Conference Room A', address: '456 Elm St', region: 'South', day: 'Tuesday', type: 'Online Meeting' },
  { time: '2:00 PM', meeting: 'Project Review', location: 'Zoom', address: '', region: 'East', day: 'Wednesday', type: 'Open' },
  { time: '4:00 PM', meeting: 'Training Session', location: 'Training Room', address: '789 Oak St', region: 'West', day: 'Thursday', type: 'Wheelchair Access' },
];

// Table component
const Table: React.FC<{ data: MeetingData[]; selectedLocation: string; selectedDay: string; selectedTime: string; selectedType: string }> = ({ data, selectedLocation, selectedDay, selectedTime, selectedType }) => {
  const filteredData = data.filter(item =>
    (item.location === selectedLocation || selectedLocation === 'All') &&
    (item.day === selectedDay || selectedDay === 'All') &&
    (selectedTime === 'Anytime' || getTimeOfDay(item.time) === selectedTime) &&
    (selectedType === 'Any Type' || item.type === selectedType)
  );

  return (
    <div className="container p-10 max-w-l bg-white rounded-xl shadow-md border border-gray-400">
     <div className="border border-gray-400">
      <table className="min-w-full divide-y divide-gray-600 rounded-xl border border-gray-300  ">
        
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meeting</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-900">
          {filteredData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.meeting}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.region}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

// Dropdown component
const Dropdown: React.FC<{ items: string[]; onSelect: (selectedItem: string) => void; label: string }> = ({ items, onSelect, label }) => {
  const [selectedItem, setSelectedItem] = useState('All');

  const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(event.target.value);
    onSelect(event.target.value);
  }

  return (
    <div className="mb-4">
      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">{label}:</label>
      <select
        id="dropdown"
        name="dropdown"
        className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={selectedItem}
        onChange={handleItemChange}
      >
        <option value="All">All</option>
        {items.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

// SearchBar component
const SearchBar: React.FC<{ onSearch: (searchTerm: string) => void }> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <div className="relative flex items-center justify-between  px-4">
  <div className="relative flex-grow">
    <input
      type="text"
      className="block w-full py-2 pl-4 pr-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      placeholder="Search..."
    />
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      
    </div>
  </div>
  <div className="ml-4">
    <button className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-customYellow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Search
    </button>
  </div>
</div>
  );
}

const App: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedDay, setSelectedDay] = useState('All');
  const [selectedTime, setSelectedTime] = useState('Anytime');
  const [selectedType, setSelectedType] = useState('Any Type');
  const locations = Array.from(new Set(data.map(item => item.location)));
  const days = Array.from(new Set(data.map(item => item.day)));
  const timesOfDay = ['Morning', 'Midday', 'Evening', 'Night', 'Anytime'];
  const meetingTypes = ['Any Type', 'English', 'Online Meeting', 'Open', 'Wheelchair Access'];

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
  }

  const handleDayChange = (day: string) => {
    setSelectedDay(day);
  }

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
  }

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  }

  const getTimeOfDay = (time: string): string => {
    const hour = parseInt(time.split(':')[0]);
    if (hour >= 5 && hour < 12) {
      return 'Morning';
    } else if (hour >= 12 && hour < 17) {
      return 'Midday';
    } else if (hour >= 17 && hour < 21) {
      return 'Evening';
    } else {
      return 'Night';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-60">
      <div className="flex justify-between w-full px-10">
      <SearchBar onSearch={(searchTerm) => console.log('Search Term:', searchTerm)} />
        <Dropdown items={locations} onSelect={handleLocationChange} label="Select Location" />
        <Dropdown items={days} onSelect={handleDayChange} label="Select Day" />
        <Dropdown items={timesOfDay} onSelect={handleTimeChange} label="Select Time of Day" />
        <Dropdown items={meetingTypes} onSelect={handleTypeChange} label="Select Meeting Type" />
        <div className="flex items-center space-x-4">
            <span className="text-sm">List</span>
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                <input type="checkbox" id="toggle" className="sr-only" />
                <div className="block w-10 h-6 bg-gray-400 rounded-full"></div>
                <div className="dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition"></div>
                </div>
            </label>
            <span className="text-sm">Map</span>
        </div>
      </div>
      <Table data={data} selectedLocation={selectedLocation} selectedDay={selectedDay} selectedTime={selectedTime} selectedType={selectedType} />
      
    </div>
    
  );
}



export default App;
