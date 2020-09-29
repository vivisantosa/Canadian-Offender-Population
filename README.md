# Project 2 – Incarceration Trends in Canada 				 September 2020<br>

'https://vivisantosa.github.io/Project2/index.html'

<img src="Images/Screenshot (199).png" width="720">

###	Team members: 
-	Eben Haezer 
-	Momotaz Mahin Khan
-	Sheri Shojaie
-	Vivi Santosa

###	Project description / outline:<br>
The goal of this project is to extract data from Correctional Services Canada(CSC), perform analysis on the Offender Profiles data, and communicate the findings through interactive data visualizations. <br>
Project components will include extraction of the data from open Canadian CSC data, transformation, and loading of the data into a relationship database. Data visualizations will be created using Leaflet and Plotly, and delivered to the client using Flask web application.  <br>

### Data sources: <br>
-	Open Canada – Correctional Services Canada, Offender Profile<br>
  https://open.canada.ca/data/en/dataset/106fbf2d-bfdb-4e82-9aef-7ad46bf6ffd2 <br>  
-	StatCan – Population Demographic data  <br>
  https://www150.statcan.gc.ca/n1/en <br>

###	Application Schema:  
<img src="Images/Project2_flow_v2.jpg" width="1080"> 

###	Draft of tasks <br>
•	ETL
•	Extraction: API / CSV [Momotaz, Vivi]
•	Transformation: Pandas in Python [Momotaz, Sheri]
•	Loading: Table Schemata and loading into PostgreSQL [Sheri]
•	Web application (HTML, JS, CSS)
•	Query database and pass CSC and StatCan data into HTML [Eben, Vivi]
•	Visualizations [all]
  (images illustrative)<br>

  •	Interactive Map: D3 and Leaflet  <br>
    Interactive component: user hovers to see popup on each province; clicks to see province-specific information in other charts<br>
    <img src="Images/Illustrative_1(map).png" width="540"><br> 

  •	Interactive bar chart: Plotly <br>
    Interactive component: user clicks on selector to see a specific gender/race <br>
    <img src="Images/Illustrative_2(bar).png" width="540"><br> 

  •	Interactive scatter plot: Plotly <br>
    Interactive component: user can select year (between 2013-2018) to see year-specific trends  <br>
    <img src="Images/Illustrative_3(scatter).png" width="540"><br>  


#### Credits 
- Leaflet
  https://leafletjs.com/
- Canadian Cloropleth map 
  https://exploratory.io/map?lang=en
