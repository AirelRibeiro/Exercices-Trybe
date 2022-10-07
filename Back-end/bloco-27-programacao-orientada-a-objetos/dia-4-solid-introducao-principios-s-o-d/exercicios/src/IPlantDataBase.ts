import IPlant from "./IPlant";

interface IPlantDataBase {
  getPlants(): Promise<IPlant[]>;
  getPlantWithId(id: string): Promise<IPlant | string>;
  insertPlant(plant: IPlant): Promise<IPlant>;
  deletePlant(id: string): Promise<string>;
  editPlant(plant: IPlant, id: string): Promise<IPlant | string>
}

export default IPlantDataBase;
