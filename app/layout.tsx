import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CssBaseline, Container } from "@mui/material";

export const metadata = {
  title: "My Image Gallery",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Navbar />
        <Container sx={{ mt: 4, minHeight: "80vh" }}>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
