# Swish Sports
Repo for my Fall 2019 [RCOS](rcos.io) project

## There was an idea...
IMLeauges is the current go-to website/application for intramural and club athletics. All existing intramural and club sports at RPI use IMLeagues.

The website, however, is awful. It has an old, intrusive, and unintiuitive interface, and is often unresponsive on most browsers because of all of the page requests from the ads. Adblockers don't work, and if you don't want to fork over the $4.99 to remove the ads, you'll just have to deal with it.

And, good luck using the IMLeagues mobile app. It's just as bad, with a UI that doesn't scale properly on new phones, is buggy and is unresponsive at times.

Ask any RPI student who has used IMLeagues, and they all have the same complaint - that IMLeagues sucks. So what if there was something to replace IMLeagues?

That's where Swish Sports comes in

## The App, and its (intended) features
Swish is an ambitious replacement for IMLeauges. The features closely mimic IMLeauges, less the ads and with a much cleaner, more streamlined user interface.

### Intended Feature List
Team Management
- Create and manage teams
- Team hierarchy via a user schema of captains and members
- View team roster

Event Management
- Create matches/events (location, team names, time, player count, sport)
- View upcoming matches
- Record the results of a match
- View personal and team statistics (build out later to view more than just Win:Loss)
- Calendar of games

## The Stack
- Python Flask web application, with a RESTful API on the backend for easy database calls
- React.js (tbd) front end
- PostgreSQL database

## How to contribute
Email me at schnod@rpi.edu and I'll add you as a contributor! I want this project to take off, and be used by campuses around the country. Testing will be done via the RPI campus though, as this is where the project is based out of.
