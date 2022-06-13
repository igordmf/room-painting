import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {
  DimensionInput,
  DimensionInputProps,
} from "../components/DimensionInput";

const defaultProps = {
  handleMeasuresChange: () => {},
  label: "label",
  name: "name",
  value: 0,
};

const TestedDimensionInput = (props: DimensionInputProps) => (
  <DimensionInput {...props} />
);

describe.skip("Dimension Input", () => {
  it('should renders with "Altura" label text', () => {
    expect.assertions(2);

    render(
      <TestedDimensionInput {...defaultProps} label="Altura" name="height" />
    );

    const dimensionInput = screen.getByRole("spinbutton");

    expect(screen.getByText("Altura")).toBeInTheDocument();
    expect(dimensionInput).toHaveAttribute("name", "height");
  });

  it('should renders with "Largura" label text', () => {
    expect.assertions(2);

    render(
      <TestedDimensionInput {...defaultProps} label="Largura" name="width" />
    );
    
    const dimensionInput = screen.getByRole("spinbutton");

    expect(screen.getByText("Largura")).toBeInTheDocument();
    expect(dimensionInput).toHaveAttribute("name", "width");
  });

  it('should render with "3" value', () => {
    expect.assertions(1);
    
    render(
      <TestedDimensionInput {...defaultProps} value={3} />
    );

    const dimensionInput = screen.getByRole("spinbutton");

    expect(dimensionInput).toHaveAttribute("value", "3");
  });

  it('should render with "5" value', () => {
    expect.assertions(1);

    render(
      <TestedDimensionInput {...defaultProps} value={5} />
    );

    const dimensionInput = screen.getByRole("spinbutton");

    expect(dimensionInput).toHaveAttribute("value", "5");
  });

  it('should have handleMeasuresChange function called', () => {
    expect.assertions(1);

    const handleMeasuresChange = jest.fn();
    
    render(
      <TestedDimensionInput {...defaultProps} handleMeasuresChange={handleMeasuresChange} />
    );
      
    const dimensionInput = screen.getByRole("spinbutton");

    userEvent.type(dimensionInput, '4');

    expect(handleMeasuresChange).toHaveBeenCalled();
  });
});
