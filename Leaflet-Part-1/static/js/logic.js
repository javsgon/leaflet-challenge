// Creating the map object
let myMap = L.map('map', {
  center: [36.1183333, -117.8776667],
  zoom: 3,
  minZoom: 3, // Set the zoom level to 2
});

// Adding the tile layer
let map = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Use this link to get the GeoJSON data.
let earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Create markers using Leaflet and add them to the map
function createMarkers(earthquakes) {
  earthquakes.forEach(earthquake => {
    const marker = L.circleMarker([earthquake.coordinates[1], earthquake.coordinates[0]], {
      radius: earthquake.mag * 3, // Adjust size based on magnitude
      fillColor: getColor(earthquake.depth),
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    }).addTo(myMap);

    marker.bindPopup(`<strong>${earthquake.place}</strong><br>Magnitude: ${earthquake.mag}<br>Depth: ${earthquake.depth} km`);
  });
}

// Define a color scale based on depth
function getColor(depth) {
  const colors = ['#b2df8a', '#66ff00', '#ffff00', '#ffcc00', '#ff9900', '#ff0000'];
  const depthRanges = [10, 30, 50, 70, 90]; // Adjust ranges as needed

  for (let i = 0; i < depthRanges.length; i++) {
    if (depth < depthRanges[i]) {
      return colors[i];
    }
  }
  return colors[colors.length - 1]; // Default color in case the depth is beyond ranges
}

// Getting our GeoJSON data
d3.json(earthquakeUrl)
  .then(data => {
    // If the data is successfully retrieved, print the data
    console.log("GeoJSON data obtained successfully:", data);

    const earthquakes = data.features.map(feature => {
      return {
        mag: feature.properties.mag,
        place: feature.properties.place,
        time: new Date(feature.properties.time),
        coordinates: feature.geometry.coordinates,
        depth: feature.geometry.coordinates[2] // Depth is the third coordinate
      };
    });

    // Create a legend
    let legend = L.control({ position: 'bottomright' });
    legend.onAdd = function() {
      let div = L.DomUtil.create('div', 'info legend'),
        depthRanges = ['-10 to 10', '10 to 30', '30 to 50', '50 to 70', '70 to 90', '90+'],
        colors = ['#b2df8a', '#66ff00', '#ffff00', '#ffcc00', '#ff9900', '#ff0000'];

      div.innerHTML = '<strong>Depth (km)</strong><br>';

      for (let i = 0; i < depthRanges.length; i++) {
        div.innerHTML +=
          '<i style="background:' + colors[i] + '"></i> ' +
          depthRanges[i] + (depthRanges[i + 1] ? '<br>' : '+');
      }

      return div;
    };

    // Adding the legend to the map
    legend.addTo(myMap);

    createMarkers(earthquakes);
  })
  .catch(error => {
    // If an error occurs, log it to the console.
    console.error("Error obtaining earthquake data:", error);
  });


