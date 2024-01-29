import { useMediaQuery } from "@mui/material";
import dstv from "../assets/dstv.png";
import nineMobile from "../assets/9mobile.png";
import airtel from "../assets/airtel.png";
import gotv from "../assets/gotv.png";
import aedc from "../assets/aedc.png";
import bet9ja from "../assets/bet9ja.png";
import ikedc from "../assets/ikedc.png";
import partner from "../assets/partner.png";
import mtn from "../assets/mtn.png";
import betway from "../assets/betway.png";
import betking from "../assets/betking.png";
import ibedc from "../assets/ibedc.png";

const Partner = ({ mulish, dmSans }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:768px)");
  const imageArray = [
    {
      id: 0,
      url: dstv,
      background: "rgba(27, 43, 105, 0.20)",
    },
    {
      id: 1,
      url: nineMobile,
      background: "rgba(0, 109, 81, 0.20)",
    },
    {
      id: 2,
      url: ikedc,
      background: "var(--Primary-Color-P-20, rgba(93, 50, 227, 0.20))",
    },
    {
      id: 3,
      url: betway,
      background: "rgba(17, 17, 17, 0.20)",
    },
    {
      id: 4,
      url: mtn,
      background: "rgba(255, 196, 35, 0.20)",
    },
    {
      id: 5,
      url: gotv,
      background: "rgba(36, 81, 74, 0.20)",
    },
    {
      id: 6,
      url: ibedc,
      background: "var(--Primary-Color-P-20, rgba(93, 50, 227, 0.20))",
    },
    {
      id: 7,
      url: betking,
      background: "rgba(17, 17, 17, 0.20)",
    },
    {
      id: 8,
      url: aedc,
      background: "var(--Primary-Color-P-20, rgba(93, 50, 227, 0.20))",
    },
    {
      id: 9,
      url: partner,
      background: "var(--Primary-Color-P-20, rgba(93, 50, 227, 0.20))",
    },
    {
      id: 10,
      url: bet9ja,
      background: "var(--Primary-Color-P-20, rgba(93, 50, 227, 0.20))",
    },
    {
      id: 11,
      url: airtel,
      background: "rgba(253, 15, 31, 0.20)",
    },
  ];
  return (
    <div>
      {isNonMobileScreens ? (
        <div style={mulish} className="py-20">
          <h1 className="text-4xl font-bold text-center">
            Partner with <span className="text-[#5D32E3]">Over 20 </span>
            service providers in Nigeria
          </h1>

          <div className="flex justify-center items-center space-x-7 mt-20 overflow-hidden">
            {imageArray.map((image) => (
              <div
                style={{
                  background: image.background,
                }}
                className="rounded-[130px] flex flex-shrink-0 justify-center items-center w-[64px] h-[64px]"
              >
                <img
                  id={image.id}
                  src={image.url}
                  className="rounded-[52px] object-cover  w-[52px] h-[52px]"
                  alt={image.url}
                />
              </div>
            ))}
          </div>

          <div className="px-10 xl:px-16 mt-48">
            <div className="flex flex-col">
              <h1
                style={mulish}
                className="xl:text-[48px] text-4xl max-w-[563px] font-extrabold leading-[64px] text-[#111]"
              >
                Experience the Freedom and Convenience
              </h1>
              <p
                className="max-w-[550px] font-medium text-lg leading-6"
                style={{
                  fontFamily: dmSans,
                  color: "rgba(17, 17, 17, 0.72)",
                }}
              >
                Doshpay is designed to put financial control in the palm of your
                hand. With a user-friendly interface and robust security
                measures, you can trust that your personal information and
                transactions are safe and protected.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div style={mulish} className="py-16 z-20">
          <h1 className="text-2xl font-bold text-center mx-auto max-w-[320px]">
            Partner with <span className="text-[#5D32E3]">Over 20 </span>
            service providers in Nigeria
          </h1>

          <div className="flex justify-center items-center space-x-7 mt-16 overflow-hidden">
            {imageArray.map((image) => (
              <div
                style={{
                  background: image.background,
                }}
                className="rounded-[108.837px] flex flex-shrink-0 justify-center items-center w-[53.581px] h-[53.581px]"
              >
                <img
                  id={image.id}
                  src={image.url}
                  className="rounded-[43.535px] object-cover w-[43.535px] h-[43.535px]"
                  alt={image.url}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Partner;
