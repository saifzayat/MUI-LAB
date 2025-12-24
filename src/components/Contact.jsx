import { Box, Typography, Container, TextField, Button } from "@mui/material";
const formInput = [
  { id: 1, label: "Name", type: "text" },
  { id: 2, label: "Email", type: "email" },
  { id: 3, label: "Message", type: "multiline", rows: 4 },
];
export default function Contact() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Contact Us
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          noValidate
          autoComplete="off"
        >
          {formInput.map((input) => (
            <TextField
              key={input.id}
              label={input.label}
              variant="outlined"
              fullWidth
              type={input.type === "email" ? "email" : "text"}
              multiline={input.type === "multiline"}
              rows={input.rows || 1}
            />
          ))}
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#115293" },
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
