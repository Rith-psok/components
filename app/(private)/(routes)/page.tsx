import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const components = [
  {
    name: "Form",
  },
  {
    name: "Button",
  },
  {
    name: "Select",
  },
  {
    name: "Tab",
  },
];

const Home = () => {
  return (
    <Box p="0 3rem" mt={5}>
      <Typography variant="h3" fontWeight={"bold"} mb={3}>
        COMPONENTS
      </Typography>
      <Grid container spacing={2}>
        {components.map((component, index) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
              <Box
                sx={{
                  bgcolor: "#ecf0f1",
                  height: "100px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  sx={{
                    height: "100%",
                    alignContent: "center",
                    "&:hover": {
                      cursor: "pointer",
                      bgcolor: "#bdc3c7",
                    },
                  }}
                >
                  {component?.name}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Home;
