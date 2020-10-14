import express from 'express';

// Database connection
import './database/connection';

const app = express();

//Make express understand json
app.use(express.json());

// All inside the next HTTP method (in this case, get) is a route
// Recurso (resource): "/"

app.get(

    "/", 

    (request, response) => {

        response.json({ message: "Hello world!" });

    }

);

app.listen(3333);