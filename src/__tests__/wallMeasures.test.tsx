import { render, screen } from "@testing-library/react";
import {
  IWallContainerProps,
  WallContainer,
  WallMeasures,
} from "../components/WallMeasures";
import { WallKeys, WALLS_DEFAULT_VALUE } from "../context/walls";
import { WALL_NAMES_TEXT } from "../utils/constants";

const wallContainerDefaultProps = {
  handleMeasuresChange: () => {},
  walls: WALLS_DEFAULT_VALUE.walls,
  wallName: WallKeys.FIRST_WALL,
};

const wallParagraph = (wallName: string) => `Dimensões da ${wallName} parede em metros`;

const invalidDimensionsText = "Essas dimensões não são permitidas!"

const TestedWallContainer = (props: IWallContainerProps) => (
  <WallContainer {...props} />
);

describe.skip("WallContainer", () => {
  it('should render for the first wall with text "primeira parede"', () => {
    expect.assertions(1);

    render(
      <TestedWallContainer {...wallContainerDefaultProps} />
    );

    const wallContainerParagraph = screen.getByText(wallParagraph(WALL_NAMES_TEXT[WallKeys.FIRST_WALL]));

    expect(wallContainerParagraph).toBeInTheDocument();
  });

  it('should render for the third wall with text "terceira parede"', () => {
    expect.assertions(1);

    render(
      <TestedWallContainer {...wallContainerDefaultProps} wallName={WallKeys.THIRD_WALL} />
    );

    const wallContainerParagraph = screen.getByText(wallParagraph(WALL_NAMES_TEXT[WallKeys.THIRD_WALL]));

    expect(wallContainerParagraph).toBeInTheDocument();
  });

  it('should render for the second wall with text "Essas dimensões não são permitidas!"', () => {
    expect.assertions(1);

    const { walls } = wallContainerDefaultProps;
    const invalidSecondWallDimensions = {
      height: 4,
      width: 4,
    };

    render(
      <TestedWallContainer
        {...wallContainerDefaultProps}
        wallName={WallKeys.SECOND_WALL}
        walls={{...walls, [WallKeys.SECOND_WALL]: invalidSecondWallDimensions}}
      />
    );

    const wallContainerInvalidDimensionsParagraph = screen.getByText(
      invalidDimensionsText
    );

    expect(wallContainerInvalidDimensionsParagraph).toBeInTheDocument();
  });

  it('should render for the fourth wall values 2 and 3', () => {
    expect.assertions(2);

    const { walls } = wallContainerDefaultProps;
    const validFourthWallDimensions = {
      height: 2,
      width: 3,
    };

    render(
      <TestedWallContainer
        {...wallContainerDefaultProps}
        wallName={WallKeys.FOURTH_WALL}
        walls={{...walls, [WallKeys.FOURTH_WALL]: validFourthWallDimensions}}
      />
    );

    const heightFourthWallDimensionInputs = screen.getByRole("spinbutton", { name: 'Altura'});
    expect(heightFourthWallDimensionInputs).toHaveAttribute("value", "2");
    
    const widthFourthWallDimensionInputs = screen.getByRole("spinbutton", { name: 'Largura'});
    expect(widthFourthWallDimensionInputs).toHaveAttribute("value", "3");
  });
});

describe('WallMeasures', () => {
  it('should render all four walls setup configuration', () => {
    expect.assertions(4);

    render(
      <WallMeasures />
    );
    
    const heightWallsDimensionInputs = screen.getAllByRole("spinbutton", { name: 'Altura'});
    const widthWallsDimensionInputs = screen.getAllByRole("spinbutton", { name: 'Largura'});

    const doorsWallsInputs = screen.getAllByLabelText('Quantidade de portas');
    const windowsWallsInputs = screen.getAllByLabelText('Quantidade de janelas');
    
    expect(heightWallsDimensionInputs).toHaveLength(4);
    expect(widthWallsDimensionInputs).toHaveLength(4);

    expect(doorsWallsInputs).toHaveLength(4);
    expect(windowsWallsInputs).toHaveLength(4);
  });
});