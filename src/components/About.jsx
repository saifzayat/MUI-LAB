import { Grid, Typography, Container, Box } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ bgcolor: "#1e3a5f", width: "100%" }}>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600"
              alt="Restaurant interior"
              sx={{
                width: "100%",
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" mb={2} sx={{ color: "#4fc3f7" }}>
              Our Story
            </Typography>

            <Typography sx={{ color: "#e3f2fd", lineHeight: 1.8 }}>
              Ocean Grill brings the freshest catch from sea to table. 
              Our chefs craft each dish with passion, using locally sourced 
              ingredients and time-honored recipes. Experience the taste of 
              the ocean in every bite.
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
