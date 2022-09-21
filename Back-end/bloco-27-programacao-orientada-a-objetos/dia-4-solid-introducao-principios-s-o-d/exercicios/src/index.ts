import express from 'express';

const app = express();

app.use(express.json());

const endpointPlatWithId = '/plant/:id';

const database = new PlantDatabase();
const PORT = 3000;

app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));