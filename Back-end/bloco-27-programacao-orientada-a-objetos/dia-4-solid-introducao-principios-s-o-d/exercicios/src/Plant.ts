import IPlant from './IPlant';
import ISpecialCare from './ISpecialCare';

class Plant implements IPlant {
  private _id?: string;
  private _breed: string;
  private _needsSun: boolean;
  private _origin: string;
  private _size: number;
  private _specialCare?: ISpecialCare;

  constructor(
    breed: string,
    needsSun: boolean,
    origin: string,
    size: number,
    specialCare?: ISpecialCare,
    id?: string,
  ) {
    this._breed = breed;
    this._needsSun = needsSun;
    this._origin = origin;
    this._size = size;
    this._id = id;
    this._specialCare = specialCare;
  }

  get breed(): string { return this._breed; }

  get needsSun(): boolean { return this._needsSun; }

  get origin(): string { return this._origin; }

  get size(): number { return this._size; }
}

export default Plant;
