import { Pool } from "pg";
import { drizzle } from 'drizzle-orm/node-postgres';
import express, {Request, Response} from 'express';
import { products } from "./db/schema";

const router = express.Router();

const pool = new Pool({
    connectionString: `${process.env.DATABASE_URL}`,
    ssl: { rejectUnauthorized: false }
});

const db = drizzle(pool);

const handleQueryError = (err: any, res: Response) => {
    console.log('Error executing the query', err);
    res.status(500).json({error: 'An error occurred while executing the query.'})
}

router.get('/products',async (req:Request, res: Response) => {
    try {
        const rows = await db.select().from(products);
        res.json(rows)
    } catch (err) {
        handleQueryError(err, res);
    }
})

export default router;