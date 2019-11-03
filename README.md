# Weather forecast

# Getting started
To start the application, you need to have node and npm installed. After installation, run `npm install` in the root project directory to install all the required modules and then `npm start` or `npm run start` to start the application server. The application can the be accessed on *localhost:8080*.

# How to use
The app displays a five-day (temperature) weather forecast for a chosen city. The city is input in the left-hand side form. If the form is empty, the user is notified. In the middle section the results from the forecast are displayed.
In the rightmost section, all user searches are being saved, and with a button click the user can generate the forecast for that city.

# Specs
A simple weather application which shows a 5-day forecast for a chosen city. Built with react and redux JS frameworks. Uses thunk middleware to dispatch async actions. Bootstrap is used as a basic styling layer and can be found in the styles folder. All data is state-driven with the exception of the one api call to openweathermaps.
Source-map-loader package is used to display the source in the dev console. All folders are served from *./src* folder so we can use absolute paths for imports. Webpack is used for bundling and babel for transpiling the JSX code.

Author: K.Nicha
Development time: 4 hours
