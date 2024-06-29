"use client";
import { useEffect, useState } from "react";
import { fetchTeamupEvents } from "../api/teamup";
import SplinePage from "../components/spline";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  // const [events, setEvents] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const apiKey =
  //     "dc0e56a158949fac660cb5e8803fd73b53ba6cd501eb106140114824fea83143";
  //   const startDate = "2024-01-01";
  //   const endDate = "2024-12-12";

  //   async function getEvents() {
  //     try {
  //       const data = await fetchTeamupEvents(startDate, endDate, apiKey);
  //       setEvents(data.events);
  //       console.log(data);
  //     } catch (error: any) {
  //       setError(error.message);
  //     }
  //   }

  //   getEvents();
  // }, []);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <>
      {/* <div>
        <h1>Teamup Events</h1>
        {events.length === 0 ? (
          <p>No events found</p>
        ) : (
          <ul>
            {events.map((event: any) => (
              <li key={event.id}>{event.title}</li>
            ))}
          </ul>
        )}
      </div> */}
      <Spline
        scene="https://prod.spline.design/M7CPMgEoaMdQKmU0/scene.splinecode" 
      />
    </>
  );
}

// import Image from "next/image";
// import HeroSection from "../components/HeroSection";
// import NavBar from "../components/NavBar";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import theme from "../theme";
// import { useEffect, useState } from "react";
// import { makeCorsRequest } from "../utils/corsRequest";

// export default function Home() {

//   return (
//     <>

//       {/* <ThemeProvider theme={theme}>
//         <NavBar />
//         <HeroSection />
//       </ThemeProvider> */}
//     </>
//   );
// }
// import { useEffect, useState } from 'react';
