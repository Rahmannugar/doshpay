import React from "react";
import { useMediaQuery } from "@mui/material";

const Footer = ({ mulish, dmSans, sofiaSans }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const heroButtonStyle = {
    borderRadius: "100px",
    background: "white",
    boxShadow: "0px 20px 32px 0px rgba(0, 0, 0, 0.16)",
    padding: "1px 26px 1px 0px",
  };
  return (
    <div className="mt-72">
      {isNonMobileScreens ? (
        <div className="bg-[#121621] h-[990px] mt-[500px]">
          <div className="relative">
            <div className="bg-[#4818DC] h-[520px] mx-auto mt-[-300px] rounded-[28px]">
              <div className="absolute bottom-0 w-full pt-40 h-full z-0">
                <svg
                  width=""
                  height=""
                  viewBox="0 0 1202 409"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M792.508 263L803.008 351.5M792.508 263L1187.01 12.5L756.508 229.5M792.508 263L861.508 296.947M803.008 351.5L756.508 229.5M803.008 351.5L861.508 296.947M756.508 229.5L692.508 135L1199.51 2L1011.01 370.5L861.508 296.947M1099 252L1024.5 405L934 370.5M1099 307.5L1036.5 446.5L963.5 422.5"
                    stroke="#92E3A9"
                    stroke-opacity="0.5"
                    stroke-width="2"
                  />
                  <path
                    d="M799.008 374C789.008 400.667 759.808 455 723.008 459C689.977 462.591 656.893 437.446 640.459 420.447C637.227 417.103 636.165 412.299 636.788 407.691C649.172 316.074 510.714 299.995 557.008 415C591.917 501.721 612.038 543.155 624.136 562.176C630.382 571.997 628.728 571.53 617.503 568.452C501.201 536.56 303.08 456.175 274.5 340C243.7 214.8 22 276.167 -85 322.5"
                    stroke="#92E3A9"
                    stroke-opacity="0.5"
                    stroke-width="3"
                  />
                </svg>
              </div>

              <div className="flex flex-col justify-center items-center space-y-10 pt-32">
                <h1
                  style={mulish}
                  className="xl:text-[44px] z-10 font-extrabold lg:text-2xl leading-[55px] text-white"
                >
                  Download Doshpay Today!
                </h1>
                <p
                  style={dmSans}
                  className="leading-7 font-medium z-10 text-white opacity-80"
                >
                  Doshpay is available on both App Store (IOS) and Google Play
                  (Android)
                </p>
              </div>
              <div className="flex justify-center items-center space-x-16 mt-7">
                <div
                  style={heroButtonStyle}
                  className="flex justify-center items-center z-10 h-[56px] w-[262px] gap-[10px] md:mt-10 lg:mt-16"
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
                      fill="black"
                    />
                  </svg>

                  <h1 style={mulish} className="text-sm font-bold text-black">
                    Download on App Store
                  </h1>
                </div>
                <div
                  style={heroButtonStyle}
                  className="flex justify-center items-center z-10 h-[56px] w-[262px] gap-[10px] md:mt-10 lg:mt-16"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.954 11.6162L15.911 8.6592L6.36 3.29119C5.727 2.94919 5.134 2.9012 4.614 3.2752L12.954 11.6162ZM16.415 15.0782L19.489 13.3492C20.089 13.0132 20.418 12.5372 20.418 12.0092C20.418 11.4822 20.089 11.0052 19.49 10.6692L16.707 9.1062L13.574 12.2382L16.415 15.0782ZM4.1 4.0022C4.036 4.1992 4 4.4192 4 4.6602V19.3652C4 19.7462 4.084 20.0742 4.236 20.3352L12.333 12.2372L4.1 4.0022ZM12.954 12.8572L4.902 20.9102C5.056 20.9692 5.222 21.0002 5.397 21.0002C5.709 21.0002 6.034 20.9082 6.365 20.7242L15.62 15.5272L12.954 12.8572Z"
                      fill="black"
                    />
                  </svg>

                  <h1 style={mulish} className="text-sm font-bold text-black">
                    Download on Play Store
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-36 lg:px-10 xl:px-16">
            <div className="rounded-[100px] h-[72px] flex justify-between items-center px-10 w-full bg-white bg-opacity-20 shadow-lg">
              <input
                style={mulish}
                type="text"
                className=" text-white placeholder-white bg-transparent rounded-[100px] flex-grow h-full px-4"
                placeholder="Your email address"
              />
              <div className="bg-white rounded-[100px] hover:bg-[#4818DC] duration-300 flex justify-center items-center w-[336px] space-x-10 h-[56px]">
                <h1 className="text-black font-bold" style={dmSans}>
                  Subscribe to our newsletter
                </h1>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7806 12.5302L14.0306 19.2802C13.9257 19.3852 13.792 19.4568 13.6465 19.4858C13.5009 19.5147 13.35 19.4999 13.2129 19.4431C13.0758 19.3863 12.9586 19.29 12.8762 19.1666C12.7938 19.0432 12.7499 18.898 12.75 18.7496V12.7496H3.75C3.55109 12.7496 3.36032 12.6706 3.21967 12.5299C3.07902 12.3893 3 12.1985 3 11.9996C3 11.8007 3.07902 11.6099 3.21967 11.4693C3.36032 11.3286 3.55109 11.2496 3.75 11.2496H12.75V5.24961C12.7499 5.10119 12.7938 4.95607 12.8762 4.83263C12.9586 4.70918 13.0758 4.61296 13.2129 4.55615C13.35 4.49933 13.5009 4.48448 13.6465 4.51347C13.792 4.54245 13.9257 4.61398 14.0306 4.71899L20.7806 11.469C20.8504 11.5386 20.9057 11.6214 20.9434 11.7124C20.9812 11.8035 21.0006 11.9011 21.0006 11.9996C21.0006 12.0982 20.9812 12.1958 20.9434 12.2868C20.9057 12.3779 20.8504 12.4606 20.7806 12.5302Z"
                    fill="#111111"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Footer;
