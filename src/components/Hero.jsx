import { useMediaQuery } from "@mui/material";
import React from "react";

const Hero = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");
  return <div>Hero</div>;
};

export default Hero;
