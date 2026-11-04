import React from 'react';
import { Play, VideoOff, Info } from 'lucide-react';

export default function YouTubePlaceholder({
  title = 'TrustyVet State-of-the-Art Hospital Tour & Surgical Suites',
  duration = '03:45',
  aspectRatio = 'aspect-video',
  className = ''
}) {
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group ${aspectRatio} ${className}`}>
      {/* Background Graphic / Subtle Clinical Grid */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 opacity-95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

      {/* Decorative pulse glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Center Play Button & Layout */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
        <div className="relative mb-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
          </div>
          <span className="absolute -bottom-2 -right-2 bg-slate-800 text-[11px] font-mono px-2 py-0.5 rounded border border-slate-700">
            {duration}
          </span>
        </div>

        <h4 className="text-base sm:text-lg md:text-xl font-bold text-white max-w-xl mb-2 line-clamp-2">
          {title}
        </h4>

        {/* Blank placeholder disclaimer per deployment specification */}
        <div className="inline-flex items-center gap-1.5 bg-slate-800/90 backdrop-blur-sm border border-slate-700/80 px-3 py-1 rounded-full text-xs text-slate-300">
          <VideoOff className="w-3.5 h-3.5 text-amber-400" />
          <span>YouTube Video Placeholder (Embedded player disabled per reproduction policy)</span>
        </div>
      </div>

      {/* Top right indicator */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-slate-300 flex items-center gap-1">
        <Info className="w-3 h-3 text-teal-400" />
        <span>HD 1080p Hospital Walkthrough</span>
      </div>
    </div>
  );
}
