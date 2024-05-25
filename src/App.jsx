import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Work from "./components/Work";
import Review from "./components/Review";
import Store from "./components/Store";
import Transfer from "./components/Transfer";
import Answer from "./components/Answer";
import Footer from "./components/Footer";
import { ClockLoader } from "react-spinners";
import { useEffect, useState } from "react";

const App = () => {
  const [isloading, setIsLoading] = useState(true);
  const mulish = {
    fontFamily: "'Mulish', sans-serif",
  };
  const sofiaSans = {
    fontFamily: "'Sofia Sans', sans-serif",
  };
  const dmSans = {
    fontFamily: "'DM Sans', sans-serif",
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isloading ? (
        <div className="h-screen w-screen flex justify-center items-center">
          <ClockLoader color="rgba(19, 20, 70, 1)" />
        </div>
      ) : (
        <div className="overflow-hidden">
          <Navbar mulish={mulish} sofiaSans={sofiaSans} />
          <Hero mulish={mulish} dmSans={dmSans} />
          <Partner mulish={mulish} dmSans={dmSans} />
          <Work mulish={mulish} dmSans={dmSans} />
          <Review mulish={mulish} dmSans={dmSans} />
          <Store mulish={mulish} dmSans={dmSans} />
          <Transfer mulish={mulish} dmSans={dmSans} />
          <Answer mulish={mulish} dmSans={dmSans} />
          <Footer mulish={mulish} dmSans={dmSans} sofiaSans={sofiaSans} />
        </div>
      )}
    </>
  );
};

export default App;
