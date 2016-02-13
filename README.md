# Viaplay-integration

This project is using the following technologies:
NodeJS
React
React hotloader
Reflux

For the build process the following technologies are used:
Webpack
Express
Travis CI
Github IO

To run the project for developmentpurposes do the following:

clone the repository
run "npm install" from the project root folder
run "npm start" from the project root folder
navigate to http://localhost:3000/

For production:
After a commit is made to the master branch Travis CI(https://travis-ci.com/) will automatically build the project and commit to the "gh-pages" baranch where github io pages will automatically host the files at http://ceras.github.io/Viaplay-integration/



Stuff left out:

*Tracker for user stories
*Tests (Not used to write fronend tests i.e no time)
*Video trailer (I'm having some CORS problem with http://api.traileraddict.com/)
*Search (Got stuck with above)
*Pretty URLs (Would have used react-router, no time)


Solution:

*I have used Webpack for filebundeling, parsing of jsx files and minifying.
*Express is used as a server på development
*This project is intended as a one page application and the entrypoint in the project is "source/index.jsx". 
*The store("source/stores/viaplayStore.jsx") is intended to keep all data of the current page viewed, sections in the menu and product content in this case.
*I have opted for inline styles (https://facebook.github.io/react/tips/inline-styles.html) as to keep the components modularized, the option here would be to have less/css files for each component and "require" them.
