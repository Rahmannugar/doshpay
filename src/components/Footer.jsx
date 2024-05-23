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
        <div className="bg-[#121621] mt-[500px] py-10">
          <div className="relative">
            <div className="bg-[#4818DC] h-[520px] mx-auto mt-[-300px] w-4/5 relative rounded-[28px]">
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
                className=" text-white placeholder-white bg-transparent rounded-[100px] outline-none flex-grow h-full px-4"
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

            <div className="w-full border-[rgba(255,255,255,0.4)] border-[1px] mt-24"></div>

            <div className="flex justify-center items-center space-x-3 mt-7">
              <svg
                width="36"
                height="40"
                viewBox="0 0 36 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.3567 0H0V40H14.4828C16.776 40 19.0636 39.7735 21.3123 39.3237L21.3793 39.3103L23.1583 38.7174C24.7239 38.1955 26.213 37.4672 27.5862 36.5517L28.8437 35.7134C29.3833 35.3536 29.8862 34.9414 30.3448 34.4828C30.8035 34.0241 31.2157 33.5213 31.5755 32.9816L32.3472 31.824C33.3069 30.3846 34.0703 28.8236 34.6174 27.1823C34.9867 26.0745 35.2555 24.9357 35.4206 23.7798L35.6651 22.0686C35.7962 21.1504 35.8621 20.2242 35.8621 19.2968V19.1382C35.8621 17.4223 35.6229 15.7147 35.1515 14.0648C34.7076 12.5111 34.0617 11.0223 33.2303 9.63674L32.4138 8.27586L32.1673 7.96773C30.5059 5.89094 28.4875 4.12697 26.2069 2.75862L25.9916 2.65097C24.3011 1.80574 22.5232 1.14805 20.6897 0.689655C17.9357 0.23067 15.1486 0 12.3567 0ZM28.2092 21.2041C28.3642 20.9389 28.4455 20.6371 28.4447 20.3299C28.4445 20.0243 28.363 19.7242 28.2087 19.4605C28.0544 19.1967 27.8327 18.9787 27.5665 18.8288L9.46302 8.49582C9.15772 8.32503 8.80768 8.25114 8.4594 8.28398C8.11112 8.31682 7.78106 8.45483 7.51307 8.67968C7.24507 8.90453 7.05182 9.20558 6.95896 9.54286C6.8661 9.88014 6.87804 10.2377 6.99319 10.568L9.95009 19.1887C9.97931 19.2737 10.0344 19.3475 10.1076 19.3997C10.1809 19.4519 10.2686 19.4798 10.3585 19.4797H18.0719C18.2944 19.4769 18.5097 19.5583 18.6748 19.7076C18.8398 19.8568 18.9424 20.0629 18.9619 20.2846C18.9698 20.4025 18.9533 20.5208 18.9135 20.6321C18.8737 20.7434 18.8114 20.8453 18.7306 20.9315C18.6497 21.0177 18.552 21.0863 18.4435 21.1332C18.335 21.18 18.2181 21.2041 18.0999 21.2038H10.3509C10.2609 21.2037 10.1731 21.2318 10.0998 21.2842C10.0266 21.3366 9.97158 21.4106 9.94254 21.4958L6.99535 30.1111C6.90336 30.3709 6.875 30.649 6.91263 30.922C6.95027 31.195 7.0528 31.455 7.21164 31.6802C7.37047 31.9055 7.58099 32.0893 7.82553 32.2164C8.07007 32.3435 8.34152 32.4101 8.61711 32.4107C8.91596 32.4097 9.20952 32.3318 9.46948 32.1844L27.5632 21.8385C27.8312 21.6884 28.0543 21.4693 28.2092 21.2041Z"
                  fill="white"
                />
              </svg>

              <h1
                className="font-semibold text-white text-2xl leading-[28px] "
                style={sofiaSans}
              >
                DoshPay
              </h1>
            </div>

            <div className="flex justify-end">
              <svg
                width="76"
                height="76"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_284_1204)">
                  <circle
                    cx="38"
                    cy="30"
                    r="26"
                    transform="rotate(90 38 30)"
                    fill="white"
                  />
                </g>
                <path
                  d="M38 23L38 39"
                  stroke="#111111"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M44 29L38.4096 22.1978C38.3584 22.1356 38.2955 22.0858 38.225 22.0517C38.1544 22.0176 38.0779 22 38.0005 22C37.9232 22 37.8467 22.0176 37.7761 22.0517C37.7056 22.0858 37.6426 22.1356 37.5915 22.1978L32 29"
                  stroke="#111111"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d_284_1204"
                    x="0"
                    y="0"
                    width="76"
                    height="76"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_284_1204"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_284_1204"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <h1
              style={mulish}
              className="font-medium text-lg leading-[22px] text-white opacity-80  text-center"
            >
              Follow us on
            </h1>

            <div className="w-full border-[rgba(255,255,255,0.4)] flex items-center justify-between h-[60px] border-t-[1px] border-b-[1px] mt-5">
              <div className="flex space-x-3 items-center  border-[rgba(255,255,255,0.4)] border-r-[1px] h-full justify-center w-1/4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0318 7.28105L20.2286 10.0842C19.6624 16.6485 14.1265 21.7504 7.50115 21.7504C6.13989 21.7504 5.01771 21.5348 4.16552 21.1092C3.47833 20.7651 3.19708 20.3967 3.12677 20.2917C3.06407 20.1977 3.02344 20.0907 3.00789 19.9787C2.99235 19.8668 3.00231 19.7528 3.03701 19.6453C3.07172 19.5377 3.13029 19.4394 3.20833 19.3577C3.28637 19.2759 3.38188 19.2129 3.48771 19.1732C3.51208 19.1639 5.76021 18.3004 7.18802 16.657C6.39619 16.006 5.70497 15.2414 5.13677 14.3882C3.97427 12.6623 2.67302 9.66417 3.07427 5.18386C3.08699 5.0415 3.14012 4.90573 3.22741 4.79256C3.3147 4.67938 3.43252 4.5935 3.56698 4.54503C3.70144 4.49657 3.84696 4.48753 3.98638 4.51899C4.12581 4.55045 4.25334 4.6211 4.35396 4.72261C4.38677 4.75542 7.47396 7.82574 11.2483 8.82136V8.25042C11.2469 7.65173 11.3653 7.0588 11.5965 6.50655C11.8277 5.9543 12.167 5.4539 12.5946 5.0348C13.0098 4.62017 13.5039 4.2929 14.0476 4.07231C14.5914 3.85172 15.1738 3.74227 15.7605 3.75042C16.5476 3.75819 17.3193 3.96947 18.0006 4.36374C18.6818 4.75801 19.2495 5.32184 19.6483 6.00042H22.5011C22.6496 6.00031 22.7947 6.04423 22.9181 6.12663C23.0416 6.20904 23.1378 6.32621 23.1946 6.46333C23.2514 6.60045 23.2663 6.75134 23.2373 6.8969C23.2083 7.04247 23.1368 7.17616 23.0318 7.28105Z"
                    fill="#1598D0"
                  />
                </svg>

                <h1
                  style={dmSans}
                  className="text-2xl leading-[32px] text-white"
                >
                  twitter
                </h1>
              </div>

              <div className="flex space-x-3 items-center justify-center w-1/4 border-[rgba(255,255,255,0.4)] border-r-[1px] h-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4988 13.1931 16.0243 14.337 15.1806 15.1806C14.337 16.0243 13.1931 16.4988 12 16.5ZM17.625 7.5C17.4025 7.5 17.185 7.43402 17 7.3104C16.815 7.18679 16.6708 7.01109 16.5856 6.80552C16.5005 6.59995 16.4782 6.37375 16.5216 6.15552C16.565 5.93729 16.6722 5.73684 16.8295 5.5795C16.9868 5.42217 17.1873 5.31502 17.4055 5.27162C17.6238 5.22821 17.85 5.25049 18.0555 5.33564C18.2611 5.42078 18.4368 5.56498 18.5604 5.74998C18.684 5.93499 18.75 6.1525 18.75 6.375C18.75 6.67337 18.6315 6.95952 18.4205 7.1705C18.2095 7.38147 17.9234 7.5 17.625 7.5ZM15 12C15 12.5933 14.8241 13.1734 14.4944 13.6667C14.1648 14.1601 13.6962 14.5446 13.1481 14.7716C12.5999 14.9987 11.9967 15.0581 11.4147 14.9424C10.8328 14.8266 10.2982 14.5409 9.87868 14.1213C9.45912 13.7018 9.1734 13.1672 9.05764 12.5853C8.94189 12.0033 9.0013 11.4001 9.22836 10.8519C9.45542 10.3038 9.83994 9.83524 10.3333 9.50559C10.8266 9.17595 11.4067 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
                    fill="#FB83E1"
                  />
                </svg>

                <h1
                  style={dmSans}
                  className="text-2xl leading-[32px] text-white"
                >
                  instagram
                </h1>
              </div>

              <div className="flex space-x-3 items-center justify-center w-1/4 border-[rgba(255,255,255,0.4)] border-r-[1px] h-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H20.25C20.6478 21.75 21.0294 21.592 21.3107 21.3107C21.592 21.0294 21.75 20.6478 21.75 20.25V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM9 16.5C9 16.6989 8.92098 16.8897 8.78033 17.0303C8.63968 17.171 8.44891 17.25 8.25 17.25C8.05109 17.25 7.86032 17.171 7.71967 17.0303C7.57902 16.8897 7.5 16.6989 7.5 16.5V10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.82902 8.78033 9.96967C8.92098 10.1103 9 10.3011 9 10.5V16.5ZM8.25 9C8.0275 9 7.80999 8.93402 7.62498 8.8104C7.43998 8.68679 7.29578 8.51109 7.21064 8.30552C7.12549 8.09995 7.10321 7.87375 7.14662 7.65552C7.19002 7.43729 7.29717 7.23684 7.4545 7.0795C7.61184 6.92217 7.81229 6.81502 8.03052 6.77162C8.24875 6.72821 8.47495 6.75049 8.68052 6.83564C8.88609 6.92078 9.06179 7.06498 9.1854 7.24998C9.30902 7.43499 9.375 7.6525 9.375 7.875C9.375 8.17337 9.25647 8.45952 9.0455 8.6705C8.83452 8.88147 8.54837 9 8.25 9ZM17.25 16.5C17.25 16.6989 17.171 16.8897 17.0303 17.0303C16.8897 17.171 16.6989 17.25 16.5 17.25C16.3011 17.25 16.1103 17.171 15.9697 17.0303C15.829 16.8897 15.75 16.6989 15.75 16.5V13.125C15.75 12.6277 15.5525 12.1508 15.2008 11.7992C14.8492 11.4475 14.3723 11.25 13.875 11.25C13.3777 11.25 12.9008 11.4475 12.5492 11.7992C12.1975 12.1508 12 12.6277 12 13.125V16.5C12 16.6989 11.921 16.8897 11.7803 17.0303C11.6397 17.171 11.4489 17.25 11.25 17.25C11.0511 17.25 10.8603 17.171 10.7197 17.0303C10.579 16.8897 10.5 16.6989 10.5 16.5V10.5C10.5009 10.3163 10.5693 10.1393 10.692 10.0026C10.8148 9.86596 10.9834 9.7791 11.166 9.75852C11.3485 9.73794 11.5323 9.78508 11.6824 9.891C11.8325 9.99691 11.9385 10.1542 11.9803 10.3331C12.4877 9.98894 13.0792 9.78947 13.6914 9.75611C14.3036 9.72276 14.9133 9.85679 15.455 10.1438C15.9968 10.4308 16.4501 10.86 16.7664 11.3852C17.0826 11.9105 17.2498 12.5119 17.25 13.125V16.5Z"
                    fill="#F6D55C"
                  />
                </svg>

                <h1
                  style={dmSans}
                  className="text-2xl leading-[32px] text-white"
                >
                  linkedin
                </h1>
              </div>

              <div className="flex space-x-3 justify-center w-1/4 items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.75 11.9999C21.7469 14.3828 20.8726 16.6824 19.2917 18.4655C17.7109 20.2485 15.5326 21.392 13.1671 21.6805C13.1145 21.6864 13.0611 21.6812 13.0107 21.665C12.9602 21.6489 12.9137 21.6222 12.8743 21.5868C12.8348 21.5513 12.8034 21.5079 12.782 21.4594C12.7605 21.411 12.7496 21.3585 12.75 21.3055V14.2499H15C15.1028 14.2501 15.2045 14.2292 15.2989 14.1884C15.3933 14.1476 15.4783 14.0879 15.5487 14.0129C15.619 13.9379 15.6732 13.8493 15.7078 13.7525C15.7424 13.6557 15.7568 13.5528 15.75 13.4502C15.7334 13.2573 15.6444 13.0779 15.5009 12.9479C15.3574 12.818 15.1701 12.7472 14.9765 12.7499H12.75V10.4999C12.75 10.102 12.908 9.7205 13.1893 9.43919C13.4706 9.15789 13.8521 8.99985 14.25 8.99985H15.75C15.8528 9.00008 15.9545 8.97916 16.0489 8.9384C16.1433 8.89764 16.2283 8.83791 16.2987 8.76292C16.369 8.68792 16.4232 8.59927 16.4578 8.50246C16.4924 8.40565 16.5068 8.30276 16.5 8.20017C16.4834 8.00698 16.3941 7.82727 16.2502 7.6973C16.1063 7.56733 15.9185 7.49677 15.7246 7.49985H14.25C13.4543 7.49985 12.6912 7.81592 12.1286 8.37853C11.566 8.94114 11.25 9.70421 11.25 10.4999V12.7499H8.99996C8.89714 12.7496 8.79538 12.7705 8.70099 12.8113C8.60659 12.8521 8.52159 12.9118 8.45126 12.9868C8.38092 13.0618 8.32676 13.1504 8.29213 13.2472C8.2575 13.3441 8.24315 13.447 8.24996 13.5495C8.26655 13.7427 8.35579 13.9224 8.49968 14.0524C8.64357 14.1824 8.8314 14.2529 9.02527 14.2499H11.25V21.3074C11.2503 21.3603 11.2394 21.4127 11.218 21.4611C11.1967 21.5095 11.1653 21.5528 11.126 21.5882C11.0866 21.6237 11.0403 21.6504 10.9899 21.6666C10.9395 21.6828 10.8863 21.6882 10.8337 21.6824C8.40498 21.3866 6.1758 20.1898 4.5874 18.3288C2.99901 16.4678 2.16716 14.0783 2.25652 11.6333C2.44402 6.57079 6.54464 2.45517 11.6109 2.25829C12.9225 2.20748 14.231 2.42175 15.4579 2.88826C16.6848 3.35477 17.8051 4.06395 18.7516 4.97338C19.6981 5.88281 20.4515 6.97381 20.9667 8.18111C21.4819 9.38842 21.7483 10.6872 21.75 11.9999Z"
                    fill="#33C481"
                  />
                </svg>

                <h1
                  style={dmSans}
                  className="text-2xl leading-[32px] text-white"
                >
                  facebook
                </h1>
              </div>
            </div>
          </div>

          <h1
            className="mt-10 text-center text-sm leading-5 text-white"
            style={dmSans}
          >
            © 2023 Chumskiisama. All rights reserved.
          </h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Footer;
