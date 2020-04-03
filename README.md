# Swish Sports
Repo for my Spring 2020 [RCOS](https://rcos.io) project

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
- Angular 9 Frontend
- PostgreSQL database

# How to contribute
Email me at schnod@rpi.edu and I'll add you as a contributor! I want this project to take off, and be used by campuses around the country. Testing will be done via the RPI campus though, as this is where the project is based out of.

## Setup
0. Make sure you have [Python Flask](https://flask.palletsprojects.com/en/1.1.x/) and [Angular 9](https://angular.io/) installed, as this project requires both
    - We are working with the latest version of Python 3
    - Angular requires `npm`, make sure you have Node installed
    - For Angular 9, a good learning resource for learning is the [Angular Tour of Heroes](https://angular.io/tutorial)
    - The frontend team spent a good amount of time on ATOH to learn about components and Typescript
1. Clone the repo to your local environment
2. Install all Angular dependencies with `npm i`
3. `cd` to the /frontend folder and launch the UI with `ng serve -o`
4. `cd` to the /backend folder and start the server with `python app.py`
5. Begin adding features and debugging any issues you find! Happy contributing!
