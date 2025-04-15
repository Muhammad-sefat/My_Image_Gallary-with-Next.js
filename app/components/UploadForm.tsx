"use client";

import { useRef, useState } from "react";
import {
  Button,
  Box,
  Input,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";

export default function UploadForm() {
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setLoading(true);

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    const uploads = Array.from(files).map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset || "");

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      return data.secure_url;
    });

    const uploaded = await Promise.all(uploads);
    setImageUrls((prev) => [...prev, ...uploaded]);
    setLoading(false);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <Box my={4}>
      <Input
        type="file"
        inputProps={{ multiple: true }}
        onChange={handleUpload}
        disabled={loading}
      />
      <Button variant="contained" sx={{ ml: 2 }} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : "Upload"}
      </Button>

      {/* Image Gallery */}
      <Grid container spacing={2} columns={{ xs: 1, sm: 2, lg: 4 }} mt={4}>
        {imageUrls.map((url, index) => (
          <Grid key={url}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={url}
                alt={`Uploaded ${index}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
