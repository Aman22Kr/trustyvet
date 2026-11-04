import React, { createContext, useContext, useState, useEffect } from 'react';
import { reviewsData as initialReviews } from '../data/reviewsData';

const AppContext = createContext();

const STORAGE_KEYS = {
  APPOINTMENTS: 'trustyvet_appointments_v1',
  MY_PETS: 'trustyvet_my_pets_v1',
  SAVED_GUIDES: 'trustyvet_saved_guides_v1',
  USER_REVIEWS: 'trustyvet_user_reviews_v1',
  SELECTED_CITY: 'trustyvet_selected_city_v1',
  BANNER_DISMISSED: 'trustyvet_banner_dismissed_v1'
};

const DEFAULT_PETS = [
  {
    id: 'pet-1',
    name: 'Milo',
    species: 'Cat',
    breed: 'Domestic Shorthair',
    age: '3 years',
    gender: 'Male (Neutered)',
    weight: '4.2 kg',
    allergies: 'None known',
    microchip: '985141002348912',
    lastVisit: 'Oct 14, 2026 - Routine Dental Polish',
    upcomingBooster: 'March 2027 (FVRCP Booster)'
  },
  {
    id: 'pet-2',
    name: 'Rocky',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: '2 years',
    gender: 'Male',
    weight: '29.5 kg',
    allergies: 'Chicken protein sensitivity',
    microchip: '985141005891204',
    lastVisit: 'Sep 22, 2026 - Annual Wellness & Lepto Booster',
    upcomingBooster: 'September 2027 (DHPPi Booster)'
  }
];

export function AppProvider({ children }) {
  // 1. Appointments
  const [appointments, setAppointments] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
      return saved ? JSON.parse(saved) : [
        {
          id: 'APT-10829',
          petName: 'Rocky',
          species: 'Dog',
          breed: 'Golden Retriever',
          ownerName: 'Aman Kumar',
          phone: '+91 98765 43210',
          email: 'aman@trustyvet.demo',
          clinicId: 'mumbai-worli',
          clinicName: 'TrustyVet Worli, Mumbai',
          serviceId: 'preventive-care',
          serviceName: 'Preventive Medicine & Vaccinations',
          date: '2026-11-12',
          time: '11:00 AM',
          reason: 'Routine 6-month checkup and weight evaluation',
          status: 'Confirmed',
          createdAt: new Date().toISOString()
        }
      ];
    } catch {
      return [];
    }
  });

  // 2. My Pets
  const [myPets, setMyPets] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MY_PETS);
      return saved ? JSON.parse(saved) : DEFAULT_PETS;
    } catch {
      return DEFAULT_PETS;
    }
  });

  // 3. Saved Guide Slugs
  const [savedGuides, setSavedGuides] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SAVED_GUIDES);
      return saved ? JSON.parse(saved) : ['emergency-first-aid-what-to-do-before-the-vet'];
    } catch {
      return [];
    }
  });

  // 4. Reviews
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USER_REVIEWS);
      return saved ? JSON.parse(saved) : initialReviews;
    } catch {
      return initialReviews;
    }
  });

  // 5. Selected City
  const [selectedCity, setSelectedCity] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.SELECTED_CITY) || 'All Cities';
    } catch {
      return 'All Cities';
    }
  });

  // 6. Emergency Banner Dismissed
  const [bannerDismissed, setBannerDismissed] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.BANNER_DISMISSED) === 'true';
    } catch {
      return false;
    }
  });

  // Modal control
  const [bookingModalState, setBookingModalState] = useState({
    isOpen: false,
    prefillClinic: '',
    prefillService: ''
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
    } catch (e) {
      console.warn('Could not save appointments to localStorage', e);
    }
  }, [appointments]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MY_PETS, JSON.stringify(myPets));
    } catch (e) {
      console.warn('Could not save pets to localStorage', e);
    }
  }, [myPets]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SAVED_GUIDES, JSON.stringify(savedGuides));
    } catch (e) {
      console.warn('Could not save guides to localStorage', e);
    }
  }, [savedGuides]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_REVIEWS, JSON.stringify(reviews));
    } catch (e) {
      console.warn('Could not save reviews to localStorage', e);
    }
  }, [reviews]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SELECTED_CITY, selectedCity);
    } catch (e) {
      console.warn('Could not save selected city', e);
    }
  }, [selectedCity]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BANNER_DISMISSED, bannerDismissed.toString());
    } catch (e) {
      console.warn('Could not save banner preference', e);
    }
  }, [bannerDismissed]);

  // Actions
  const addAppointment = (appointmentData) => {
    const newAppointment = {
      ...appointmentData,
      id: `APT-${Math.floor(10000 + Math.random() * 90000)}`,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };
    setAppointments(prev => [newAppointment, ...prev]);
    return newAppointment;
  };

  const cancelAppointment = (id) => {
    setAppointments(prev => prev.filter(apt => apt.id !== id));
  };

  const addPet = (petData) => {
    const newPet = {
      ...petData,
      id: `pet-${Date.now()}`
    };
    setMyPets(prev => [...prev, newPet]);
    return newPet;
  };

  const removePet = (id) => {
    setMyPets(prev => prev.filter(p => p.id !== id));
  };

  const toggleSaveGuide = (slug) => {
    setSavedGuides(prev => 
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const addReview = (reviewData) => {
    const newReview = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      date: 'Just now'
    };
    setReviews(prev => [newReview, ...prev]);
  };

  const openBookingModal = (clinicId = '', serviceId = '') => {
    setBookingModalState({
      isOpen: true,
      prefillClinic: clinicId,
      prefillService: serviceId
    });
  };

  const closeBookingModal = () => {
    setBookingModalState({
      isOpen: false,
      prefillClinic: '',
      prefillService: ''
    });
  };

  return (
    <AppContext.Provider value={{
      appointments,
      addAppointment,
      cancelAppointment,
      myPets,
      addPet,
      removePet,
      savedGuides,
      toggleSaveGuide,
      reviews,
      addReview,
      selectedCity,
      setSelectedCity,
      bannerDismissed,
      setBannerDismissed,
      bookingModalState,
      openBookingModal,
      closeBookingModal
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
