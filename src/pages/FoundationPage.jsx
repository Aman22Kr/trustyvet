import React, { useState } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  Gift, 
  Send, 
  Check, 
  PawPrint 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';

export default function FoundationPage() {
  const [pledgeAmount, setPledgeAmount] = useState('2500');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorCity, setDonorCity] = useState('Mumbai');
  const [submittedPledge, setSubmittedPledge] = useState(false);

  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerRole, setVolunteerRole] = useState('Weekend Clinic Helper');
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  const handlePledgeSubmit = (e) => {
    e.preventDefault();
    if (!donorName || !donorEmail) return;

    try {
      const existing = JSON.parse(localStorage.getItem('trustyvet_foundation_pledges') || '[]');
      existing.push({
        id: Date.now(),
        name: donorName,
        email: donorEmail,
        phone: donorPhone,
        city: donorCity,
        amount: pledgeAmount,
        date: new Date().toISOString()
      });
      localStorage.setItem('trustyvet_foundation_pledges', JSON.stringify(existing));
    } catch (err) {
      console.warn('localStorage error', err);
    }

    setSubmittedPledge(true);
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    if (!volunteerName) return;

    try {
      const existing = JSON.parse(localStorage.getItem('trustyvet_volunteers') || '[]');
      existing.push({
        id: Date.now(),
        name: volunteerName,
        role: volunteerRole,
        date: new Date().toISOString()
      });
      localStorage.setItem('trustyvet_volunteers', JSON.stringify(existing));
    } catch (err) {
      console.warn('localStorage error', err);
    }

    setVolunteerSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Community Animal Welfare"
        title="TrustyVet Welfare Foundation"
        subtitle="Every stray animal deserves dignity, sterile emergency surgery, and freedom from rabies. We dedicate a percentage of our clinical bandwidth to community rescues."
        breadcrumbs={[{ name: 'Foundation' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* IMPACT COUNTERS */}
        <div className="bg-[#0b2545] text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Our Community Impact</span>
            <h2 className="text-2xl sm:text-3xl font-black mt-1">Healing Without Boundaries</h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Working hand-in-hand with registered NGOs, independent feeders, and animal lovers across India.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700">
              <p className="text-3xl sm:text-4xl font-black text-teal-400">14,200+</p>
              <p className="text-xs text-slate-300 uppercase font-semibold mt-1">Stray Animals Rescued</p>
            </div>
            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700">
              <p className="text-3xl sm:text-4xl font-black text-teal-400">8,500+</p>
              <p className="text-xs text-slate-300 uppercase font-semibold mt-1">Humane ABC Spays & Neuters</p>
            </div>
            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700">
              <p className="text-3xl sm:text-4xl font-black text-teal-400">22,000+</p>
              <p className="text-xs text-slate-300 uppercase font-semibold mt-1">Rabies Shots Administered</p>
            </div>
            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700">
              <p className="text-3xl sm:text-4xl font-black text-teal-400">70%</p>
              <p className="text-xs text-slate-300 uppercase font-semibold mt-1">Surgery Fee Subsidised</p>
            </div>
          </div>
        </div>

        {/* PILLARS OF WORK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Subsidised Emergency Trauma</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When a community dog or cat is involved in a hit-and-run, feeders can bring them to our 24/7 hospitals for immediate triage, X-rays, and surgical intervention at heavily discounted charitable rates.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Mass Anti-Rabies Vaccinations</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We organize mobile vaccination drives in slums, street corners, and high-density colony lanes to build community herd immunity against rabies and parvovirus.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6">
              <PawPrint className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Scientific ABC Sterilization</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Humane population management adhering strictly to Animal Birth Control (ABC) standards, using sterile laparoscopic technique and antibiotic pain protocols.
            </p>
          </div>
        </div>

        {/* INTERACTIVE DONATION PLEDGE & VOLUNTEER FORMS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Pledge */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-left">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-teal-600" />
              <h3 className="text-xl font-bold text-slate-900">Support a Community Animal</h3>
            </div>
            <p className="text-xs text-slate-600 mb-6">
              Sponsor an emergency surgery, post-op foster care, or a litter of stray puppy vaccinations.
            </p>

            {submittedPledge ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-bold text-slate-900 text-base">Pledge Received!</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Thank you for pledging ₹{pledgeAmount}. Our TrustyVet Foundation liaison will contact you with the case report and tax-exemption 80G receipt.
                </p>
                <button
                  onClick={() => setSubmittedPledge(false)}
                  className="mt-4 text-xs font-semibold text-teal-700 hover:underline"
                >
                  Pledge another amount
                </button>
              </div>
            ) : (
              <form onSubmit={handlePledgeSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Contribution Amount (INR):
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['1000', '2500', '5000'].map(amt => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => setPledgeAmount(amt)}
                        className={`py-2 text-xs font-bold rounded-lg border transition-colors ${
                          pledgeAmount === amt
                            ? 'bg-teal-600 text-white border-teal-600'
                            : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full text-xs p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                      placeholder="e.g. Aarti Mehta"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full text-xs p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                      placeholder="aarti@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="w-full text-xs p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Nearest City</label>
                    <select
                      value={donorCity}
                      onChange={(e) => setDonorCity(e.target.value)}
                      className="w-full text-xs p-2.5 border rounded-lg border-slate-300 bg-white focus:outline-none focus:border-teal-500"
                    >
                      <option value="Mumbai">Mumbai</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Pune">Pune</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-sm mt-2"
                >
                  Submit Pledge of ₹{pledgeAmount}
                </button>
                <p className="text-[10px] text-slate-400 text-center">
                  * Note: Mock donation pledge stored securely in your browser session.
                </p>
              </form>
            )}
          </div>

          {/* Volunteer Registration */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-left">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-teal-600" />
              <h3 className="text-xl font-bold text-slate-900">Volunteer With Us</h3>
            </div>
            <p className="text-xs text-slate-600 mb-6">
              Join our network of weekend animal fosterers, colony feeder liaisons, and vaccination drive assistants.
            </p>

            {volunteerSubmitted ? (
              <div className="p-6 bg-teal-50 border border-teal-200 rounded-2xl text-center">
                <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto mb-2" />
                <h4 className="font-bold text-slate-900 text-base">Welcome to the Team, {volunteerName}!</h4>
                <p className="text-xs text-slate-600 mt-1">
                  We have recorded your volunteer profile as a {volunteerRole}. Our volunteer coordinator will invite you to the upcoming orientation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={volunteerName}
                    onChange={(e) => setVolunteerName(e.target.value)}
                    className="w-full text-xs p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Preferred Volunteering Role</label>
                  <select
                    value={volunteerRole}
                    onChange={(e) => setVolunteerRole(e.target.value)}
                    className="w-full text-xs p-2.5 border rounded-lg border-slate-300 bg-white focus:outline-none focus:border-teal-500"
                  >
                    <option value="Weekend Clinic Helper">Weekend Clinic Helper</option>
                    <option value="Colony Vaccination Driver">Colony Vaccination Drive Assistant</option>
                    <option value="Foster Parent for Post-Op Strays">Temporary Foster Parent for Post-Op Strays</option>
                    <option value="Social Media Adoption Coordinator">Social Media Adoption Coordinator</option>
                  </select>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p className="font-bold text-slate-800">Requirements:</p>
                  <p>• Minimum 4 hours/month commitment</p>
                  <p>• Prior animal handling experience or compassion</p>
                  <p>• Up-to-date human tetanus & rabies pre-exposure vaccine recommended</p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0b2545] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  Register as Volunteer
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <AdPlaceholder />
    </div>
  );
}
