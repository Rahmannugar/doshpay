import { useMediaQuery } from "@mui/material";

const Partner = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:768px)");
  return <div>{isNonMobileScreens ? <div></div> : <div></div>}</div>;
};

export default Partner;
