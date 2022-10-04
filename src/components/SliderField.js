import { Slider, Box } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { FilterContext } from "../context/FilterContext";

const SliderField = ({ slide }) => {
  const { label, defaultValue, field } = slide;
  const [value, setValue] = useState(defaultValue);
  const { customFilter, setCustomFilter } = useContext(FilterContext);
  useEffect(() => {
    setCustomFilter({
      ...customFilter,
      [field]: value,
    });
  }, [value, customFilter, setCustomFilter, field]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1em",
        marginBottom: "1em",
      }}
    >
      <Box sx={{ minWidth: "6em" }}>{label}</Box>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        value={value}
        onChange={handleChange}
        max={200}
      />
    </Box>
  );
};

export default SliderField;
