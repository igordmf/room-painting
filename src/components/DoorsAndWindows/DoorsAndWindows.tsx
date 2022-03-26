import { useDoorsAndWindows } from "../../context/doorsAndWindows";
import {
  isValidDoorsAndWindowsArea,
  isValidMeasuresToHaveDoor,
  isValidMeasuresToHaveWindow
} from "../../utils/validations";
import { Label, WarningText } from './DoorsAndWindows.styles';

type DoorsAndWindowsProps = {
  wallHeight: number;
  wallName: string;
  wallWidth: number;
};

export const DoorsAndWindows = ({ wallHeight, wallName, wallWidth }: DoorsAndWindowsProps) => {
  const { doorsAndWindows, setDoorsAndWindows } = useDoorsAndWindows();
  const { doors, windows } = doorsAndWindows[wallName as keyof typeof doorsAndWindows];

  const handleDoorsAndWindowsChange = (event: { target: HTMLInputElement; }) => {
    const { id, value } = event.target;
    setDoorsAndWindows({
      ...doorsAndWindows,
      [wallName]: {
        ...doorsAndWindows[wallName as keyof typeof doorsAndWindows],
        [id]: value
      }
    });
  }

  return (
    <>
      <Label htmlFor="doors">
        Quantidade de portas
        <input
          id="doors"
          disabled={!isValidMeasuresToHaveDoor(wallHeight, wallWidth)}
          onChange={handleDoorsAndWindowsChange}
          type="number"
          value={doors}
        />
      </Label>

      <Label htmlFor="windows">
        Quantidade de janelas
        <input
          id="windows"
          disabled={!isValidMeasuresToHaveWindow(wallHeight, wallWidth)}
          onChange={handleDoorsAndWindowsChange}
          type="number"
          value={windows}
        />
      </Label>
 
      {!isValidDoorsAndWindowsArea({wallHeight, wallWidth, doors, windows}) && (
        <WarningText>Essa quantidade de portas e janelas não é permitida!</WarningText>
      )}
    </>
  )
}
