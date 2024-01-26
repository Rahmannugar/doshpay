import { useMediaQuery } from "@mui/material";
import IphoneMain from "../assets/iphone-main.png";
import IphoneSlant from "../assets/iphone-slant.png";
import Notification from "../assets/Notification.png";
import GreenEllipse from "../assets/green-ellipse.png";
import Cbn from "../assets/cbn.png";
import Ndic from "../assets/ndic.png";
import Nitda from "../assets/nitda.png";

const Hero = ({ dmSans, mulish }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:768px)");
  const topRightStyle = {
    borderRadius: "520px",
    background:
      "linear-gradient(128deg, rgba(255, 162, 21, 0.33) 22.59%, rgba(95, 18, 220, 0.38) 59.8%, rgba(255, 81, 238, 0.38) 127.99%)",
    filter: "blur(300px)",
    width: "520px",
    height: "520px",
  };

  const mobileTopRighStyle = {
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

  const mobileTopLeftStyle = {
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

  const heroButtonStyle = {
    borderRadius: "100px",
    background: "#5D32E3",
    boxShadow: "0px 20px 32px 0px rgba(0, 0, 0, 0.16)",
    padding: "1px 26px 1px 0px",
  };
  return (
    <div className="bg-[#1a1a29]">
      {isNonMobileScreens ? (
        <div className="relative md:py-20 md:mt-[-40px] lg:mt-0 lg:py-24">
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

          <div className="px-10 xl:px-16 flex justify-between  z-20 2xl:justify-center">
            <div className="flex flex-col mt-16 text-white">
              <h1
                style={mulish}
                className="max-w-[550px] md:text-2xl lg:text-4xl xl:text-[54px] lg:leading-[50px] xl:leading-[72px] font-extrabold"
              >
                Redefining Banking for a Seamless Future
              </h1>
              <p
                style={dmSans}
                className="md:max-w-[480px] lg:max-w-[500px] xl:max-w-[550px] xl:text-lg leading-6 font-medium md:mt-5 lg:mt-7"
              >
                The neobank that puts you in control. Experience lightning-fast
                money transfers, effortless bill management, and simplified
                financial requests.
              </p>

              <div
                style={heroButtonStyle}
                className="flex justify-center items-center h-[56px] w-[232px] gap-[10px] md:mt-10 lg:mt-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM8.823 15.343C8.428 14.866 7.937 14.696 7.344 14.834L7.194 14.875L6.604 15.891C6.49273 16.0721 6.45587 16.2893 6.50115 16.497C6.54643 16.7048 6.67033 16.8869 6.8469 17.0053C7.02347 17.1237 7.23901 17.1692 7.44837 17.1322C7.65772 17.0953 7.84465 16.9787 7.97 16.807L8.032 16.714L8.822 15.343H8.823ZM13.21 8.66C12.722 9.064 12.23 10.257 12.92 11.447L15.96 16.713C16.0653 16.8919 16.2342 17.0245 16.433 17.0842C16.6318 17.144 16.8458 17.1265 17.0322 17.0353C17.2187 16.9441 17.3639 16.7859 17.4387 16.5923C17.5136 16.3986 17.5126 16.1839 17.436 15.991L17.387 15.891L16.585 14.499H17.775C17.8831 14.4993 17.9902 14.4781 18.0901 14.4369C18.19 14.3956 18.2808 14.335 18.3572 14.2585C18.4336 14.182 18.4941 14.0911 18.5353 13.9912C18.5764 13.8912 18.5974 13.7841 18.597 13.676C18.5975 13.4755 18.5245 13.2817 18.3919 13.1314C18.2592 12.981 18.076 12.8845 17.877 12.86L17.774 12.854H15.634L13.44 9.057L13.21 8.661V8.66ZM13.488 5.616C13.3153 5.51681 13.1126 5.48343 12.9172 5.52203C12.7218 5.56062 12.547 5.66859 12.425 5.826L12.363 5.918L11.996 6.551L11.637 5.918C11.5317 5.7391 11.3628 5.60652 11.164 5.54677C10.9652 5.48702 10.7512 5.50449 10.5648 5.5957C10.3783 5.68691 10.2331 5.84514 10.1583 6.03874C10.0834 6.23235 10.0844 6.44708 10.161 6.64L10.21 6.74L11.048 8.197L8.363 12.85H6.266C6.15798 12.8497 6.05097 12.8708 5.95112 12.912C5.85127 12.9532 5.76055 13.0138 5.68417 13.0902C5.60779 13.1666 5.54725 13.2573 5.50603 13.3571C5.46482 13.457 5.44374 13.564 5.444 13.672C5.444 14.093 5.756 14.438 6.163 14.489L6.266 14.495H13.746C14.086 13.855 13.686 12.946 12.936 12.857L12.815 12.85H10.262L13.79 6.74C13.899 6.5509 13.9284 6.32625 13.8718 6.11546C13.8151 5.90467 13.6771 5.72501 13.488 5.616Z"
                    fill="white"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="30"
                  viewBox="0 0 2 30"
                  fill="none"
                >
                  <path
                    d="M1 1L0.999999 29"
                    stroke="white"
                    stroke-linecap="round"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.954 11.6162L15.911 8.6592L6.36 3.29119C5.727 2.94919 5.134 2.9012 4.614 3.2752L12.954 11.6162ZM16.415 15.0782L19.489 13.3492C20.089 13.0132 20.418 12.5372 20.418 12.0092C20.418 11.4822 20.089 11.0052 19.49 10.6692L16.707 9.1062L13.574 12.2382L16.415 15.0782ZM4.1 4.0022C4.036 4.1992 4 4.4192 4 4.6602V19.3652C4 19.7462 4.084 20.0742 4.236 20.3352L12.333 12.2372L4.1 4.0022ZM12.954 12.8572L4.902 20.9102C5.056 20.9692 5.222 21.0002 5.397 21.0002C5.709 21.0002 6.034 20.9082 6.365 20.7242L15.62 15.5272L12.954 12.8572Z"
                    fill="white"
                  />
                </svg>

                <h1 style={mulish} className="text-sm font-bold">
                  Download App
                </h1>
              </div>
            </div>

            <div className="flex lg:space-x-[-50px] xl:space-x-[-40px]">
              <div className="justify-center items-center relative md:hidden lg:flex ">
                <img
                  src={Notification}
                  alt="notification"
                  className="absolute top-0 flex-shrink-0 z-20"
                />
                <img
                  src={IphoneMain}
                  alt="IphoneMainBody"
                  className="h-[541.699px] flex-shrink-0"
                />

                <div className=" absolute flex ">
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

          <div className="md:mt-[-150px] lg:mt-0 px-10 xl:px-16 2xl:px-0 2xl:justify-center 2xl:flex 2xl:flex-col 2xl:mt-10 2xl:items-center space-y-7">
            <h1 style={mulish} className="text-[#92E3A9] font-bold text-lg">
              Licensed by
            </h1>

            <div className="flex items-center space-x-7">
              <img
                src={Ndic}
                alt="Ndic"
                className="w-[60px] h-[60px] flex-shrink-0 object-cover rounded-[16px] border-[#5D32E3] border-[1px]"
              />
              <img
                src={Cbn}
                alt="Cbn"
                className="w-[60px] h-[60px] flex-shrink-0 object-cover rounded-[16px] border-[#5D32E3] border-[1px]"
              />
              <img
                src={Nitda}
                alt="Nitda"
                className="w-[60px] h-[60px] flex-shrink-0 object-cover rounded-[16px] border-[#5D32E3] border-[1px]"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#1a1a29] relative py-36 text-center ">
          <div style={topRightStyle} className="absolute top-0"></div>
          <div style={topLeftStyle} className="absolute bottom-0"></div>
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

          <div>
            <h1
              style={mulish}
              className="text-[36px] max-w-[340px] leading-[44px] mx-auto font-extrabold text-white"
            >
              Redefining Banking for a Seamless Future
            </h1>
            <p
              style={{ color: "rgba(255, 255, 255, 0.80)" }}
              className="font-medium leading-6 text-lg"
            >
              The neobank that puts you in control. Experience lightning-fast
              money transfers, effortless bill management, and simplified
              financial requests.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
