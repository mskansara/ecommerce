import { config } from 'dotenv';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import dotenv from 'dotenv';
dotenv.config();

if (process.env.NODE_ENV == 'production') {
    console.log('Running in production mode.')
    config({ path: '.prod.env' });
} else {
    console.log('Running in development mode.')
    config: ({ path: '.env' })
}

const DATABASE_URL  = process.env.DATABASE_URL;

const databaseurl = drizzle(postgres(DATABASE_URL!, {ssl: 'require', max: 1}));

const main = async () => {
    console.log(DATABASE_URL)
    try {
        await migrate(databaseurl, {
            migrationsFolder: 'drizzle'
        })
    } catch (error) {
        console.log(error);
    }
    process.exit(0)
}

main();
