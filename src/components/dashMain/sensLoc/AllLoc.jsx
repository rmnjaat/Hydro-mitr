import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Line } from "react-chartjs-2"; // Import specific chart components
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import "./sensorloc.css";

// Register the required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// Replace this with your actual location data
const locations = [
  { lat: 28.6939856, lng: 77.0196685, name: "Najafgarh Lake Delhi" },
  { lat: 28.723280675513536, lng: 77.13586931123456, name: "Haiderpur Water Treatment Plant" },
  { lat: 28.688055375532826, lng: 77.22428341123324, name: "Chandrawal Water Treatment Plant" },
  { lat: 28.670418199999993, lng: 77.04618555969665, name: "Nangloi Water Treatment Plant" },
  { lat: 28.713934883165614, lng: 77.21153113291355, name: "Sonia Vihar Water Treatment Plant" },
];

const AllLoc = () => {
  const [activeLocation, setActiveLocation] = useState(null);

  // Example chart data for popup
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Water Quality",
        data: [50, 60, 70, 80, 90],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Water Treatment Plants in Delhi</h5>
            <div className="map-container">
              <MapContainer
                center={[28.7041, 77.1025]} // Delhi's latitude and longitude
                zoom={11}
                style={{ width: "100%", height: "400px" }}
              >
                {/* OpenStreetMap TileLayer */}
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Loop through locations and add markers */}
                {locations.map((location, index) => (
                  <Marker
                    key={index}
                    position={[location.lat, location.lng]}
                    eventHandlers={{
                      click: () => {
                        setActiveLocation(location);
                      },
                    }}
                  />
                ))}

                {/* Popup when a location is clicked */}
                {activeLocation && (
                  <Popup
                    position={[activeLocation.lat, activeLocation.lng]}
                    onClose={() => setActiveLocation(null)}
                  >
                    <div>
                      <h6>{activeLocation.name}</h6>
                      <div style={{ width: "250px", height: "150px" }}>
                        {/* Display the graph inside the popup */}
                        <Line data={chartData} />
                      </div>
                    </div>
                  </Popup>
                )}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllLoc;
