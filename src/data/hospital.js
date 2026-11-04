export const nigeriaStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River',
  'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
  'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
  'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

export const facilityCategories = [
  'General Hospital',
  'Teaching Hospital',
  'Specialist Hospital',
  'Clinic',
  'Diagnostic Centre',
  'Maternity Centre',
  'Mental Health Centre'
];

export const fallbackHospitalImage = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
    <defs>
      <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#c5e8e9" />
        <stop offset="100%" stop-color="#f0f7f8" />
      </linearGradient>
      <linearGradient id="building" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="100%" stop-color="#e6eef2" />
      </linearGradient>
    </defs>
    <rect width="1200" height="700" fill="url(#sky)"/>
    <circle cx="965" cy="125" r="58" fill="#ffffff" opacity=".55"/>
    <path d="M0 520 Q260 455 510 525 T1200 500 V700 H0Z" fill="#b9d9cf"/>
    <rect x="240" y="190" width="720" height="390" rx="16" fill="url(#building)" stroke="#d4e2e8" stroke-width="8"/>
    <rect x="430" y="115" width="340" height="465" rx="15" fill="#f8fbfc" stroke="#d4e2e8" stroke-width="8"/>
    <rect x="540" y="440" width="120" height="140" rx="8" fill="#c6dce5"/>
    <path d="M570 470h60v42h42v60h-42v42h-60v-42h-42v-60h42z" transform="translate(0 -20)" fill="#087e8b"/>
    <g fill="#b9dce4">
      <rect x="285" y="245" width="92" height="72" rx="8"/><rect x="400" y="245" width="92" height="72" rx="8"/>
      <rect x="708" y="245" width="92" height="72" rx="8"/><rect x="823" y="245" width="92" height="72" rx="8"/>
      <rect x="285" y="355" width="92" height="72" rx="8"/><rect x="400" y="355" width="92" height="72" rx="8"/>
      <rect x="708" y="355" width="92" height="72" rx="8"/><rect x="823" y="355" width="92" height="72" rx="8"/>
      <rect x="480" y="165" width="78" height="65" rx="8"/><rect x="642" y="165" width="78" height="65" rx="8"/>
      <rect x="480" y="270" width="78" height="65" rx="8"/><rect x="642" y="270" width="78" height="65" rx="8"/>
    </g>
    <g fill="#76a990">
      <circle cx="155" cy="505" r="65"/><rect x="145" y="505" width="20" height="95" fill="#8b755d"/>
      <circle cx="1040" cy="500" r="78"/><rect x="1030" y="500" width="20" height="100" fill="#8b755d"/>
    </g>
  </svg>
`)}`;

