import { useWall } from "../../context/walls";
import { WALL_NAMES_TEXT } from "../../utils/constants";
import { isValidWallDimensions } from "../../utils/validations";
import { DimensionInput } from "../DimensionInput";
import { DoorsAndWindows } from "../DoorsAndWindows";
import { Container, WarningText } from "./WallMeasures.styles";
import { IWalls, WallKeys } from "../../context/walls";

export const WallMeasures = () => {
  const { walls, setWalls } = useWall();

  const handleMeasuresChange = (event: { target: HTMLInputElement; }) => {
    const { name, value } = event.target;
    const [wall, dimension] = name.split(".") as [WallKeys, "height" | "width"];
    setWalls({ ...walls, [wall]: {...walls[wall], [dimension]: value} });
  };

  return (
    <>
      <form>
        {(Object.keys(walls) as WallKeys[]).map((wall) => {
          return (
            <WallContainer
              key={wall}
              handleMeasuresChange={handleMeasuresChange}
              wallName={wall}
              walls={walls}
            />
          )
        })}
      </form>
    </>
  )
}

export type IWallContainerProps = {
  handleMeasuresChange: (event: { target: HTMLInputElement; }) => void;
  wallName: WallKeys;
  walls: IWalls;
}

export const WallContainer = ({handleMeasuresChange, wallName, walls}: IWallContainerProps) => {
  return (
    <Container>
      <p>Dimensões da {WALL_NAMES_TEXT[wallName]} parede em metros</p>
      <DimensionInput
        handleMeasuresChange={handleMeasuresChange}
        label="Altura"
        name={`${wallName}.height`}
        value={walls[wallName].height}
      />
      <DimensionInput
        handleMeasuresChange={handleMeasuresChange}
        label="Largura"
        name={`${wallName}.width`}
        value={walls[wallName].width}
      />

      {isValidWallDimensions(+walls[wallName].height, +walls[wallName].width)
      ? (
        <DoorsAndWindows
          wallHeight={walls[wallName].height}
          wallName={wallName}
          wallWidth={walls[wallName].width}
        />
      ) : <WarningText>Essas dimensões não são permitidas!</WarningText>}
    </Container>
  )
}
