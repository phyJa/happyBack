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

    async (request, response) => {

        const {
            
            name, // name: name

            latitude,
            
            longitude,
            
            about,
            
            instructions,
            
            opening_hours,
            
            open_on_weekends
        
        } = request.body;

        const orphanagesRepository = getRepository(Orphanage);
        
        const orphanage = orphanagesRepository.create(
           
            {

                name,

                latitude,
                
                longitude,
                
                about,
                
                instructions,
                
                opening_hours,
                
                open_on_weekends

            }

        );

        await orphanagesRepository.save(orphanage);

        // 201: Code which indicates something was
        // created.
        return response.status(201).json(orphanage);

    }

);

app.listen(3333);