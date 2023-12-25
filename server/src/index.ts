import dotenv from 'dotenv';
import { config } from 'dotenv';
import express from 'express';

dotenv.config();

if (process.env.NODE_ENV == 'production') {
    console.log('Running in production mode.')
    config({ path: '.prod.env' });
} else {
    console.log('Running in development mode.')
    config: ({ path: '.env' })
}

const PORT  = process.env.PORT;

const app = express();
app.use(express.json());

import shopRouter from './shop';
app.use(shopRouter);

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
});