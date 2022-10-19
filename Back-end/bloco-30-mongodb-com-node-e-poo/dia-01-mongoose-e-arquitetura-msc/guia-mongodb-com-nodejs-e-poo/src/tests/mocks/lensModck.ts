import ILens from "../../interfaces/Lens";

const lensMock:ILens = {
  degree: 5,
  antiGlare: true,
  blueLightFilter: true
};

interface ILensWithId extends ILens {
  _id: string
}

const arrayLensMock:ILensWithId[] = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    degree: 5,
    antiGlare: true,
    blueLightFilter: true
  },
  {
    _id: '62cf1fc6498565d94eba52cd',
    degree: 6,
    antiGlare: true,
    blueLightFilter: false
  },
  {
    _id: '62cf1fc6498565d94eba52cd',
    degree: 2,
    antiGlare: false,
    blueLightFilter: true
  },
  {
    _id: '62cf1fc6498565d94eba52cd',
    degree: 1.2,
    antiGlare: true,
    blueLightFilter: true
  }
]

const lensMockWithId:ILensWithId = {
  _id: '62cf1fc6498565d94eba52cd',
  degree: 5,
  antiGlare: true,
  blueLightFilter: true
};

const deletedLens = {
  acknowledged: true,
  deletedCount: 1
}


export { lensMock, lensMockWithId, arrayLensMock, deletedLens };
