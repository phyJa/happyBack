import { Router } from 'express';

import { getRepository } from "typeorm";

import Orphanage from './models/Orphanage';

const routes = Router();

routes.post(

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

export default routes;
