import IPlantDataBase from './IPlantDataBase';
import IPlant from './IPlant';
import fs from 'fs/promises';

class PlantDatabase implements IPlantDataBase {
  private _dataFile: string;

  constructor(dataFile?: string) {
    this._dataFile = dataFile ? dataFile : 'plantsData.json';
  }

  public initPlant(plant: IPlant): IPlant {
    const { id, breed, needsSun, origin, specialCare, size } = plant;
    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };

    return newPlant;
  }

  public async getPlants(): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(this._dataFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }

  public async insertPlant(plant: IPlant): Promise<IPlant> {
    const plantsRaw = await fs.readFile(this._dataFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const newPlant = this.initPlant({ id: (Math.random() * (1 - 1000) + 1).toString(), ...plant });
    plants.push(newPlant);

    await fs.writeFile(this._dataFile, JSON.stringify(plants, null, 4));
    return newPlant;
  }

  public async getPlantWithId(id: string): Promise<IPlant | string> {
    const plantsRaw = await fs.readFile(this._dataFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const plant = plants.find((p) => p.id === id);
    return !plant ? 'Planta com esse Id não existe' : plant;
  }

  public async deletePlant(id: string): Promise<string> {
    const plantsRaw = await fs.readFile(this._dataFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    const removedPlant = plants.find((plant) => plant.id === id);
    if (!removedPlant) return 'Planta com esse Id não existe';

    const newPlants = plants.filter((plant) => plant.id !== id);
    await fs.writeFile(this._dataFile, JSON.stringify(newPlants, null, 4));

    return 'Planta removida com sucesso!';
  }

  public async editPlant(newPlant: IPlant, id: string): Promise<IPlant | string> {
    const plantsRaw = await fs.readFile(this._dataFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    const updatedPlant = plants.find((p) => p.id === id);
    if (!updatedPlant) return 'Planta com esse Id não existe';

    const updatedPlants = plants.map((p) => {
      if (p.id ===  id) return newPlant;
      return p;
    });

    await fs.writeFile(this._dataFile, JSON.stringify(updatedPlants, null, 4));
    return newPlant;
  }

  public async getPlantsWithSun(id: string): Promise<IPlant[] | string> {
    const plantsRaw = await fs.readFile(this._dataFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const filteredPlants = plants.filter((plant) =>
      plant.id === id
      && plant.needsSun
      && (!plant.specialCare
        || plant.specialCare.waterFrequency > 2));
    
    if (filteredPlants.length < 1) return 'Plantas com essa condição não existem.'

    return filteredPlants;
  }
}

export default PlantDatabase;
