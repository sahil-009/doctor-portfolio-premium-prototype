import React from 'react';
import { CheckCircle, ArrowRight, Clock, Shield, Heart, Stethoscope, Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/doctorData';

const Services: React.FC = () => {
  const serviceIcons = {
    'Scissors': Scissors,
    'Heart': Heart,
    'Shield': Shield,
    'Stethoscope': Stethoscope
  };

  const serviceColors = [
    'bg-blue-50 text-blue-600',
    'bg-green-50 text-green-600',
    'bg-purple-50 text-purple-600',
    'bg-orange-50 text-orange-600'
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'Minimally Invasive',
      description: 'Advanced techniques for reduced recovery time and minimal scarring'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'State-of-the-art facilities with highest safety standards'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Tailored treatment plans for each patient\'s unique needs'
    },
    {
      icon: Stethoscope,
      title: 'Expert Team',
      description: 'Experienced surgical team with proven track record'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Surgical Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              State-of-the-art surgical procedures using minimally invasive techniques for optimal patient outcomes and faster recovery times.
            </p>
            <Link
              to="/book-appointment"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons];
              const colorClass = serviceColors[index % serviceColors.length];
              
              return (
                <div key={service.id} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-lg mr-4 ${colorClass}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      to="/book-appointment"
                      className="text-blue-900 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Surgical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence in surgical care is evident in every aspect of our practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4">
                  <advantage.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Surgical Process</h2>
            <p className="text-xl text-gray-600">
              A streamlined approach ensuring the best possible outcomes for every patient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-blue-900">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">
                Comprehensive evaluation and discussion of treatment options with detailed explanation of procedures.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-900">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600">
                Pre-operative planning and preparation with detailed instructions for optimal surgical outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-purple-900">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Surgery & Recovery</h3>
              <p className="text-gray-600">
                Expert surgical care followed by comprehensive post-operative support and follow-up care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Schedule Your Consultation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards better health with our expert surgical services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;