import { useMediaQuery } from "@mui/material";
import React from "react";
import store1 from "../assets/store-1.png";
import store2 from "../assets/store-2.png";
import hands from "../assets/hands.png";

const Store = ({ mulish, dmSans }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:768px)");
  const topCornerStyle = {
    position: "absolute",
    width: "230px",
    height: "230px",
    top: "80px",
    background: "linear-gradient(133.12deg, #25BB4E 33.57%, #BB259A 94.02%)",
    filter: "blur(160px)",
  };

  const bottomCornerStyle = {
    position: "absolute",
    width: "220px",
    height: "220px",
    left: "119px",
    top: "188px",
    background: "rgba(245, 174, 35, 0.66)",
    filter: "blur(200px)",
  };

  const mobileTopCornerStyle = {
    position: "absolute",
    width: "230px",
    height: "230px",
    background: "linear-gradient(133.12deg, #25BB4E 33.57%, #BB259A 94.02%)",
    filter: "blur(160px)",
  };

  const mobileBottomCornerStyle = {
    position: "absolute",
    width: "220px",
    height: "220px",
    background: "rgba(245, 174, 35, 0.66)",
    filter: "blur(200px)",
  };

  const firstRightSideStyle = {
    position: "absolute",
    width: "278px",
    height: "320.77px",
    left: "60vw",
    top: "235.26px",
    background: "#F523D3",
    filter: "blur(213.846px)",
    transform: "rotate(-50.42deg)",
  };

  return (
    <div>
      {isNonMobileScreens ? (
        <div className="px-10 xl:px-16">
          <div className="flex justify-between space-x-5 lg:space-x-7 2xl:justify-center 2xl:space-x-16 items-center mt-28">
            <div
              className="flex flex-col items-center relative rounded-3xl w-[606px] h-[687px]"
              style={{
                background: "rgba(18, 22, 33, 1)",
              }}
            >
              <h1
                className="text-white font-bold leading-10 mt-12 text-xl lg:text-3xl xl:text-4xl xl:leading-[64px]"
                style={mulish}
              >
                Get DoshPay for IOS
              </h1>

              <div className="w-[222px] py-4 rounded-[100px] bg-white flex items-center justify-center space-x-2 mt-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM8.823 15.343C8.428 14.866 7.937 14.696 7.344 14.834L7.194 14.875L6.604 15.891C6.49273 16.0721 6.45587 16.2893 6.50115 16.497C6.54643 16.7048 6.67033 16.8869 6.8469 17.0053C7.02347 17.1237 7.23901 17.1692 7.44837 17.1322C7.65772 17.0953 7.84465 16.9787 7.97 16.807L8.032 16.714L8.822 15.343H8.823ZM13.21 8.66C12.722 9.064 12.23 10.257 12.92 11.447L15.96 16.713C16.0653 16.8919 16.2342 17.0245 16.433 17.0842C16.6318 17.144 16.8458 17.1265 17.0322 17.0353C17.2187 16.9441 17.3639 16.7859 17.4387 16.5923C17.5136 16.3986 17.5126 16.1839 17.436 15.991L17.387 15.891L16.585 14.499H17.775C17.8831 14.4993 17.9902 14.4781 18.0901 14.4369C18.19 14.3956 18.2808 14.335 18.3572 14.2585C18.4336 14.182 18.4941 14.0911 18.5353 13.9912C18.5764 13.8912 18.5974 13.7841 18.597 13.676C18.5975 13.4755 18.5245 13.2817 18.3919 13.1314C18.2592 12.981 18.076 12.8845 17.877 12.86L17.774 12.854H15.634L13.44 9.057L13.21 8.661V8.66ZM13.488 5.616C13.3153 5.51681 13.1126 5.48343 12.9172 5.52203C12.7218 5.56062 12.547 5.66859 12.425 5.826L12.363 5.918L11.996 6.551L11.637 5.918C11.5317 5.7391 11.3628 5.60652 11.164 5.54677C10.9652 5.48702 10.7512 5.50449 10.5648 5.5957C10.3783 5.68691 10.2331 5.84514 10.1583 6.03874C10.0834 6.23235 10.0844 6.44708 10.161 6.64L10.21 6.74L11.048 8.197L8.363 12.85H6.266C6.15798 12.8497 6.05097 12.8708 5.95112 12.912C5.85127 12.9532 5.76055 13.0138 5.68417 13.0902C5.60779 13.1666 5.54725 13.2573 5.50603 13.3571C5.46482 13.457 5.44374 13.564 5.444 13.672C5.444 14.093 5.756 14.438 6.163 14.489L6.266 14.495H13.746C14.086 13.855 13.686 12.946 12.936 12.857L12.815 12.85H10.262L13.79 6.74C13.899 6.5509 13.9284 6.32625 13.8718 6.11546C13.8151 5.90467 13.6771 5.72501 13.488 5.616Z"
                    fill="#111111"
                  />
                </svg>
                <h1
                  className="font-semibold text-sm leading-[17.5px]"
                  style={mulish}
                >
                  Download on App Store
                </h1>
              </div>
              <div className="absolute bottom-0">
                <svg
                  width=""
                  height="236"
                  viewBox="0 0 606 236"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="303" cy="325" r="325" fill="#92E3A9" />
                </svg>
              </div>

              <div className="z-10">
                <img
                  src={store1}
                  alt="store1"
                  className="mt-[74px] lg:mt-[78px] xl:mt-[50px]"
                />
              </div>
            </div>

            <div
              className="flex flex-col relative items-center rounded-3xl w-[606px] h-[687px]"
              style={{
                background: "rgba(190, 207, 243, 0.8)",
              }}
            >
              <h1 className="text-black font-bold leading-10 mt-12 text-xl lg:text-3xl xl:text-4xl xl:leading-[64px]">
                Get DoshPay for Android
              </h1>

              <div className="w-[222px] py-4 rounded-[100px] bg-white flex items-center justify-center space-x-2 mt-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.954 11.616L15.911 8.65895L6.36 3.29095C5.727 2.94895 5.134 2.90095 4.614 3.27495L12.954 11.616ZM16.415 15.078L19.489 13.349C20.089 13.013 20.418 12.537 20.418 12.009C20.418 11.482 20.089 11.005 19.49 10.669L16.707 9.10595L13.574 12.238L16.415 15.078ZM4.1 4.00195C4.036 4.19895 4 4.41895 4 4.65995V19.365C4 19.746 4.084 20.074 4.236 20.335L12.333 12.237L4.1 4.00195ZM12.954 12.857L4.902 20.91C5.056 20.969 5.222 21 5.397 21C5.709 21 6.034 20.908 6.365 20.724L15.62 15.527L12.954 12.857Z"
                    fill="#111111"
                  />
                </svg>

                <h1
                  className="font-semibold text-sm leading-[17.5px]"
                  style={mulish}
                >
                  Download on App Store
                </h1>
              </div>

              <div className="absolute bottom-0">
                <svg
                  width=""
                  height="236"
                  viewBox="0 0 606 236"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="303"
                    cy="325"
                    r="325"
                    fill="#5D32E3"
                    fill-opacity="0.5"
                  />
                </svg>
              </div>

              <div className="z-10">
                <img src={store2} alt="store2" className="mt-[74px] xl:mt-12" />
              </div>
            </div>
          </div>

          <div
            className="mt-48 h-[375px] overflow-hidden mx-auto max-w-[1500px] relative rounded-[20px]"
            style={{
              background: "rgba(57, 85, 147, 1)",
            }}
          >
            <div className="absolute">
              <svg
                width="1240"
                height="375"
                viewBox="0 0 1240 375"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-52.4534 -17.0423L-38.9345 433.417M-13.2946 -18.2175L0.224335 432.241M25.8642 -19.3928L39.3832 431.066M65.0231 -20.568L78.542 429.891M104.182 -21.7432L117.701 428.716M143.341 -22.9184L156.86 427.541M182.5 -24.0936L196.019 426.365M221.658 -25.2688L235.177 425.19M260.817 -26.444L274.336 424.015M299.976 -27.6192L313.495 422.84M339.135 -28.7944L352.654 421.664M378.294 -29.9696L391.813 420.489M417.453 -31.1448L430.972 419.314M456.612 -32.3201L470.13 418.139M495.77 -33.4953L509.289 416.964M534.929 -34.6705L548.448 415.788M574.088 -35.8457L587.607 414.613M613.247 -37.0209L626.766 413.438M652.406 -38.1961L665.925 412.263M691.565 -39.3713L705.084 411.088M730.723 -40.5465L744.242 409.912M769.882 -41.7217L783.401 408.737M809.041 -42.8969L822.56 407.562M848.2 -44.0721L861.719 406.387M887.359 -45.2474L900.878 405.212M926.518 -46.4226L940.037 404.036M965.676 -47.5978L979.195 402.861M1004.84 -48.773L1018.35 401.686M1043.99 -49.9482L1057.51 400.511M1083.15 -51.1234L1096.67 399.336M1122.31 -52.2986L1135.83 398.16M1161.47 -53.4738L1174.99 396.985M1200.63 -54.649L1214.15 395.81M1239.79 -55.8242L1253.31 394.635M1278.95 -56.9994L1292.47 393.459M-34.6077 434.748L1287 395.085M-35.0083 421.401L1286.6 381.738M-35.4088 408.054L1286.2 368.391M-35.8094 394.707L1285.8 355.044M-36.21 381.36L1285.4 341.697M-36.6105 368.013L1285 328.35M-37.0111 354.666L1284.6 315.003M-37.4117 341.319L1284.2 301.656M-37.8122 327.972L1283.8 288.309M-38.2128 314.625L1283.4 274.962M-38.6133 301.279L1283 261.615M-39.0139 287.932L1282.6 248.268M-39.4145 274.585L1282.2 234.921M-39.815 261.238L1281.8 221.574M-40.2156 247.891L1281.4 208.227M-40.6161 234.544L1280.99 194.881M-41.0167 221.197L1280.59 181.534M-41.4173 207.85L1280.19 168.187M-41.8178 194.503L1279.79 154.84M-42.2184 181.156L1279.39 141.493M-42.6189 167.809L1278.99 128.146M-43.0195 154.462L1278.59 114.799M-43.4201 141.115L1278.19 101.452M-43.8206 127.768L1277.79 88.1051M-44.2212 114.422L1277.39 74.7582M-44.6217 101.075L1276.99 61.4112M-45.0223 87.7277L1276.59 48.0643M-45.4229 74.3807L1276.19 34.7174M-45.8234 61.0338L1275.79 21.3705M-46.224 47.6869L1275.39 8.02353M-46.6246 34.3399L1274.99 -5.3234M-47.0251 20.993L1274.59 -18.6703M-47.4257 7.64608L1274.19 -32.0173M-47.8262 -5.70085L1273.78 -45.3642M-48.2268 -19.0478L1273.38 -58.7111"
                  stroke="#92E3A9"
                  stroke-opacity="0.1"
                />
              </svg>
            </div>
            <div style={topCornerStyle}></div>
            <div style={bottomCornerStyle}></div>

            <div className="bottom-0" style={firstRightSideStyle}></div>

            <div className="flex justify-between px-10 space-x-5 xl:px-16 2xl:justify-center">
              <div className="text-white z-10 py-16">
                <h1
                  className="font-bold text-2xl leading-[30px] xl:text-[40px] xl:leading-[50px] lg:text-3xl lg:leading-[30px]"
                  style={mulish}
                >
                  Refer Friends and Earn Cashbacks
                </h1>
                <ul
                  style={dmSans}
                  className="list-disc xl:mt-5 lg:mt-10 mt-8 max-w-[400px] lg:max-w-[500px] lg:text-lg space-y-2 xl:max-w-[600px]"
                >
                  <li>
                    Share the Wealth: Refer friends and family to Doshpay and
                    both of you earn cashbacks.
                  </li>
                  <li>
                    Boost Your Earnings: The more referrals, the more cashbacks
                    you can earn.
                  </li>
                </ul>
                <div className="flex items-center space-x-3 mt-10 lg:mt-16 xl:mt-7">
                  <h1
                    style={dmSans}
                    className="font-bold text-sm leading-[18px]"
                  >
                    Learn more
                  </h1>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.172 10.9998H4V12.9998H16.172L10.808 18.3638L12.222 19.7778L20 11.9998L12.222 4.22183L10.808 5.63583L16.172 10.9998Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <div className="z-10">
                <img
                  src={hands}
                  alt="hands"
                  className="w-[380px] h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-20 flex flex-col justify-center items-center">
          <div
            className="flex flex-col rounded-3xl relative items-center w-[350px] h-[687px]"
            style={{
              background: "rgba(18, 22, 33, 1)",
            }}
          >
            <h1
              className="font-bold text-[28px] leading-[36px] text-white mt-16"
              style={mulish}
            >
              Get DoshPay for IOS
            </h1>
            <div className="w-[222px] py-4 rounded-[100px] bg-white flex items-center justify-center space-x-2 mt-10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM8.823 15.343C8.428 14.866 7.937 14.696 7.344 14.834L7.194 14.875L6.604 15.891C6.49273 16.0721 6.45587 16.2893 6.50115 16.497C6.54643 16.7048 6.67033 16.8869 6.8469 17.0053C7.02347 17.1237 7.23901 17.1692 7.44837 17.1322C7.65772 17.0953 7.84465 16.9787 7.97 16.807L8.032 16.714L8.822 15.343H8.823ZM13.21 8.66C12.722 9.064 12.23 10.257 12.92 11.447L15.96 16.713C16.0653 16.8919 16.2342 17.0245 16.433 17.0842C16.6318 17.144 16.8458 17.1265 17.0322 17.0353C17.2187 16.9441 17.3639 16.7859 17.4387 16.5923C17.5136 16.3986 17.5126 16.1839 17.436 15.991L17.387 15.891L16.585 14.499H17.775C17.8831 14.4993 17.9902 14.4781 18.0901 14.4369C18.19 14.3956 18.2808 14.335 18.3572 14.2585C18.4336 14.182 18.4941 14.0911 18.5353 13.9912C18.5764 13.8912 18.5974 13.7841 18.597 13.676C18.5975 13.4755 18.5245 13.2817 18.3919 13.1314C18.2592 12.981 18.076 12.8845 17.877 12.86L17.774 12.854H15.634L13.44 9.057L13.21 8.661V8.66ZM13.488 5.616C13.3153 5.51681 13.1126 5.48343 12.9172 5.52203C12.7218 5.56062 12.547 5.66859 12.425 5.826L12.363 5.918L11.996 6.551L11.637 5.918C11.5317 5.7391 11.3628 5.60652 11.164 5.54677C10.9652 5.48702 10.7512 5.50449 10.5648 5.5957C10.3783 5.68691 10.2331 5.84514 10.1583 6.03874C10.0834 6.23235 10.0844 6.44708 10.161 6.64L10.21 6.74L11.048 8.197L8.363 12.85H6.266C6.15798 12.8497 6.05097 12.8708 5.95112 12.912C5.85127 12.9532 5.76055 13.0138 5.68417 13.0902C5.60779 13.1666 5.54725 13.2573 5.50603 13.3571C5.46482 13.457 5.44374 13.564 5.444 13.672C5.444 14.093 5.756 14.438 6.163 14.489L6.266 14.495H13.746C14.086 13.855 13.686 12.946 12.936 12.857L12.815 12.85H10.262L13.79 6.74C13.899 6.5509 13.9284 6.32625 13.8718 6.11546C13.8151 5.90467 13.6771 5.72501 13.488 5.616Z"
                  fill="#111111"
                />
              </svg>
              <h1
                className="font-semibold text-sm leading-[17.5px]"
                style={mulish}
              >
                Download on App Store
              </h1>
            </div>

            <div className="absolute bottom-0">
              <svg
                width=""
                height="259"
                viewBox="0 0 366 259"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="183" cy="325" r="325" fill="#92E3A9" />
              </svg>
            </div>

            <div className="z-10">
              <img src={store1} alt="store1" className="mt-[73px] w-[296px]" />
            </div>
          </div>

          <div
            className="flex flex-col rounded-3xl relative items-center w-[350px] mt-16 h-[687px]"
            style={{
              background: "rgba(190, 207, 243, 0.8)",
            }}
          >
            <h1 className="font-bold text-[28px] leading-[36px] text-black mt-16">
              Get DoshPay for Android
            </h1>
            <div className="w-[222px] py-4 rounded-[100px] bg-white flex items-center justify-center space-x-2 mt-10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.954 11.616L15.911 8.65895L6.36 3.29095C5.727 2.94895 5.134 2.90095 4.614 3.27495L12.954 11.616ZM16.415 15.078L19.489 13.349C20.089 13.013 20.418 12.537 20.418 12.009C20.418 11.482 20.089 11.005 19.49 10.669L16.707 9.10595L13.574 12.238L16.415 15.078ZM4.1 4.00195C4.036 4.19895 4 4.41895 4 4.65995V19.365C4 19.746 4.084 20.074 4.236 20.335L12.333 12.237L4.1 4.00195ZM12.954 12.857L4.902 20.91C5.056 20.969 5.222 21 5.397 21C5.709 21 6.034 20.908 6.365 20.724L15.62 15.527L12.954 12.857Z"
                  fill="#111111"
                />
              </svg>

              <h1
                className="font-semibold text-sm leading-[17.5px]"
                style={mulish}
              >
                Download on App Store
              </h1>
            </div>

            <div className="absolute bottom-0">
              <svg
                width=""
                height="269"
                viewBox="0 0 366 269"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="183"
                  cy="325"
                  r="325"
                  fill="#5D32E3"
                  fill-opacity="0.5"
                />
              </svg>
            </div>

            <div className="z-10">
              <img src={store2} alt="store2" className="mt-[88px] w-[296px]" />
            </div>
          </div>

          <div className="px-2 sm:px-5">
            <div
              className="mt-28 h-[330px] overflow-hidden mx-auto max-w-[1500px] relative rounded-[20px]"
              style={{
                background: "rgba(57, 85, 147, 1)",
              }}
            >
              <div className="absolute">
                <svg
                  width="1240"
                  height="375"
                  viewBox="0 0 1240 375"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-52.4534 -17.0423L-38.9345 433.417M-13.2946 -18.2175L0.224335 432.241M25.8642 -19.3928L39.3832 431.066M65.0231 -20.568L78.542 429.891M104.182 -21.7432L117.701 428.716M143.341 -22.9184L156.86 427.541M182.5 -24.0936L196.019 426.365M221.658 -25.2688L235.177 425.19M260.817 -26.444L274.336 424.015M299.976 -27.6192L313.495 422.84M339.135 -28.7944L352.654 421.664M378.294 -29.9696L391.813 420.489M417.453 -31.1448L430.972 419.314M456.612 -32.3201L470.13 418.139M495.77 -33.4953L509.289 416.964M534.929 -34.6705L548.448 415.788M574.088 -35.8457L587.607 414.613M613.247 -37.0209L626.766 413.438M652.406 -38.1961L665.925 412.263M691.565 -39.3713L705.084 411.088M730.723 -40.5465L744.242 409.912M769.882 -41.7217L783.401 408.737M809.041 -42.8969L822.56 407.562M848.2 -44.0721L861.719 406.387M887.359 -45.2474L900.878 405.212M926.518 -46.4226L940.037 404.036M965.676 -47.5978L979.195 402.861M1004.84 -48.773L1018.35 401.686M1043.99 -49.9482L1057.51 400.511M1083.15 -51.1234L1096.67 399.336M1122.31 -52.2986L1135.83 398.16M1161.47 -53.4738L1174.99 396.985M1200.63 -54.649L1214.15 395.81M1239.79 -55.8242L1253.31 394.635M1278.95 -56.9994L1292.47 393.459M-34.6077 434.748L1287 395.085M-35.0083 421.401L1286.6 381.738M-35.4088 408.054L1286.2 368.391M-35.8094 394.707L1285.8 355.044M-36.21 381.36L1285.4 341.697M-36.6105 368.013L1285 328.35M-37.0111 354.666L1284.6 315.003M-37.4117 341.319L1284.2 301.656M-37.8122 327.972L1283.8 288.309M-38.2128 314.625L1283.4 274.962M-38.6133 301.279L1283 261.615M-39.0139 287.932L1282.6 248.268M-39.4145 274.585L1282.2 234.921M-39.815 261.238L1281.8 221.574M-40.2156 247.891L1281.4 208.227M-40.6161 234.544L1280.99 194.881M-41.0167 221.197L1280.59 181.534M-41.4173 207.85L1280.19 168.187M-41.8178 194.503L1279.79 154.84M-42.2184 181.156L1279.39 141.493M-42.6189 167.809L1278.99 128.146M-43.0195 154.462L1278.59 114.799M-43.4201 141.115L1278.19 101.452M-43.8206 127.768L1277.79 88.1051M-44.2212 114.422L1277.39 74.7582M-44.6217 101.075L1276.99 61.4112M-45.0223 87.7277L1276.59 48.0643M-45.4229 74.3807L1276.19 34.7174M-45.8234 61.0338L1275.79 21.3705M-46.224 47.6869L1275.39 8.02353M-46.6246 34.3399L1274.99 -5.3234M-47.0251 20.993L1274.59 -18.6703M-47.4257 7.64608L1274.19 -32.0173M-47.8262 -5.70085L1273.78 -45.3642M-48.2268 -19.0478L1273.38 -58.7111"
                    stroke="#92E3A9"
                    stroke-opacity="0.1"
                  />
                </svg>
              </div>
              <div className="left-0 top-0" style={mobileTopCornerStyle}></div>
              <div
                className="left-0 bottom-0"
                style={mobileBottomCornerStyle}
              ></div>

              <div className="bottom-0" style={firstRightSideStyle}></div>

              <div className="flex justify-between sm:space-x-4 px-7 sm:px-10">
                <div className="text-white z-10 py-8">
                  <h1 className="font-bold text-xl sm:text-2xl" style={mulish}>
                    Refer Friends and Earn Cashbacks
                  </h1>
                  <ul
                    style={dmSans}
                    className="list-disc mt-3 text-sm sm:text-base max-w-[350px] space-y-2"
                  >
                    <li>
                      Share the Wealth: Refer friends and family to Doshpay and
                      both of you earn cashbacks.
                    </li>
                    <li>
                      Boost Your Earnings: The more referrals, the more
                      cashbacks you can earn.
                    </li>
                  </ul>
                  <div className="flex items-center space-x-3 mt-7">
                    <h1
                      style={dmSans}
                      className="font-bold text-sm leading-[18px]"
                    >
                      Learn more
                    </h1>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.172 10.9998H4V12.9998H16.172L10.808 18.3638L12.222 19.7778L20 11.9998L12.222 4.22183L10.808 5.63583L16.172 10.9998Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>

                <div className="z-10 items-center flex">
                  <img
                    src={hands}
                    alt="hands"
                    className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;
