import React, { useState } from 'react';
import { 
  Star, 
  Plus, 
  CheckCircle2, 
  MessageSquare, 
  ThumbsUp, 
  X, 
  MapPin, 
  Heart,
  Search
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';
import { useApp } from '../context/AppContext';
import { clinicsData } from '../data/clinicsData';
import { servicesData } from '../data/servicesData';

export default function ReviewsPage() {
  const { reviews, addReview } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [filterRating, setFilterRating] = useState('All');

  const [authorName, setAuthorName] = useState('');
  const [petInfo, setPetInfo] = useState('');
  const [clinicLocation, setClinicLocation] = useState(clinicsData[0]?.name || 'Worli, Mumbai');
  const [serviceName, setServiceName] = useState(servicesData[0]?.title || '24/7 Emergency Care');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    addReview({
      author: authorName,
      pet: petInfo || 'Beloved Pet',
      location: clinicLocation,
      service: serviceName,
      rating: Number(rating),
      comment: comment,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
    });

    setAuthorName('');
    setPetInfo('');
    setComment('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
    }, 2000);
  };

  const filteredReviews = reviews.filter(rev => {
    const matchesRating = filterRating === 'All' || rev.rating === Number(filterRating);
    const matchesSearch = rev.author.toLowerCase().includes(searchWord.toLowerCase()) ||
                          rev.pet.toLowerCase().includes(searchWord.toLowerCase()) ||
                          rev.comment.toLowerCase().includes(searchWord.toLowerCase()) ||
                          rev.location.toLowerCase().includes(searchWord.toLowerCase());
    return matchesRating && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Pet Parent Feedback"
        title="Client Reviews & Success Stories"
        subtitle="Real stories of recovery, emergency trauma intervention, and compassionate care from pet parents across our hospital network."
        breadcrumbs={[{ name: 'Reviews' }]}
        actionButton={
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 shadow-md cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* RATING SUMMARY BANNER */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs mb-10 text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-8">
              <p className="text-5xl font-black text-[#0b2545]">4.9</p>
              <div className="flex items-center justify-center md:justify-start gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-500">Based on 5,600+ verified pet parent reviews across Mumbai, Pune, Bangalore, Delhi & Hyderabad</p>
            </div>

            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-3 text-xs">
                <span className="w-16 font-bold text-slate-700">5 Stars</span>
                <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '92%' }}></div>
                </div>
                <span className="w-12 text-right font-medium text-slate-500">92%</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-16 font-bold text-slate-700">4 Stars</span>
                <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '6%' }}></div>
                </div>
                <span className="w-12 text-right font-medium text-slate-500">6%</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-16 font-bold text-slate-700">3 Stars</span>
                <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '1.5%' }}></div>
                </div>
                <span className="w-12 text-right font-medium text-slate-500">1.5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex gap-2 w-full sm:w-auto">
            {['All', '5', '4'].map(r => (
              <button
                key={r}
                onClick={() => setFilterRating(r)}
                className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  filterRating === r ? 'bg-[#0b2545] text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {r === 'All' ? 'All Ratings' : `${r} Stars ★`}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search in reviews..."
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500 bg-white"
            />
          </div>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{rev.author}</h4>
                  <p className="text-[11px] font-semibold text-teal-700">Pet: {rev.pet}</p>
                  <p className="text-[10px] text-slate-400">{rev.location} • {rev.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WRITE A REVIEW MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-left animate-slide-down">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-teal-600" />
                Share Your Experience
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-bold text-slate-900 text-base">Thank You for Your Feedback!</h4>
                <p className="text-xs text-slate-500 mt-1">Your review has been published and saved locally.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                      placeholder="e.g. Rahul Verma"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Pet Name & Breed</label>
                    <input
                      type="text"
                      value={petInfo}
                      onChange={(e) => setPetInfo(e.target.value)}
                      className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                      placeholder="e.g. Bruno (Labrador)"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Hospital Visited</label>
                    <select
                      value={clinicLocation}
                      onChange={(e) => setClinicLocation(e.target.value)}
                      className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 bg-white focus:outline-none focus:border-teal-500"
                    >
                      {clinicsData.map(c => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Care Rating</label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 bg-white focus:outline-none focus:border-teal-500"
                    >
                      <option value="5">★★★★★ (5 Stars - Outstanding)</option>
                      <option value="4">★★★★☆ (4 Stars - Very Good)</option>
                      <option value="3">★★★☆☆ (3 Stars - Average)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Review & Comments *</label>
                  <textarea
                    rows="4"
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share how our veterinary doctors and nurses cared for your pet..."
                    className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <AdPlaceholder />
    </div>
  );
}
