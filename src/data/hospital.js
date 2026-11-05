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

const hospitalIllustrationStyles = {
  'lagos-general-hospital': { sky: '#d9f2f0', ground: '#78b7a4', building: '#fffaf0', accent: '#087e8b', scene: 0 },
  'abuja-teaching-hospital': { sky: '#e3e7fb', ground: '#8e9aca', building: '#fafaff', accent: '#5967ad', scene: 1 },
  'kano-specialist-hospital': { sky: '#fbe8c7', ground: '#c8975a', building: '#fff8e9', accent: '#bd6b39', scene: 2 },
  'ibadan-maternity-centre': { sky: '#f8dfe8', ground: '#c78da5', building: '#fff8fb', accent: '#b84f7b', scene: 3 },
  'enugu-diagnostic-hub': { sky: '#d8edfa', ground: '#77a9c5', building: '#f8fcff', accent: '#377fa7', scene: 4 },
  'kaduna-general-clinic': { sky: '#f6edce', ground: '#b5a15e', building: '#fffdf1', accent: '#8c7a2d', scene: 5 },
  'port-harcourt-specialist-centre': { sky: '#d7efea', ground: '#65a897', building: '#f7fffc', accent: '#247d70', scene: 6 },
  'nnewi-medical-centre': { sky: '#e9e0f7', ground: '#9b83b9', building: '#fcfaff', accent: '#7956a3', scene: 7 },
  'jos-teaching-hospital': { sky: '#dceafa', ground: '#789ac1', building: '#f9fbff', accent: '#456f9d', scene: 8 },
  'owerri-maternity-clinic': { sky: '#fbe4d9', ground: '#ce9279', building: '#fffaf7', accent: '#b9634d', scene: 9 },
  'asaba-diagnostic-centre': { sky: '#dcf1e0', ground: '#80ad83', building: '#fbfff9', accent: '#4c8757', scene: 10 },
  'ilorin-general-hospital': { sky: '#e0edf1', ground: '#789da5', building: '#fbfeff', accent: '#3e7885', scene: 11 },
};

const escapeXml = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
}[character]));

