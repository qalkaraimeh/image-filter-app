import { Container, Box, Grid, Typography } from "@mui/material";
import ImageField from "./components/ImageField";
import Filters from "./components/Filters";
import { FilterProvider } from "./context/FilterContext";
function App() {
  return (
    <FilterProvider>
      <Container sx={{ marginTop: "4em", marginBottom: "4em" }}>
        <Box sx={{ textAlign: "center", marginBottom: "3em" }}>
          <Typography variant="h3" component="h3">
            Image Filter
          </Typography>
        </Box>
        <Grid container spacing={10}>
          <ImageField />
          <Filters />
        </Grid>
      </Container>
    </FilterProvider>
  );
}

export default App;
