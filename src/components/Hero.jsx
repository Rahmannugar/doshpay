import { useMediaQuery } from "@mui/material";
import IphoneMain from "../assets/iphone-main.png";
import IphoneSlant from "../assets/iphone-slant.png";
import Notification from "../assets/Notification.png";

const Hero = ({ dmSans, mulish }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");
  const topRightStyle = {
    borderRadius: "520px",
    background:
      "linear-gradient(128deg, rgba(255, 162, 21, 0.33) 22.59%, rgba(95, 18, 220, 0.38) 59.8%, rgba(255, 81, 238, 0.38) 127.99%)",
    filter: "blur(300px)",
    width: "520px",
    height: "520px",
  };

  const topLeftStyle = {
    borderRadius: "520px",
    background:
      "linear-gradient(116deg, rgba(126, 81, 255, 0.59) 13.21%, rgba(18, 220, 76, 0.83) 54.9%, #FFA215 79.66%)",
    filter: "blur(300px)",
    width: "520px",
    height: "520px",
  };
  const strokeStyle = {
    strokeWidth: "1px",
    stroke: "rgba(255, 255, 255, 0.08)",
  };
  return (
    <div className="bg-[#1a1a29]">
      {isNonMobileScreens ? (
        <div className="relative">
          <div style={topRightStyle} className="absolute top-0 left-0"></div>
          <div style={topLeftStyle} className="absolute top-20 right-0"></div>
          {/* <svg
            className=""
            style={strokeStyle}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1440 1024"
            fill="none"
          >
            <path
              d="M-10 -27.4999L-9.99994 1052.5M32.9412 -27.4999L32.9412 1052.5M75.8824 -27.4999L75.8824 1052.5M118.824 -27.4999L118.824 1052.5M161.765 -27.4999L161.765 1052.5M204.706 -27.4999L204.706 1052.5M247.647 -27.4999L247.647 1052.5M290.588 -27.4999L290.588 1052.5M333.529 -27.4999L333.53 1052.5M376.471 -27.4999L376.471 1052.5M419.412 -27.4999L419.412 1052.5M462.353 -27.4999L462.353 1052.5M505.294 -27.4999L505.294 1052.5M548.235 -27.4999L548.235 1052.5M591.176 -27.4999L591.177 1052.5M634.118 -27.4999L634.118 1052.5M677.059 -27.4999L677.059 1052.5M720 -27.4999L720 1052.5M762.941 -27.4999L762.941 1052.5M805.882 -27.4999L805.882 1052.5M848.824 -27.4999L848.824 1052.5M891.765 -27.4999L891.765 1052.5M934.706 -27.4999L934.706 1052.5M977.647 -27.4999L977.647 1052.5M1020.59 -27.4999L1020.59 1052.5M1063.53 -27.4999L1063.53 1052.5M1106.47 -27.4999L1106.47 1052.5M1149.41 -27.4999L1149.41 1052.5M1192.35 -27.4999L1192.35 1052.5M1235.29 -27.4999L1235.29 1052.5M1278.24 -27.4999L1278.24 1052.5M1321.18 -27.4999L1321.18 1052.5M1364.12 -27.4999V1052.5M1407.06 -27.4999V1052.5M1450 -27.4999V1052.5M-5.30328 1056L1443.96 1056M-5.30328 1024L1443.96 1024M-5.30328 992L1443.96 992M-5.30328 960L1443.96 960M-5.30328 928L1443.96 928M-5.30329 896L1443.96 896M-5.30329 864L1443.96 864M-5.30329 832L1443.96 832M-5.30329 800L1443.96 800M-5.30329 768L1443.96 768M-5.3033 736L1443.96 736M-5.3033 704L1443.96 704M-5.3033 672L1443.96 672M-5.3033 640L1443.96 640M-5.3033 608L1443.96 608M-5.3033 576L1443.96 576M-5.30331 544L1443.96 544M-5.30331 512L1443.96 512M-5.30331 480L1443.96 480M-5.30331 448L1443.96 448M-5.30331 416L1443.96 416M-5.30332 384L1443.96 384M-5.30332 352L1443.96 352M-5.30332 320L1443.96 320M-5.30332 288L1443.96 288M-5.30332 256L1443.96 256M-5.30333 224L1443.96 224M-5.30333 192L1443.96 192M-5.30333 160L1443.96 160M-5.30333 128L1443.96 128M-5.30333 96.0001L1443.96 96M-5.30333 64.0001L1443.96 64M-5.30334 32.0001L1443.96 32M-5.30334 9.53674e-05L1443.96 0M-5.30334 -31.9999L1443.96 -32"
              stroke="url(#paint0_linear_3_2598)"
              stroke-opacity="0.08"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_2598"
                x1="-10"
                y1="-32"
                x2="1614"
                y2="1184.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.08" />
                <stop
                  offset="0.924814"
                  stop-color="white"
                  stop-opacity="0.41"
                />
              </linearGradient>
            </defs>
          </svg> */}

          <div className="lg:px-10 xl:px-16 flex justify-between items-center z-20 2xl:justify-center">
            <div className="space-y-6 flex flex-col text-white">
              <h1
                style={mulish}
                className="max-w-[550px] lg:text-4xl xl:text-[54px] lg:leading-[50px] xl:leading-[72px] font-extrabold"
              >
                Redefining Banking for a Seamless Future
              </h1>
              <p
                style={dmSans}
                className="lg:max-w-[500px] xl:max-w-[550px] xl:text-lg leading-6 font-medium"
              >
                The neobank that puts you in control. Experience lightning-fast
                money transfers, effortless bill management, and simplified
                financial requests.
              </p>
            </div>

            <div className="flex lg:space-x-[-50px] xl:space-x-[-40px]">
              <div className=" flex flex-col justify-center items-center relative ">
                <img
                  src={Notification}
                  alt="notification"
                  className="absolute top-0 w-[1000px] flex-shrink-0 z-20"
                />
                <img
                  src={IphoneMain}
                  alt="IphoneMainBody"
                  className=" h-[541.699px] flex-shrink-0"
                />
                <svg
                className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="329"
                  height="57"
                  viewBox="0 0 329 57"
                  fill="none"
                >
                  <path
                    d="M327 1C308.46 35.5 254.246 55 164.5 55C74.7537 55 2 30.8234 2 1"
                    stroke="#92E3A9"
                    stroke-width="4"
                  />
                </svg>
              </div>
              <img
                src={IphoneSlant}
                alt="IphoneSlant"
                className=" h-[553.434px] z-20  flex-shrink-0"
              />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Hero;
