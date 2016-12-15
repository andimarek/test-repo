const express = require('express');
const app = express();
import axios from 'axios';

const config = require('./config.json');
console.log('config: ', config);
const {myExternalService} = config;
const serviceUrl = 'http://' + myExternalService + ':8090';
console.log('service url: ' + serviceUrl);


app.get('/', (req, res) => {
  axios.get(serviceUrl+'/hello').then( (serviceRes) => {
    console.log('received response ', serviceRes);
    res.json(serviceRes.data);
  });
});

const server = app.listen(8080, function() {
  console.log('server started');
});
