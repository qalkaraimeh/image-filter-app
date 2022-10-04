import { Box, Tab, Tabs } from "@mui/material";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
const FilterTabs = () => {
  const { tabFilter, setTabFilter, setFilter } = useContext(FilterContext);
  const handleChange = (event, newValue) => {
    setTabFilter(newValue);
    if (newValue === "customFilter") {
      setFilter("");
    }
  };
  return (
    <Box sx={{ marginBottom: "2rem" }}>
      <Tabs
        value={tabFilter}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="Filter Tabs"
      >
        <Tab value="instaFilter" label="Instagram Filters" />
        <Tab value="customFilter" label="Custom Filter" />
      </Tabs>
    </Box>
  );
};

export default FilterTabs;
