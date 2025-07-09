import React from "react";

const Projects = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-2">Projects</h2>
    <div className="space-y-6">
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="font-bold">Park Swift <span className="font-normal italic">(Parking Reservation App) | React Native, Google Maps API</span></h3>
          <div className="text-right sm:text-left">Jan. 2025 – Present</div>
        </div>
        <ul className="list-disc list-inside ml-4 text-sm mt-1">
          <li>Integrated Firebase with Google Maps and Places API for database, geolocation, and real-time location services.</li>
          <li>Developed UI components and ScrollView using SwiftUI, including navigation, search bar, calendar integration, and custom picker selection.</li>
        </ul>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="font-bold">BlueHire <span className="font-normal italic">(Interview Prep App) | SwiftUI / UIKit, Python</span></h3>
          <div className="text-right sm:text-left">Oct. 2024 – Apr. 2025</div>
        </div>
        <ul className="list-disc list-inside ml-4 text-sm mt-1">
          <li>Integrated SwiftUI and UIKit to design responsive UI components, including custom navigation, search functionality, and dynamic filters.</li>
          <li>Utilized Python for backend integration, handling data processing and management to support personalized question history and collaborative features.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Projects; 