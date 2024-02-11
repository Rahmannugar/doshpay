import { useMediaQuery } from "@mui/material";
import work from "../assets/work.png";
import { useState } from "react";

const Work = ({ mulish, dmSans }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const handleToggle1 = () => {
    setToggle1(!toggle1);
    setToggle2(false);
    setToggle3(false);
  };

  const handleToggle2 = () => {
    setToggle1(false);
    setToggle2(!toggle2);
    setToggle3(false);
  };

  const handleToggle3 = () => {
    setToggle1(false);
    setToggle2(false);
    setToggle3(!toggle3);
  };

  const workButtonStyle = {
    borderRadius: "100px",
    boxShadow: "0px 20px 32px 0px rgba(0, 0, 0, 0.16)",
    padding: "1px 26px 1px 0px",
    border: "1px solid #5D32E3",
  };

  return (
    <div>
      {isNonMobileScreens ? (
        <div className="mt-32" style={dmSans}>
          <div className="text-center">
            <h1
              style={mulish}
              className="text-[#111] font-extrabold leading-[60px] text-[44px]"
            >
              Get Started In Seconds
            </h1>
            <h3
              className="text-[20px] font-medium mt-3"
              style={{
                color: "rgba(17, 17, 17, 0.8)",
              }}
            >
              How Doshpay works
            </h3>
          </div>

          <div className="mt-32  px-10 xl:px-16 flex justify-between 2xl:justify-center md:space-x-20 xl:space-x-32 2xl:space-x-48">
            <div
              className="w-[540px] h-[700px] px-16 pt-16 rounded-3xl flex justify-center items-center"
              style={{
                background: "rgba(93, 135, 225, 0.40)",
              }}
            >
              <img
                src={work}
                alt="work"
                className="rounded-t-3xl w-[387px] h-full object-cover object-top"
              />
            </div>

            <div>
              <div
                style={dmSans}
                onClick={handleToggle1}
                className="flex flex-col md:space-y-2 xl:space-y-5 md:mt-7 xl:mt-10"
              >
                <div className="flex space-x-4">
                  {toggle1 ? (
                    <svg
                      onClick={handleToggle1}
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C11.37 30 6 24.63 6 18C6 11.37 11.37 6 18 6C24.63 6 30 11.37 30 18C30 24.63 24.63 30 18 30Z"
                        fill="#5528E2"
                      />
                      <path
                        d="M18 25.5C22.1421 25.5 25.5 22.1421 25.5 18C25.5 13.8579 22.1421 10.5 18 10.5C13.8579 10.5 10.5 13.8579 10.5 18C10.5 22.1421 13.8579 25.5 18 25.5Z"
                        fill="#5528E2"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={handleToggle1}
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M18 33C15.0333 33 12.1332 32.1203 9.66645 30.4721C7.19972 28.8238 5.27713 26.4812 4.14181 23.7403C3.0065 20.9994 2.70945 17.9834 3.28823 15.0737C3.86701 12.1639 5.29562 9.49119 7.39341 7.39341C9.49119 5.29562 12.1639 3.86701 15.0737 3.28823C17.9834 2.70945 20.9994 3.0065 23.7403 4.14181C26.4812 5.27713 28.8238 7.19972 30.4721 9.66645C32.1203 12.1332 33 15.0333 33 18C33 21.9783 31.4197 25.7936 28.6066 28.6066C25.7936 31.4197 21.9783 33 18 33ZM18 6.00001C15.6266 6.00001 13.3066 6.70379 11.3332 8.02237C9.35977 9.34095 7.8217 11.2151 6.91345 13.4078C6.0052 15.6005 5.76756 18.0133 6.23058 20.3411C6.69361 22.6689 7.8365 24.8071 9.51473 26.4853C11.193 28.1635 13.3312 29.3064 15.6589 29.7694C17.9867 30.2325 20.3995 29.9948 22.5922 29.0866C24.7849 28.1783 26.6591 26.6402 27.9776 24.6669C29.2962 22.6935 30 20.3734 30 18C30 14.8174 28.7357 11.7652 26.4853 9.51473C24.2349 7.26429 21.1826 6.00001 18 6.00001Z"
                        fill="#111111"
                        fill-opacity="0.5"
                      />
                    </svg>
                  )}
                  <h1
                    style={mulish}
                    className={`xl:text-2xl max-w-[516px] font-semibold ${
                      toggle1
                        ? "text-black"
                        : "text-neutral-900 text-opacity-50"
                    }`}
                  >
                    Download the Doshpay app and <br /> create account in
                    seconds
                  </h1>
                </div>
                <p
                  className={`max-w-[516px] md:text-sm xl:leading-6 px-10 ${
                    toggle1 ? "text-black" : "text-neutral-900 text-opacity-50"
                  }`}
                >
                  The Doshpay app is available on both App store for IOS and
                  Playstore for Android to download.
                </p>
              </div>

              <div
                style={dmSans}
                onClick={handleToggle2}
                className="flex flex-col md:space-y-2 xl:space-y-5 md:mt-7 xl:mt-10"
              >
                <div className="flex space-x-4 items-center">
                  {toggle2 ? (
                    <svg
                      onClick={handleToggle2}
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C11.37 30 6 24.63 6 18C6 11.37 11.37 6 18 6C24.63 6 30 11.37 30 18C30 24.63 24.63 30 18 30Z"
                        fill="#5528E2"
                      />
                      <path
                        d="M18 25.5C22.1421 25.5 25.5 22.1421 25.5 18C25.5 13.8579 22.1421 10.5 18 10.5C13.8579 10.5 10.5 13.8579 10.5 18C10.5 22.1421 13.8579 25.5 18 25.5Z"
                        fill="#5528E2"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={handleToggle2}
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M18 33C15.0333 33 12.1332 32.1203 9.66645 30.4721C7.19972 28.8238 5.27713 26.4812 4.14181 23.7403C3.0065 20.9994 2.70945 17.9834 3.28823 15.0737C3.86701 12.1639 5.29562 9.49119 7.39341 7.39341C9.49119 5.29562 12.1639 3.86701 15.0737 3.28823C17.9834 2.70945 20.9994 3.0065 23.7403 4.14181C26.4812 5.27713 28.8238 7.19972 30.4721 9.66645C32.1203 12.1332 33 15.0333 33 18C33 21.9783 31.4197 25.7936 28.6066 28.6066C25.7936 31.4197 21.9783 33 18 33ZM18 6.00001C15.6266 6.00001 13.3066 6.70379 11.3332 8.02237C9.35977 9.34095 7.8217 11.2151 6.91345 13.4078C6.0052 15.6005 5.76756 18.0133 6.23058 20.3411C6.69361 22.6689 7.8365 24.8071 9.51473 26.4853C11.193 28.1635 13.3312 29.3064 15.6589 29.7694C17.9867 30.2325 20.3995 29.9948 22.5922 29.0866C24.7849 28.1783 26.6591 26.6402 27.9776 24.6669C29.2962 22.6935 30 20.3734 30 18C30 14.8174 28.7357 11.7652 26.4853 9.51473C24.2349 7.26429 21.1826 6.00001 18 6.00001Z"
                        fill="#111111"
                        fill-opacity="0.5"
                      />
                    </svg>
                  )}
                  <h1
                    style={mulish}
                    className={`xl:text-2xl max-w-[516px] font-semibold ${
                      toggle2
                        ? "text-black"
                        : "text-neutral-900 text-opacity-50"
                    }`}
                  >
                    Fast and Secure Transfers
                  </h1>
                </div>
                <p
                  className={`max-w-[516px] md:text-sm xl:leading-6 px-10 ${
                    toggle2 ? "text-black" : "text-neutral-900 text-opacity-50"
                  }`}
                >
                  - Select "Send Money" on the wallet page. <br />- Choose how
                  you want to send; Bank or Doshpay tag <br /> - Enter recipient
                  details and amount. <br /> - Confirm the transaction securely.
                  <br /> - Money is instantly on its way, safe and sound.
                </p>
              </div>

              <div
                style={dmSans}
                onClick={handleToggle3}
                className="flex flex-col md:space-y-2 xl:space-y-5 md:mt-7 xl:mt-10"
              >
                <div className="flex space-x-4 items-center">
                  {toggle3 ? (
                    <svg
                      onClick={handleToggle3}
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C11.37 30 6 24.63 6 18C6 11.37 11.37 6 18 6C24.63 6 30 11.37 30 18C30 24.63 24.63 30 18 30Z"
                        fill="#5528E2"
                      />
                      <path
                        d="M18 25.5C22.1421 25.5 25.5 22.1421 25.5 18C25.5 13.8579 22.1421 10.5 18 10.5C13.8579 10.5 10.5 13.8579 10.5 18C10.5 22.1421 13.8579 25.5 18 25.5Z"
                        fill="#5528E2"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={handleToggle3}
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M18 33C15.0333 33 12.1332 32.1203 9.66645 30.4721C7.19972 28.8238 5.27713 26.4812 4.14181 23.7403C3.0065 20.9994 2.70945 17.9834 3.28823 15.0737C3.86701 12.1639 5.29562 9.49119 7.39341 7.39341C9.49119 5.29562 12.1639 3.86701 15.0737 3.28823C17.9834 2.70945 20.9994 3.0065 23.7403 4.14181C26.4812 5.27713 28.8238 7.19972 30.4721 9.66645C32.1203 12.1332 33 15.0333 33 18C33 21.9783 31.4197 25.7936 28.6066 28.6066C25.7936 31.4197 21.9783 33 18 33ZM18 6.00001C15.6266 6.00001 13.3066 6.70379 11.3332 8.02237C9.35977 9.34095 7.8217 11.2151 6.91345 13.4078C6.0052 15.6005 5.76756 18.0133 6.23058 20.3411C6.69361 22.6689 7.8365 24.8071 9.51473 26.4853C11.193 28.1635 13.3312 29.3064 15.6589 29.7694C17.9867 30.2325 20.3995 29.9948 22.5922 29.0866C24.7849 28.1783 26.6591 26.6402 27.9776 24.6669C29.2962 22.6935 30 20.3734 30 18C30 14.8174 28.7357 11.7652 26.4853 9.51473C24.2349 7.26429 21.1826 6.00001 18 6.00001Z"
                        fill="#111111"
                        fill-opacity="0.5"
                      />
                    </svg>
                  )}
                  <h1
                    style={mulish}
                    className={`xl:text-2xl max-w-[516px] font-semibold ${
                      toggle3
                        ? "text-black"
                        : "text-neutral-900 text-opacity-50"
                    }`}
                  >
                    Requesting Money Simplified
                  </h1>
                </div>
                <p
                  className={`max-w-[516px] md:text-sm xl:leading-6 px-10 ${
                    toggle3 ? "text-black" : "text-neutral-900 text-opacity-50"
                  }`}
                >
                  - Choose "Request Money" on the wallet page. <br /> - Choose
                  how you want to request; Link or Doshpay tag <br /> - Set the
                  amount and add any notes if needed. <br /> - Send the request,
                  and they'll receive it instantly.
                </p>
              </div>

              <div
                style={workButtonStyle}
                className="flex justify-center text-[#5D32E3] mx-10 items-center h-[56px] w-[232px] gap-[10px] md:mt-10 lg:mt-16"
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
                    fill="#5D32E3"
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
                    stroke="#5D32E3"
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
                    d="M12.954 11.616L15.911 8.65895L6.36 3.29095C5.727 2.94895 5.134 2.90095 4.614 3.27495L12.954 11.616ZM16.415 15.078L19.489 13.349C20.089 13.013 20.418 12.537 20.418 12.009C20.418 11.482 20.089 11.005 19.49 10.669L16.707 9.10595L13.574 12.238L16.415 15.078ZM4.1 4.00195C4.036 4.19895 4 4.41895 4 4.65995V19.365C4 19.746 4.084 20.074 4.236 20.335L12.333 12.237L4.1 4.00195ZM12.954 12.857L4.902 20.91C5.056 20.969 5.222 21 5.397 21C5.709 21 6.034 20.908 6.365 20.724L15.62 15.527L12.954 12.857Z"
                    fill="#5D32E3"
                  />
                </svg>
                <h1 style={mulish} className="text-sm font-bold">
                  Download App
                </h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden">
          <div className="text-center space-y-2 mt-16" style={dmSans}>
            <h1
              style={mulish}
              className="font-black leading-[36px] text-[#111111] text-[28px]"
            >
              Get Started In Seconds
            </h1>
            <h3
              style={{
                color: "rgba(17, 17, 17, 0.8)",
              }}
              className="font-medium"
            >
              How Doshpay works
            </h3>
          </div>

          <div className="sm:flex sm:justify-between sm:mt-20 px-3">
            <div className="flex justify-center items-center mt-16 sm:mt-0 mx-4">
              <div
                className="w-[350px] sm:w-[334px] h-[493px] sm:h-[600px] flex justify-center items-center rounded-[24px] pt-8 sm:pt-10"
                style={{
                  background: "rgba(93, 135, 225, 0.40)",
                }}
              >
                <img
                  src={work}
                  alt="work"
                  className="rounded-t-3xl w-[272.47px] h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mt-16 sm:mt-0 flex flex-col justify-center items-center">
                <div
                  style={dmSans}
                  onClick={handleToggle1}
                  className="flex flex-col sm:mt-7 sm:space-y-3 space-y-4 px-5"
                >
                  <div className="flex space-x-5">
                    {toggle1 ? (
                      <svg
                        onClick={handleToggle1}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <path
                          d="M18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C11.37 30 6 24.63 6 18C6 11.37 11.37 6 18 6C24.63 6 30 11.37 30 18C30 24.63 24.63 30 18 30Z"
                          fill="#5528E2"
                        />
                        <path
                          d="M18 25.5C22.1421 25.5 25.5 22.1421 25.5 18C25.5 13.8579 22.1421 10.5 18 10.5C13.8579 10.5 10.5 13.8579 10.5 18C10.5 22.1421 13.8579 25.5 18 25.5Z"
                          fill="#5528E2"
                        />
                      </svg>
                    ) : (
                      <svg
                        onClick={handleToggle1}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <path
                          d="M18 33C15.0333 33 12.1332 32.1203 9.66645 30.4721C7.19972 28.8238 5.27713 26.4812 4.14181 23.7403C3.0065 20.9994 2.70945 17.9834 3.28823 15.0737C3.86701 12.1639 5.29562 9.49119 7.39341 7.39341C9.49119 5.29562 12.1639 3.86701 15.0737 3.28823C17.9834 2.70945 20.9994 3.0065 23.7403 4.14181C26.4812 5.27713 28.8238 7.19972 30.4721 9.66645C32.1203 12.1332 33 15.0333 33 18C33 21.9783 31.4197 25.7936 28.6066 28.6066C25.7936 31.4197 21.9783 33 18 33ZM18 6.00001C15.6266 6.00001 13.3066 6.70379 11.3332 8.02237C9.35977 9.34095 7.8217 11.2151 6.91345 13.4078C6.0052 15.6005 5.76756 18.0133 6.23058 20.3411C6.69361 22.6689 7.8365 24.8071 9.51473 26.4853C11.193 28.1635 13.3312 29.3064 15.6589 29.7694C17.9867 30.2325 20.3995 29.9948 22.5922 29.0866C24.7849 28.1783 26.6591 26.6402 27.9776 24.6669C29.2962 22.6935 30 20.3734 30 18C30 14.8174 28.7357 11.7652 26.4853 9.51473C24.2349 7.26429 21.1826 6.00001 18 6.00001Z"
                          fill="#111111"
                          fill-opacity="0.5"
                        />
                      </svg>
                    )}
                    <h1
                      style={mulish}
                      className={`font-bold leading-[20px] sm:text-sm max-w-[300px] ${
                        toggle1
                          ? "text-black"
                          : "text-neutral-900 text-opacity-50"
                      }`}
                    >
                      Download the Doshpay app and <br /> create account in
                      seconds
                    </h1>
                  </div>
                  <p
                    className={`max-w-[320px] text-[15px] leading-[24px] sm:text-xs pl-10  ${
                      toggle1
                        ? "text-black"
                        : "text-neutral-900 text-opacity-50"
                    }`}
                  >
                    The Doshpay app is available on both App store for IOS and
                    Playstore for Android to download.
                  </p>
                </div>

                <div
                  style={dmSans}
                  onClick={handleToggle2}
                  className="flex flex-col mt-10 sm:mt-7 sm:space-y-3 space-y-4 px-5"
                >
                  <div className="flex space-x-5 items-center">
                    {toggle2 ? (
                      <svg
                        onClick={handleToggle2}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 36 36"
                        fill="none"
                        className=""
                      >
                        <path
                          d="M18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C11.37 30 6 24.63 6 18C6 11.37 11.37 6 18 6C24.63 6 30 11.37 30 18C30 24.63 24.63 30 18 30Z"
                          fill="#5528E2"
                        />
                        <path
                          d="M18 25.5C22.1421 25.5 25.5 22.1421 25.5 18C25.5 13.8579 22.1421 10.5 18 10.5C13.8579 10.5 10.5 13.8579 10.5 18C10.5 22.1421 13.8579 25.5 18 25.5Z"
                          fill="#5528E2"
                        />
                      </svg>
                    ) : (
                      <svg
                        onClick={handleToggle2}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <path
                          d="M18 33C15.0333 33 12.1332 32.1203 9.66645 30.4721C7.19972 28.8238 5.27713 26.4812 4.14181 23.7403C3.0065 20.9994 2.70945 17.9834 3.28823 15.0737C3.86701 12.1639 5.29562 9.49119 7.39341 7.39341C9.49119 5.29562 12.1639 3.86701 15.0737 3.28823C17.9834 2.70945 20.9994 3.0065 23.7403 4.14181C26.4812 5.27713 28.8238 7.19972 30.4721 9.66645C32.1203 12.1332 33 15.0333 33 18C33 21.9783 31.4197 25.7936 28.6066 28.6066C25.7936 31.4197 21.9783 33 18 33ZM18 6.00001C15.6266 6.00001 13.3066 6.70379 11.3332 8.02237C9.35977 9.34095 7.8217 11.2151 6.91345 13.4078C6.0052 15.6005 5.76756 18.0133 6.23058 20.3411C6.69361 22.6689 7.8365 24.8071 9.51473 26.4853C11.193 28.1635 13.3312 29.3064 15.6589 29.7694C17.9867 30.2325 20.3995 29.9948 22.5922 29.0866C24.7849 28.1783 26.6591 26.6402 27.9776 24.6669C29.2962 22.6935 30 20.3734 30 18C30 14.8174 28.7357 11.7652 26.4853 9.51473C24.2349 7.26429 21.1826 6.00001 18 6.00001Z"
                          fill="#111111"
                          fill-opacity="0.5"
                        />
                      </svg>
                    )}
                    <h1
                      style={mulish}
                      className={`font-bold leading-[20px] max-w-[300px] sm:text-sm ${
                        toggle2
                          ? "text-black"
                          : "text-neutral-900 text-opacity-50"
                      }`}
                    >
                      Fast and Secure Transfers
                    </h1>
                  </div>
                  <p
                    className={`max-w-[320px] text-[15px] leading-[24px] sm:text-xs pl-10 ${
                      toggle2
                        ? "text-black"
                        : "text-neutral-900 text-opacity-50"
                    }`}
                  >
                    - Select "Send Money" on the wallet page. <br />- Choose how
                    you want to send; Bank or Doshpay tag <br /> - Enter
                    recipient details and amount. <br /> - Confirm the
                    transaction securely.
                    <br /> - Money is instantly on its way, safe and sound.
                  </p>
                </div>

                <div
                  style={dmSans}
                  onClick={handleToggle3}
                  className="flex flex-col mt-10 sm:mt-7 sm:space-y-3 space-y-4 px-5"
                >
                  <div className="flex space-x-5 items-center">
                    {toggle3 ? (
                      <svg
                        onClick={handleToggle3}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <path
                          d="M18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C11.37 30 6 24.63 6 18C6 11.37 11.37 6 18 6C24.63 6 30 11.37 30 18C30 24.63 24.63 30 18 30Z"
                          fill="#5528E2"
                        />
                        <path
                          d="M18 25.5C22.1421 25.5 25.5 22.1421 25.5 18C25.5 13.8579 22.1421 10.5 18 10.5C13.8579 10.5 10.5 13.8579 10.5 18C10.5 22.1421 13.8579 25.5 18 25.5Z"
                          fill="#5528E2"
                        />
                      </svg>
                    ) : (
                      <svg
                        onClick={handleToggle3}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <path
                          d="M18 33C15.0333 33 12.1332 32.1203 9.66645 30.4721C7.19972 28.8238 5.27713 26.4812 4.14181 23.7403C3.0065 20.9994 2.70945 17.9834 3.28823 15.0737C3.86701 12.1639 5.29562 9.49119 7.39341 7.39341C9.49119 5.29562 12.1639 3.86701 15.0737 3.28823C17.9834 2.70945 20.9994 3.0065 23.7403 4.14181C26.4812 5.27713 28.8238 7.19972 30.4721 9.66645C32.1203 12.1332 33 15.0333 33 18C33 21.9783 31.4197 25.7936 28.6066 28.6066C25.7936 31.4197 21.9783 33 18 33ZM18 6.00001C15.6266 6.00001 13.3066 6.70379 11.3332 8.02237C9.35977 9.34095 7.8217 11.2151 6.91345 13.4078C6.0052 15.6005 5.76756 18.0133 6.23058 20.3411C6.69361 22.6689 7.8365 24.8071 9.51473 26.4853C11.193 28.1635 13.3312 29.3064 15.6589 29.7694C17.9867 30.2325 20.3995 29.9948 22.5922 29.0866C24.7849 28.1783 26.6591 26.6402 27.9776 24.6669C29.2962 22.6935 30 20.3734 30 18C30 14.8174 28.7357 11.7652 26.4853 9.51473C24.2349 7.26429 21.1826 6.00001 18 6.00001Z"
                          fill="#111111"
                          fill-opacity="0.5"
                        />
                      </svg>
                    )}
                    <h1
                      style={mulish}
                      className={`font-bold leading-[20px] max-w-[300px] sm:text-sm ${
                        toggle3
                          ? "text-black"
                          : "text-neutral-900 text-opacity-50"
                      }`}
                    >
                      Requesting Money Simplified
                    </h1>
                  </div>
                  <p
                    className={`max-w-[320px] text-[15px] sm:text-xs leading-[24px] pl-10 ${
                      toggle3
                        ? "text-black"
                        : "text-neutral-900 text-opacity-50"
                    }`}
                  >
                    - Choose "Request Money" on the wallet page. <br /> - Choose
                    how you want to request; Link or Doshpay tag <br /> - Set
                    the amount and add any notes if needed. <br /> - Send the
                    request, and they'll receive it instantly.
                  </p>
                </div>
              </div>

              <div className=" sm:block mx-auto sm:mx-10 sm:mt-2">
                <div
                  style={workButtonStyle}
                  className="flex justify-center text-[#5D32E3] items-center h-[56px] w-[232px] gap-[10px] mt-10 sm:mt-7"
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
                      fill="#5D32E3"
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
                      stroke="#5D32E3"
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
                      d="M12.954 11.616L15.911 8.65895L6.36 3.29095C5.727 2.94895 5.134 2.90095 4.614 3.27495L12.954 11.616ZM16.415 15.078L19.489 13.349C20.089 13.013 20.418 12.537 20.418 12.009C20.418 11.482 20.089 11.005 19.49 10.669L16.707 9.10595L13.574 12.238L16.415 15.078ZM4.1 4.00195C4.036 4.19895 4 4.41895 4 4.65995V19.365C4 19.746 4.084 20.074 4.236 20.335L12.333 12.237L4.1 4.00195ZM12.954 12.857L4.902 20.91C5.056 20.969 5.222 21 5.397 21C5.709 21 6.034 20.908 6.365 20.724L15.62 15.527L12.954 12.857Z"
                      fill="#5D32E3"
                    />
                  </svg>
                  <h1 style={mulish} className="text-sm font-bold">
                    Download App
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
