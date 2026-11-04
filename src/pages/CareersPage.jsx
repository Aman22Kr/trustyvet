import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Award, 
  Heart, 
  Send, 
  CheckCircle2, 
  GraduationCap, 
  FileText 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [experienceYears, setExperienceYears] = useState('3-5 Years');
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      id: 'job-1',
      title: 'Senior Veterinary Surgeon (Soft Tissue & Orthopedic)',
      location: 'Worli, Mumbai & Koramangala, Bengaluru',
      type: 'Full-Time',
      experience: '5+ Years MVSc / Equivalent',
      description: 'Lead advanced surgical procedures including TPLO, fracture fixation, laparoscopy, and emergency abdominal resections in our positive-pressure surgical suites.',
      perks: ['Competitive CTC + Surgical Incentives', 'Annual International CPD Allowance', 'Comprehensive Medical & Health Insurance']
    },
    {
      id: 'job-2',
      title: 'Resident Emergency & Critical Care Veterinarian',
      location: 'All Centers (Mumbai, Delhi, Pune, Hyderabad, Bengaluru)',
      type: 'Full-Time (Rotational Shifts)',
      experience: '2-4 Years Small Animal Experience',
      description: 'Stationed in our 24/7 emergency trauma bays and ICUs. Manage acute trauma triage, point-of-care ultrasound, toxicological crises, and inpatient critical care.',
      perks: ['Structured 4-Day Work Week', 'Direct Mentorship under CMO', 'Night Shift Premium Allowances']
    },
    {
      id: 'job-3',
      title: 'Registered Veterinary Nurse / Lead Vet Technician',
      location: 'Pune (Aundh) & Delhi NCR (Defence Colony)',
      type: 'Full-Time',
      experience: '2+ Years Clinical Nursing Experience',
      description: 'Perform anesthesia monitoring, IV catheter placement, blood gas lab testing, and compassionate Fear-Free nursing in our separate cat and dog wards.',
      perks: ['Annual Skill Upgrade Certifications', 'Uniform & Travel Allowance', 'Performance Bonus']
    },
    {
      id: 'job-4',
      title: 'Hospital Operations & Client Care Manager',
      location: 'Banjara Hills, Hyderabad & Khar, Mumbai',
      type: 'Full-Time',
      experience: '3+ Years Healthcare Management',
      description: 'Supervise client admissions, hospital inventory, pharmacy logistics, and ensure exceptional pet parent satisfaction throughout their visit.',
      perks: ['Leadership Track Mentorship', 'Quarterly Incentive Plan', 'Pet Care Benefits']
    }
  ];

  const handleApply = (e) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;

    try {
      const existing = JSON.parse(localStorage.getItem('trustyvet_job_applications') || '[]');
      existing.push({
        id: Date.now(),
        jobTitle: selectedJob.title,
        name: applicantName,
        email: applicantEmail,
        phone: applicantPhone,
        experience: experienceYears,
        date: new Date().toISOString()
      });
      localStorage.setItem('trustyvet_job_applications', JSON.stringify(existing));
    } catch (e) {
      console.warn('localStorage error', e);
    }

    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Join Our Medical Team"
        title="Elevate Your Veterinary Career"
        subtitle="Work alongside India's most talented veterinary clinicians with cutting-edge hospital equipment, guaranteed work-life balance, and international CPD fellowships."
        breadcrumbs={[{ name: 'Careers' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* WHY WORK HERE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Continuing Education (CPD)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We subsidise international veterinary conferences, wet-labs, and ultrasound fellowships so you never stop expanding your clinical skill set.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Predictable Rotas & Zero Burnout</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Veterinary burnout is real. We respect clinician mental wellbeing with strictly managed shift rotas, guaranteed rest intervals, and no unpaid overwork.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">State-of-the-Art Infrastructure</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Practice medicine without compromises: Mindray telemetry, Sevoflurane anesthesia, Stryker power tools, and automated in-house lab equipment.
            </p>
          </div>
        </div>

        {/* OPEN POSITIONS */}
        <div className="text-left mb-8">
          <h2 className="text-2xl font-black text-[#0b2545]">Current Openings</h2>
          <p className="text-xs text-slate-500">Explore open clinical and hospital management roles across our network.</p>
        </div>

        <div className="space-y-6 mb-16">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-teal-400 transition-all shadow-xs text-left flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-[#0b2545] text-white text-[10px] font-bold px-2.5 py-0.5 rounded">
                    {job.type}
                  </span>
                  <span className="bg-teal-50 text-teal-700 text-[10px] font-bold px-2.5 py-0.5 rounded border border-teal-200">
                    {job.experience}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                
                <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>{job.location}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {job.perks.map((perk, i) => (
                    <span key={i} className="text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                      ✓ {perk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() => { setSelectedJob(job); setSubmitted(false); }}
                  className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* APPLICATION MODAL */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-left animate-slide-down">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Apply for: {selectedJob.title}
              </h3>
              <p className="text-xs text-slate-500 mb-6">{selectedJob.location}</p>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-slate-900 text-base">Application Submitted!</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Thank you, {applicantName}. Our veterinary clinical talent team has received your application and will review your profile within 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="mt-6 px-5 py-2 bg-teal-600 text-white font-bold rounded-lg text-xs"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                      placeholder="Dr. / Mr. / Ms."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                        placeholder="doctor@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Phone *</label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Total Clinical Experience</label>
                    <select
                      value={experienceYears}
                      onChange={(e) => setExperienceYears(e.target.value)}
                      className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 bg-white focus:outline-none focus:border-teal-500"
                    >
                      <option value="Intern / Fresh Graduate">Intern / Fresh Graduate</option>
                      <option value="1-2 Years">1-2 Years</option>
                      <option value="3-5 Years">3-5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                      <option value="10+ Years">10+ Years</option>
                    </select>
                  </div>

                  <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    >
                      Send Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>

      <AdPlaceholder />
    </div>
  );
}
