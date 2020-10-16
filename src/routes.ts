import { Router } from 'express';

import multer from 'multer';

import uploadConfig from './config/upload';

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

const upload = multer(uploadConfig);

// Create an orphanage
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);

// List all the orphanages
routes.get("/orphanages", OrphanagesController.index);

// Show a specific orphanage
routes.get("/orphanages/:id", OrphanagesController.show);

export default routes;
