import {
  DOOR_DIMENSIONS,
  WINDOW_DIMENSIONS,
  PAINT_CANS_LITERS_SIZES,
  SQUARE_METERS_PER_LITER
} from './constants';
import { IWalls } from '../context/walls'
import { IDoorsAndWindows } from '../context/doorsAndWindows'

interface PaintCansCalculator {
  wallsArea: number;
  doorsAndWindowsArea: number;
}

type WallValue = {
  height: number;
  width: number;
}

export const wallsAreaCalculator = (walls: IWalls) => {
  const wallsValues: WallValue[] = Object.values(walls);
  const wallsArea = wallsValues.reduce((acc: number, wall: WallValue, index: number): number => {
    return acc + (wall.height * wall.width);
  }, 0);

  return wallsArea;
};

export const doorsAndWindowsAreaCalculator = (doorsAndWindows: IDoorsAndWindows) => {
  const doorsAndWindowsWallsValues: object[] = Object.values(doorsAndWindows);
  const doorsAndWindowsArea = doorsAndWindowsWallsValues.reduce((acc: number, doorsAndWindowsWall: object): number => {
    const doors = doorsAndWindowsWall['doors' as keyof typeof doorsAndWindowsWall]
    const windows = doorsAndWindowsWall['windows' as keyof typeof doorsAndWindowsWall]
    return acc + (doors * DOOR_DIMENSIONS) + (windows * WINDOW_DIMENSIONS);
  }, 0);

  return doorsAndWindowsArea;
}

export const paintCansCalculator = ({ wallsArea, doorsAndWindowsArea }: PaintCansCalculator) => {
  const areaToPaint = wallsArea - doorsAndWindowsArea;
  let litersToPaint = areaToPaint / SQUARE_METERS_PER_LITER;

  const sortedPaintCansSizes: string[] = Object.keys(PAINT_CANS_LITERS_SIZES).sort((a, b) => {
    if (a < b) {
      return 1;
    }

    if (a > b) {
      return -1;
    }

    return 0;
  });

  interface IPaintCansObject {
    [key: string]: number;
  }

  const paintCansObject: IPaintCansObject = sortedPaintCansSizes.reduce((acc, size, index) => {
    const sizeLiters = PAINT_CANS_LITERS_SIZES[size as keyof typeof PAINT_CANS_LITERS_SIZES];
    const paintCansQuantity = Math.floor(litersToPaint / sizeLiters);
    litersToPaint -= paintCansQuantity * sizeLiters;

    if (index === sortedPaintCansSizes.length - 1 && litersToPaint > 0) {
      return { ...acc, [size]: paintCansQuantity + 1};
    }

    return { ...acc, [size]: paintCansQuantity };
  }, {});

  const paintCans = Object.entries(paintCansObject).map(([size, quantity]) => ({size, quantity}));

  return paintCans;
}
