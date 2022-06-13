import { createContext, useContext, useState } from "react";


export enum WallKeys {
  FIRST_WALL = "firstWall",
  SECOND_WALL = "secondWall",
  THIRD_WALL = "thirdWall",
  FOURTH_WALL = "fourthWall",
}

export interface IWalls {
  [WallKeys.FIRST_WALL]: {
    height: number;
    width: number;
  };
  [WallKeys.SECOND_WALL]: {
    height: number;
    width: number;
  };
  [WallKeys.THIRD_WALL]: {
    height: number;
    width: number;
  };
  [WallKeys.FOURTH_WALL]: {
    height: number;
    width: number;
  }
}

interface IWallsContextData {
  walls: IWalls;
  setWalls: (walls: IWalls) => void;
}

export const WALLS_DEFAULT_VALUE = {
  walls: {
    firstWall: {
      height: 0,
      width: 0,
    },
    secondWall: {
      height: 0,
      width: 0,
    },
    thirdWall: {
      height: 0,
      width: 0,
    },
    fourthWall: {
      height: 0,
      width: 0,
    },
  },
  setWalls: () => {},
}

const WallsContext = createContext<IWallsContextData>(WALLS_DEFAULT_VALUE);

export const WallsProvider: React.FC = ({ children }) => {
  const [walls, setWalls] = useState<IWalls>(WALLS_DEFAULT_VALUE.walls);

  return (
    <WallsContext.Provider
      value={{
        walls,
        setWalls,
      }}
    >
      {children}
    </WallsContext.Provider>
  );
};

export const useWall = () => useContext(WallsContext);
