'use strict';
const {app} = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(app);

//add the name of the module that I am testing 
describe('my API Server', ()=> {

    // add scenarios & test cases 
    it('handles 404 on a bad route', async () => {
       
        const response = await request.get('/asd'); // async
        expect(response.status).toEqual(404);
    });


    it('handles 404 on a bad method', async () => {
    
        const response = await request.post('/'); // async
        expect(response.status).toEqual(404);
    });

    //  1. callbacks ---> Promises (Promise.then() ) ----> Async/Await
    
    it('handles my internal server errors', async () => {
        const response = await request.post('/bad'); // async
        expect(response.status).toEqual(500);
    });

    
    
    it('200 get route /', async () => {
        const response = await request.get('/'); // async
        expect(response.status).toEqual(200);
        
    
    });
    it('200 get route /', async () => {
        const response = await request.get('/'); // async
      
        expect(response.text).toEqual('hello m3lem 😎');
        
    
    });
    //============================ for food 
    it('200 get', async () => {
        const response = await request.get('/food'); // async
        expect(response.status).toEqual(200);
        
    
    });
    
    

    it('200 if post', async () => {

        const response = await request.post('/food'); // async
        expect(response.status).toEqual(200);
        
    
    });
    
    it('200 if put', async () => {
        const response = await request.put('/food/2'); // async
        expect(response.status).toEqual(200);
        
    
    });
    it('200 if delete', async () => {
        const response = await request.delete('/food/3'); // async
        expect(response.status).toEqual(204);
        
    
    });

    //============================ for clothes 
    
    it('200 get clothes', async () => {
        const response = await request.get('/clothes'); // async
        expect(response.status).toEqual(200);
        
    
    });
    
    
    it('200 if post clothes', async () => {
        let reqBody={"firstName":"kk",
        "pants":"ss",
        "shoes":"blsfack",
        "Shirt":"greffen"}
        const response = await request.post('/clothes').send(reqBody); // async
        expect(response.status).toEqual(200);
        
    
    });
   
    
    it('200 if put clothes ', async () => {
        const response = await request.put('/clothes/2'); // async
        expect(response.status).toEqual(200);
        
    
    });
    it('200 if delete clothes', async () => {
        const response = await request.delete('/clothes/3'); // async
        expect(response.status).toEqual(204);
        
    
    });


});