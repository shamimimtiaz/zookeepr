
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


//to import and use the fs library to write that data to animals.json.
const fs = require('fs');
//This is a module built into the Node.js API that provides utilities for working with file and directory paths.
const path = require('path');

//creating a route that the front-end can request data from.
const {animals} = require ('./data/animals.json');

const express = require('express'); // call express.js package

const PORT = process.env.PORT || 3001;
//Setting up the server only takes two steps: we need to instantiate the server, then tell it to listen for requests. 
const app = express(); // to initiate the server

//Here we set up some more Express.js middleware function(express.static) that instructs the server to make certain files (e.g style css and script.js )readily available and to not gate it behind a server endpoint.
app.use(express.static('public'));
// parse incoming string or array data  ref : req.body at expree documentation
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// function filterByQuery(query, animalsArray) {
//     let personalityTraitsArray = [];
//     // Note that we save the animalsArray as filteredResults here:
//     let filteredResults = animalsArray;
//     if (query.personalityTraits) {
//       // Save personalityTraits as a dedicated array.
//       // If personalityTraits is a string, place it into a new array and save.
//       if (typeof query.personalityTraits === 'string') {
//         personalityTraitsArray = [query.personalityTraits];
//       } else {
//         personalityTraitsArray = query.personalityTraits;
//       }
//       // Loop through each trait in the personalityTraits array:
//       personalityTraitsArray.forEach(trait => {
//         // Check the trait against each animal in the filteredResults array.
//         // Remember, it is initially a copy of the animalsArray,
//         // but here we're updating it for each trait in the .forEach() loop.
//         // For each trait being targeted by the filter, the filteredResults
//         // array will then contain only the entries that contain the trait,
//         // so at the end we'll have an array of animals that have every one 
//         // of the traits when the .forEach() loop is finished.
//         filteredResults = filteredResults.filter(
//           animal => animal.personalityTraits.indexOf(trait) !== -1);
//       });
//     }
//     if (query.diet) {
//       filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
//     }
//     if (query.species) {
//       filteredResults = filteredResults.filter(animal => animal.species === query.species);
//     }
//     if (query.name) {
//       filteredResults = filteredResults.filter(animal => animal.name === query.name);
//     }
//     // return the filtered results:
//     return filteredResults;
//   }
//   function findById(id, animalsArray) {
//     const result = animalsArray.filter(animal => animal.id === id)[0];
//     return result;
//   }

//   function createNewAnimal(body, animalsArray) {
//     const animal = body;
//     animalsArray.push(animal);
//     fs.writeFileSync(
//       path.join(__dirname, './data/animals.json'),
//  //we need to save the JavaScript array data as JSON, so we use JSON.stringify() to convert it. 
//  // To kepping data formatted: the null argument means we don't want to edit any of our existing data; if we did, we could pass something in there.
//  // The 2 indicates we want to create white space between our values to make it more readable
//  JSON.stringify({ animals: animalsArray }, null, 2)
//   );
// // return finished code to post route for response  
//     return animal;
//   }

// function validateAnimal(animal) {
//     if (!animal.name || typeof animal.name !== 'string') {
//         return false;
//     }
//     if (!animal.species || typeof animal.species !== 'string'){
//         return false;
//     }
//     if (!animal.diet || typeof animal.diet !== 'String') {
//         return false;
//     }
//     if (!animal.personalityTraits || !Array.isArray(animal.personalityTraits)) {
//         return false;
//     }
//         return true;    
// }


// app.get('/api/animals', (req, res) => {
//     let results = animals;
//     //console.log(req.query);
// if (req.query) {
//     results = filterByQuery(req.query, results);
// }
// //To send lot of JSON data from API
//     res.json(results);
// });
// app.get('/api/animals/:id', (req, res) => {
//     const result = findById(req.params.id, animals);
//     if(result) {  
//         res.json(result);
//         } else {
//         res.send(404);
//         }
//   });

// app.post('/api/animals', (req, res) => {

// // set id based on what the next index of the array will be
// req.body.id = animals.length.toString(); //the length property is always going to be one number ahead of the last index of the array 
// // if any data in req.body is incorrect, send 400 error back
// if (!validateAnimal(req.body)) {
// //The res.status().send(); is a response method to relay a message to the client making the request.    
//     res.status (400).send('This animal is not properly formated');
// } else {
// // add animal to json file and animals array in this function
// const animal = createNewAnimal(req.body, animals);
// //console.log(req.body);      //the req.body property is where we can access that data on the server side and do something with it.
// res.json(animal);
//     }
// });

//add a route to server.js for index.html.
// '/' :It brings us to the root route of the server!
// app.get ('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });
// //add a route to server.js for animal.html file
// app.get('/animals', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/animals.html'));
// });
// //add a route to server.js for zookeepers.html file
// app.get('/zookeepers', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/zookeepers.html'));
// });

//To make our server listen.
app.listen (PORT, () => {
    console.log (`API server now on port ${PORT}!`);
});





//app represents a single instance of the Express.js server.

// Create a different type of API endpoint to accept incoming (often called POST) data from a client's request.
// Implement functionality called middleware so our server can understand the type of data we are looking to post.
// Use a tool called Insomnia Core to test POST requests while we wait for a finished front end.
// Created GET routes that serve HTML content instead of JSON.
// Implemented a special Express.js middleware function that helps serve front-end assets.
// Used front-end JavaScript to send data to our POST routes.
// Deepened your knowledge and revisited front-end GET functionality using the Fetch API.


//Both of the above middleware functions need to be set up every time you create a server that's looking to accept POST data.
//app.use(express.urlencoded({extended: true}));
//app.use(express.json());



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