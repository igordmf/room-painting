import { createContext, useContext, useState } from "react";

export interface IDoorsAndWindows {
  firstWall: {
    doors: number;
    windows: number;
  };
  secondWall: {
    doors: number;
    windows: number;
  };
  thirdWall: {
    doors: number;
    windows: number;
  };
  fourthWall: {
    doors: number;
    windows: number;
  }
}

interface IDoorsAndWindowsContextData {
  doorsAndWindows: IDoorsAndWindows;
  setDoorsAndWindows: (doorsAndWindows: IDoorsAndWindows) => void;
}

const WALLS_AND_DEFAULT_VALUE = {
  doorsAndWindows: {
    firstWall: {
      doors: 0,
      windows: 0,
    },
    secondWall: {
      doors: 0,
      windows: 0,
    },
    thirdWall: {
      doors: 0,
      windows: 0,
    },
    fourthWall: {
      doors: 0,
      windows: 0,
    },
  },
  setDoorsAndWindows: () => {},
}

const DoorsAndWindowsContext = createContext<IDoorsAndWindowsContextData>(WALLS_AND_DEFAULT_VALUE);

export const DoorsAndWindowsProvider: React.FC = ({ children }) => {
  const [doorsAndWindows, setDoorsAndWindows] = useState<IDoorsAndWindows>(WALLS_AND_DEFAULT_VALUE.doorsAndWindows);

  return (
    <DoorsAndWindowsContext.Provider
      value={{
        doorsAndWindows,
        setDoorsAndWindows,
      }}
    >
      {children}
    </DoorsAndWindowsContext.Provider>
  );
};

export const useDoorsAndWindows = () => useContext(DoorsAndWindowsContext);
