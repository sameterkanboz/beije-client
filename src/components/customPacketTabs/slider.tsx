import { Box, Slider, Typography } from "@mui/material";

interface ProductSliderProps {
  header: string;
  max: number;
  min: number;
  value: number;
  onChange: any;
}

const ProductSlider = (props: ProductSliderProps) => {
  const { header, max, min, value, onChange } = props;
  return (
    <>
      <Typography id="discrete-slider" gutterBottom>
        {header}
      </Typography>
      <Box>
        <Slider
          aria-label="Always visible"
          defaultValue={value}
          valueLabelDisplay={value === min || value === max ? "auto" : "on"}
          onChange={onChange}
          value={value}
          shiftStep={10}
          step={10}
          marks
          min={min}
          max={max}
        />
      </Box>
      <div className="flex justify-between">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </>
  );
};

export default ProductSlider;
