import Image from "next/image";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <HeroSection />
      </ThemeProvider>
    </>
  );
}
