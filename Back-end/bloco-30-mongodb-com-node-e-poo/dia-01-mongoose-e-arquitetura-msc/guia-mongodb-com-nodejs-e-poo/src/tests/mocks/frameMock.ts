import IFrame from '../../interfaces/Frame';

const frameMock:IFrame = {
  material: 'Ouro',
  color: 'Daquele naipe'
};

interface IFrameWithId extends IFrame {
  _id: string
}

const arrayFrameMock:IFrameWithId[] = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    material: 'Ouro',
    color: 'Daquele naipe'
  },
  {
    _id: '62cf1fc6498565d94eba52cd',
    material: 'Prata',
    color: 'Sabe deus'
  },
  {
    _id: '62cf1fc6498565d94eba52cd',
    material: 'Marfin',
    color: 'Mármore'
  },
  {
    _id: '62cf1fc6498565d94eba52cd',
    material: 'Vibranium',
    color: 'Grafite'
  }
]

const frameMockWithId:IFrameWithId = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Ouro',
  color: 'Daquele naipe'
};

const deletedFrame = {
  acknowledged: true,
  deletedCount: 1
}

export { frameMock, frameMockWithId, arrayFrameMock, deletedFrame };
