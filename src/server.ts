import express from 'express';

// Database connection
import './database/connection';

import routes from './routes';

const app = express();

//Make express understand json
app.use(express.json());

// Use routes (must be after the latter command)
app.use(routes);


app.listen(3333);