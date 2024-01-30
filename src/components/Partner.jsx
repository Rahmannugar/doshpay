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
import blueFrame from "../assets/blue-frame.png";
import greenFrame from "../assets/green-frame.png";
import yellowFrame from "../assets/yellow-frame.png";
import pinkFrame from "../assets/pink-frame.png";

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

  const partnerButtonStyle = {
    borderRadius: "100px",
    background: "#5D32E3",
    boxShadow: "0px 20px 32px 0px rgba(0, 0, 0, 0.16)",
    padding: "1px 26px 1px 0px",
  };
  return (
    <div className="bg-[#f8f7f7d8]">
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
                  className="rounded-[52px] object-cover w-[52px] h-[52px]"
                  alt={image.url}
                />
              </div>
            ))}
          </div>

          <div className="px-10 xl:px-16 md:mt-36 lg:mt-48 flex 2xl:justify-center 2xl:items-center">
            <div className="flex flex-col">
              <h1
                style={mulish}
                className="xl:text-[48px] md:text-2xl lg:text-4xl md:max-w-[400px] lg:max-w-[563px] font-extrabold leading-[64px] text-[#111]"
              >
                Experience the Freedom and Convenience
              </h1>
              <p
                className="lg:max-w-[550px] md:max-w-[400px] font-bold md:text-sm lg:text-lg leading-6 mt-7"
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

              <div
                style={partnerButtonStyle}
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

                <h1 style={mulish} className="text-sm text-white font-bold">
                  Download App
                </h1>
              </div>

              <h1
                style={dmSans}
                className="font-medium leading-6 text-[#111] text-lg md:mt-16 lg:mt-24"
              >
                Follow us on
              </h1>

              <div className="flex lg:space-x-12 md:space-x-6 mt-5">
                <div className="flex items-center space-x-2">
                  <div
                    style={mulish}
                    className="w-[36px] h-[36px] bg-[#EEEFEE] rounded-full flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M18.3346 4.83326C17.7083 5.10501 17.0458 5.28465 16.368 5.3666C17.0831 4.93936 17.619 4.26725 17.8763 3.47493C17.2043 3.87498 16.4686 4.15684 15.7013 4.30826C15.1884 3.75207 14.5054 3.38184 13.7595 3.25564C13.0135 3.12944 12.2468 3.2544 11.5795 3.61092C10.9122 3.96745 10.3821 4.53537 10.0723 5.22563C9.76259 5.91588 9.69071 6.68942 9.86797 7.42493C8.50916 7.3562 7.18 7.00239 5.96685 6.38648C4.75369 5.77057 3.68367 4.90634 2.8263 3.84993C2.52558 4.37507 2.36757 4.96978 2.36797 5.57493C2.3669 6.13692 2.50482 6.69044 2.76943 7.18623C3.03405 7.68202 3.41715 8.10469 3.88464 8.4166C3.34128 8.40181 2.80954 8.25601 2.33464 7.9916V8.03326C2.33871 8.82067 2.61463 9.58251 3.11573 10.1899C3.61683 10.7973 4.31235 11.213 5.08464 11.3666C4.78735 11.4571 4.4787 11.5048 4.16797 11.5083C3.95288 11.5058 3.73832 11.4862 3.5263 11.4499C3.74623 12.1273 4.17182 12.7192 4.74386 13.1434C5.31591 13.5676 6.00595 13.8029 6.71797 13.8166C5.51564 14.7627 4.0312 15.279 2.5013 15.2833C2.22275 15.2842 1.94442 15.2675 1.66797 15.2333C3.22999 16.2418 5.05031 16.7772 6.90964 16.7749C8.19271 16.7883 9.46558 16.5458 10.6539 16.0617C11.8422 15.5775 12.9222 14.8615 13.8306 13.9553C14.7391 13.0492 15.4579 11.9711 15.9451 10.784C16.4323 9.59695 16.678 8.3247 16.668 7.0416V6.59993C17.3219 6.11227 17.8859 5.51445 18.3346 4.83326Z"
                        fill="#111111"
                        fill-opacity="0.8"
                      />
                    </svg>
                  </div>
                  <h1
                    style={{
                      color: "rgba(17, 17, 17, 0.72)",
                    }}
                    className="text-sm font-medium leading-5"
                  >
                    Twitter
                  </h1>
                </div>

                <div className="flex items-center space-x-2">
                  <div
                    style={mulish}
                    className="w-[36px] h-[36px] bg-[#EEEFEE] rounded-full flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M18.3346 10.0001C18.3346 5.40008 14.6013 1.66675 10.0013 1.66675C5.4013 1.66675 1.66797 5.40008 1.66797 10.0001C1.66797 14.0334 4.53464 17.3917 8.33464 18.1667V12.5001H6.66797V10.0001H8.33464V7.91675C8.33464 6.30841 9.64297 5.00008 11.2513 5.00008H13.3346V7.50008H11.668C11.2096 7.50008 10.8346 7.87508 10.8346 8.33341V10.0001H13.3346V12.5001H10.8346V18.2917C15.043 17.8751 18.3346 14.3251 18.3346 10.0001Z"
                        fill="#111111"
                        fill-opacity="0.8"
                      />
                    </svg>
                  </div>
                  <h1
                    style={{
                      color: "rgba(17, 17, 17, 0.72)",
                    }}
                    className="text-sm font-medium leading-5"
                  >
                    Facebook
                  </h1>
                </div>

                <div className="flex items-center space-x-2">
                  <div
                    style={mulish}
                    className="w-[36px] h-[36px] bg-[#EEEFEE] rounded-full flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.8567 1.66753C11.4649 1.6652 12.073 1.67131 12.6809 1.68586L12.8426 1.6917C13.0292 1.69836 13.2134 1.7067 13.4359 1.7167C14.3226 1.75836 14.9276 1.89836 15.4584 2.1042C16.0084 2.31586 16.4717 2.60253 16.9351 3.06586C17.3587 3.4822 17.6866 3.98582 17.8959 4.5417C18.1017 5.07253 18.2417 5.67836 18.2834 6.56503C18.2934 6.7867 18.3017 6.9717 18.3084 7.15836L18.3134 7.32003C18.3282 7.92769 18.3346 8.53553 18.3326 9.14336L18.3334 9.76503V10.8567C18.3355 11.4648 18.3291 12.0729 18.3142 12.6809L18.3092 12.8425C18.3026 13.0292 18.2942 13.2134 18.2842 13.4359C18.2426 14.3225 18.1009 14.9275 17.8959 15.4584C17.6873 16.0148 17.3593 16.5189 16.9351 16.935C16.5184 17.3586 16.0145 17.6865 15.4584 17.8959C14.9276 18.1017 14.3226 18.2417 13.4359 18.2834C13.2134 18.2934 13.0292 18.3017 12.8426 18.3084L12.6809 18.3134C12.073 18.3282 11.4649 18.3346 10.8567 18.3325L10.2351 18.3334H9.14424C8.53612 18.3354 7.92801 18.329 7.32007 18.3142L7.15841 18.3092C6.96058 18.302 6.7628 18.2937 6.56507 18.2842C5.67841 18.2425 5.07341 18.1009 4.54174 17.8959C3.98564 17.687 3.48194 17.359 3.06591 16.935C2.64178 16.5186 2.31359 16.0147 2.10424 15.4584C1.89841 14.9275 1.75841 14.3225 1.71674 13.4359C1.70746 13.2381 1.69913 13.0403 1.69174 12.8425L1.68757 12.6809C1.67221 12.0729 1.66527 11.4648 1.66674 10.8567V9.14336C1.66441 8.53553 1.67053 7.92769 1.68507 7.32003L1.69091 7.15836C1.69757 6.9717 1.70591 6.7867 1.71591 6.56503C1.75757 5.67753 1.89757 5.07336 2.10341 4.5417C2.31288 3.98555 2.64171 3.48207 3.06674 3.0667C3.48249 2.64232 3.98587 2.31384 4.54174 2.1042C5.07341 1.89836 5.67757 1.75836 6.56507 1.7167L7.15841 1.6917L7.32007 1.68753C7.92773 1.67217 8.53556 1.66523 9.14341 1.6667L10.8567 1.66753ZM10.0001 5.8342C9.448 5.82639 8.89987 5.92838 8.38755 6.13425C7.87524 6.34012 7.40895 6.64576 7.01578 7.03341C6.62261 7.42106 6.31041 7.88298 6.09731 8.39233C5.88422 8.90169 5.77448 9.44831 5.77448 10.0004C5.77448 10.5526 5.88422 11.0992 6.09731 11.6086C6.31041 12.1179 6.62261 12.5798 7.01578 12.9675C7.40895 13.3551 7.87524 13.6608 8.38755 13.8666C8.89987 14.0725 9.448 14.1745 10.0001 14.1667C11.1051 14.1667 12.1649 13.7277 12.9464 12.9463C13.7278 12.1649 14.1667 11.1051 14.1667 10C14.1667 8.89496 13.7278 7.83515 12.9464 7.05375C12.1649 6.27235 11.1051 5.8342 10.0001 5.8342ZM10.0001 7.50086C10.3322 7.49474 10.6621 7.55486 10.9707 7.6777C11.2793 7.80054 11.5604 7.98365 11.7974 8.21632C12.0344 8.44899 12.2227 8.72656 12.3513 9.03281C12.4798 9.33907 12.5461 9.66788 12.5461 10C12.5462 10.3322 12.4801 10.661 12.3516 10.9673C12.2231 11.2736 12.0349 11.5512 11.798 11.784C11.561 12.0167 11.2801 12.1999 10.9715 12.3229C10.663 12.4458 10.333 12.506 10.0009 12.5C9.33787 12.5 8.70198 12.2366 8.23314 11.7678C7.7643 11.299 7.50091 10.6631 7.50091 10C7.50091 9.33699 7.7643 8.7011 8.23314 8.23226C8.70198 7.76342 9.33787 7.50003 10.0009 7.50003L10.0001 7.50086ZM14.3751 4.5842C14.1062 4.59496 13.852 4.70932 13.6656 4.90334C13.4792 5.09736 13.3751 5.35597 13.3751 5.62503C13.3751 5.89408 13.4792 6.1527 13.6656 6.34672C13.852 6.54074 14.1062 6.6551 14.3751 6.66586C14.6513 6.66586 14.9163 6.55612 15.1116 6.36077C15.307 6.16542 15.4167 5.90046 15.4167 5.6242C15.4167 5.34793 15.307 5.08298 15.1116 4.88763C14.9163 4.69228 14.6513 4.58253 14.3751 4.58253V4.5842Z"
                        fill="#111111"
                        fill-opacity="0.8"
                      />
                    </svg>
                  </div>
                  <h1
                    style={{
                      color: "rgba(17, 17, 17, 0.72)",
                    }}
                    className="text-sm font-medium leading-5"
                  >
                    Instagram
                  </h1>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 my-3 px-10">
              <div
                style={dmSans}
                className="w-[268px] h-[268px] mx-10 space-y-2 rounded-[20px] flex flex-col justify-center items-center text-center bg-white"
              >
                <img
                  src={blueFrame}
                  alt="blueFrame"
                  className="w-[80px] h-[80px]"
                />
                <h1
                  style={mulish}
                  className="max-w-[180px] text-[#111] text-lg font-extrabold leading-6"
                >
                  Fast and Secure Cash Transfer
                </h1>
                <p
                  style={{
                    color: "rgba(17, 17, 17, 0.80)",
                  }}
                  className="max-w-[218px] font-semibold leading-5 text-sm"
                >
                  Send money securely to any local bank around the clock with
                  robust transactions protection.
                </p>
              </div>

              <div
                style={dmSans}
                className="w-[268px] h-[268px] mx-10 space-y-2 rounded-[20px] flex flex-col justify-center items-center text-center bg-white"
              >
                <img
                  src={greenFrame}
                  alt="greenFrame"
                  className="w-[80px] h-[80px]"
                />
                <h1
                  style={mulish}
                  className="max-w-[180px] text-[#111] text-lg font-extrabold leading-6"
                >
                  Simplified Money Requests
                </h1>
                <p
                  style={{
                    color: "rgba(17, 17, 17, 0.80)",
                  }}
                  className="max-w-[218px] font-semibold leading-5 text-sm"
                >
                  Send money securely to any local bank around the clock with
                  robust transactions protection.
                </p>
              </div>

              <div
                style={dmSans}
                className="w-[268px] h-[268px] mx-10 space-y-2 rounded-[20px] flex flex-col justify-center items-center text-center bg-white"
              >
                <img
                  src={yellowFrame}
                  alt="yellowFrame"
                  className="w-[80px] h-[80px]"
                />
                <h1
                  style={mulish}
                  className="max-w-[165px] text-[#111] text-lg font-extrabold leading-6"
                >
                  All Your Bills in One Place
                </h1>
                <p
                  style={{
                    color: "rgba(17, 17, 17, 0.80)",
                  }}
                  className="max-w-[218px] font-semibold leading-5 text-sm"
                >
                  Send money securely to any local bank around the clock with
                  robust transactions protection.
                </p>
              </div>

              <div
                style={dmSans}
                className="w-[268px] h-[268px] mx-10 space-y-2 rounded-[20px] flex flex-col justify-center items-center text-center bg-white"
              >
                <img
                  src={pinkFrame}
                  alt="pinkFrame"
                  className="w-[80px] h-[80px]"
                />
                <h1
                  style={mulish}
                  className="max-w-[180px] text-[#111] text-lg font-extrabold leading-6"
                >
                  Multiple Payment Options
                </h1>
                <p
                  style={{
                    color: "rgba(17, 17, 17, 0.80)",
                  }}
                  className="max-w-[218px] font-semibold leading-5 text-sm"
                >
                  Send money securely to any local bank around the clock with
                  robust transactions protection.
                </p>
              </div>
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
