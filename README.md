#  <span style="color:tan"> **Module 15 Leaflet Challenge**  </span>
### Chris Gruenhagen 13Jan2023
## **Homework Log**

The Module 15 Challenge homework is located in the leaflet-challenge repository.

An interactive leaflet map showing all earthquakes over the last 7 days is available at <a href = "https://christygruen.github.io/leaflet-challenge/ " target = "_blank"> https://christygruen.github.io/leaflet-challenge/ </a>



![Alt text](/Leaflet-Part-1/basemap.png "USGS GeoJSON Feed main page")


---
## **Purpose**

The purpose of this challenge is to visualize USGS data to better educate the public and other government organizations on issues facing our planet. Visualizations should include an earthquake visualization map using USGS GeoJSON data and may include additional data to illustrate the relationship between tectonic plates and seismic activity.


## **Attribution**

‘Earthquake dataset created by the United States Geological Survey.’
http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

‘Tectonic Plates dataset created by Hugo Ahlenius, Nordpil and Peter Bird.’
https://github.com/fraxen/tectonicplates

## **Requirements**
These requirements apply only to "Part 1: Create the Earthquake Visualization" as "Part 2" is optional with no extra points earning.

### **Map (60 points)**
* TileLayer loads without error (20 points)
* Connects to geojson API using D3 without error (20 points)
* Markers with size corresponding to earthquake magnitude (10 points)
* A legend showing the depth and their corresponding color (10 points)

### **Data Points (40 points)**
* Data points scale with magnitude level (10 points)
* Data points colors change with depth level (10 points)
* Each point has a tooltip with the Magnitude, the location and depth (10 points)
* All data points load in the correct locations (10 points) 

---

# 🌎 🗺️ 📍 🔢 &#x1F469;&#x200d;&#x1F4bb;🔢 📍 🗺️ 🌎
     emoji & format references:
        https://emojipedia.org
        https://commons.wikimedia.org/wiki/Emoji/Table
        https://www.markdownguide.org/basic-syntax/
        https://colorbrewer2.org/#type=sequential&scheme=YlGn&n=9
        https://www.w3schools.com/colors/colors_picker.asp

        
***See below for original homework instructions***
# <span style="color:tan"> Module 15 Leaflet Challenge </span>
Due Jan 23, 2023 by 11:59pm 

Points 100 

Submitting a text entry box or a website url
_________________________________________________________
## <span style="color:red"> **Background**  </span>

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

##  <span style="color:orange"> **Before You Begin** </span>

1. Create a new repository for this project called leaflet-challenge. Do not add this Challenge to an existing repository.
2. Clone the new repository to your computer.
3. Inside your local git repository, create a directory for the Leaflet challenge. Use the folder names to correspond to the challenges: Leaflet-Part-1 and Leaflet-Part-2.
4. This Challenge uses both HTML and JavaScript, so be sure to add all the necessary files. These will be the main files to run for analysis.
5. Push the above changes to GitHub.

##  <span style="color:yellow"> **Files** </span>

NO Starter Files provided.

##  <span style="color:green">  **Instructions** </span>
The instructions for this activity are broken into two parts:
* Part 1: Create the Earthquake Visualization
* Part 2: Gather and Plot More Data (Optional with no extra points earning)

###  <span style="color:tan">  **Part 1: Create the Earthquake Visualization** </span>

![Alt text](https://static.bc-edx.com/data/dl-1-1/m15/lms/img/2-BasicMap.jpg "Earthquake Map")

Your first task is to visualize an earthquake dataset. Complete the following steps:
1. Get your dataset. To do so, follow these steps:
    * The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the  <a href = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php" target = "_blank"> USGS GeoJSON Feed </a> page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:
    
    ![Alt text](https://static.bc-edx.com/data/dl-1-1/m15/lms/img/3-Data.jpg "USGS GeoJSON Feed main page")

    * When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:

     ![Alt text](https://static.bc-edx.com/data/dl-1-1/m15/lms/img/4-JSON.jpg "USGS GeoJSON data")
     
2. Import and visualize the data by doing the following:
    * Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
        * Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
        * Hint: The depth of the earth can be found as the third coordinate for each earthquake.

    * Include popups that provide additional information about the earthquake when its associated marker is clicked.
    * Create a legend that will provide context for your map data.
    * Your visualization should look something like the preceding map.

###  <span style="color:tan">  **Part 2: Gather and Plot More Data (Optional with no extra points earning)** </span>
Plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in this dataset and visualize it alongside your original data. Data on tectonic plates can be found at <a href = "https://github.com/fraxen/tectonicplates" target = "_blank"> https://github.com/fraxen/tectonicplates </a> 

This part is completely optional; you can complete this part as a way to challenge yourself and boost your new skills.

The following image is an example screenshot of what you should produce:

![Alt text](https://static.bc-edx.com/data/dl-1-1/m15/lms/img/5-Advanced.jpg "Earthquake and Tectonic plate map")


Perform the following tasks:
* Plot the tectonic plates dataset on the map in addition to the earthquakes.
* Add other base maps to choose from.
* Put each dataset into separate overlays that can be turned on and off independently.
* Add layer controls to your map.

##  <span style="color:blue"> **Requirements** </span>
These requirements apply only to "Part 1: Create the Earthquake Visualization" as "Part 2" is optional with no extra points earning.

### <span style="color:tan">**Map (60 points)**</span>
* TileLayer loads without error (20 points)
* Connects to geojson API using D3 without error (20 points)
* Markers with size corresponding to earthquake magnitude (10 points)
* A legend showing the depth and their corresponding color (10 points)

### <span style="color:tan">**Data Points (40 points)**</span>
* Data points scale with magnitude level (10 points)
* Data points colors change with depth level (10 points)
* Each point has a tooltip with the Magnitude, the location and depth (10 points)
* All data points load in the correct locations (10 points) 

## <span style="color:indigo"> **References**  </span>
‘Earthquake dataset created by the United States Geological Survey.’

http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

‘Tectonic Plates dataset created by Hugo Ahlenius, Nordpil and Peter Bird.’

https://github.com/fraxen/tectonicplates

© 2023 edX Boot Camps LLC

<!-- Links to New Things I've learned:
https://stackoverflow.com/questions/13239368/how-to-close-git-commit-editor -->
<!-- https://colorbrewer2.org/#type=sequential&scheme=YlGn&n=9 -->
<!-- https://www.w3schools.com/colors/colors_picker.asp -->