const createHospitalIllustration = (hospital, style) => {
  const scenes = [
    '<rect x="145" y="305" width="910" height="285" rx="28" fill="url(#building)"/><rect x="390" y="178" width="420" height="412" rx="26" fill="url(#building)"/><g fill="#b9e2e3"><rect x="205" y="355" width="100" height="65" rx="10"/><rect x="335" y="355" width="100" height="65" rx="10"/><rect x="765" y="355" width="100" height="65" rx="10"/><rect x="895" y="355" width="100" height="65" rx="10"/><rect x="470" y="235" width="90" height="72" rx="10"/><rect x="640" y="235" width="90" height="72" rx="10"/></g>',
    '<path d="M245 590V270h220V150h270v120h220v320z" fill="url(#building)"/><g fill="#c6cef2"><rect x="290" y="320" width="90" height="68" rx="10"/><rect x="420" y="320" width="90" height="68" rx="10"/><rect x="690" y="320" width="90" height="68" rx="10"/><rect x="820" y="320" width="90" height="68" rx="10"/><rect x="520" y="205" width="75" height="75" rx="10"/><rect x="640" y="205" width="75" height="75" rx="10"/></g>',
    '<path d="M175 590V360h220V235h390v125h240v230z" fill="url(#building)"/><path d="M460 360v-95a150 150 0 0 1 300 0v95" fill="#f3d9bd"/><g fill="#f0c797"><rect x="230" y="405" width="105" height="74" rx="36"/><rect x="405" y="405" width="105" height="74" rx="36"/><rect x="690" y="405" width="105" height="74" rx="36"/><rect x="865" y="405" width="105" height="74" rx="36"/></g>',
    '<rect x="245" y="335" width="710" height="255" rx="90" fill="url(#building)"/><rect x="405" y="240" width="390" height="350" rx="55" fill="url(#building)"/><path d="M520 310c-45-70-135-5-95 55l175 145 175-145c40-60-50-125-95-55l-80 80z" fill="#f1bbcf"/><g fill="#f5d4df"><rect x="295" y="410" width="75" height="62" rx="25"/><rect x="830" y="410" width="75" height="62" rx="25"/></g>',
    '<rect x="220" y="300" width="760" height="290" rx="20" fill="url(#building)"/><rect x="430" y="180" width="340" height="410" rx="18" fill="url(#building)"/><circle cx="600" cy="372" r="115" fill="#b5d9ec"/><circle cx="600" cy="372" r="78" fill="#eaf7ff"/><circle cx="600" cy="372" r="36" fill="#83b6d2"/><g fill="#c5e3f2"><rect x="275" y="335" width="85" height="58" rx="8"/><rect x="840" y="335" width="85" height="58" rx="8"/></g>',
    '<path d="M255 590V340l345-205 345 205v250z" fill="url(#building)"/><path d="m205 350 395-235 395 235" fill="none" stroke="#fffdf1" stroke-width="26"/><g fill="#e6d994"><rect x="340" y="375" width="100" height="75" rx="6"/><rect x="500" y="375" width="100" height="75" rx="6"/><rect x="660" y="375" width="100" height="75" rx="6"/><rect x="820" y="375" width="70" height="75" rx="6"/></g>',
    '<rect x="170" y="350" width="860" height="240" rx="34" fill="url(#building)"/><rect x="365" y="220" width="470" height="370" rx="30" fill="url(#building)"/><rect x="475" y="140" width="250" height="450" rx="26" fill="url(#building)"/><g fill="#b8e3d9"><rect x="225" y="390" width="82" height="65" rx="20"/><rect x="325" y="390" width="82" height="65" rx="20"/><rect x="790" y="390" width="82" height="65" rx="20"/><rect x="890" y="390" width="82" height="65" rx="20"/><rect x="520" y="200" width="65" height="60" rx="12"/><rect x="615" y="200" width="65" height="60" rx="12"/></g>',
    '<path d="M230 330 600 155l370 175v260H230z" fill="url(#building)"/><path d="M405 590V360q0-28 28-28h334q28 0 28 28v230" fill="#f0eafa"/><g fill="#d9c9ed"><circle cx="320" cy="410" r="36"/><circle cx="880" cy="410" r="36"/><rect x="485" y="380" width="72" height="68" rx="14"/><rect x="643" y="380" width="72" height="68" rx="14"/></g>',
    '<rect x="145" y="380" width="910" height="210" rx="18" fill="url(#building)"/><rect x="235" y="270" width="250" height="320" rx="18" fill="url(#building)"/><rect x="475" y="180" width="250" height="410" rx="18" fill="url(#building)"/><rect x="715" y="300" width="250" height="290" rx="18" fill="url(#building)"/><g fill="#c6dcf3"><rect x="280" y="310" width="65" height="58" rx="10"/><rect x="375" y="310" width="65" height="58" rx="10"/><rect x="520" y="225" width="65" height="58" rx="10"/><rect x="615" y="225" width="65" height="58" rx="10"/><rect x="775" y="340" width="65" height="58" rx="10"/><rect x="870" y="340" width="65" height="58" rx="10"/></g>',
    '<rect x="260" y="330" width="680" height="260" rx="110" fill="url(#building)"/><path d="M430 590V270q0-45 45-45h250q45 0 45 45v320" fill="url(#building)"/><circle cx="600" cy="370" r="82" fill="#f5c5b8"/><path d="M600 315c-36-44-92 10-45 53l45 42 45-42c47-43-9-97-45-53z" fill="#c87565"/><g fill="#f4d8cf"><rect x="315" y="420" width="76" height="56" rx="24"/><rect x="809" y="420" width="76" height="56" rx="24"/></g>',
    '<path d="M190 590V300l205-95 205 95 205-95 205 95v290z" fill="url(#building)"/><g fill="#c3e3c7"><rect x="245" y="345" width="78" height="62" rx="12"/><rect x="355" y="345" width="78" height="62" rx="12"/><rect x="465" y="345" width="78" height="62" rx="12"/><rect x="655" y="345" width="78" height="62" rx="12"/><rect x="765" y="345" width="78" height="62" rx="12"/><rect x="875" y="345" width="78" height="62" rx="12"/></g><circle cx="600" cy="260" r="58" fill="#d2ebd5"/>',
    '<rect x="160" y="340" width="880" height="250" rx="10" fill="url(#building)"/><path d="M255 340V255h170v85m150 0V190h170v150m150 0V255h170v85" fill="url(#building)"/><g fill="#bfdbe1"><rect x="215" y="390" width="90" height="75"/><rect x="340" y="390" width="90" height="75"/><rect x="465" y="390" width="90" height="75"/><rect x="645" y="390" width="90" height="75"/><rect x="770" y="390" width="90" height="75"/><rect x="895" y="390" width="90" height="75"/></g><path d="M565 258h70v30h30v70h-30v30h-70v-30h-30v-70h30z" fill="#9fc6cd"/>',
  ];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
      <defs>
        <linearGradient id="sky" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${style.sky}"/>
          <stop offset="100%" stop-color="#ffffff"/>
        </linearGradient>
        <linearGradient id="building" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="${style.building}"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#sky)"/>
      <circle cx="970" cy="135" r="72" fill="#ffffff" opacity=".58"/>
      <path d="M0 530q230-95 460 0t420 0 320-12v182H0z" fill="${style.ground}" opacity=".72"/>
      <ellipse cx="600" cy="590" rx="455" ry="38" fill="${style.accent}" opacity=".14"/>
      ${scenes[style.scene]}
      <rect x="542" y="462" width="116" height="138" rx="14" fill="${style.accent}" opacity=".16"/>
      <path d="M576 480h48v36h36v48h-36v36h-48v-36h-36v-48h36z" fill="${style.accent}" opacity=".9"/>
      <g fill="${style.accent}" opacity=".72">
        <circle cx="150" cy="486" r="48"/><rect x="142" y="486" width="16" height="92" rx="8"/>
        <circle cx="1050" cy="475" r="58"/><rect x="1041" y="475" width="18" height="104" rx="9"/>
      </g>
      <rect x="256" y="620" width="688" height="48" rx="24" fill="#ffffff" opacity=".8"/>
      <text x="600" y="652" text-anchor="middle" fill="${style.accent}" font-family="Arial,sans-serif" font-size="24" font-weight="700">${escapeXml(hospital.name)}</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

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

export const hospitals = sampleHospitals.map((hospital) => {
  const illustrationStyle = hospitalIllustrationStyles[hospital.id];
  const illustrationUrl = illustrationStyle ? createHospitalIllustration(hospital, illustrationStyle) : null;

  return {
    ...hospital,
    lga: null,
    website: null,
    collectedAt: null,
    coordinatesSource: null,
    image: {
      url: hospital.image || illustrationUrl,
      source: hospital.image || !illustrationUrl ? null : 'CareFinder NG',
      attribution: hospital.image || !illustrationUrl ? null : 'Custom illustration · not a photograph of this facility',
      license: hospital.image || !illustrationUrl ? null : 'Original vector illustration',
      status: hospital.image ? 'unverified' : illustrationUrl ? 'illustrative' : 'unavailable',
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
  };
});

export const exploreHighlights = [
  { label: 'Emergency care', value: 'Emergency' },
  { label: 'Maternity', value: 'Maternity' },
  { label: 'Cardiology', value: 'Cardiology' },
  { label: 'Diagnostics', value: 'Laboratory' }
];
