import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import Categories from './categories/Router';
import Specialties from './specialties/Router';

const constants = require("./common/Constants");

createConnection()
.then(async connection =>{
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.disable("x-powered-by");
    app.use(`/${constants.API_VERSION}`, Categories);
    app.use(`/${constants.API_VERSION}`, Specialties);
    const port  = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
})
.catch(error => console.error(`TypeORM connection error:`, error));
