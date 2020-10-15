import express from 'express';

import { getRepository } from "typeorm";

import Orphanage from './models/Orphanage';

// Database connection
import './database/connection';

const app = express();

//Make express understand json
app.use(express.json());

app.post(

    "/orphanages", 

    (request, response) => {

        const {
            
            name, // name: name

            latitude,
            
            longitude,
            
            about,
            
            instructions,
            
            opening_hours,
            
            open_on_weekends
        
        } = request.body;

        

        response.json({ message: "Hello world!" });

    }

);

app.listen(3333);