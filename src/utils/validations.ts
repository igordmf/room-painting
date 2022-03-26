import {
  DOOR_DIMENSIONS,
  DOOR_HEIGHT,
  DOOR_WIDTH,
  MAX_DOOR_AND_WINDOWS_PERCENTUAL_AREA,
  MAX_WALL_AREA,
  MIN_WALL_AREA,
  WALL_DOOR_MIN_DIFF,
  WINDOW_DIMENSIONS,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "./constants";

import { IWalls } from "../context/walls";
import { IDoorsAndWindows } from "../context/doorsAndWindows";

type Height = number;
type Width = number;
type Doors = number;
type Windows = number;

interface Areas {
  wallHeight: Height;
  wallWidth: Width;
  doors: Doors;
  windows: Windows;
}

export const isValidWallDimensions = (height: Height, width : Width)  => {
  if (height < 0 || width < 0) {
    return false;
  }

  if (height === 0 || width === 0) {
    return true;
  }

  if (height * width < MIN_WALL_AREA) {
    return false;
  }

  if (height * width > MAX_WALL_AREA) {
    return false;
  }

  return true;
}

const isValidHeightToHaveDoor = (height: Height) => {
  if (height < DOOR_HEIGHT + WALL_DOOR_MIN_DIFF) {
    return false;
  }

  return true;
}
  
const isValidWidthToHaveDoor = (width: Width) => {
  if (width < DOOR_WIDTH) {
    return false;
  }

  return true;
}

const isValidHeightToHaveWindow = (height: Height) => {
  if (height < WINDOW_HEIGHT) {
    return false;
  }

  return true;
}
  
const isValidWidthToHaveWindow = (width: Width) => {
  if (width < WINDOW_WIDTH) {
    return false;
  }

  return true;
}

export const isValidMeasuresToHaveDoor = (height: Height, width: Width) => {
  if (!isValidHeightToHaveDoor(height) || !isValidWidthToHaveDoor(width)) {
    return false;
  }

  return true;
}

export const isValidMeasuresToHaveWindow = (height: Height, width: Width) => {
  if (!isValidHeightToHaveWindow(height) || !isValidWidthToHaveWindow(width)) {
    return false;
  }

  return true;
}

export const isValidDoorsAndWindowsArea = ({ wallHeight, wallWidth, doors, windows }: Areas) => {
  const doorsArea = doors * DOOR_DIMENSIONS;
  const windowsArea = windows * WINDOW_DIMENSIONS;
  const totalArea = doorsArea + windowsArea;
  const totalAreaPercentage = totalArea / (wallHeight * wallWidth);

  if (totalAreaPercentage > MAX_DOOR_AND_WINDOWS_PERCENTUAL_AREA) {
    return false;
  }

  return true
}

export const validWallsValues = (walls: IWalls): Boolean => {
  const { firstWall, secondWall, thirdWall, fourthWall } = walls;

  const isValidFirstWall = isValidWallDimensions(firstWall.height, firstWall.width);
  const isValidSecondWall = isValidWallDimensions(secondWall.height, secondWall.width);
  const isValidThirdWall = isValidWallDimensions(thirdWall.height, thirdWall.width);
  const isValidFourthWall = isValidWallDimensions(fourthWall.height, fourthWall.width);

  return isValidFirstWall && isValidSecondWall && isValidThirdWall && isValidFourthWall;
}

export const validDoorsAndWindowsArea = (walls: IWalls, doorsAndWindows: IDoorsAndWindows): Boolean => {
  const {
    firstWall: { height: firstHeight, width: firstWidth },
    secondWall: { height: secondHeight, width: secondWidth },
    thirdWall: { height: thirdHeight, width: thirdWidth },
    fourthWall: { height: fourthHeight, width: fourthWidth },
  } = walls;

  const {
    firstWall: { doors: firstDoors, windows: firstWindows },
    secondWall: { doors: secondDoors, windows: secondWindows },
    thirdWall: { doors: thirdDoors, windows: thirdWindows },
    fourthWall: { doors: fourthDoors, windows: fourthWindows },
  } = doorsAndWindows;

  const isValidFirstWallDoorsAndWindows = isValidDoorsAndWindowsArea({
    wallHeight: firstHeight,
    wallWidth: firstWidth,
    doors: firstDoors,
    windows: firstWindows
  });

  const isValidSecondWallDoorsAndWindows = isValidDoorsAndWindowsArea({
    wallHeight: secondHeight,
    wallWidth: secondWidth,
    doors: secondDoors,
    windows: secondWindows
  });

  const isValidThirdWallDoorsAndWindows = isValidDoorsAndWindowsArea({
    wallHeight: thirdHeight,
    wallWidth: thirdWidth,
    doors: thirdDoors,
    windows: thirdWindows
  });

  const isValidFourthWallDoorsAndWindows = isValidDoorsAndWindowsArea({
    wallHeight: fourthHeight,
    wallWidth: fourthWidth,
    doors: fourthDoors,
    windows: fourthWindows
  });

  return isValidFirstWallDoorsAndWindows
    && isValidSecondWallDoorsAndWindows
    && isValidThirdWallDoorsAndWindows
    && isValidFourthWallDoorsAndWindows;
}
