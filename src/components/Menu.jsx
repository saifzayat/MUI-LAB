import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Container,
  CardContent,
} from "@mui/material";

const items = [
  {
    title: "egg Curry",
    sub: "With lemon butter sauce",
    price: "$32",
    img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
  },
  {
    title: "ceasar Salad",
    sub: "Served with garlic butter",
    price: "$48",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    title: "burger",
    sub: "Creamy alfredo sauce",
    price: "$26",
    img: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df",
  },
];

export default function Menu() {
  return (
    <Box
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        px: 2,
      }}
    >
      <Container maxWidth="md" style={{ display: "grid" }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {items.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item.title}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  maxWidth: 500,
                  width: "100%",
                  bgcolor: "#1e3a5f",
                  color: "#fff",
                }}
              >
                <CardMedia
                  component="img"
                  height={200}
                  fit="cover"
                  image={item.img}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h5" sx={{ color: "#fff" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#90caf9" }}>{item.sub}</Typography>
                  <Typography variant="h6" sx={{ color: "#4fc3f7", mt: 1 }}>
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
