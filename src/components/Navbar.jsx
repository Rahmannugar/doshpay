import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const Navbar = ({ mulish, sofiaSans }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const navStyle = {
    background: "rgba(255, 255, 255, 0.02)",
    backdropFilter: "blur(100px)",
  };
  return (
    <nav className="fixed z-20 w-full h-20 md:h-28 bg-[#121621]">
      <div className="flex justify-between items-center h-full w-full px-4 lg:px-10 xl:px-16">
        <a href="/" className="flex justify-center items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="40"
            viewBox="0 0 36 40"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3567 0H0V40H14.4828C16.776 40 19.0636 39.7735 21.3123 39.3237L21.3793 39.3103L23.1583 38.7174C24.7239 38.1955 26.213 37.4672 27.5862 36.5517L28.8437 35.7134C29.3833 35.3536 29.8862 34.9414 30.3448 34.4828C30.8035 34.0241 31.2157 33.5213 31.5755 32.9816L32.3472 31.824C33.3069 30.3846 34.0703 28.8236 34.6174 27.1823C34.9867 26.0745 35.2555 24.9357 35.4206 23.7798L35.6651 22.0686C35.7962 21.1504 35.8621 20.2242 35.8621 19.2968V19.1382C35.8621 17.4223 35.6229 15.7147 35.1515 14.0648C34.7076 12.5111 34.0617 11.0223 33.2303 9.63674L32.4138 8.27586L32.1673 7.96773C30.5059 5.89094 28.4875 4.12697 26.2069 2.75862L25.9916 2.65097C24.3011 1.80574 22.5232 1.14805 20.6897 0.689655C17.9357 0.23067 15.1486 0 12.3567 0ZM28.2092 21.2037C28.3641 20.9384 28.4454 20.6366 28.4446 20.3294C28.4444 20.0238 28.363 19.7238 28.2086 19.46C28.0543 19.1963 27.8327 18.9783 27.5664 18.8284L9.46295 8.49538C9.15765 8.32458 8.80762 8.2507 8.45933 8.28354C8.11105 8.31638 7.781 8.45439 7.513 8.67924C7.24501 8.90409 7.05175 9.20514 6.95889 9.54242C6.86604 9.8797 6.87797 10.2372 6.99312 10.5676L9.95002 19.1883C9.97924 19.2733 10.0343 19.3471 10.1076 19.3992C10.1808 19.4514 10.2685 19.4794 10.3584 19.4792H18.0718C18.2943 19.4764 18.5097 19.5579 18.6747 19.7071C18.8398 19.8564 18.9423 20.0625 18.9619 20.2842C18.9697 20.4021 18.9532 20.5204 18.9134 20.6316C18.8736 20.7429 18.8113 20.8448 18.7305 20.931C18.6497 21.0172 18.5519 21.0859 18.4434 21.1327C18.335 21.1796 18.218 21.2036 18.0998 21.2034H10.3509C10.2608 21.2033 10.173 21.2314 10.0998 21.2838C10.0265 21.3361 9.97152 21.4101 9.94248 21.4954L6.99528 30.1107C6.9033 30.3705 6.87493 30.6485 6.91257 30.9215C6.9502 31.1946 7.05273 31.4546 7.21157 31.6798C7.37041 31.905 7.58092 32.0889 7.82546 32.216C8.07 32.3431 8.34145 32.4097 8.61705 32.4102C8.91589 32.4093 9.20945 32.3314 9.46942 32.184L27.5632 21.838C27.8312 21.6879 28.0542 21.4689 28.2092 21.2037Z"
              fill="white"
            />
          </svg>
          <h1 style={sofiaSans} className="text-white text-xl lg:text-2xl">
            Doshpay
          </h1>
        </a>

        <div className="hidden sm:flex sm:justify-center sm:items-center text-white sm:space-x-6 lg:space-x-10 xl:space-x-16  text-xl uppercase cursor-pointer"></div>

        <div onClick={handleNav} className="sm:hidden text-white">
          <MenuIcon />
        </div>
      </div>

      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-white p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="uppercase cursor-pointer  flex flex-col items-center justify-center py-20 space-y-10">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#services">
            <li>Services</li>
          </a>
          <a href="#">
            <button className="bg-primary_color text-white py-2 px-5 rounded-md duration-300 hover:bg-gray-600">
              Login
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
