import { useMediaQuery } from "@mui/material";
import work from "../assets/work.png";
import { useState } from "react";

const Work = ({ mulish, dmSans }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const [activeDiv, setActiveDiv] = useState(1);

  const handleDivChange = (divId) => {
    setActiveDiv(divId);
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

          <div className="mt-32  px-10 xl:px-16 flex justify-between 2xl:justify-center space-x-20">
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
              <div style={dmSans} className="flex flex-col">
                <div className="flex space-x-3">
                  {activeDiv === 1 ? (
                    <svg
                      onClick={() => setActiveDiv(2)}
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
                      onClick={() => setActiveDiv(1)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M18 33C15.0333 33 12.1332 32.1203 9.66645 30.4721C7.19972 28.8238 5.27713 26.4812 4.14181 23.7403C3.0065 20.9994 2.70945 17.9834 3.28823 15.0737C3.86701 12.1639 5.29562 9.49119 7.39341 7.39341C9.49119 5.29562 12.1639 3.86701 15.0737 3.28823C17.9834 2.70945 20.9994 3.0065 23.7403 4.14181C26.4812 5.27713 28.8238 7.19972 30.4721 9.66645C32.1203 12.1332 33 15.0333 33 18C33 21.9783 31.4197 25.7936 28.6066 28.6066C25.7936 31.4197 21.9783 33 18 33ZM18 6.00001C15.6266 6.00001 13.3066 6.70379 11.3332 8.02237C9.35977 9.34095 7.8217 11.2151 6.91345 13.4078C6.0052 15.6005 5.76756 18.0133 6.23058 20.3411C6.69361 22.6689 7.8365 24.8071 9.51473 26.4853C11.193 28.1635 13.3312 29.3064 15.6589 29.7694C17.9867 30.2325 20.3995 29.9948 22.5922 29.0866C24.7849 28.1783 26.6591 26.6402 27.9776 24.6669C29.2962 22.6935 30 20.3734 30 18C30 14.8174 28.7357 11.7652 26.4853 9.51473C24.2349 7.26429 21.1826 6.00001 18 6.00001Z"
                        fill="#111111"
                        fillOpacity="0.5"
                      />
                    </svg>
                  )}
                  <h1
                    style={mulish}
                    className={`text-2xl max-w-[516px] font-semibold ${
                      activeDiv === 1
                        ? "text-black"
                        : "text-neutral-900 text-opacity-50"
                    }`}
                  >
                    Download the Doshpay app and create account in seconds
                  </h1>
                </div>
                <p
                  className={`max-w-[516px] leading-6 px-10 ${
                    activeDiv === 1
                      ? "text-black"
                      : "text-neutral-900 text-opacity-50"
                  }`}
                >
                  The Doshpay app is available on both App store for IOS and
                  Playstore for Android to download.
                </p>
              </div>

              <div style={dmSans} className="flex flex-col">
                <div className="flex space-x-3">
                  {toggle ? (
                    <svg
                      onClick={() => setToggle(!toggle)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M18 33C15.0333 33 12.1332 32.1203 9.66645 30.4721C7.19972 28.8238 5.27713 26.4812 4.14181 23.7403C3.0065 20.9994 2.70945 17.9834 3.28823 15.0737C3.86701 12.1639 5.29562 9.49119 7.39341 7.39341C9.49119 5.29562 12.1639 3.86701 15.0737 3.28823C17.9834 2.70945 20.9994 3.0065 23.7403 4.14181C26.4812 5.27713 28.8238 7.19972 30.4721 9.66645C32.1203 12.1332 33 15.0333 33 18C33 21.9783 31.4197 25.7936 28.6066 28.6066C25.7936 31.4197 21.9783 33 18 33ZM18 6.00001C15.6266 6.00001 13.3066 6.70379 11.3332 8.02237C9.35977 9.34095 7.8217 11.2151 6.91345 13.4078C6.0052 15.6005 5.76756 18.0133 6.23058 20.3411C6.69361 22.6689 7.8365 24.8071 9.51473 26.4853C11.193 28.1635 13.3312 29.3064 15.6589 29.7694C17.9867 30.2325 20.3995 29.9948 22.5922 29.0866C24.7849 28.1783 26.6591 26.6402 27.9776 24.6669C29.2962 22.6935 30 20.3734 30 18C30 14.8174 28.7357 11.7652 26.4853 9.51473C24.2349 7.26429 21.1826 6.00001 18 6.00001Z"
                        fill="#111111"
                        fillOpacity="0.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => setToggle(!toggle)}
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
                  )}
                  <h1
                    style={mulish}
                    className={`text-2xl max-w-[516px] font-semibold ${
                      toggle ? "text-black" : "text-neutral-900 text-opacity-50"
                    }`}
                  >
                    Fast and Secure Transfers
                  </h1>
                </div>
                <p
                  className={`max-w-[516px] leading-6 px-10 ${
                    toggle ? "text-black" : "text-neutral-900 text-opacity-50"
                  }`}
                >
                  - Select "Send Money" on the wallet page. <br />- Choose how
                  you want to send; Bank or Doshpay tag <br /> - Enter recipient
                  details and amount. <br /> - Confirm the transaction securely.
                  <br /> - Money is instantly on its way, safe and sound.
                </p>
              </div>

              <div style={dmSans} className="flex flex-col">
                <div className="flex space-x-3">
                  {toggle ? (
                    <svg
                      onClick={() => setToggle(!toggle)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M18 33C15.0333 33 12.1332 32.1203 9.66645 30.4721C7.19972 28.8238 5.27713 26.4812 4.14181 23.7403C3.0065 20.9994 2.70945 17.9834 3.28823 15.0737C3.86701 12.1639 5.29562 9.49119 7.39341 7.39341C9.49119 5.29562 12.1639 3.86701 15.0737 3.28823C17.9834 2.70945 20.9994 3.0065 23.7403 4.14181C26.4812 5.27713 28.8238 7.19972 30.4721 9.66645C32.1203 12.1332 33 15.0333 33 18C33 21.9783 31.4197 25.7936 28.6066 28.6066C25.7936 31.4197 21.9783 33 18 33ZM18 6.00001C15.6266 6.00001 13.3066 6.70379 11.3332 8.02237C9.35977 9.34095 7.8217 11.2151 6.91345 13.4078C6.0052 15.6005 5.76756 18.0133 6.23058 20.3411C6.69361 22.6689 7.8365 24.8071 9.51473 26.4853C11.193 28.1635 13.3312 29.3064 15.6589 29.7694C17.9867 30.2325 20.3995 29.9948 22.5922 29.0866C24.7849 28.1783 26.6591 26.6402 27.9776 24.6669C29.2962 22.6935 30 20.3734 30 18C30 14.8174 28.7357 11.7652 26.4853 9.51473C24.2349 7.26429 21.1826 6.00001 18 6.00001Z"
                        fill="#111111"
                        fillOpacity="0.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => setToggle(!toggle)}
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
                  )}
                  <h1
                    style={mulish}
                    className={`text-2xl max-w-[516px] font-semibold ${
                      toggle ? "text-black" : "text-neutral-900 text-opacity-50"
                    }`}
                  >
                    Requesting Money Simplified
                  </h1>
                </div>
                <p
                  className={`max-w-[516px] leading-6 px-10 ${
                    toggle ? "text-black" : "text-neutral-900 text-opacity-50"
                  }`}
                >
                  - Choose "Request Money" on the wallet page. <br /> - Choose
                  how you want to request; Link or Doshpay tag <br /> - Set the
                  amount and add any notes if needed. <br /> - Send the request,
                  and they'll receive it instantly.
                </p>
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

export default Work;
