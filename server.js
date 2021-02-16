//creating a route that the front-end can request data from.
const {animals} = require ('./data/animals.json');

const express = require('express'); // call express.js package

const PORT = process.env.PORT || 3001;

//Setting up the server only takes two steps: we need to instantiate the server, then tell it to listen for requests. 
const app = express(); // to initiate the server


function filterByQuery(query, animalsArray) {
    let personalityTraitsArray = [];
    // Note that we save the animalsArray as filteredResults here:
    let filteredResults = animalsArray;
    if (query.personalityTraits) {
      // Save personalityTraits as a dedicated array.
      // If personalityTraits is a string, place it into a new array and save.
      if (typeof query.personalityTraits === 'string') {
        personalityTraitsArray = [query.personalityTraits];
      } else {
        personalityTraitsArray = query.personalityTraits;
      }
      // Loop through each trait in the personalityTraits array:
      personalityTraitsArray.forEach(trait => {
        // Check the trait against each animal in the filteredResults array.
        // Remember, it is initially a copy of the animalsArray,
        // but here we're updating it for each trait in the .forEach() loop.
        // For each trait being targeted by the filter, the filteredResults
        // array will then contain only the entries that contain the trait,
        // so at the end we'll have an array of animals that have every one 
        // of the traits when the .forEach() loop is finished.
        filteredResults = filteredResults.filter(
          animal => animal.personalityTraits.indexOf(trait) !== -1
        );
      });
    }
    if (query.diet) {
      filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
      filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
      filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    // return the filtered results:
    return filteredResults;
  }
  function findById(id, animalsArray) {
    const result = animalsArray.filter(animal => animal.id === id)[0];
    return result;
  }


app.get('/api/animals', (req, res) => {
    let results = animals;
    //console.log(req.query);
if (req.query) {
    results = filterByQuery(req.query, results);
}
//To send lot of JSON data from API
    res.json(results);
});

app.get('/api/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if(result) {  
        res.json(result);
        } else {
        res.send(404);
        }
  });



//To make our server listen.
app.listen (PORT, () => {
    console.log (`API server now on port ${PORT}!`);
});







// Create a different type of API endpoint to accept incoming (often called POST) data from a client's request.

// Implement functionality called middleware so our server can understand the type of data we are looking to post.

// Use a tool called Insomnia Core to test POST requests while we wait for a finished front end.








//creating a route that the front-end can request data from.
//const {animals} = require ('./data/animals.json');

// call express.js package
//const express = require('express'); 

//Setting up the server only takes two steps: we need to instantiate the server, then tell it to listen for requests. 
//const app = express(); // to initiate the server
//the get() method requires two arguments. 
//The first is a string that describes the route the client will have to fetch from.
//The second is a callback function that will execute every time that route is accessed with a GET request.
// app.get('/api/animals', (req, res) => {
//     let results = animals;
//     //console.log(req.query);

// we are using the send() method from the res parameter (short for response) to send the string Hello! to our client.
    //res.send (animals);
//To send lot of JSON from API
//res.json(results);














// To make our server listen.
// app.listen (3001, () => {
//     console.log (`API server now on port 3001!`);
// });