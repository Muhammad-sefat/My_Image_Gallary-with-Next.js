"use client";

import { Box, Typography, Paper, Divider } from "@mui/material";
import UploadForm from "./components/UploadForm";

export default function Home() {
  return (
    <Box sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          Image Gallery
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: "text.secondary", mb: 4 }}
        >
          Upload and manage your favorite images with style.
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {/* Upload Form */}
        <UploadForm />

        {/* Placeholder for images */}
        <Box
          sx={{
            mt: 6,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 3,
          }}
        >
          {/* Image cards will go here */}
        </Box>
      </Paper>
    </Box>
  );
}
