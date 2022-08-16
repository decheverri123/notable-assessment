# Notable Health Assessment

## Frontend

### I have used React with Typescript to construct the front-end

### To start project, please run `npm install` and then `npm run dev`

## Backend

### In the interest of time, I have set up the server/database as a json file using the json-server package

### Please use `npx json-server --watch data/db.json --port 8000` to run the server

## Things I Would Do If I Had More Time

* Set up a real backend using Node.js, Express, and Mongoose as my database.
  * This would also allow me to set up a custom api just to get the patients. Unfortunately, the json-server does not allow me to get nested objects in the json file. The API would look something like this `GET /physicians/{id}/patients` and this would return all the appointments.
* Implement a sorting function to sort the appointments by starting time.
* Add some state management to prevent prop-drilling.
* Make it look pretty :)

### P.S. json-server does not support getting nested objects, so I was not able to do a separate API request to get just the patients. Using something like Mongoose would allow this functionality, but it would take too long to implement for this specific exercise

#### P.S. I love Archer too
