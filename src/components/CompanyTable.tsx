
import { useState } from 'react';
import { Search, Filter, ChevronRight } from 'lucide-react';

const companies = [
  {
    name: 'Loom',
    icon: '🎥',
    description: 'Video messaging tool that he...',
    domain: 'loom.com',
    location: 'San Francisco, 140 2nd Street, 3rd Floor, United...'
  },
  {
    name: 'Notion',
    icon: '📝',
    description: 'All-in-one workspace that co...',
    domain: 'notion.so',
    location: 'San Francisco, 2300 Harrison Street, United Sta...'
  },
  {
    name: 'Slack',
    icon: '💬',
    description: 'Team communication platfor...',
    domain: 'slack.com',
    location: 'San Francisco, 500 Howard Street, United State...'
  },
  {
    name: 'Canva',
    icon: '🎨',
    description: 'Graphic design tool that enab...',
    domain: 'canva.com',
    location: 'Sydney, 110 Kippax Street, Australia, and has 1 o...'
  },
  {
    name: 'Facebook',
    icon: '📘',
    description: 'Social networking platform th...',
    domain: 'facebook.com',
    location: 'Menlo Park, 1 Hacker Way, United States, and ha...'
  },
  {
    name: 'Twitter',
    icon: '🐦',
    description: 'Microblogging and social net...',
    domain: 'twitter.com',
    location: 'San Francisco, 1355 Market Street, United States...'
  },
  {
    name: 'Spotify',
    icon: '🎵',
    description: 'Digital music streaming servi...',
    domain: 'spotify.com',
    location: 'Stockholm, Regeringsgatan 19, Sweden, and has...'
  },
  {
    name: 'OpenAI',
    icon: '🤖',
    description: 'Artificial intelligence researc...',
    domain: 'openai.com',
    location: 'San Francisco, 3180 18th Street, United States, a...'
  }
];

const CompanyTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-semibold">Company Leads</h3>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-600"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors">
            <span>Sort</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Company</th>
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Description</th>
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Domains</th>
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Location</th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company, index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{company.icon}</span>
                    <span className="text-white font-medium">{company.name}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-300 text-sm max-w-xs truncate">
                  {company.description}
                </td>
                <td className="p-4">
                  <a href={`https://${company.domain}`} className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                    {company.domain}
                  </a>
                </td>
                <td className="p-4 text-gray-300 text-sm max-w-xs truncate">
                  {company.location}
                </td>
                <td className="p-4">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyTable;
