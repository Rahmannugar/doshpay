import { useMediaQuery } from "@mui/material";
import advert1 from "../assets/advert-1.png";
import advert2 from "../assets/advert-2.png";
import advert3 from "../assets/advert-3.png";

const Transfer = ({ mulish, dmSans }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");
  const transferButtonStyle = {
    borderRadius: "100px",
    background: "#5D32E3",
    boxShadow: "0px 12x 24px 0px rgba(0, 0, 0, 0.12)",
    padding: "1px 26px 1px 0px",
  };

  return (
    <div>
      {isNonMobileScreens ? (
        <div className="px-10 xl:px-16 mt-36">
          <div className=" 2xl:flex 2xl:items-center 2xl:justify-center">
            <h1
              style={mulish}
              className=" text-[36px] xl:text-[44px] font-extrabold max-w-[746px] leading-[50px] xl:leading-[60px]"
            >
              Fund your Wallet, Make Transfers, and Pay Bills with ease
            </h1>
          </div>

          <div className="mt-20 flex space-x-9 justify-between items-center 2xl:justify-center">
            <div
              style={{
                background: "rgba(190, 207, 243, 0.4)",
              }}
              className="w-[600px] h-[660px] rounded-[24px]"
            >
              <div className="px-10">
                <h1
                  style={mulish}
                  className="font-extrabold text-2xl leading-[30px] mt-12"
                >
                  Fast and Secure Cash Transfer
                </h1>
                <p style={dmSans} className="leading-[20px] max-w-[360px] mt-5">
                  Send money securely to any local bank around the clock with
                  the assurance of robust encryption protecting your
                  transactions.
                </p>

                <div
                  style={transferButtonStyle}
                  className="flex justify-center items-center h-[48px] w-[209px] gap-[7px] mt-10"
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
                      strokeLinecap="round"
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
              </div>

              <div className="flex justify-end items-center mt-3">
                <img src={advert1} alt="advert1" />
              </div>
            </div>

            <div className="space-y-7">
              <div
                style={{
                  background: "rgba(245, 245, 245, 1)",
                }}
                className="w-[600px] h-[320px] rounded-[24px] flex px-7 justify-between items-center"
              >
                <div className="space-y-5">
                  <h1
                    style={mulish}
                    className="font-extrabold leading-[27px] max-w-[210px] text-[22px]"
                  >
                    Daily Financial Tips
                  </h1>
                  <p style={dmSans} className="leading-[20px] max-w-[210px]">
                    Receive daily financial tips to help you make informed
                    decisions.
                  </p>
                </div>
                <img src={advert2} alt="advert2" />
              </div>

              <div
                style={{
                  background: "rgba(245, 245, 245, 1)",
                }}
                className="w-[600px] h-[320px] rounded-[24px] flex px-7 justify-between items-center"
              >
                <div className="space-y-5">
                  <h1
                    style={mulish}
                    className="font-extrabold leading-[27px] max-w-[210px] text-[22px]"
                  >
                    Flexible Payment Options
                  </h1>
                  <p style={dmSans} className="leading-[20px] max-w-[210px]">
                    Simplify transactions by sending and receiving money using
                    Doshpay tags.
                  </p>
                </div>
                <img src={advert3} alt="advert3" className="w-[287px] mt-20" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-28">
          <h1
            style={mulish}
            className=" text-2xl text-center font-extrabold px-10"
          >
            Fund your Wallet, Make Transfers, and Pay Bills with ease
          </h1>

          <div className="mt-20 flex flex-col justify-center items-center md:flex-row md:space-x-10">
            <div
              style={{
                background: "rgba(190, 207, 243, 0.4)",
              }}
              className="w-[350px] h-[660px] md:h-[900px] flex flex-col justify-center items-center md:mt-10 rounded-[24px]"
            >
              <div className="px-5">
                <h1
                  style={mulish}
                  className="font-extrabold text-2xl leading-[30px] mt-12"
                >
                  Fast and Secure Cash Transfer
                </h1>
                <p style={dmSans} className="leading-[20px] max-w-[360px] mt-5">
                  Send money securely to any local bank around the clock with
                  the assurance of robust encryption protecting your
                  transactions.
                </p>

                <div
                  style={transferButtonStyle}
                  className="flex justify-center items-center h-[48px] w-[209px] gap-[7px] mt-10"
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
                      strokeLinecap="round"
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
              </div>

              <div className="flex justify-end items-center mt-6">
                <img src={advert1} alt="advert1" className="" />
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "rgba(245, 245, 245, 1)",
                }}
                className="w-[350px] h-[440px] py-5 px-7 mt-10 rounded-[24px]"
              >
                <div className="space-y-3">
                  <h1
                    style={mulish}
                    className="font-extrabold max-w-[210px] text-xl"
                  >
                    Daily Financial Tips
                  </h1>
                  <p style={dmSans} className="max-w-[210px]">
                    Receive daily financial tips to help you make informed
                    decisions.
                  </p>
                </div>
                <img src={advert2} alt="advert2" className="mt-5" />
              </div>

              <div
                style={{
                  background: "rgba(245, 245, 245, 1)",
                }}
                className="w-[350px] h-[440px] py-5 px-7 mt-10 rounded-[24px]"
              >
                <div className="space-y-3">
                  <h1
                    style={mulish}
                    className="font-extrabold max-w-[210px] text-xl"
                  >
                    Flexible Payment Options
                  </h1>
                  <p style={dmSans} className="max-w-[210px]">
                    Simplify transactions by sending and receiving money using
                    Doshpay tags.
                  </p>
                </div>
                <img src={advert3} alt="advert3" className="w-[287px] mt-7" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transfer;
