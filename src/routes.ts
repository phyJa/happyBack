import { Router } from 'express';

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

// Create an orphanage
routes.post("/orphanages", OrphanagesController.create);

// List all the orphanages
routes.get("/orphanages", OrphanagesController.index);

// Show a specific orphanage
routes.get("/orphanages/:id", OrphanagesController.show);

export default routes;
