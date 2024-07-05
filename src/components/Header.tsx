import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onNavClick: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const location = useLocation();
  const [selectedHeaderOption, setSelectedHeaderOption] = React.useState("");

  React.useEffect(() => {
    setSelectedHeaderOption(location.pathname);
  }, [location]);

  const handleClick = (path: string) => {
    onNavClick(path);
  };

  return (
    <header className="md:p-6 p-1 w-full flex justify-start flex-col items-start">
      <h1 className=" text-2xl md:text-4xl font-bold text-white">Boris Ramirez</h1>
      <p className=" text-lg md:text-xl text-gray-300">Designer & Developer</p>
      <nav>
        <ul className="flex text-lg flex-col gap-2 p-4">
          <li>
            <Link
              className={`text-white font-bold hover:text-gray-300 ${selectedHeaderOption === "/" ? "px-0" : "px-4"}`}
              to="/" onClick={() => handleClick('/')}>Home</Link>
          </li>
          <li>
            <Link
              className={`text-white font-bold hover:text-gray-300 ${selectedHeaderOption === "/projects" ? "px-0" : "px-4"}`}
              to="/projects" onClick={() => handleClick('/projects')}>Projects</Link>
          </li>
          <li>
            <Link
              className={`text-white font-bold hover:text-gray-300 ${selectedHeaderOption === "/info" ? "px-0" : "px-4"}`}
              to="/info" onClick={() => handleClick('/info')}>Info</Link>
          </li>
          <li>
            <Link
              className={`text-white font-bold hover:text-gray-300 ${selectedHeaderOption === "/contact" ? "px-0" : "px-4"}`}
              to="/contact" onClick={() => handleClick('/contact')}>Contact</Link>
          </li>
          <li>
            <Link
              className={`text-white font-bold hover:text-gray-300 ${selectedHeaderOption === "/faq" ? "px-0" : "px-4"}`}
              to="/faq" onClick={() => handleClick('/faq')}>FAQ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
