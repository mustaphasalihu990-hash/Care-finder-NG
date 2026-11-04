# CareFinder NG

CareFinder NG is a frontend-only preview of a Nigerian healthcare facility discovery platform. Its current local records are demonstration data, not a verified directory. Do not rely on them to choose a provider or plan travel.

## Features
- Responsive homepage with hero, search, category shortcuts, and trust messaging
- Search and filter hospital listings by state, city, service, facility type, ownership, and emergency availability
- Hospital detail pages with record-level and field-level verification status
- Interactive map view powered by Leaflet and OpenStreetMap tiles
- Opt-in geolocation and in-app route drawing through the public OSRM demo service when facility coordinates are sourced
- Favourite facility workflow backed by LocalStorage
- Persistent light/dark theme preference
- Accessible, mobile-friendly design based on a healthcare SaaS aesthetic

## Tech stack
- React
- Vite
- React Router DOM
- Leaflet / React Leaflet
- Lucide React

## Local setup
1. Install dependencies: npm install
2. Start the development server: npm run dev
3. Build the app for production: npm run build

## Notes
- This project is frontend-only and does not include backend APIs or real-time data synchronization.
- `src/data/hospital.js` currently contains demonstration records. They are marked `SAMPLE DATA`; their names and listed attributes are not independently verified. Coordinates and unrelated stock photographs have intentionally been removed. Records without sourced coordinates are not plotted and cannot be routed to.
- The Nigeria Health Facility Registry (`https://hfr.health.gov.ng/`) could not be retrieved from the development environment during this pass (TLS/connection failure). No registry data or licence terms were confirmed, so no registry records are claimed or imported.
- A bounded Overpass API probe was rejected with HTTP 406; a subsequent small Lagos-area request timed out. No OSM facility export was imported. Do not treat the sample entries as OpenStreetMap or registry records.
- To populate the local dataset, first review source access terms and licences. For each facility, record the source and collection date, field-specific verification evidence, coordinate source, and image URL/source/licence/attribution. Do not fill missing values with estimates.
- OpenStreetMap tiles use the public `tile.openstreetmap.org` endpoint configured in `src/config/map.js`; provide the required attribution and follow the tile usage policy. The public tile service is not guaranteed unlimited production infrastructure.
- Directions are requested only after the user action and location permission. The public OSRM demo endpoint is subject to its usage policy and is not guaranteed for production traffic. Routes are estimates, not live traffic guidance. A replacement provider can be configured in `src/services/routingService.js`.
- Confirm any provider information directly before a visit. CareFinder NG does not replace professional medical or emergency advice.
