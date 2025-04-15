"use client";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ p: 2, textAlign: "center", bgcolor: "grey.100" }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Image Gallery
      </Typography>
    </Box>
  );
}
