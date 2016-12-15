const express = require('express');
const app = express();
import axios from 'axios';

const config = require('./config.json');
console.log('config: ', config);
const {myExternalService} = config;
const serviceUrl = 'http://' + myExternalService + ':8090';
console.log('service url: ' + serviceUrl);


app.get('/', (req, res) => {
  axios.get(serviceUrl).then( (serviceRes) => {
    res.json(serviceRes.body);
  });
  res.end("hello worl");
});

const server = app.listen(8080, function() {
  console.log('server started');
});
