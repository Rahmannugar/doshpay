import { useMediaQuery } from "@mui/material";

const Partner = ({ mulish }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:768px)");
  return (
    <div>
      {isNonMobileScreens ? (
        <div style={mulish} className="py-20">
          <h1 className="text-4xl font-bold text-center">
            Partner with <span className="text-[#5D32E3]">Over 20 </span>
            service providers in Nigeria
          </h1>
        </div>
      ) : (
        <div style={mulish} className="py-16 z-20">
          <h1 className="text-2xl font-bold text-center mx-auto max-w-[320px]">
            Partner with <span className="text-[#5D32E3]">Over 20 </span>
            service providers in Nigeria
          </h1>
        </div>
      )}
    </div>
  );
};

export default Partner;
