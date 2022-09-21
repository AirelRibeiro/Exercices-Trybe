import express from 'express';

const app = express();

app.use(express.json());

const endpointPlatWithId = '/plant/:id';

app.get(endpointPlatWithId);
app.post(endpointPlatWithId);
app.delete(endpointPlatWithId);
app.post('/plant');
app.get('/plants');
app.get('/sunny/:id');