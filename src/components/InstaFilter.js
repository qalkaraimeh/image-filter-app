import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { filterValues } from "../utils";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

const InstaFilter = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="filter-select-label">Filter</InputLabel>
        <Select
          labelId="filter-select-label"
          id="filter-select"
          value={filter}
          label="Filter"
          onChange={handleChange}
        >
          {filterValues.map((filter) => (
            <MenuItem key={filter.class} value={filter.class}>
              {filter.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default InstaFilter;
