import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award, 
  Users, 
  Clock, 
  Star,
  CheckCircle,
  Phone,
  Calendar,
  Stethoscope,
  Heart,
  Shield,
  Scissors
} from 'lucide-react';
import { doctorInfo, services, reviews } from '../data/doctorData';
import StatCard from '../components/UI/StatCard';
import StarRating from '../components/UI/StarRating';

const Home: React.FC = () => {
  const heroStats = [
    { icon: Clock, value: `${doctorInfo.experience}+`, label: 'Years Experience', color: 'blue' as const },
    { icon: Users, value: `${doctorInfo.totalSurgeries}+`, label: 'Surgeries Performed', color: 'green' as const },
    { icon: Award, value: `${doctorInfo.patientsHelped}+`, label: 'Patients Helped', color: 'purple' as const },
    { icon: Star, value: `${doctorInfo.rating}`, label: 'Patient Rating', color: 'orange' as const }
  ];

  const serviceIcons = {
    'Scissors': Scissors,
    'Heart': Heart,
    'Shield': Shield,
    'Stethoscope': Stethoscope
  };

  const featuredServices = services.slice(0, 3);
  const latestReviews = reviews.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Expert Surgical Care with{' '}
                  <span className="text-blue-900">Compassionate Touch</span>
                </h1>
                <p className="text-xl text-gray-600">
                  {doctorInfo.tagline}
                </p>
                <p className="text-lg text-gray-600">
                  Specialized in minimally invasive procedures with a track record of exceptional patient outcomes and satisfaction.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors group"
                >
                  Book Appointment
                  <Calendar className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white border-2 border-blue-900 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  View Credentials
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Quick Contact */}
              <div className="flex items-center space-x-6 pt-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">+91 98765 43210</span>
                </a>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Available Today</span>
                </div>
              </div>
            </div>

            {/* Doctor Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={doctorInfo.image}
                  alt="Dr. Arjun Mehta"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Rating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-gray-900">{doctorInfo.rating}</div>
                  <div>
                    <StarRating rating={doctorInfo.rating} size="sm" />
                    <p className="text-sm text-gray-600 mt-1">Patient Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heroStats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                color={stat.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Surgical Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive surgical care using the latest minimally invasive techniques for optimal patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-blue-900 bg-white border-2 border-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Reviews</h2>
            <p className="text-xl text-gray-600">
              What our patients say about their experience with Dr. Arjun Mehta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestReviews.map((review) => (
              <div key={review.id} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <StarRating rating={review.rating} size="sm" />
                  <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-4">"{review.comment}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold text-sm">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Read All Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
            Take the first step towards better health. Book your appointment today and experience exceptional surgical care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book Appointment
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Call Now
              <Phone className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;