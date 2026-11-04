import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  Bookmark, 
  Share2, 
  ArrowLeft, 
  Check, 
  User, 
  MessageSquare, 
  Send,
  ShieldCheck
} from 'lucide-react';
import { guidesData } from '../data/guidesData';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';
import { useApp } from '../context/AppContext';

export default function GuideDetailPage() {
  const { slug } = useParams();
  const { savedGuides, toggleSaveGuide } = useApp();
  const [copied, setCopied] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Priya N.',
      text: 'Extremely helpful advice! Our golden retriever once swallowed a small squeaker and keeping calm as described here saved us before reaching the clinic.',
      date: '2 weeks ago'
    }
  ]);
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const guide = guidesData.find(g => g.slug === slug);

  if (!guide) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Guide Article Not Found</h2>
        <p className="text-slate-600 mb-6">The requested veterinary health guide could not be located.</p>
        <Link to="/guides" className="px-6 py-2.5 bg-teal-600 text-white rounded-lg text-sm font-semibold">
          ← Back to All Guides
        </Link>
      </div>
    );
  }

  const isSaved = savedGuides.includes(guide.slug);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim() || !commentAuthor.trim()) return;

    setComments(prev => [
      ...prev,
      {
        id: Date.now(),
        author: commentAuthor,
        text: commentText,
        date: 'Just now'
      }
    ]);
    setCommentAuthor('');
    setCommentText('');
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 4000);
  };

  const relatedGuides = guidesData.filter(g => g.slug !== guide.slug).slice(0, 2);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge={guide.category}
        title={guide.title}
        subtitle={`Authored by ${guide.author} • Medically Reviewed • ${guide.readTime}`}
        breadcrumbs={[
          { name: 'Pet Care Guides', path: '/guides' },
          { name: guide.title }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Toolbar */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 mb-8 shadow-xs">
          <Link to="/guides" className="text-xs font-semibold text-slate-600 hover:text-teal-700 flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Guides</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSaveGuide(guide.slug)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border ${
                isSaved ? 'bg-amber-50 text-amber-700 border-amber-300' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
              <span>{isSaved ? 'Saved to Bookmarks' : 'Save Guide'}</span>
            </button>

            <button
              onClick={handleShare}
              className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-10 h-72 sm:h-96">
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-100 mb-6 w-fit">
            <ShieldCheck className="w-4 h-4" />
            <span>Medically verified by TrustyVet Clinical Advisory Board</span>
          </div>

          <div 
            className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 [&>h3]:text-xl [&>h3]:font-black [&>h3]:text-[#0b2545] [&>h3]:pt-4 [&>h3]:pb-1 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>p]:mb-3 [&>em]:text-amber-800"
            dangerouslySetInnerHTML={{ __html: guide.content }}
          />

          {/* Author Box */}
          <div className="mt-12 pt-6 border-t border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-800 font-black flex items-center justify-center shrink-0">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">{guide.author}</h4>
              <p className="text-xs text-slate-500">Veterinary Medical Specialist at TrustyVet Hospitals</p>
            </div>
          </div>
        </div>

        {/* Community Questions / Comments Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs mb-12 text-left">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-5 h-5 text-teal-600" />
            <h3 className="text-xl font-bold text-slate-900">Questions & Pet Parent Experiences</h3>
          </div>

          <div className="space-y-4 mb-8">
            {comments.map(c => (
              <div key={c.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">{c.author}</span>
                  <span className="text-slate-400">{c.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">{c.text}</p>
              </div>
            ))}
          </div>

          {/* Comment form */}
          <form onSubmit={handleCommentSubmit} className="space-y-3 border-t border-slate-100 pt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Ask a question or share your experience
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name *"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                className="text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                required
              />
            </div>
            <textarea
              rows="3"
              placeholder="Write your comment or question here..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
              required
            ></textarea>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Comments persist during your browser session</span>
              <button
                type="submit"
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Comment</span>
              </button>
            </div>
            {commentSubmitted && (
              <p className="text-emerald-600 text-xs font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Your question was posted successfully!
              </p>
            )}
          </form>
        </div>

        {/* Related Guides */}
        <div className="text-left">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedGuides.map(rel => (
              <Link
                key={rel.slug}
                to={`/guides/${rel.slug}`}
                className="block bg-white p-5 rounded-2xl border border-slate-200 hover:border-teal-400 shadow-xs hover:shadow-md transition-all"
              >
                <span className="text-[11px] font-bold text-teal-600 uppercase">{rel.category}</span>
                <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2 line-clamp-2">{rel.title}</h4>
                <p className="text-xs text-slate-500 line-clamp-2">{rel.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <AdPlaceholder />
    </div>
  );
}
