import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PawPrint, 
  Plus, 
  Trash2, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  Bookmark, 
  AlertCircle,
  CheckCircle2,
  X,
  Stethoscope,
  Heart
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';
import { useApp } from '../context/AppContext';
import { guidesData } from '../data/guidesData';

export default function MyPetsPage() {
  const { 
    myPets, 
    addPet, 
    removePet, 
    appointments, 
    cancelAppointment, 
    savedGuides, 
    toggleSaveGuide,
    openBookingModal 
  } = useApp();

  const [isAddPetModalOpen, setIsAddPetModalOpen] = useState(false);
  const [newPet, setNewPet] = useState({
    name: '',
    species: 'Dog',
    breed: '',
    age: '',
    gender: 'Male',
    weight: '',
    allergies: '',
    microchip: ''
  });

  const handleAddPetSubmit = (e) => {
    e.preventDefault();
    if (!newPet.name.trim()) return;

    addPet({
      ...newPet,
      lastVisit: 'Registered today',
      upcomingBooster: 'Scheduled consultation pending'
    });

    setNewPet({
      name: '',
      species: 'Dog',
      breed: '',
      age: '',
      gender: 'Male',
      weight: '',
      allergies: '',
      microchip: ''
    });
    setIsAddPetModalOpen(false);
  };

  const bookmarkedArticles = guidesData.filter(g => savedGuides.includes(g.slug));

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Pet Guardian Portal"
        title="My Pets & Medical Records"
        subtitle="Manage your companion animals' profiles, upcoming clinic appointments, vaccination schedules, and bookmarked care guides."
        breadcrumbs={[{ name: 'My Pets' }]}
        actionButton={
          <button
            onClick={() => setIsAddPetModalOpen(true)}
            className="px-5 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 shadow-md cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Pet Profile</span>
          </button>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* PET PROFILES SECTION */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-[#0b2545]">Registered Pets ({myPets.length})</h2>
              <p className="text-xs text-slate-500">Profiles stored safely in your browser localStorage.</p>
            </div>

            <button
              onClick={() => setIsAddPetModalOpen(true)}
              className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Pet</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myPets.map((pet) => (
              <div
                key={pet.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow relative text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-black text-lg">
                      {pet.species === 'Cat' ? '🐱' : pet.species === 'Bird' ? '🦜' : '🐶'}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{pet.name}</h3>
                      <p className="text-xs text-slate-500">{pet.breed || pet.species} • {pet.age || 'Adult'}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => removePet(pet.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                    title="Remove pet profile"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-400">Gender / Status:</span>
                    <span className="font-semibold text-slate-800">{pet.gender || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-400">Weight:</span>
                    <span className="font-semibold text-slate-800">{pet.weight || 'Recorded at clinic'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-400">Known Allergies:</span>
                    <span className="font-semibold text-amber-700">{pet.allergies || 'None recorded'}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">ISO Microchip ID:</span>
                    <span className="font-mono text-slate-700">{pet.microchip || 'Pending implant'}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 p-3 rounded-xl">
                  <p className="text-[10px] uppercase font-bold text-teal-800 tracking-wider">Booster Status</p>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">{pet.upcomingBooster || 'Annual booster due soon'}</p>
                </div>

                <div className="mt-4 pt-1 flex justify-end">
                  <button
                    onClick={() => openBookingModal()}
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Schedule Checkup for {pet.name}</span>
                    <Calendar className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* UPCOMING VISITS */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs text-left">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-[#0b2545]">Scheduled Hospital Visits</h2>
              <p className="text-xs text-slate-500">Your current upcoming appointments</p>
            </div>
            <Link
              to="/book"
              className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1"
            >
              <span>Book Another Visit →</span>
            </Link>
          </div>

          {appointments.length === 0 ? (
            <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200">
              <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">No appointments scheduled</p>
              <p className="text-xs text-slate-500 mt-1">Book a consultation or wellness checkup at any TrustyVet branch.</p>
              <button
                onClick={() => openBookingModal()}
                className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg text-xs font-bold"
              >
                Schedule Visit
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {appointments.map((apt) => (
                <div key={apt.id} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-base">{apt.petName}</span>
                      <span className="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">
                        {apt.serviceName}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{apt.clinicName}</p>
                    <p className="text-xs text-slate-500">
                      Scheduled for: <strong className="text-slate-800">{apt.date} at {apt.time}</strong> • Ref ID: <span className="font-mono text-teal-700">{apt.id}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                      Confirmed
                    </span>
                    <button
                      onClick={() => cancelAppointment(apt.id)}
                      className="text-xs font-semibold text-red-600 hover:text-red-700 hover:underline cursor-pointer"
                    >
                      Cancel Visit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* BOOKMARKED GUIDES */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs text-left">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-[#0b2545]">Saved Pet Health Articles ({bookmarkedArticles.length})</h2>
              <p className="text-xs text-slate-500">Your bookmarked emergency and wellness guides</p>
            </div>
            <Link
              to="/guides"
              className="text-xs font-bold text-teal-700 hover:underline"
            >
              Explore Knowledge Base →
            </Link>
          </div>

          {bookmarkedArticles.length === 0 ? (
            <p className="text-xs text-slate-500 py-6 text-center bg-slate-50 rounded-xl">
              You haven’t bookmarked any guides yet. While browsing our Pet Care Guides, click the bookmark icon on any article to save it here for fast emergency reference.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bookmarkedArticles.map(g => (
                <div key={g.slug} className="p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-3 hover:border-teal-400 transition-colors">
                  <div>
                    <span className="text-[10px] font-bold text-teal-600 uppercase">{g.category}</span>
                    <Link to={`/guides/${g.slug}`} className="block font-bold text-sm text-slate-900 hover:underline line-clamp-1 mt-0.5">
                      {g.title}
                    </Link>
                    <span className="text-[11px] text-slate-400">{g.readTime}</span>
                  </div>
                  <button
                    onClick={() => toggleSaveGuide(g.slug)}
                    className="p-1.5 text-amber-500 hover:text-red-600 cursor-pointer"
                    title="Remove from bookmarks"
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ADD PET MODAL */}
      {isAddPetModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-left animate-slide-down">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <PawPrint className="w-5 h-5 text-teal-600" />
                Add New Pet Profile
              </h3>
              <button
                onClick={() => setIsAddPetModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddPetSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Pet Name *</label>
                  <input
                    type="text"
                    required
                    value={newPet.name}
                    onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                    className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                    placeholder="e.g. Bella"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Species *</label>
                  <select
                    value={newPet.species}
                    onChange={(e) => setNewPet({ ...newPet, species: e.target.value })}
                    className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 bg-white focus:outline-none focus:border-teal-500"
                  >
                    <option value="Dog">Dog / Canine</option>
                    <option value="Cat">Cat / Feline</option>
                    <option value="Bird">Bird / Avian</option>
                    <option value="Small Mammal">Rabbit / Guinea Pig</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Breed</label>
                  <input
                    type="text"
                    value={newPet.breed}
                    onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
                    className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                    placeholder="e.g. Labrador / Persian"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Age / Birthday</label>
                  <input
                    type="text"
                    value={newPet.age}
                    onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
                    className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                    placeholder="e.g. 2 years"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Gender</label>
                  <select
                    value={newPet.gender}
                    onChange={(e) => setNewPet({ ...newPet, gender: e.target.value })}
                    className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 bg-white focus:outline-none focus:border-teal-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Male (Neutered)">Male (Neutered)</option>
                    <option value="Female (Spayed)">Female (Spayed)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Current Weight</label>
                  <input
                    type="text"
                    value={newPet.weight}
                    onChange={(e) => setNewPet({ ...newPet, weight: e.target.value })}
                    className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                    placeholder="e.g. 15 kg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Known Allergies or Sensitivities</label>
                <input
                  type="text"
                  value={newPet.allergies}
                  onChange={(e) => setNewPet({ ...newPet, allergies: e.target.value })}
                  className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                  placeholder="e.g. Chicken, Penicillin, Flea allergy"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">15-Digit ISO Microchip ID</label>
                <input
                  type="text"
                  value={newPet.microchip}
                  onChange={(e) => setNewPet({ ...newPet, microchip: e.target.value })}
                  className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 font-mono focus:outline-none focus:border-teal-500"
                  placeholder="98514100..."
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddPetModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  Save Pet Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <AdPlaceholder />
    </div>
  );
}
