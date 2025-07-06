import React from 'react';
import { Award, Calendar, BookOpen, Users, Trophy, Target } from 'lucide-react';
import { achievements } from '../data/doctorData';

const Achievements: React.FC = () => {
  const achievementIcons = {
    'milestone': Target,
    'award': Trophy,
    'research': BookOpen,
    'conference': Users
  };

  const achievementColors = {
    'milestone': 'bg-blue-50 text-blue-600 border-blue-200',
    'award': 'bg-yellow-50 text-yellow-600 border-yellow-200',
    'research': 'bg-green-50 text-green-600 border-green-200',
    'conference': 'bg-purple-50 text-purple-600 border-purple-200'
  };

  const stats = [
    {
      icon: Trophy,
      value: '5+',
      label: 'Awards Received',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: BookOpen,
      value: '15+',
      label: 'Research Papers',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Users,
      value: '25+',
      label: 'Conferences',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Award,
      value: '3000+',
      label: 'Surgeries',
      color: 'bg-blue-50 text-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Achievements & Recognition
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A track record of excellence in surgical care, research, and professional development spanning over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center p-4 rounded-full mb-4 ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Milestones</h2>
            <p className="text-xl text-gray-600">
              Key achievements and recognition throughout my medical career
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 hidden md:block"></div>

            <div className="space-y-12">
              {achievements.map((achievement, index) => {
                const IconComponent = achievementIcons[achievement.type as keyof typeof achievementIcons];
                const colorClass = achievementColors[achievement.type as keyof typeof achievementColors];
                const isEven = index % 2 === 0;

                return (
                  <div key={achievement.id} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className={`bg-white p-6 rounded-xl shadow-sm border-2 ${colorClass}`}>
                        <div className="flex items-center mb-4">
                          <div className={`p-3 rounded-lg mr-4 ${colorClass}`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                            <div className="flex items-center text-gray-600 mt-1">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span className="text-sm">{achievement.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">{achievement.description}</p>
                      </div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Recognition</h2>
            <p className="text-xl text-gray-600">
              Recognized by peers and institutions for excellence in surgical practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Medical Excellence Award</h3>
              </div>
              <p className="text-gray-700">
                Recognized by the Indian Medical Association for outstanding contribution to surgical excellence and patient care.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Research Publication</h3>
              </div>
              <p className="text-gray-700">
                Lead author of multiple peer-reviewed publications in international surgical journals focusing on minimally invasive techniques.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Teaching Excellence</h3>
              </div>
              <p className="text-gray-700">
                Mentor to over 50 medical students and residents, contributing to the next generation of surgical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Impact on Patient Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">99.8%</div>
              <div className="text-blue-100">Surgery Success Rate</div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">24 hrs</div>
              <div className="text-blue-100">Average Recovery Time</div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">Zero</div>
              <div className="text-blue-100">Major Complications</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;