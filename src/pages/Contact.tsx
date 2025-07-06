import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/doctorData';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help with your healthcare needs. Contact us for appointments, questions, or emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Clinic</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="text-gray-600 hover:text-blue-900 transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-full mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-gray-600 hover:text-blue-900 transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-orange-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h3>
              <div className="text-gray-600">
                <p>Mon-Fri: {contactInfo.hours.weekdays}</p>
                <p>Sat-Sun: {contactInfo.hours.weekends}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Bangalore for easy access
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src={contactInfo.mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Contact</h2>
            <p className="text-xl text-gray-600">
              Choose the most convenient way to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Emergency */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-4">
                <Phone className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency</h3>
              <p className="text-gray-600 mb-4">For urgent medical situations</p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Call Now
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick questions and follow-ups</p>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Chat Now
              </a>
            </div>

            {/* Appointment */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Appointment</h3>
              <p className="text-gray-600 mb-4">Schedule your consultation</p>
              <a
                href="/book-appointment"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Directions & Parking</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">By Metro</h3>
                  <p className="text-gray-600">
                    Take the Blue Line to MG Road Metro Station. The clinic is a 5-minute walk from Exit 2.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">By Car</h3>
                  <p className="text-gray-600">
                    Free parking available in the building's underground garage. Enter from the rear entrance on Church Street.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">By Bus</h3>
                  <p className="text-gray-600">
                    Multiple bus routes stop at MG Road. The clinic is within walking distance of all major bus stops.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Patient Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What to Bring</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Valid ID proof</li>
                    <li>• Insurance cards</li>
                    <li>• Previous medical records</li>
                    <li>• List of current medications</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Before Your Visit</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Arrive 15 minutes early</li>
                    <li>• Complete online forms if possible</li>
                    <li>• Prepare questions for the doctor</li>
                    <li>• Bring a family member if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;