import { useMediaQuery } from "@mui/material";
import answers from "./defaultAnswers";
import { useState } from "react";

const Answer = ({ mulish, dmSans }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [selectedAnswer, setSelectedAnswer] = useState(answers[0].answer1);
  const click1 = () => {
    setSelectedAnswer(answers[0].answer1);
  };
  const click2 = () => {
    setSelectedAnswer(answers[0].answer2);
  };
  const click3 = () => {
    setSelectedAnswer(answers[0].answer3);
  };
  const click4 = () => {
    setSelectedAnswer(answers[0].answer4);
  };
  const click5 = () => {
    setSelectedAnswer(answers[0].answer5);
  };
  const click6 = () => {
    setSelectedAnswer(answers[0].answer6);
  };
  const click7 = () => {
    setSelectedAnswer(answers[0].answer7);
  };
  const click8 = () => {
    setSelectedAnswer(answers[0].answer8);
  };

  return (
    <div>
      {isNonMobileScreens ? (
        <div className="mt-10">
          <div className="mt-20">
            <h1
              style={mulish}
              className="leading-[55px] text-center font-extrabold xl:text-[44px] lg:text-[36px]"
            >
              FAQs and Answers.
            </h1>
            <div className="mt-24 px-10 xl:px-16 space-x-7 2xl:space-x-10 flex justify-between 2xl:justify-center items-center">
              <div
                className=" h-[894.67px] max-w-[600px] py-8 rounded-[24px]"
                style={{
                  border: "1px solid rgba(17, 17, 17, 0.2)",
                }}
              >
                <h1
                  style={mulish}
                  className="px-7 font-extrabold leading-[40px] xl:text-[32px] lg:text-[24px]"
                >
                  Your Questions
                </h1>
                <div
                  className="w-full mt-5"
                  style={{
                    border: "1px solid rgba(17,17, 17, 0.12)",
                  }}
                ></div>
                <div className="flex flex-col px-10 items-center ">
                  <div
                    onClick={click1}
                    className={` ${
                      selectedAnswer == answers[0].answer1
                        ? "bg-[#121621] text-white"
                        : "bg-[#5D32E308]"
                    } flex items-center px-5 mt-7 w-[544px] h-[68px] rounded-[12px]`}
                    style={{
                      border: "1px solid rgba(93, 50, 227, 0.16)",
                    }}
                  >
                    <h1
                      style={mulish}
                      className="text-lg font-bold leading-[28px]"
                    >
                      What is Doshpay?
                    </h1>
                  </div>
                  <div
                    onClick={click2}
                    className={` ${
                      selectedAnswer == answers[0].answer2
                        ? "bg-[#121621] text-white"
                        : "bg-[#5D32E308]"
                    } flex items-center px-5 mt-7 w-[544px] h-[68px] rounded-[12px]`}
                    style={{
                      border: "1px solid rgba(17, 17, 17, 0.2)",
                    }}
                  >
                    <h1
                      style={mulish}
                      className="font-bold text-lg leading-[28px]"
                    >
                      How do I send cash using Doshpay?
                    </h1>
                  </div>

                  <div
                    onClick={click3}
                    className={` ${
                      selectedAnswer == answers[0].answer3
                        ? "bg-[#121621] text-white"
                        : "bg-[#5D32E308]"
                    } flex items-center px-5 mt-7 w-[544px] h-[68px] rounded-[12px]`}
                    style={{
                      border: "1px solid rgba(17, 17, 17, 0.2)",
                    }}
                  >
                    <h1
                      style={mulish}
                      className="font-bold text-lg leading-[28px]"
                    >
                      Can I request cash from friends who don't have the app?
                    </h1>
                  </div>

                  <div
                    onClick={click4}
                    className={` ${
                      selectedAnswer == answers[0].answer4
                        ? "bg-[#121621] text-white"
                        : "bg-[#5D32E308]"
                    } flex items-center px-5 mt-7 w-[544px] h-[68px] rounded-[12px]`}
                    style={{
                      border: "1px solid rgba(17, 17, 17, 0.2)",
                    }}
                  >
                    <h1
                      style={mulish}
                      className="font-bold text-lg leading-[28px]"
                    >
                      Are there any transaction fees?
                    </h1>
                  </div>

                  <div
                    onClick={click5}
                    className={` ${
                      selectedAnswer == answers[0].answer5
                        ? "bg-[#121621] text-white"
                        : "bg-[#5D32E308]"
                    } flex items-center px-5 mt-7 w-[544px] h-[68px] rounded-[12px]`}
                    style={{
                      border: "1px solid rgba(17, 17, 17, 0.2)",
                    }}
                  >
                    <h1
                      style={mulish}
                      className="font-bold text-lg leading-[28px]"
                    >
                      How do I pay my bills through Doshpay?
                    </h1>
                  </div>

                  <div
                    onClick={click6}
                    className={` ${
                      selectedAnswer == answers[0].answer6
                        ? "bg-[#121621] text-white"
                        : "bg-[#5D32E308]"
                    } flex items-center px-5 mt-7 w-[544px] h-[68px] rounded-[12px]`}
                    style={{
                      border: "1px solid rgba(17, 17, 17, 0.2)",
                    }}
                  >
                    <h1
                      style={mulish}
                      className="font-bold text-lg leading-[28px]"
                    >
                      Is Doshpay safe and secure?
                    </h1>
                  </div>

                  <div
                    onClick={click7}
                    className={` ${
                      selectedAnswer == answers[0].answer7
                        ? "bg-[#121621] text-white"
                        : "bg-[#5D32E308]"
                    } flex items-center px-5 mt-7 w-[544px] h-[68px] rounded-[12px]`}
                    style={{
                      border: "1px solid rgba(17, 17, 17, 0.2)",
                    }}
                  >
                    <h1
                      style={mulish}
                      className="font-bold text-lg leading-[28px]"
                    >
                      How do I send cash using Doshpay?
                    </h1>
                  </div>

                  <div
                    onClick={click8}
                    className={` ${
                      selectedAnswer == answers[0].answer8
                        ? "bg-[#121621] text-white"
                        : "bg-[#5D32E308]"
                    } flex items-center px-5 mt-7 w-[544px] h-[68px] rounded-[12px]`}
                    style={{
                      border: "1px solid rgba(17, 17, 17, 0.2)",
                    }}
                  >
                    <h1
                      style={mulish}
                      className="font-bold text-lg leading-[28px]"
                    >
                      What if I need help or have more questions?
                    </h1>
                  </div>
                </div>
              </div>

              <div
                className="h-[894.67px] max-w-[600px] rounded-[24px] py-8 bg-[#1A569E]"
                style={{
                  border: "1px solid rgba(17, 17, 17, 0.2)",
                }}
              >
                <h1
                  style={mulish}
                  className="font-extrabold leading-[40px] px-7 lg:text-[24px] xl:text-[32px] text-white"
                >
                  Our Answers
                </h1>
                <div
                  className="w-full mt-5"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                ></div>

                <p
                  style={dmSans}
                  className="px-7 mt-8 leading-[32px] lg:text-xl xl:text-2xl text-white"
                >
                  {selectedAnswer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-20">
          <h1 style={mulish} className=" text-3xl text-center font-extrabold ">
            FAQs and Answers.
          </h1>

          <div
            className=" py-8 mx-10 mt-16 rounded-[24px]"
            style={{
              border: "1px solid rgba(17, 17, 17, 0.2)",
            }}
          >
            <h1 style={mulish} className="px-7 font-extrabold text-2xl">
              Your Questions
            </h1>
            <div
              className="w-full mt-5"
              style={{
                border: "1px solid rgba(17,17, 17, 0.12)",
              }}
            ></div>
            <div className="flex flex-col px-5 items-center ">
              <div
                onClick={click1}
                className={` ${
                  selectedAnswer == answers[0].answer1
                    ? "bg-[#121621] text-white"
                    : "bg-[#5D32E308]"
                } flex items-center px-5 mt-7 w-full h-[85px] rounded-[12px]`}
                style={{
                  border: "1px solid rgba(93, 50, 227, 0.16)",
                }}
              >
                <h1 style={mulish} className="text-lg font-bold leading-[28px]">
                  What is Doshpay?
                </h1>
              </div>

              <div
                className={`bg-[#1A569E] w-full py-7 mt-1 rounded-[12px] ${
                  selectedAnswer == answers[0].answer1 ? "block" : "hidden"
                }`}
              >
                <p className="text-white text-xl text-center px-5">
                  Doshpay is a cutting-edge mobile banking application designed
                  to revolutionize the way individuals manage their finances.
                  Our aim is to transform traditional banking by offering
                  user-centric, feature-rich mobile application that simplifies
                  everyday financial transactions.
                </p>
              </div>

              <div
                onClick={click2}
                className={` ${
                  selectedAnswer == answers[0].answer2
                    ? "bg-[#121621] text-white"
                    : "bg-[#5D32E308]"
                } flex items-center px-5 mt-7 w-full h-[85px] rounded-[12px]`}
                style={{
                  border: "1px solid rgba(17, 17, 17, 0.2)",
                }}
              >
                <h1 style={mulish} className="font-bold text-lg leading-[28px]">
                  How do I send cash using Doshpay?
                </h1>
              </div>

              <div
                className={`bg-[#1A569E] w-full py-7 mt-1 rounded-[12px]  ${
                  selectedAnswer == answers[0].answer2 ? "block" : "hidden"
                }`}
              >
                <p className="text-white text-xl text-center px-5">
                  To send cash using Doshpay, simply log in to the app, navigate
                  to the 'Send Money' feature, enter the recipient's details or
                  select them from your contacts, specify the amount you wish to
                  send, and confirm the transaction. It's quick, easy, and
                  secure.
                </p>
              </div>

              <div
                onClick={click3}
                className={` ${
                  selectedAnswer == answers[0].answer3
                    ? "bg-[#121621] text-white"
                    : "bg-[#5D32E308]"
                } flex items-center px-5 mt-7 w-full h-[85px] rounded-[12px]`}
                style={{
                  border: "1px solid rgba(17, 17, 17, 0.2)",
                }}
              >
                <h1 style={mulish} className="font-bold text-lg leading-[28px]">
                  Can I request cash from friends who don't have the app?
                </h1>
              </div>

              <div
                className={`bg-[#1A569E] w-full py-7 mt-1 rounded-[12px]  ${
                  selectedAnswer == answers[0].answer3 ? "block" : "hidden"
                }`}
              >
                <p className="text-white text-xl text-center px-5">
                  Yes, you can request cash from friends who don't have the
                  Doshpay app. Simply generate a request within the app, enter
                  the recipient's email or phone number, specify the amount, and
                  they'll receive a notification prompting them to fulfill the
                  request through various payment methods
                </p>
              </div>

              <div
                onClick={click4}
                className={` ${
                  selectedAnswer == answers[0].answer4
                    ? "bg-[#121621] text-white"
                    : "bg-[#5D32E308]"
                } flex items-center px-5 mt-7 w-full h-[85px] rounded-[12px]`}
                style={{
                  border: "1px solid rgba(17, 17, 17, 0.2)",
                }}
              >
                <h1 style={mulish} className="font-bold text-lg leading-[28px]">
                  Are there any transaction fees?
                </h1>
              </div>

              <div
                className={`bg-[#1A569E] w-full py-7 mt-1 rounded-[12px]  ${
                  selectedAnswer == answers[0].answer4 ? "block" : "hidden"
                }`}
              >
                <p className="text-white text-xl text-center px-5">
                  Doshpay aims to provide transparent and competitive services.
                  While specific transaction fees may vary depending on factors
                  like transaction type and amount, we strive to keep fees
                  minimal and clearly communicated within the app.
                </p>
              </div>

              <div
                onClick={click5}
                className={` ${
                  selectedAnswer == answers[0].answer5
                    ? "bg-[#121621] text-white"
                    : "bg-[#5D32E308]"
                } flex items-center px-5 mt-7 w-full h-[85px] rounded-[12px]`}
                style={{
                  border: "1px solid rgba(17, 17, 17, 0.2)",
                }}
              >
                <h1 style={mulish} className="font-bold text-lg leading-[28px]">
                  How do I pay my bills through Doshpay?
                </h1>
              </div>

              <div
                className={`bg-[#1A569E] w-full py-7 mt-1 rounded-[12px] ${
                  selectedAnswer == answers[0].answer5 ? "block" : "hidden"
                }`}
              >
                <p className="text-white text-xl text-center px-5">
                  Paying bills through Doshpay is straightforward. Access the
                  'Bill Pay' feature, select the biller you wish to pay, enter
                  the necessary details such as account number and payment
                  amount, and confirm the payment. Doshpay streamlines this
                  process, ensuring your bills are paid securely and on time.
                </p>
              </div>

              <div
                onClick={click6}
                className={` ${
                  selectedAnswer == answers[0].answer6
                    ? "bg-[#121621] text-white"
                    : "bg-[#5D32E308]"
                } flex items-center px-5 mt-7 w-full h-[85px] rounded-[12px]`}
                style={{
                  border: "1px solid rgba(17, 17, 17, 0.2)",
                }}
              >
                <h1 style={mulish} className="font-bold text-lg leading-[28px]">
                  Is Doshpay safe and secure?
                </h1>
              </div>

              <div
                className={`bg-[#1A569E] w-full py-7 mt-1 rounded-[12px]  ${
                  selectedAnswer == answers[0].answer6 ? "block" : "hidden"
                }`}
              >
                <p className="text-white text-xl text-center px-5">
                  Absolutely. Doshpay prioritizes the security and privacy of
                  its users' financial information. We employ state-of-the-art
                  encryption techniques and robust security measures to
                  safeguard your data. Additionally, we regularly update our
                  systems to mitigate emerging threats and maintain compliance
                  with industry standards.
                </p>
              </div>

              <div
                onClick={click7}
                className={` ${
                  selectedAnswer == answers[0].answer7
                    ? "bg-[#121621] text-white"
                    : "bg-[#5D32E308]"
                } flex items-center px-5 mt-7 w-full h-[85px] rounded-[12px]`}
                style={{
                  border: "1px solid rgba(17, 17, 17, 0.2)",
                }}
              >
                <h1 style={mulish} className="font-bold text-lg leading-[28px]">
                  How do I send cash using Doshpay?
                </h1>
              </div>

              <div
                className={`bg-[#1A569E] w-full py-7 mt-1 rounded-[12px] ${
                  selectedAnswer == answers[0].answer7 ? "block" : "hidden"
                }`}
              >
                <p className="text-white text-xl text-center px-5">
                  I think there might be a repetition here, but to reiterate,
                  sending cash via Doshpay is simple and secure. Just follow the
                  steps outlined in the app to initiate a transfer to your
                  desired recipient.
                </p>
              </div>

              <div
                onClick={click8}
                className={` ${
                  selectedAnswer == answers[0].answer8
                    ? "bg-[#121621] text-white"
                    : "bg-[#5D32E308]"
                } flex items-center px-5 mt-7 w-full h-[85px] rounded-[12px]`}
                style={{
                  border: "1px solid rgba(17, 17, 17, 0.2)",
                }}
              >
                <h1 style={mulish} className="font-bold text-lg leading-[28px]">
                  What if I need help or have more questions?
                </h1>
              </div>

              <div
                className={`bg-[#1A569E] w-full py-7 mt-1 rounded-[12px] ${
                  selectedAnswer == answers[0].answer8 ? "block" : "hidden"
                }`}
              >
                <p className="text-white text-xl text-center px-5">
                  If you need assistance or have further questions, Doshpay
                  offers multiple support channels to help you. You can reach
                  out to our customer support team through the app's help
                  section, FAQs, or contact us directly via email or phone.
                  We're dedicated to providing prompt and helpful assistance to
                  ensure your Doshpay experience is seamless and satisfying.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Answer;
