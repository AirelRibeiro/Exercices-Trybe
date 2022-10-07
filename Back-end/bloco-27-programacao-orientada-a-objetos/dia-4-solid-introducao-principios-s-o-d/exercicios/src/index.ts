import express, { Request, Response } from 'express';
import PlantDatabase from './PlantDatabase';

const app = express();

app.use(express.json());

const endpointPlatWithId = '/plant/:id';

const database = new PlantDatabase();
const PORT = 3000;

app.get(endpointPlatWithId,async (req: Request, res: Response): Promise<Response> => {
  const plant = await database.getPlantWithId(req.params.id);
  if (typeof plant === 'string') {
    return res.status(404).json(plant);
  }
  return res.status(200).json(plant);
});
app.post(endpointPlatWithId, async (req: Request, res: Response): Promise<Response> => {
  const plant = await database.editPlant(req.body, req.params.id);
  if (typeof plant === 'string') {
    return res.status(404).json(plant);
  }
  return res.status(200).json(plant);
});
app.delete(endpointPlatWithId, async (req: Request, res: Response): Promise<Response> => {
  const plant = await database.deletePlant(req.params.id);
  if (plant === 'Planta com esse Id não existe') {
    return res.status(404).json(plant);
  }
  return res.status(200).json(plant);
});
app.post('/plant', async (req: Request, res: Response): Promise<Response> => {
  const plant = await database.insertPlant(req.body);
  return res.status(201).json(plant);
});
app.get('/plants', async (_req: Request, res: Response): Promise<Response> => {
  const plants = await database.getPlants();
  return res.status(200).json(plants);
});
app.get('/sunny/:id', async (req: Request, res: Response): Promise<Response> => {
  const plant = await database.getPlantsWithSun(req.params.id);
  if (typeof plant === 'string') {
    return res.status(404).json(plant);
  }
  return res.status(200).json(plant);
});


app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));