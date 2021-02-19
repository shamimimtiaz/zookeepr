const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

router.get('/aquarium', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/aquarium.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;




//we cannot use app any longer, because it's defined in the server.js file and cannot be accessed here.we'll use Router, which allows you to declare routes in any file as long as you use the proper middleware.