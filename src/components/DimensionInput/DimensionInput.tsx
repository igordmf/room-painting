import { Label } from './DimensionInput.styles'

export type DimensionInputProps = {
  handleMeasuresChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  value: number;
};

export const DimensionInput = ({ handleMeasuresChange, label, name, value } : DimensionInputProps) => {

  return (
    <Label>
      {label}
      <input
        name={name}
        type="number"
        onChange={handleMeasuresChange}
        value={value}
      />
    </Label>
  )
}
