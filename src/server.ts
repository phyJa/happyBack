import express from 'express';

const app = express();

// All inside the next HTTP method (in this case, get) is a route
// Recurso (resource): "/"

app.post(

    "/:abdc", 

    (request, response) => {

        // Query params
        //console.log(request.query);

        //Route params
        console.log(request.params);

        //Body params
        //console.log(request.body);

        response.json({ message: "Hello world!" });

    }

);

app.listen(3333);