import { useMediaQuery } from "@mui/material";
import answers from "./defaultAnswers";
import { useState } from "react";

const Answer = ({ mulish, dmSans }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:768px)");
  const [selectedAnswer, setSelectedAnswer] = useState(answers[0].answer1);
  const [background, setBackground] = useState("bg-[#121621]");
  const [color, setColor] = useState("");
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
        <div className="relative mt-10">
          {/* <svg
              width=""
              height="1139"
              viewBox="0 0 1440 1139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-10 -7.88365L-9.99994 1220.02M32.9412 -7.88365L32.9412 1220.02M75.8824 -7.88365L75.8824 1220.02M118.824 -7.88365L118.824 1220.02M161.765 -7.88365L161.765 1220.02M204.706 -7.88365L204.706 1220.02M247.647 -7.88365L247.647 1220.02M290.588 -7.88365L290.588 1220.02M333.529 -7.88365L333.53 1220.02M376.471 -7.88365L376.471 1220.02M419.412 -7.88365L419.412 1220.02M462.353 -7.88365L462.353 1220.02M505.294 -7.88365L505.294 1220.02M548.235 -7.88365L548.235 1220.02M591.176 -7.88365L591.177 1220.02M634.118 -7.88365L634.118 1220.02M677.059 -7.88365L677.059 1220.02M720 -7.88365L720 1220.02M762.941 -7.88365L762.941 1220.02M805.882 -7.88365L805.882 1220.02M848.824 -7.88365L848.824 1220.02M891.765 -7.88365L891.765 1220.02M934.706 -7.88365L934.706 1220.02M977.647 -7.88365L977.647 1220.02M1020.59 -7.88365L1020.59 1220.02M1063.53 -7.88365L1063.53 1220.02M1106.47 -7.88365L1106.47 1220.02M1149.41 -7.88365L1149.41 1220.02M1192.35 -7.88365L1192.35 1220.02M1235.29 -7.88365L1235.29 1220.02M1278.24 -7.88365L1278.24 1220.02M1321.18 -7.88365L1321.18 1220.02M1364.12 -7.88365V1220.02M1407.06 -7.88365V1220.02M1450 -7.88365V1220.02M-5.30328 1224L1443.96 1224M-5.30328 1187.62L1443.96 1187.62M-5.30328 1151.24L1443.96 1151.24M-5.30328 1114.85L1443.96 1114.85M-5.30328 1078.47L1443.96 1078.47M-5.30329 1042.09L1443.96 1042.09M-5.30329 1005.71L1443.96 1005.71M-5.30329 969.323L1443.96 969.323M-5.30329 932.941L1443.96 932.941M-5.30329 896.559L1443.96 896.559M-5.3033 860.176L1443.96 860.176M-5.3033 823.794L1443.96 823.794M-5.3033 787.412L1443.96 787.412M-5.3033 751.029L1443.96 751.029M-5.3033 714.647L1443.96 714.647M-5.3033 678.265L1443.96 678.265M-5.30331 641.882L1443.96 641.882M-5.30331 605.5L1443.96 605.5M-5.30331 569.118L1443.96 569.118M-5.30331 532.735L1443.96 532.735M-5.30331 496.353L1443.96 496.353M-5.30332 459.971L1443.96 459.971M-5.30332 423.588L1443.96 423.588M-5.30332 387.206L1443.96 387.206M-5.30332 350.824L1443.96 350.823M-5.30332 314.441L1443.96 314.441M-5.30333 278.059L1443.96 278.059M-5.30333 241.677L1443.96 241.676M-5.30333 205.294L1443.96 205.294M-5.30333 168.912L1443.96 168.912M-5.30333 132.529L1443.96 132.529M-5.30333 96.1471L1443.96 96.147M-5.30334 59.7648L1443.96 59.7647M-5.30334 23.3825L1443.96 23.3823M-5.30334 -12.9999L1443.96 -13"
                stroke="url(#paint0_linear_284_1168)"
                stroke-opacity="0.08"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_284_1168"
                  x1="720"
                  y1="-13"
                  x2="720"
                  y2="1224"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.305881"
                    stop-color="#A259FF"
                    stop-opacity="0.96"
                  />
                  <stop
                    offset="0.871518"
                    stop-color="#A259FF"
                    stop-opacity="0.53"
                  />
                </linearGradient>
              </defs>
            </svg> */}
          <div className="mt-20">
            <h1
              style={mulish}
              className="leading-[55px] text-center font-extrabold text-[44px]"
            >
              FAQs and Answers.
            </h1>
            <div className="mt-24 px-10 xl:px-16 space-x-10 flex justify-center items-center">
              <div
                className=" h-[894.67px] w-[600px] py-8 rounded-[24px]"
                style={{
                  border: "1px solid rgba(17, 17, 17, 0.2)",
                }}
              >
                <h1
                  style={mulish}
                  className="px-7 font-extrabold leading-[40px] text-[32px]"
                >
                  Your Questions
                </h1>
                <div className="flex flex-col items-center ">
                  <div
                    className="w-[600px] mt-5"
                    style={{
                      border: "1px solid rgba(17,17, 17, 0.12)",
                    }}
                  ></div>
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
                className="h-[894.67px] w-[600px] rounded-[24px] py-8 bg-[#1A569E]"
                style={{
                  border: "1px solid rgba(17, 17, 17, 0.2)",
                }}
              >
                <h1
                  style={mulish}
                  className="font-extrabold leading-[40px] px-7 text-[32px] text-white"
                >
                  Our Answers
                </h1>
                <div
                  className="w-[600px] mt-5"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                ></div>

                <p
                  style={dmSans}
                  className="px-7 mt-8 leading-[32px] text-2xl text-white"
                >
                  {selectedAnswer}
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

export default Answer;
