import { useMediaQuery } from "@mui/material";
import IphoneMain from "../assets/iphone-main.png";
import IphoneSlant from "../assets/iphone-slant.png";
import Notification from "../assets/Notification.png";
import GreenEllipse from "../assets/green-ellipse.png";

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
          <svg
            className="absolute"
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
          </svg>

          <div className="lg:px-10 xl:px-16 flex justify-between  z-20 2xl:justify-center">
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

                <div className=" absolute  flex ">
                  <img
                    src={GreenEllipse}
                    alt="GreenEllipse"
                    className="ml-[-28px] mt-[-35px]"
                  />

                  <div className="bg-[#13E24E] rounded-full w-[60px] h-[60px] ml-[-35px] flex justify-center items-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="ph:paper-plane-tilt-fill">
                        <path
                          id="Vector"
                          d="M25.3087 4.8498V4.86621L18.9431 25.8596C18.8467 26.2006 18.6484 26.504 18.3747 26.729C18.101 26.954 17.765 27.09 17.4118 27.1185C17.3615 27.1229 17.3112 27.1251 17.2609 27.1251C16.9299 27.1261 16.6055 27.0325 16.3261 26.8551C16.0466 26.6778 15.8237 26.4242 15.6837 26.1243L11.7779 17.8785C11.7394 17.797 11.727 17.7055 11.7424 17.6166C11.7579 17.5277 11.8005 17.4457 11.8643 17.382L18.1271 11.1181C18.2843 10.9527 18.3706 10.7324 18.3677 10.5042C18.3648 10.276 18.2728 10.058 18.1115 9.89669C17.9501 9.73533 17.7321 9.6434 17.504 9.64048C17.2758 9.63755 17.0555 9.72388 16.8901 9.88105L10.6174 16.1439C10.5537 16.2077 10.4718 16.2503 10.3829 16.2658C10.294 16.2812 10.2025 16.2688 10.1209 16.2303L1.91776 12.3442C1.59559 12.1966 1.32446 11.9567 1.13872 11.6549C0.952968 11.3531 0.860953 11.003 0.874322 10.6489C0.892137 10.2849 1.0239 9.93574 1.25099 9.65076C1.47808 9.36577 1.78899 9.15937 2.13979 9.06074L23.1332 2.69511H23.1496C23.4485 2.61113 23.7644 2.60819 24.0648 2.68658C24.3652 2.76497 24.6394 2.92187 24.8591 3.14119C25.0789 3.36051 25.2364 3.63434 25.3154 3.9346C25.3944 4.23486 25.3921 4.55073 25.3087 4.8498Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <img
                src={IphoneSlant}
                alt="IphoneSlant"
                className=" h-[553.434px] z-10  flex-shrink-0"
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
