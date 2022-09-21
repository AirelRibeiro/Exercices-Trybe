import express from 'express';

const app = express();

app.use(express.json());

const endpointPlatWithId = '/plant/:id';

const database = new PlantDatabase();
