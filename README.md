# Leaflet Challenge

## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Instructions
The instructions for this activity are broken into two parts:

Part 1: Create the Earthquake Visualization

  1. Get the dataset. To do so, the below steps were followed:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. The USGS GeoJSON FeedLinks page was visited (https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). and a dataset was chosen to visualize it. 

Note: When clicking a dataset (such as "All Earthquakes from the Past 7 Days"), we are given a JSON representation of that data. The URL of this JSON was used to pull in the data for the visualization.
![Screenshot 2023-08-13 at 9 02 46 PM](https://github.com/javsgon/leaflet-challenge/assets/125521896/d561bc2b-545a-4f86-b218-3a43a40d1e5e)

  2. Import and visualize the data by doing the following:

Using Leaflet, a map was createed that plots all the earthquakes from the dataset based on their longitude and latitude.

The data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in color.

Popups are included that provide additional information about the earthquake when its associated marker is clicked.

A legend was created that provide context for the map data.

![Screenshot 2023-08-13 at 9 02 26 PM](https://github.com/javsgon/leaflet-challenge/assets/125521896/25e43856-abfb-4260-9043-37cd13bbbc96)
