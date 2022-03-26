import { useDoorsAndWindows } from "../../context/doorsAndWindows";
import { useWall } from "../../context/walls";
import {
  doorsAndWindowsAreaCalculator,
  paintCansCalculator,
  wallsAreaCalculator
} from "../../utils/paintCansCalculator";
import { validDoorsAndWindowsArea, validWallsValues } from "../../utils/validations";
import { CansContainer, Container, InvalidValuesSpan } from './PaintCans.styles'

export const PaintCans = () => {
  const { walls } = useWall();
  const { doorsAndWindows } = useDoorsAndWindows();

  const isValidWalls = validWallsValues(walls);
  const isValidDoorsAndWindows = validDoorsAndWindowsArea(walls, doorsAndWindows);

  const wallsArea = wallsAreaCalculator(walls);
  const doorsAndWindowsArea = doorsAndWindowsAreaCalculator(doorsAndWindows);
  const paintCansSizes = paintCansCalculator({wallsArea, doorsAndWindowsArea});

  return (
    <Container>
      <p>
        Área total:
          {isValidWalls ?
            <span> {wallsArea.toFixed(2)}</span> :
            <InvalidValuesSpan> Valores inválidos!</InvalidValuesSpan>
          }
      </p>
      <p>
        Área para pintar:
          {isValidWalls && isValidDoorsAndWindows ?
            <span> {(wallsArea - doorsAndWindowsArea).toFixed(2)}</span> :
            <InvalidValuesSpan> Valores inválidos!</InvalidValuesSpan>
          }
      </p>
      <p>Latas de tinta necessárias:</p>
      {isValidWalls && isValidDoorsAndWindows
      ?
        <CansContainer>
          {paintCansSizes.map(({ size, quantity }) => {
              if (quantity <= 0) return null;
              
              return (
                <span key={size}>{`${quantity} lata${quantity > 1 ? 's' : ''} de ${size} litro${+size > 1 ? 's' : ''}`}</span>
              );
          })}
        </CansContainer>
      :
        <InvalidValuesSpan> Valores inválidos!</InvalidValuesSpan>
      }
    </Container>
  )
}
