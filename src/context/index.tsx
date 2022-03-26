import React from 'react';
import { WallsProvider } from './walls';
import { DoorsAndWindowsProvider } from './doorsAndWindows';

const AppProvider: React.FC = ({ children }) => (
  <WallsProvider>
    <DoorsAndWindowsProvider>
      {children}
    </DoorsAndWindowsProvider>
  </WallsProvider>
);

export default AppProvider;
