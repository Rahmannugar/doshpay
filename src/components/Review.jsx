import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import Review1 from "../assets/review-1.jpg";
import Review2 from "../assets/review-2.jpg";
import Review3 from "../assets/review-3.jpg";

const Review = ({ mulish, dmSans }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 460;
  const numItems = 5;

  const handleSlideLeft = () => {
    const newIndex = (currentIndex - 1 + numItems) % numItems;
    setCurrentIndex(newIndex);
  };

  const handleSlideRight = () => {
    const newIndex = (currentIndex + 1) % numItems;
    setCurrentIndex(newIndex);
  };

  const offset = -currentIndex * itemWidth;

  const handleMove = (e) => {
    const containerWidth = e.currentTarget.offsetWidth;
    let clientX;
    if (e.type.startsWith("touch")) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const mouseX = clientX - e.currentTarget.offsetLeft;
    const percentage = (mouseX / containerWidth) * 100;
    const newIndex = Math.floor((percentage / 100) * numItems);
    setCurrentIndex(newIndex);
  };
  const middleDivStyle = {
    position: "absolute",
    width: "480px",
    height: "480px",
    background:
      "linear-gradient(128.14deg, rgba(146, 227, 169, 0.65) 22.59%, rgba(245, 174, 35, 0.36) 47.12%, #5D87E1 72.17%)",
    filter: "blur(290px)",
    left: "calc(50% - 480px/2)",
    top: "calc(50% - 480px/2 + 19px)",
  };

  const leftDivStyle = {
    position: "absolute",
    width: "72px",
    height: "72px",
    left: "94px",
    top: "420px",
    background: "#5EC4F0",
    filter: "blur(70px)",
  };

  const mobileMiddleDivStyle = {
    position: "absolute",
    width: "280px",
    height: "280px",
    background:
      "linear-gradient(128.14deg, rgba(146, 227, 169, 0.65) 22.59%, rgba(245, 174, 35, 0.36) 47.12%, #5D87E1 72.17%)",
    filter: "blur(290px)",
    left: "calc(50% - 280px/2)",
    top: "calc(50% - 280px/2 - 7.5px)",
  };

  const mobileLeftDivStyle = {
    position: "absolute",
    width: "72px",
    height: "72px",
    left: "20px",
    top: "260px",
    background: "#5EC4F0",
    filter: "blur(70px)",
  };

  return (
    <div>
      {isNonMobileScreens ? (
        <div
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          className="mt-24 bg-[#121621] relative overflow-hidden px-10 xl:px-16 py-24"
        >
          <div style={middleDivStyle}></div>
          <div style={leftDivStyle}></div>
          <div className="flex items-center space-x-3">
            <h1 style={dmSans} className="text-white text-opacity-60">
              REVIEWS
            </h1>
            <h1> ⭐⭐⭐</h1>
          </div>
          <h1
            style={mulish}
            className="text-white font-extrabold mt-6 text-[32px] xl:text-[44px] leading-[55px]"
          >
            What Our Esteemed Customers Are Saying
          </h1>

          <div
            className="flex transition-transform duration-500 ease-in-out space-x-5 xl:space-x-7 mt-20"
            style={{
              transform: `translateX(${offset}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <div
              className="h-[340px] w-[460px] relative flex-shrink-0 px-5 py-10 space-y-4 rounded-[20px] z-10"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 32px 50px rgba(0, 0, 0, 0.12)",
                border: "2px solid #FFFFFF",
                mixBlendMode: "screen",
              }}
            >
              <p
                style={dmSans}
                className="text-white font-medium text-[22px] max-w-[388px] leading-[30px]"
              >
                The flexibility of payment options is fantastic. Whether I need
                to transfer to a bank or pay a friend with a username, Doshpay
                has me covered."
              </p>
              <h1>⭐⭐⭐⭐⭐</h1>
              <img
                src={Review1}
                alt="Review1"
                className="rounded-full w-[76px] h-[76px] border-[1px] absolute right-10 object-cover"
              />
            </div>
            <div
              className="h-[340px] w-[460px] relative flex-shrink-0 px-5 py-10 rounded-[20px] z-10"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 32px 50px rgba(0, 0, 0, 0.12)",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="space-y-11 mb-5">
                <p
                  style={dmSans}
                  className="text-white font-medium text-[22px] max-w-[388px] leading-[30px]"
                >
                  "I love how Doshpay keeps all my bills in one place. No more
                  juggling multiple apps. It's a game-changer!"
                </p>
                <h1>⭐⭐⭐⭐⭐</h1>
              </div>
              <img
                src={Review2}
                alt="Review2"
                className="rounded-full w-[76px] h-[76px] border-[1px] absolute right-10 object-contain"
              />
            </div>
            <div
              className="h-[340px] w-[460px] relative flex-shrink-0 px-5 py-10 space-y-4 rounded-[20px] z-10"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 32px 50px rgba(0, 0, 0, 0.12)",
                border: "2px solid #FFFFFF",
              }}
            >
              <p
                style={dmSans}
                className="text-white font-medium text-[22px] max-w-[388px] leading-[30px]"
              >
                "Doshpay has revolutionized the way I manage my finances. Fast
                transfers and user-friendly money requests make my life so much
                easier!"
              </p>
              <h1>⭐⭐⭐⭐⭐</h1>
              <img
                src={Review3}
                alt="Review3"
                className="rounded-full w-[76px] h-[76px] border-[1px] absolute right-10 object-cover"
              />
            </div>

            <div
              className="h-[340px] w-[460px] relative flex-shrink-0 px-5 py-10 space-y-4 rounded-[20px] z-10"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 32px 50px rgba(0, 0, 0, 0.12)",
                border: "2px solid #FFFFFF",
                mixBlendMode: "screen",
              }}
            >
              <p
                style={dmSans}
                className="text-white font-medium text-[22px] max-w-[388px] leading-[30px]"
              >
                The flexibility of payment options is fantastic. Whether I need
                to transfer to a bank or pay a friend with a username, Doshpay
                has me covered."
              </p>
              <h1>⭐⭐⭐⭐⭐</h1>
              <img
                src={Review1}
                alt="Review1"
                className="rounded-full w-[76px] h-[76px] border-[1px] absolute right-10 object-cover"
              />
            </div>
            <div
              className="h-[340px] w-[460px] relative flex-shrink-0 px-5 py-10  rounded-[20px] z-10"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 32px 50px rgba(0, 0, 0, 0.12)",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="space-y-11 mb-5">
                <p
                  style={dmSans}
                  className="text-white font-medium text-[22px] max-w-[388px] leading-[30px]"
                >
                  "I love how Doshpay keeps all my bills in one place. No more
                  juggling multiple apps. It's a game-changer!"
                </p>
                <h1>⭐⭐⭐⭐⭐</h1>
              </div>
              <img
                src={Review2}
                alt="Review2"
                className="rounded-full w-[76px] h-[76px] border-[1px] absolute right-10 object-contain"
              />
            </div>
            <div
              className="h-[340px] w-[460px] relative flex-shrink-0 px-5 py-10 space-y-4 rounded-[20px] z-10"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 32px 50px rgba(0, 0, 0, 0.12)",
                border: "2px solid #FFFFFF",
              }}
            >
              <p
                style={dmSans}
                className="text-white font-medium text-[22px] max-w-[388px] leading-[30px]"
              >
                "Doshpay has revolutionized the way I manage my finances. Fast
                transfers and user-friendly money requests make my life so much
                easier!"
              </p>
              <h1>⭐⭐⭐⭐⭐</h1>
              <img
                src={Review3}
                alt="Review3"
                className="rounded-full w-[76px] h-[76px] border-[1px] absolute right-10 object-cover"
              />
            </div>
          </div>

          <div className="flex items-center justify-end px-20 space-x-10 mt-20">
            {/* left slider */}
            <div onClick={handleSlideLeft}>
              <svg
                width="84"
                height="48"
                viewBox="0 0 84 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="83"
                  height="47"
                  rx="11.5"
                  stroke="#5D32E3"
                />
                <g opacity="0.6">
                  <path
                    d="M37.134 22.8332H51.3346V25.1666H37.134L43.392 31.4246L41.7423 33.0742L32.668 23.9999L41.7423 14.9256L43.392 16.5752L37.134 22.8332Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>

            <div onClick={handleSlideRight}>
              {/* right slider */}
              <svg
                width="84"
                height="48"
                viewBox="0 0 84 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="83"
                  height="47"
                  rx="11.5"
                  fill="#5D32E3"
                  stroke="#5D32E3"
                />
                <path
                  d="M46.866 22.8332H32.6654V25.1666H46.866L40.608 31.4246L42.2577 33.0742L51.332 23.9999L42.2577 14.9256L40.608 16.5752L46.866 22.8332Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#121621] mt-24 py-14 px-5 relative overflow-hidden">
          <div style={mobileMiddleDivStyle}></div>
          <div style={mobileLeftDivStyle}></div>

          <div className="flex items-center space-x-3">
            <h1 style={dmSans} className="text-white text-opacity-60">
              REVIEWS
            </h1>
            <h1> ⭐⭐⭐</h1>
          </div>
          <h1
            style={mulish}
            className="text-white font-extrabold mt-5 text-[28px] leading-[35px]"
          >
            What Our Esteemed Customers Are Saying
          </h1>

          <div
            className="flex transition-transform duration-500 ease-in-out space-x-5 xl:space-x-7 mt-20"
            style={{
              transform: `translateX(${offset}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <div
              className="h-[246px] w-[320px] relative flex-shrink-0 px-5 py-5 space-y-4 rounded-[20px] z-10"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 32px 50px rgba(0, 0, 0, 0.12)",
                border: "2px solid #FFFFFF",
                mixBlendMode: "screen",
              }}
            >
              <p
                style={dmSans}
                className="text-white font-medium max-w-[388px] leading-[22px]"
              >
                The flexibility of payment options is fantastic. Whether I need
                to transfer to a bank or pay a friend with a username, Doshpay
                has me covered."
              </p>
              <h1>⭐⭐⭐⭐⭐</h1>
              <img
                src={Review1}
                alt="Review1"
                className="rounded-full w-[52px] h-[52px] border-[1px] absolute right-5 object-cover"
              />
            </div>
            <div
              className="h-[246px] w-[320px] relative flex-shrink-0 px-5 py-5 rounded-[20px] z-10"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 32px 50px rgba(0, 0, 0, 0.12)",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="space-y-10 mb-4">
                <p
                  style={dmSans}
                  className="text-white font-medium max-w-[388px] leading-[22px]"
                >
                  "I love how Doshpay keeps all my bills in one place. No more
                  juggling multiple apps. It's a game-changer!"
                </p>
                <h1>⭐⭐⭐⭐⭐</h1>
              </div>
              <img
                src={Review2}
                alt="Review2"
                className="rounded-full w-[52px] h-[52px] border-[1px] absolute right-5 object-contain"
              />
            </div>
            <div
              className="h-[246px] w-[320px] relative flex-shrink-0 px-5 py-5 space-y-4 rounded-[20px] z-10"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 32px 50px rgba(0, 0, 0, 0.12)",
                border: "2px solid #FFFFFF",
              }}
            >
              <p
                style={dmSans}
                className="text-white font-medium max-w-[388px] leading-[22px]"
              >
                "Doshpay has revolutionized the way I manage my finances. Fast
                transfers and user-friendly money requests make my life so much
                easier!"
              </p>
              <h1>⭐⭐⭐⭐⭐</h1>
              <img
                src={Review3}
                alt="Review3"
                className="rounded-full w-[52px] h-[52px] border-[1px] absolute right-5 object-cover"
              />
            </div>

            <div
              className="h-[246px] w-[320px] relative flex-shrink-0 px-5 py-5 space-y-4 rounded-[20px] z-10"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 32px 50px rgba(0, 0, 0, 0.12)",
                border: "2px solid #FFFFFF",
                mixBlendMode: "screen",
              }}
            >
              <p
                style={dmSans}
                className="text-white font-medium max-w-[388px] leading-[22px]"
              >
                The flexibility of payment options is fantastic. Whether I need
                to transfer to a bank or pay a friend with a username, Doshpay
                has me covered."
              </p>
              <h1>⭐⭐⭐⭐⭐</h1>
              <img
                src={Review1}
                alt="Review1"
                className="rounded-full w-[52px] h-[52px] border-[1px] absolute right-5 object-cover"
              />
            </div>
            <div
              className="h-[246px] w-[320px] relative flex-shrink-0 px-5 py-5 rounded-[20px] z-10"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 32px 50px rgba(0, 0, 0, 0.12)",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="space-y-10 mb-4">
                <p
                  style={dmSans}
                  className="text-white font-medium max-w-[388px] leading-[22px]"
                >
                  "I love how Doshpay keeps all my bills in one place. No more
                  juggling multiple apps. It's a game-changer!"
                </p>
                <h1>⭐⭐⭐⭐⭐</h1>
              </div>
              <img
                src={Review2}
                alt="Review2"
                className="rounded-full w-[52px] h-[52px] border-[1px] absolute right-5 object-contain"
              />
            </div>
            <div
              className="h-[246px] w-[320px] relative flex-shrink-0 px-5 py-5 space-y-4 rounded-[20px] z-10"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 32px 50px rgba(0, 0, 0, 0.12)",
                border: "2px solid #FFFFFF",
              }}
            >
              <p
                style={dmSans}
                className="text-white font-medium max-w-[388px] leading-[22px]"
              >
                "Doshpay has revolutionized the way I manage my finances. Fast
                transfers and user-friendly money requests make my life so much
                easier!"
              </p>
              <h1>⭐⭐⭐⭐⭐</h1>
              <img
                src={Review3}
                alt="Review3"
                className="rounded-full w-[52px] h-[52px] border-[1px] absolute right-5 object-cover"
              />
            </div>
          </div>

          <div className="flex items-center justify-end px-2 space-x-7 mt-16">
            {/* left slider */}
            <div onClick={handleSlideLeft}>
              <svg
                width="64"
                height="36"
                viewBox="0 0 64 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="63"
                  height="35"
                  rx="7.5"
                  stroke="#5D32E3"
                />
                <g opacity="0.6">
                  <path
                    d="M27.8291 16.9998H40.0011V18.9998H27.8291L33.1931 24.3638L31.7791 25.7778L24.0011 17.9998L31.7791 10.2218L33.1931 11.6358L27.8291 16.9998Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>

            {/* right slider */}
            <div onClick={handleSlideRight}>
              <svg
                width="64"
                height="36"
                viewBox="0 0 64 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="63"
                  height="35"
                  rx="7.5"
                  fill="#5D32E3"
                  stroke="#5D32E3"
                />
                <path
                  d="M36.1709 16.9998H23.9989V18.9998H36.1709L30.8069 24.3638L32.2209 25.7778L39.9989 17.9998L32.2209 10.2218L30.8069 11.6358L36.1709 16.9998Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
