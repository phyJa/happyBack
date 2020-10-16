import express from 'express';

import path from 'path';

import cors from 'cors';

import 'express-async-errors';

// Database connection
import './database/connection';

import routes from './routes';

import errorHandler from './errors/handler';

const app = express();

app.use(cors());

//Make express understand json
app.use(express.json());

// Use routes (must be after the latter command)
app.use(routes);

//The configuration to serve the images
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use(errorHandler);

app.listen(3333);