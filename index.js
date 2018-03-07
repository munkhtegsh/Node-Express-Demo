const express = require('express');
const bodyParser = require('body-parser');

const ctr = require('./controller');
const app = express();

const greetings = [];

app.use(bodyParser.json());

// app.get('/api/endpoint', (req, res, next) => {
//     console.log('hi')
//     res.status(200).send(greetings);
// });

app.get('/api/endpoint', ctr._sayHello);

//=====ENDPOINTS=======//
//app.METHOD(PATH, HANDLER FUNCTION)
//METHOD - get, put, post, delete
//PATH - url ending for example: /api/getUsers, like a receiving address
//HANDLER FUNCTION - a cb function that fires when this endpoint is hit
//  (request, response, next) => {...}
//      request - req object, holds infor from the request
//      response - res object, holds a bunch of methods that lets us
//                  respond to the request we received
//      next - used with custom middleware. (node3)
//              you have to recieive a request before you can send a response

app.post('/api/addGreeting', (req, res, next) => {
    //change it to POST
    //change the URL to match
    //got to Body section
    //choose raw
    //choose JSON
    greetings.push(req.body);
    res.status(200).send(greetings)
});

app.get('/api/addGreeting/:id', (req, res) => {
    console.log(req.params.id)
});

app.listen(3000, () => {
    console.log('Listening port 3000')
});
