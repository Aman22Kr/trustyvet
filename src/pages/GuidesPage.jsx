import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Bookmark, 
  Search, 
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';
import { guidesData } from '../data/guidesData';
import { useApp } from '../context/AppContext';

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { savedGuides, toggleSaveGuide } = useApp();

  const categories = ['All', 'Emergency Care', 'Preventive Care', 'Nutrition & Safety', 'Feline Health', 'Saved Guides'];

  const filteredGuides = guidesData.filter(guide => {
    const matchesCategory = 
      selectedCategory === 'All' ? true :
      selectedCategory === 'Saved Guides' ? savedGuides.includes(guide.slug) :
      guide.category === selectedCategory;

    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guide.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Pet Parent Knowledge Base"
        title="Veterinary Health & First Aid Guides"
        subtitle="Practical, medically-verified guidance written by our clinical directors to help you protect, nourish, and care for your canine and feline companions."
        breadcrumbs={[{ name: 'Pet Care Guides' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Categories */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-[#0b2545] text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'Saved Guides' && <Bookmark className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
                  <span>{cat}</span>
                  {cat === 'Saved Guides' && savedGuides.length > 0 && (
                    <span className="bg-teal-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold ml-1">
                      {savedGuides.length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search guide topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500 bg-slate-50 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Guides Grid */}
        {filteredGuides.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No guides found</h3>
            <p className="text-xs text-slate-500 mt-1">
              {selectedCategory === 'Saved Guides' ? 'You have not bookmarked any articles yet. Click the bookmark icon on any guide to save it here.' : 'Try adjusting your search criteria.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredGuides.map((guide) => {
              const isSaved = savedGuides.includes(guide.slug);
              return (
                <div
                  key={guide.slug}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left"
                >
                  <div>
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-[#0b2545]/90 text-white text-[11px] font-bold px-3 py-1 rounded-md backdrop-blur-sm">
                        {guide.category}
                      </div>

                      <button
                        onClick={() => toggleSaveGuide(guide.slug)}
                        title={isSaved ? 'Remove bookmark' : 'Bookmark this guide'}
                        aria-label={isSaved ? 'Remove bookmark' : 'Bookmark this guide'}
                        className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                          isSaved ? 'bg-amber-400 text-slate-900 shadow-md' : 'bg-black/50 text-white hover:bg-black/70'
                        }`}
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-teal-600" />
                          <span>{guide.readTime}</span>
                        </span>
                        <span>•</span>
                        <span>{guide.date}</span>
                        <span>•</span>
                        <span className="text-teal-700 font-medium">By {guide.author}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-3 leading-snug">
                        {guide.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {guide.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                    <Link
                      to={`/guides/${guide.slug}`}
                      className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 group/btn"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={() => toggleSaveGuide(guide.slug)}
                      className="text-xs text-slate-500 hover:text-amber-600 flex items-center gap-1 cursor-pointer font-medium"
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'text-amber-500 fill-amber-500' : ''}`} />
                      <span>{isSaved ? 'Saved' : 'Save'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <AdPlaceholder />
    </div>
  );
}
