var express = require('express');
var app = express();
import axios from 'axios';

const otherServiceLocations  = process.env.otherServices || {};
const myService = otherServiceLocations['myService'];
console.log('myService: ', myService);


app.get('/', (req, res) => {
  axios.get(myService.url).then( (serviceRes) => {
    res.json(serviceRes.body);
  });
});

const server = app.listen(8080, function() {
  console.log('server started');
});
