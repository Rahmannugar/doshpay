import { useMediaQuery } from "@mui/material";

const Review = ({ mulish, dmSans }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  return (
    <div>
      {isNonMobileScreens ? (
        <div className="mt-24 bg-[#121621] h-screen px-10 xl:px-16 py-24">
          <div></div>
          <div></div>
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
        </div>
      ) : (
        <div>
          /* Ellipse 436 */ position: absolute; width: 480px; height: 480px;
          left: calc(50% - 480px/2); top: calc(50% - 480px/2 + 19px);
          background: linear-gradient(128.14deg, rgba(146, 227, 169, 0.65)
          22.59%, rgba(245, 174, 35, 0.36) 47.12%, #5D87E1 72.17%);
          mix-blend-mode: normal; filter: blur(290px); /* Ellipse 438 */
          position: absolute; width: 72px; height: 72px; left: 94px; top: 420px;
          background: #5EC4F0; filter: blur(70px);
        </div>
      )}
    </div>
  );
};

export default Review;
