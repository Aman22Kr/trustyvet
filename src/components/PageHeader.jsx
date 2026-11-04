import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbs = [],
  actionButton = null,
  accentColor = 'teal'
}) {
  return (
    <div className="bg-[#0b2545] text-white py-12 lg:py-16 border-b border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-slate-600" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-teal-400 transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-teal-300 font-medium">{crumb.name}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            {badge && (
              <span className="inline-block bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                {badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                {subtitle}
              </p>
            )}
          </div>

          {actionButton && (
            <div className="shrink-0">
              {actionButton}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
