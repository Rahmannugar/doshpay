import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Work from "./components/Work";
import Review from "./components/Review";
import Store from "./components/Store";

const App = () => {
  const mulish = {
    fontFamily: "'Mulish', sans-serif",
  };
  const sofiaSans = {
    fontFamily: "'Sofia Sans', sans-serif",
  };
  const dmSans = {
    fontFamily: "'DM Sans', sans-serif",
  };
  return (
    <div>
      <Navbar mulish={mulish} sofiaSans={sofiaSans} />
      <Hero mulish={mulish} dmSans={dmSans} />
      <Partner mulish={mulish} dmSans={dmSans} />
      <Work mulish={mulish} dmSans={dmSans} />
      <Review mulish={mulish} dmSans={dmSans} />
      <Store mulish={mulish} dmSans={dmSans} />
    </div>
  );
};

export default App;
