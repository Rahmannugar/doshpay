import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partner from "./components/Partner";

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
      <Partner mulish={mulish} />
    </div>
  );
};

export default App;
