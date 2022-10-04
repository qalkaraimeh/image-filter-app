import { Grid } from "@mui/material";
import FilterTabs from "./FilterTabs";
import InstaFilter from "./InstaFilter";
import CustomFilter from "./CustomFilter";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

const Filters = () => {
  const { tabFilter } = useContext(FilterContext);
  return (
    <Grid item xs={12} md={5}>
      <FilterTabs />
      {tabFilter === "instaFilter" ? <InstaFilter /> : <CustomFilter />}
    </Grid>
  );
};

export default Filters;
