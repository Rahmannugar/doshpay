import { useMediaQuery } from "@mui/material";

const Review = ({ mulish, dmSans }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
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
  return (
    <div>
      {isNonMobileScreens ? (
        <div className="mt-24 bg-[#121621] relative px-10 xl:px-16 py-24">
          <div className="" style={middleDivStyle}></div>
          <div style={leftDivStyle}></div>
          <div className="flex items-center space-x-3">
            <h1 style={dmSans} className="text-white text-opacity-60">
              REVIEWS
            </h1>
            <h1> ⭐⭐⭐</h1>
          </div>
          <h1
            style={mulish}
            className="text-white font-extrabold mt-6 xl:text-[44px] leading-[55px]"
          >
            What Our Esteemed Customers Are Saying
          </h1>

          <div className="flex items-center lg:space-x-4 xl:space-x-7 mt-20">
            <div
              className="h-[340px] w-[460px] px-5 py-10 space-y-4 rounded-[20px] z-10"
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
            </div>
            <div
              className="h-[340px] w-[460px] px-5 py-10 space-y-10 rounded-[20px] z-10"
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
                "I love how Doshpay keeps all my bills in one place. No more
                juggling multiple apps. It's a game-changer!"
              </p>
              <h1>⭐⭐⭐⭐⭐</h1>
            </div>
            <div
              className="h-[340px] w-[460px] px-5 py-10 space-y-4 rounded-[20px] z-10"
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
            </div>
          </div>
        </div>
      ) : (
        <div>
          /* Frame 48095765 */ box-sizing: border-box; position: absolute;
          width: 460px; height: 340px; left: 1084px; top: 308px; background:
          rgba(255, 255, 255, 0.08); mix-blend-mode: screen; border: 2px solid
          #FFFFFF; box-shadow: 0px 32px 50px rgba(0, 0, 0, 0.12); ; /* Note:
          backdrop-filter has minimal browser support */ border-radius: 20px; /*
          "Doshpay has revolutionized the way I manage my finances. Fast
          transfers and user-friendly money requests make my life so much
          easier!" */ position: absolute; width: 388px; height: 120px; left:
          calc(50% - 388px/2); top: 36px; font-family: 'DM Sans'; font-style:
          normal; font-weight: 500; font-size: 22px; line-height: 30px; /* or
          136% */ color: #FFFFFF; /* ⭐⭐⭐⭐⭐ */ position: absolute; width:
          110px; height: 22px; left: 36px; top: 176px; font-family: 'DM Sans';
          font-style: normal; font-weight: 500; font-size: 22px; line-height:
          29px; color: #000000; /* Ellipse 438 */ box-sizing: border-box;
          position: absolute; width: 76px; height: 76px; left: 348px; top:
          228px; background: url(.png); border: "1px solid #FFFFFF"
        </div>
      )}
    </div>
  );
};

export default Review;
