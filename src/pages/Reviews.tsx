import React, { useState } from 'react';
import { Star, Quote, Calendar, ThumbsUp, Filter } from 'lucide-react';
import { reviews } from '../data/doctorData';
import StarRating from '../components/UI/StarRating';

const Reviews: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');

  const filteredReviews = reviews.filter(review => {
    const matchesRating = selectedRating === null || review.rating === selectedRating;
    const matchesTreatment = selectedTreatment === '' || review.treatment?.toLowerCase().includes(selectedTreatment.toLowerCase());
    return matchesRating && matchesTreatment;
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / totalReviews) * 100
  }));

  const treatments = [...new Set(reviews.map(r => r.treatment).filter(Boolean))];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Patient Reviews & Testimonials
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Real experiences from patients who have received exceptional surgical care from Dr. Arjun Mehta.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Overall Rating */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">{averageRating.toFixed(1)}</div>
              <StarRating rating={averageRating} size="lg" />
              <div className="text-gray-600 mt-2">Based on {totalReviews} reviews</div>
            </div>

            {/* Rating Distribution */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rating Breakdown</h3>
              <div className="space-y-3">
                {ratingDistribution.map(({ rating, count, percentage }) => (
                  <div key={rating} className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600 w-6">{rating}</span>
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient Satisfaction</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Recommend to Others</span>
                  <span className="font-semibold text-green-900">100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Would Return</span>
                  <span className="font-semibold text-green-900">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Care Quality</span>
                  <span className="font-semibold text-green-900">Excellent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-700">Filter by:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedRating(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedRating === null
                      ? 'bg-blue-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All Ratings
                </button>
                {[5, 4, 3, 2, 1].map(rating => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedRating === rating
                        ? 'bg-blue-900 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {rating} Star{rating !== 1 ? 's' : ''}
                  </button>
                ))}
              </div>

              <select
                value={selectedTreatment}
                onChange={(e) => setSelectedTreatment(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Treatments</option>
                {treatments.map(treatment => (
                  <option key={treatment} value={treatment}>{treatment}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={review.rating} size="sm" />
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                </div>

                <div className="mb-4">
                  <Quote className="h-6 w-6 text-gray-300 mb-2" />
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold text-sm">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      {review.treatment && (
                        <p className="text-sm text-gray-600">{review.treatment}</p>
                      )}
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No reviews match your current filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience Exceptional Care Yourself
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have received world-class surgical care from Dr. Arjun Mehta.
          </p>
          <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white rounded-lg hover:bg-gray-50 transition-colors">
            Book Your Consultation
            <Calendar className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;