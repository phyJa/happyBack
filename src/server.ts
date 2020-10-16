import express from 'express';

// Database connection
import './database/connection';

import routes from './routes';

import path from 'path';

const app = express();

//Make express understand json
app.use(express.json());

// Use routes (must be after the latter command)
app.use(routes);

//The configuration to serve the images
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.listen(3333);