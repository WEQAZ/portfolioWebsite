"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Box, Button, Typography, Container, Stack } from "@mui/material";

const HeroSection = () => {
  return (
    <Box component="section" sx={{ mt: "50px" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Box
            flex={{ lg: 7 }}
            textAlign={{ xs: "center", sm: "left" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography
              variant="h2"
              sx={{ color: "#393E46", fontWeight: "bold", mb: 4 }}
            >
              <Box component="span" sx={{ display: "block" }}>
                Hello, I'm
              </Box>
              <TypeAnimation
                sequence={[
                  "Piyawut",
                  1500,
                  "Web Developer",
                  1500,
                  "Cyber Security",
                  1500,
                  "Software Engineer",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  color: "#393E46",
                }}
                repeat={Infinity}
              />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#ADB7BE",
                fontSize: { xs: "1rem", sm: "1.125rem", lg: "1.25rem" },
                mb: 6,
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet eum
              quidem enim reprehenderit maxime, iure veniam suscipit! Sed quos,
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                // variant="contained"
                sx={{
                  px: 6,
                  py: 3,
                  bgcolor: "#EEEEEE",
                  color: "#393E46",
                  fontWeight: "700",
                  borderRadius: "9999px",
                  width: { xs: "100%", sm: "fit-content" },
                }}
              >
                Hire Me
              </Button>
              <Button
                sx={{
                  px: 6,
                  py: 3,
                  borderRadius: "9999px",
                  mt: { xs: 3, sm: 0 },
                  color: "#393E46",
                  border: "1px solid #393E46",
                  width: { xs: "100%", sm: "fit-content" },
                }}
              >
                Download CV
              </Button>
            </Stack>
          </Box>
          <Box
            flex={{ lg: 5 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={{ xs: 10, lg: 0 }}
          >
            <Image
              src="/images/iceProfilePic1.png"
              alt="ice Image"
              width={"370"}
              height={"480"}
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                // top: { xs: "64%", lg: "50%" },
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
