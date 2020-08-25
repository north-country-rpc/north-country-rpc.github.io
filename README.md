# Finger Lakes Behavioral Health Bed Board
A basic web app that uses Front-End web technologies to post and display the current *open* and *on hold* beds for local behavioral health institutions. https://flsudtxbeds.com/ 

## Setup
Below are instructions to setup and get this application operational using Google Sheets as the data source, with the use of some light weight JavaScript libraries to minimize development effort and to get this working with little as possible, so that it may be shared across multiple platforms. 
1. In order to get this working it is important that you create an account and follow the documentation at https://sheety.co/docs/getting-started. 
1. Prepare and populate a Google Sheet (with the format that Sheety provides in their documentation) and enable it to be shared publically.
1. Connect your Google Sheet to Sheety, where Sheety will then provide you with an endpoint URL to obtain your live Google Sheet data in JSON format.
1. Use Handlebars.js and jQuery to extract the data from the JSON file and convert it into your desired template, in this case we used a table template on desktop viewports, and block elements template on all other viewports. View `/js/beds.js` for the implimentation of handlebars and extraction of Google Sheets data into the  desired html template.
1. Use the TableSorter jQuery Plugin to allow your HTML table to be filterable and sortable.
1. Use Sheety documentation on making requests https://sheety.co/docs/making-requests or view the Finger Lakes BH Bed `index.html` file and `/js/beds.js` file to view the working example.

### Notes
* Updates from Google Sheets may take anywhere from 1-5 minutes to display on your web app.
* Google API requests will be limited to 500 requests/month unless you purchase a plan.
* The use of Bootstrap, Sass, and Fontawesome are optional and not necessary to get this project operational. 

## Dependencies
* Google Sheets API (Provided by Sheety)
* Handlebars.js
* jQuery
* TableSorter jQuery plugin
* Node.js
* Sass
* FontAwesome

