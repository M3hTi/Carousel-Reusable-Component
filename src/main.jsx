import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { nanoid } from "nanoid";
import "./index.css";
import Carousel from "./Carousel.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Carousel
      items={[
        {
          id: nanoid(),
          name: "Paris",
          imageUrl: "/paris.jpg",
        },
        {
          id: nanoid(),
          name: "London",
          imageUrl: "/london.jpg",
        },
        {
          id: nanoid(),
          name: "Tokyo",
          imageUrl: "/tokyo.jpg",
        },
        {
          id: nanoid(),
          name: "Washington D.C.",
          imageUrl: "/washington.jpg",
        },
        {
          id: nanoid(),
          name: "Berlin",
          imageUrl: "/berlin.jpg",
        },
      ]}
    />
  </StrictMode>
);