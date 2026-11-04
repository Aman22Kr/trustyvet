export const servicesData = [
  {
    id: 'emergency-critical-care',
    title: '24/7 Emergency & Critical Care',
    category: 'Emergency',
    shortDescription: 'Round-the-clock emergency triage, acute trauma stabilization, oxygen therapy, and advanced ICU monitoring by dedicated emergency veterinarians.',
    badge: 'Open 24 Hours / 365 Days',
    isEmergency: true,
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=80',
    iconName: 'AlertCircle',
    overview: 'Medical emergencies do not follow business hours. TrustyVet operates 24-hour critical care veterinary hospitals equipped with advanced resuscitation suites, continuous patient telemetry, defibrillators, oxygen cages, and round-the-clock surgical teams ready to intervene within minutes.',
    commonConditions: [
      'Vehicular trauma, fractures & severe lacerations',
      'Sudden collapse, weakness, or respiratory distress',
      'Gastric Dilatation-Volvulus (Bloat / GDV)',
      'Ingestion of toxins, lilies, chocolate, rodenticides, or foreign bodies',
      'Acute urinary blockages in male felines',
      'Uncontrolled seizures or neurological shock',
      'Severe vomiting, bloody diarrhea, or acute dehydration',
      'Snakebite envenomation & anaphylaxis'
    ],
    whatToExpect: [
      'Immediate triage upon arrival — no waiting in line for life-threatening emergencies.',
      'Rapid vascular access, point-of-care ultrasound (POCUS), and blood gas analysis within 10 minutes.',
      'Continuous dedicated monitoring by veterinary intensive care nurses.',
      'Compassionate, transparent updates directly from the attending emergency doctor.'
    ],
    equipment: [
      'Mindray Multivariable Vital Signs Telemetry Monitors',
      'Dedicated Temperature-Controlled Oxygen Therapy Chambers',
      'B. Braun Infusion and Syringe Fluid Pumps',
      'In-House Rapid Stat Blood Gas and Electrolyte Analyzers',
      'Crash Cart with Emergency Drugs, Intubation & Defibrillator'
    ],
    faqs: [
      {
        q: 'Do I need an appointment for emergency care?',
        a: 'No appointment is needed. Our 24/7 emergency centers in Mumbai (Worli & Khar), Bengaluru (Koramangala), Pune (Aundh), Hyderabad (Banjara Hills), and Delhi (Defence Colony) are open 24/7/365. If possible, call +91 8062 744 111 while en route so our triage team can prepare the critical care bay.'
      },
      {
        q: 'Can I stay with my pet during emergency treatment?',
        a: 'During initial emergency stabilization, our medical team works swiftly in the triage ICU. Once your pet is stabilized, we invite you into the examination room or private consultation suite.'
      }
    ]
  },
  {
    id: 'surgery',
    title: 'Advanced Soft Tissue & Orthopedic Surgery',
    category: 'Surgical',
    shortDescription: 'State-of-the-art positive-pressure operating theaters, certified veterinary surgeons, advanced multi-modal anesthesia, and pain management.',
    badge: 'Specialist Theaters',
    isEmergency: false,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Activity',
    overview: 'Our surgical suites are built to strict human hospital hygiene standards. Using positive-pressure HEPA filtration, dedicated surgical scrub rooms, and multi-parameter anesthetic monitoring, TrustyVet provides safe elective and emergency surgical procedures.',
    commonConditions: [
      'Cranial Cruciate Ligament (CCL) repair & patellar luxation',
      'Complex bone fracture stabilization (internal plating, pinning)',
      'Foreign body retrieval (gastrotomy, enterotomy)',
      'Emergency C-sections & pyometra surgery',
      'Mass and oncological tumor removals with clean margins',
      'Minimally invasive spaying and neutering',
      'Soft palate & airway surgery for brachycephalic breeds (BOAS)'
    ],
    whatToExpect: [
      'Comprehensive pre-anesthetic blood screening and cardiovascular assessment.',
      'Tailored anesthetic protocol based on age, breed, and health condition.',
      'Dedicated veterinary technician assigned exclusively to anesthesia monitoring from induction to full recovery.',
      'Multi-modal post-operative analgesia so your pet recovers comfortably without pain.'
    ],
    equipment: [
      'Isoflurane and Sevoflurane Precision Gas Anesthesia Units',
      'Electrosurgical Cautery & Vessel Sealing Systems',
      'Autoclave Sterilization with Chemical & Biological Indicators',
      'Surgical Micro-instruments & Stryker Orthopedic Power Drills',
      'Warming Blankets (Bair Hugger) to prevent intraoperative hypothermia'
    ],
    faqs: [
      {
        q: 'How should I prepare my pet the night before surgery?',
        a: 'Unless instructed otherwise by your surgeon, fast your pet from food starting at 10:00 PM the night before, while maintaining access to clean drinking water until 2 hours prior to admission.'
      },
      {
        q: 'Will my pet be monitored after waking up from surgery?',
        a: 'Yes, all patients are placed in our post-operative recovery ward under direct observation until they are fully conscious, stable, and have received pain management.'
      }
    ]
  },
  {
    id: 'diagnostic-imaging',
    title: 'Diagnostic Imaging (Digital X-Ray & Ultrasound)',
    category: 'Diagnostics',
    shortDescription: 'High-frequency digital radiography, real-time color Doppler ultrasonography, and point-of-care cardiac assessment.',
    badge: 'Same-Day Reports',
    isEmergency: false,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Scan',
    overview: 'Fast, high-fidelity imaging is essential for accurate veterinary diagnoses. TrustyVet facilities are equipped with modern digital radiography (DR) and high-resolution ultrasound units, enabling our specialists to evaluate organ architecture, detect masses, and check cardiac function in real time.',
    commonConditions: [
      'Bone fractures, joint disorders, and osteoarthritis',
      'Thoracic imaging for pulmonary edema, pneumonia, or asthma',
      'Abdominal ultrasound for liver, kidney, spleen, and bladder disease',
      'Pregnancy detection and fetal heartbeat tracking',
      'Echocardiography for heart murmurs and dilated cardiomyopathy'
    ],
    whatToExpect: [
      'Gentle, low-stress positioning techniques without forceful restraint.',
      'Sedation is only used if your pet is anxious or in pain.',
      'Instant digital images shared with you and stored in your pet’s digital health file.'
    ],
    equipment: [
      'High-Frequency Digital Radiography System (Low Radiation Dose)',
      'GE & Mindray Color Doppler Ultrasound with Micro-Convex & Linear Probes',
      'DICOM Cloud PACS for Tele-radiology Second Opinions'
    ],
    faqs: [
      {
        q: 'Are digital X-rays safe for pets?',
        a: 'Yes. Modern digital X-rays emit minimal radiation and provide high-definition images in seconds, significantly reducing the exposure time compared to older film systems.'
      }
    ]
  },
  {
    id: 'pathology-lab',
    title: 'In-House Automated Pathology Laboratory',
    category: 'Diagnostics',
    shortDescription: 'Rapid hematology, serum biochemistry, electrolytes, urinalysis, cytology, and infectious disease PCR testing with results in under 30 minutes.',
    badge: 'Results in 30 Mins',
    isEmergency: true,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
    iconName: 'FlaskConical',
    overview: 'When a pet is ill, every minute matters. TrustyVet has invested in fully automated, hospital-grade in-house laboratories. We run complete blood counts, electrolyte panels, kidney and liver enzymes, and cytology right on site, ensuring treatment begins without delay.',
    commonConditions: [
      'Parvovirus, Distemper & Coronavirus antigen screening',
      'Tick-borne hemoparasite testing (Babesia, Ehrlichia, Anaplasma)',
      'Feline Leukemia Virus (FeLV) and Feline Immunodeficiency Virus (FIV)',
      'Diabetic ketoacidosis and glucose curve monitoring',
      'Renal failure & hepatic insufficiency monitoring'
    ],
    whatToExpect: [
      'Gentle blood draw using fine pediatric needles.',
      'Automated sample processing in under 30 minutes.',
      'Detailed printed report with reference intervals explained by your vet.'
    ],
    equipment: [
      'IDEXX & Mindray LaserCyte Hematology Analyzers',
      'Dry-Chemistry Serum Biochemical Analyzers',
      'Automated Electrolyte & Blood Gas (ISE) Systems',
      'High-Power Binocular Clinical Microscopes with HD Digital Cameras'
    ],
    faqs: [
      {
        q: 'Why is in-house testing better than sending out to a commercial lab?',
        a: 'In critical situations, waiting 24 to 48 hours for external lab results can be dangerous. Our in-house analyzers yield reliable results in under 30 minutes, allowing our doctors to initiate targeted life-saving treatment immediately.'
      }
    ]
  },
  {
    id: 'inpatient-care',
    title: 'Inpatient Department (IPD) & ICU Recovery',
    category: 'Inpatient',
    shortDescription: 'Dedicated 24/7 hospitalization with separate feline and canine wards, continuous IV fluid therapy, and attentive nursing.',
    badge: 'Separate Cat & Dog Wards',
    isEmergency: false,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Bed',
    overview: 'Hospitalized pets need quiet, comfortable, and species-appropriate environments to heal. At TrustyVet, our Inpatient Department features strictly segregated canine and feline wards to minimize auditory and olfactory stress. Our inpatient team provides 24-hour nursing, medication administration, and regular photo/video updates to pet parents.',
    commonConditions: [
      'Post-operative surgical convalescence',
      'Severe gastroenteritis and systemic infections requiring IV support',
      'Renal failure therapy & peritoneal dialysis management',
      'Congestive heart failure stabilization in oxygen suites',
      'Immune-mediated hemolytic anemia (IMHA) & blood transfusions'
    ],
    whatToExpect: [
      'Spacious, sanitized enclosures with orthopedic bedding.',
      'Quiet feline suites equipped with Feliway pheromone diffusers.',
      'Scheduled visiting hours for pet parents.',
      'Twice-daily clinical progress rounds and digital updates.'
    ],
    equipment: [
      'Stainless-Steel Antimicrobial Enclosures with Soft Warm Matting',
      'Precision Volumetric Infusion Pumps for continuous fluid regulation',
      'Nebulization & Oxygen Ports per enclosure',
      '24/7 CCTV Patient Monitoring'
    ],
    faqs: [
      {
        q: 'Can I visit my pet while they are admitted in IPD?',
        a: 'Yes, we have designated visiting hours twice daily (morning and evening) so you can spend comforting time with your pet while respecting clinic treatment schedules.'
      }
    ]
  },
  {
    id: 'pet-dentistry',
    title: 'Veterinary Dentistry & Oral Surgery',
    category: 'Specialized',
    shortDescription: 'Ultrasonic scaling, subgingival curettage, digital dental radiography, tooth extractions, and periodontal disease therapy.',
    badge: 'Ultrasonic Technology',
    isEmergency: false,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Sparkles',
    overview: 'Dental disease affects over 80% of dogs and cats over three years of age and can lead to kidney, liver, and heart complications if untreated. TrustyVet offers modern veterinary dental hygiene, scaling, polishing, and surgical extractions performed safely under intubated anesthesia.',
    commonConditions: [
      'Severe halitosis (bad breath) and heavy tartar buildup',
      'Gingivitis, bleeding gums, and periodontal bone loss',
      'Fractured, cracked, or loose teeth with root abscesses',
      'Feline Tooth Resorptive Lesions (TRLs) and stomatitis',
      'Retained deciduous (baby) teeth causing malocclusion'
    ],
    whatToExpect: [
      'Comprehensive oral examination and periodontal probing.',
      'Gentle ultrasonic scaling removing calculus above and below the gumline.',
      'Enamel polishing with fluoride-free veterinary paste to deter plaque buildup.',
      'Guidance on home dental care, water additives, and dental diets.'
    ],
    equipment: [
      'Piezoelectric Ultrasonic Veterinary Scaler',
      'High-Speed Dental Handpiece & Polishers',
      'Intraoral Digital Dental Radiography Sensor'
    ],
    faqs: [
      {
        q: 'Why does pet dental scaling require anesthesia?',
        a: 'Anesthesia ensures your pet does not feel pain or fear during deep subgingival cleaning and allows the placement of an endotracheal tube with an inflated cuff, preventing bacteria and water spray from entering their lungs.'
      }
    ]
  },
  {
    id: 'preventive-care',
    title: 'Preventive Medicine & Vaccinations',
    category: 'Preventive',
    shortDescription: 'Comprehensive wellness checks, tailored vaccination schedules, internal & external parasite prevention, microchipping, and senior wellness.',
    badge: 'Core Pet Wellness',
    isEmergency: false,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80',
    iconName: 'ShieldCheck',
    overview: 'Prevention is the foundation of a long and joyful life for your pet. Our preventative protocols are tailored to your pet’s lifestyle, breed, and age. From puppy and kitten developmental screenings to annual geriatric health profiles, our veterinarians keep your furry family thriving.',
    commonConditions: [
      'Core canine vaccines (DHPPi, Rabies, Kennel Cough, Leptospirosis)',
      'Core feline vaccines (FVRCP, Rabies, FeLV)',
      'Tick, flea, and heartworm prevention plans',
      'ISO-standard 15-digit microchipping and national registry',
      'Nutritional counseling and weight management'
    ],
    whatToExpect: [
      'Nose-to-tail physical examination by an experienced veterinarian.',
      'Review of vaccination records, deworming cycles, and dietary intake.',
      'Personalized digital pet health booklet and booster reminder notifications.'
    ],
    equipment: [
      'Cold-Chain Monitored Vaccine Storage Refrigerators',
      'Universal ISO Microchip Scanners',
      'Digital Weighing Scales with Breed-Specific Growth Charts'
    ],
    faqs: [
      {
        q: 'When should puppies and kittens start their vaccinations?',
        a: 'Puppies and kittens typically begin their core vaccine course at 6 to 8 weeks of age, followed by booster shots every 3 to 4 weeks until around 16 weeks, concluding with the mandatory rabies vaccine.'
      }
    ]
  },
  {
    id: 'dermatology-allergies',
    title: 'Dermatology & Allergy Management',
    category: 'Specialized',
    shortDescription: 'Skin scrapings, cytological evaluations, fungal cultures, hypoallergenic diet trials, and immunotherapy for chronic atopic dermatitis.',
    badge: 'Specialist Clinic',
    isEmergency: false,
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Stethoscope',
    overview: 'Constant scratching, ear shaking, paw licking, and recurrent skin infections cause distress to pets and owners alike. Our dermatology clinic investigates root causes — including environmental atopy, flea allergies, food hypersensitivity, and fungal infections — to create long-term comfort plans.',
    commonConditions: [
      'Atopic dermatitis & seasonal environmental allergies',
      'Chronic otitis externa (ear infections) & aural hematomas',
      'Hot spots, pyoderma, and bacterial skin infections',
      'Ringworm (dermatophytosis) and Malassezia yeast overgrowth',
      'Alopecia (hair loss) and hormonal coat thinning'
    ],
    whatToExpect: [
      'Detailed historical questionnaire on diet, environment, and itching triggers.',
      'Immediate in-clinic skin cytology and fungal Wood’s lamp examination.',
      'Multi-modal treatment strategy combining anti-pruritic medications, medicinal baths, and barrier-repair diets.'
    ],
    equipment: [
      'Wood’s Lamp Diagnostic UV Inspection',
      'Video Otoscope for High-Magnification Ear Canal Examination',
      'Cytology Staining Stations & Culture Incubators'
    ],
    faqs: [
      {
        q: 'How long does an allergy management plan take to show results?',
        a: 'While immediate anti-itch medications provide rapid relief within 24 to 48 hours, underlying food elimination trials and skin barrier restoration require 6 to 8 weeks for complete resolution.'
      }
    ]
  },
  {
    id: 'ophthalmology',
    title: 'Veterinary Ophthalmology & Eye Care',
    category: 'Specialized',
    shortDescription: 'Corneal stain diagnostics, intraocular pressure measurement (tonometry), tear testing (Schirmer test), and surgical eyelid correction.',
    badge: 'Eye Specialists',
    isEmergency: false,
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Eye',
    overview: 'Eye problems can progress rapidly in companion animals. TrustyVet evaluates and treats acute and chronic eye disorders, including corneal ulcers, cataracts, dry eye, glaucoma, cherry eye, and eyelid entropion/ectropion.',
    commonConditions: [
      'Corneal scratches, trauma, and deep ulcers',
      'Glaucoma (elevated intraocular pressure)',
      'Keratoconjunctivitis Sicca (Dry Eye Syndrome)',
      'Cherry eye (prolapse of the gland of the third eyelid)',
      'Conjunctivitis and uveitis'
    ],
    whatToExpect: [
      'Fluorescein dye testing to detect micro-abrasions under cobalt blue light.',
      'Tonovet pressure reading to rule out glaucoma in seconds without discomfort.',
      'Tailored ophthalmic antibiotic, lubricating, and anti-inflammatory therapy.'
    ],
    equipment: [
      'TonoVet Rebound Tonometer for intraocular pressure',
      'Direct & Indirect Ophthalmoscopes',
      'Slit-Lamp Biomicroscope for anterior segment evaluation'
    ],
    faqs: [
      {
        q: 'My dog is squinting and tearing excessively. Is it an emergency?',
        a: 'Yes, sudden eye squinting, cloudiness, or swelling should be evaluated by a vet within 12 to 24 hours to prevent permanent damage to the cornea or vision.'
      }
    ]
  },
  {
    id: 'teleconsultation',
    title: 'Veterinary Teleconsultation & Video Visits',
    category: 'Consultation',
    shortDescription: 'Connect with a certified TrustyVet doctor from the comfort of your home for follow-up care, second opinions, and behavioral guidance.',
    badge: 'Online & Convenient',
    isEmergency: false,
    image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Video',
    overview: 'For non-emergency concerns, post-op progress checks, dietary counseling, or initial triage when traveling, TrustyVet provides high-definition video consultations with senior veterinarians, complete with digital prescriptions and follow-up notes.',
    commonConditions: [
      'Follow-up reviews for ongoing medical cases',
      'Dietary transitions and weight loss programs',
      'Behavioral advice for new pet owners',
      'Minor dermatological check-ins and second opinions',
      'Medication dosage inquiries and wellness guidance'
    ],
    whatToExpect: [
      'Scheduled 20-minute private video call via your browser or phone.',
      'Review of photos and videos uploaded beforehand.',
      'Official digital prescription and clinical summary sent to your email.'
    ],
    equipment: [
      'Secure End-to-End Encrypted HD Video Link',
      'Integrated Digital Electronic Medical Record (EMR) System'
    ],
    faqs: [
      {
        q: 'Can a teleconsultation replace an in-person emergency visit?',
        a: 'No. If your pet has suffered trauma, is unable to urinate, has breathing difficulties, or has ingested poison, please bring them immediately to our 24/7 emergency hospital.'
      }
    ]
  }
];

export const serviceCategories = ['All Services', 'Emergency', 'Surgical', 'Diagnostics', 'Inpatient', 'Specialized', 'Preventive', 'Consultation'];