const sampleHospitals = [
  {
    id: 'lagos-general-hospital',
    name: 'Lagos General Hospital',
    type: 'General Hospital',
    ownership: 'Government',
    state: 'Lagos',
    city: 'Lagos Island',
    address: 'Address not publicly verified',
    phone: null,
    services: ['Emergency', 'Maternity', 'Laboratory', 'Outpatient'],
    operatingHours: null,
    emergency: true,
    coordinates: null,
    verificationStatus: 'sample',
    lastVerified: null,
    sourceName: 'Demonstration facility record',
    sourceUrl: null,
    image: null,
    featured: true,
  },
  {
    id: 'abuja-teaching-hospital',
    name: 'Abuja Teaching Hospital',
    type: 'Teaching Hospital',
    ownership: 'Government',
    state: 'FCT',
    city: 'Abuja',
    address: 'Address not publicly verified',
    phone: null,
    services: ['Cardiology', 'Surgery', 'Emergency', 'Diagnostic Imaging'],
    operatingHours: null,
    emergency: true,
    coordinates: null,
    verificationStatus: 'sample',
    lastVerified: null,
    sourceName: 'Demonstration facility record',
    sourceUrl: null,
    image: null,
    featured: true,
  },
  {
    id: 'kano-specialist-hospital',
    name: 'Kano Specialist Hospital',
    type: 'Specialist Hospital',
    ownership: 'Private',
    state: 'Kano',
    city: 'Kano',
    address: 'Address not publicly verified',
    phone: null,
    services: ['Neurology', 'Oncology', 'Maternity', 'Laboratory'],
    operatingHours: null,
    emergency: true,
    coordinates: null,
    verificationStatus: 'sample',
    lastVerified: null,
    sourceName: 'Demonstration facility record',
    sourceUrl: null,
    image: null,
    featured: true,
  },
  {
    id: 'ibadan-maternity-centre',
    name: 'Ibadan Maternity Centre',
    type: 'Maternity Centre',
    ownership: 'Private',
    state: 'Oyo',
    city: 'Ibadan',
    address: 'Address not publicly verified',
    phone: null,
    services: ['Maternity', 'Immunisation', 'Family Planning', 'Laboratory'],
    operatingHours: null,
    emergency: false,
    coordinates: null,
    verificationStatus: 'sample',
    lastVerified: null,
    sourceName: 'Demonstration facility record',
    sourceUrl: null,
    image: null,
    featured: true,
  },
  {
    id: 'enugu-diagnostic-hub',
    name: 'Enugu Diagnostic Hub',
    type: 'Diagnostic Centre',
    ownership: 'Private',
    state: 'Enugu',
    city: 'Enugu',
    address: 'Address not publicly verified',
    phone: null,
    services: ['Radiology', 'Laboratory', 'Ultrasound', 'Cardiac Screening'],
    operatingHours: null,
    emergency: false,
    coordinates: null,
    verificationStatus: 'sample',
    lastVerified: null,
    sourceName: 'Demonstration facility record',
    sourceUrl: null,
    image: null,
    featured: false,
  },
  {
    id: 'kaduna-general-clinic',
    name: 'Kaduna General Clinic',
    type: 'Clinic',
    ownership: 'Government',
    state: 'Kaduna',
    city: 'Kaduna',
    address: 'Address not publicly verified',
    phone: null,
    services: ['General Consultation', 'Pharmacy', 'Laboratory', 'Vaccination'],
    operatingHours: null,
    emergency: false,
    coordinates: null,
    verificationStatus: 'sample',
    lastVerified: null,
    sourceName: 'Demonstration facility record',
    sourceUrl: null,
    image: null,
    featured: false,
  },
  {
    id: 'port-harcourt-specialist-centre',
    name: 'Port Harcourt Specialist Centre',
    type: 'Specialist Hospital',
    ownership: 'Private',
    state: 'Rivers',
    city: 'Port Harcourt',
    address: 'Address not publicly verified',
    phone: null,
    services: ['Cardiology', 'Nephrology', 'Diagnostics', 'Emergency'],
    operatingHours: null,
    emergency: true,
    coordinates: null,
    verificationStatus: 'sample',
    lastVerified: null,
    sourceName: 'Demonstration facility record',
    sourceUrl: null,
    image: null,
    featured: true,
  },
  {
    id: 'nnewi-medical-centre',
    name: 'Nnewi Medical Centre',
    type: 'Clinic',
    ownership: 'Private',
    state: 'Anambra',
    city: 'Nnewi',
    address: 'Address not publicly verified',
    phone: null,
    services: ['General Consultation', 'Dermatology', 'Family Medicine', 'Laboratory'],
    operatingHours: null,
    emergency: false,
    coordinates: null,
    verificationStatus: 'sample',
    lastVerified: null,
    sourceName: 'Demonstration facility record',
    sourceUrl: null,
    image: null,
    featured: false,
  },
  {
    id: 'jos-teaching-hospital',
    name: 'Jos Teaching Hospital',
    type: 'Teaching Hospital',
    ownership: 'Government',
    state: 'Plateau',
    city: 'Jos',
    address: 'Address not publicly verified',
    phone: null,
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Medical Imaging'],
    operatingHours: null,
    emergency: true,
    coordinates: null,
    verificationStatus: 'sample',
    lastVerified: null,
    sourceName: 'Demonstration facility record',
    sourceUrl: null,
    image: null,
    featured: false,
  },
  {
    id: 'owerri-maternity-clinic',
    name: 'Owerri Maternity Clinic',
    type: 'Maternity Centre',
    ownership: 'Private',
    state: 'Imo',
    city: 'Owerri',
    address: 'Address not publicly verified',
    phone: null,
    services: ['Maternity', 'Neonatal Care', 'Immunisation', 'General Consultation'],
    operatingHours: null,
    emergency: false,
    coordinates: null,
    verificationStatus: 'sample',
    lastVerified: null,
    sourceName: 'Demonstration facility record',
    sourceUrl: null,
    image: null,
    featured: false,
  },
  {
    id: 'asaba-diagnostic-centre',
    name: 'Asaba Diagnostic Centre',
    type: 'Diagnostic Centre',
    ownership: 'Private',
    state: 'Delta',
    city: 'Asaba',
    address: 'Address not publicly verified',
    phone: null,
    services: ['Laboratory', 'Ultrasound', 'Cardiac Care', 'Radiology'],
    operatingHours: null,
    emergency: false,
    coordinates: null,
    verificationStatus: 'sample',
    lastVerified: null,
    sourceName: 'Demonstration facility record',
    sourceUrl: null,
    image: null,
    featured: false,
  },
  {
    id: 'ilorin-general-hospital',
    name: 'Ilorin General Hospital',
    type: 'General Hospital',
    ownership: 'Government',
    state: 'Kwara',
    city: 'Ilorin',
    address: 'Address not publicly verified',
    phone: null,
    services: ['Emergency', 'Outpatient', 'Laboratory', 'Pharmacy'],
    operatingHours: null,
    emergency: true,
    coordinates: null,
    verificationStatus: 'sample',
    lastVerified: null,
    sourceName: 'Demonstration facility record',
    sourceUrl: null,
    image: null,
    featured: false,
  }
];

export const hospitals = sampleHospitals.map((hospital) => ({
  ...hospital,
  lga: null,
  website: null,
  collectedAt: null,
  coordinatesSource: null,
  image: {
    url: hospital.image,
    source: null,
    attribution: null,
    license: null,
    status: hospital.image ? 'unverified' : 'unavailable',
  },
  verification: {
    status: 'sample',
    identity: 'unverified',
    address: 'unverified',
    location: 'unverified',
    lastChecked: null,
    sourceName: hospital.sourceName,
    sourceUrl: hospital.sourceUrl,
  },
}));

export const exploreHighlights = [
  { label: 'Emergency care', value: 'Emergency' },
  { label: 'Maternity', value: 'Maternity' },
  { label: 'Cardiology', value: 'Cardiology' },
  { label: 'Diagnostics', value: 'Laboratory' }
];
