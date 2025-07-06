import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Building, 
  Calendar,
  Users,
  Heart,
  Shield,
  Clock
} from 'lucide-react';
import { doctorInfo } from '../data/doctorData';

const About: React.FC = () => {
  const education = [
    {
      degree: 'MBBS',
      institution: 'All India Institute of Medical Sciences (AIIMS), New Delhi',
      year: '2008',
      description: 'Bachelor of Medicine, Bachelor of Surgery'
    },
    {
      degree: 'MS (General Surgery)',
      institution: 'Post Graduate Institute of Medical Education and Research, Chandigarh',
      year: '2012',
      description: 'Master of Surgery specialization in General Surgery'
    },
    {
      degree: 'FRCS',
      institution: 'Royal College of Surgeons, Edinburgh',
      year: '2021',
      description: 'Fellowship of the Royal College of Surgeons'
    }
  ];

  const experience = [
    {
      position: 'Senior Consultant Surgeon',
      hospital: 'CityCare Hospital, Bangalore',
      duration: '2018 - Present',
      responsibilities: [
        'Leading surgical department with 15+ surgeons',
        'Performing complex laparoscopic procedures',
        'Training junior residents and medical students',
        'Research in minimally invasive surgical techniques'
      ]
    },
    {
      position: 'Consultant Surgeon',
      hospital: 'Apollo Hospital, Chennai',
      duration: '2015 - 2018',
      responsibilities: [
        'Specialized in laparoscopic and robotic surgery',
        'Established minimally invasive surgery program',
        'Conducted surgical training workshops',
        'Published research on surgical outcomes'
      ]
    },
    {
      position: 'Senior Resident',
      hospital: 'PGIMER, Chandigarh',
      duration: '2012 - 2015',
      responsibilities: [
        'Completed advanced surgical training',
        'Assisted in complex surgical procedures',
        'Emergency surgery management',
        'Teaching undergraduate medical students'
      ]
    }
  ];

  const personalValues = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Every patient receives personalized attention and care tailored to their specific needs and concerns.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Committed to the highest safety standards and evidence-based practices in all surgical procedures.'
    },
    {
      icon: Users,
      title: 'Compassionate Approach',
      description: 'Understanding that surgery can be stressful, we provide emotional support throughout the journey.'
    },
    {
      icon: Clock,
      title: 'Continuous Learning',
      description: 'Staying updated with the latest surgical techniques and technologies for optimal patient outcomes.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  About Dr. Arjun Mehta
                </h1>
                <p className="text-xl text-gray-600">
                  {doctorInfo.title}
                </p>
                <p className="text-lg text-gray-600">
                  A dedicated surgeon with {doctorInfo.experience} years of experience in providing exceptional surgical care. 
                  Dr. Mehta specializes in minimally invasive procedures and has successfully performed over {doctorInfo.totalSurgeries} surgeries 
                  with outstanding patient outcomes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">{doctorInfo.experience}+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-900">{doctorInfo.totalSurgeries}+</div>
                  <div className="text-sm text-gray-600">Surgeries</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={doctorInfo.image}
                  alt="Dr. Arjun Mehta"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Qualifications</h2>
            <p className="text-xl text-gray-600">
              Strong academic foundation from premier medical institutions
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                      <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">{edu.year}</span>
                    </div>
                    <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600">
              Progressive career growth in leading medical institutions
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Building className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{exp.duration}</span>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">{exp.hospital}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <Calendar className="h-4 w-4 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Approach to Patient Care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My practice is built on core values that ensure every patient receives the highest quality care with compassion and respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalValues.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">My Philosophy</h2>
            <blockquote className="text-xl text-blue-100 italic leading-relaxed">
              "Surgery is not just about technical skill—it's about understanding each patient's unique needs, 
              providing clear communication, and delivering care with compassion. Every patient deserves to feel 
              confident and comfortable throughout their surgical journey."
            </blockquote>
            <footer className="mt-6">
              <cite className="text-lg text-white font-semibold">— Dr. Arjun Mehta</cite>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;