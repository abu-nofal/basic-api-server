'use strict';

const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger =require('./middleware/logger')
const validator =require('./middleware/validator')
const router = require('./routes/food');
const routerClothes = require('./routes/clothes');

const app = express();
app.use(express.json())
app.use(router);
app.use(logger);
app.use(routerClothes);


const start=(port)=> {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}
app.get('/', (req, res)=> {
    
    res.send('hello m3lem 😎')
});
app.post('/bad', (req,res)=> {
    let number = 12;
    number.map(x=> console.log(x));
    res.send('this Bad Route ');
})

app.get('/person',validator, (req, res)=> {
    
        res.json({
            name:req.name
        })
       
    
    
});



app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
     app,
     start
}