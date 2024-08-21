import React, { useState } from 'react';
import { User, Code, Mail } from 'lucide-react';

export default function Tabs({ tabsContent, onChange }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onChange) {
      onChange(index);
    }
  };

  const getIcon = (label) => {
    switch (label.toLowerCase()) {
      case 'about':
        return <User size={20} />;
      case 'skills':
        return <Code size={20} />;
      case 'contact':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen pt-48">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex justify-around p-4 bg-gray-600">
          {tabsContent.map((tabItem, index) => (
            <button
              key={tabItem.label}
              className={`py-2 px-6 font-medium text-sm focus:outline-none transition-all duration-300 flex items-center space-x-2 rounded-full ${
                activeTab === index
                  ? 'bg-white text-pink-600 shadow-md transform scale-105'
                  : 'text-white hover:bg-pink-300'
              }`}
              onClick={() => handleTabClick(index)}
            >
              {getIcon(tabItem.label)}
              <span>{tabItem.label}</span>
            </button>
          ))}
        </div>
        <div className="p-6">
          {activeTab === 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-pink-600">About Me</h2>
              <p className="text-gray-700">
                Hello! I'm a passionate web developer with a keen interest in
                creating beautiful and functional user interfaces. With a
                background in computer science and years of experience in
                front-end development, I strive to build applications that not
                only meet technical requirements but also provide an excellent
                user experience.
              </p>
              <p className="text-gray-700">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying a good book on
                software design patterns.
              </p>
            </div>
          )}
          {activeTab === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-pink-600">My Skills</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                <li>Git & GitHub</li>
                <li>Responsive Web Design</li>
                <li>RESTful API Development</li>
              </ul>
            </div>
          )}
          {activeTab === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-pink-600">Contact Me</h2>
              <p className="text-gray-700">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out to me through any of the following channels:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>Email: example@email.com</li>
                <li>LinkedIn: linkedin.com/in/yourprofile</li>
                <li>GitHub: github.com/yourusername</li>
                <li>Twitter: @yourhandle</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
