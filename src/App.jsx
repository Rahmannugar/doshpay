import "./App.css";
import Navbar from "./components/Navbar";

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
      <Hero />
    </div>
  );
};

export default App;
