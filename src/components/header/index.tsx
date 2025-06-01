import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;

      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    //essa linha é necessária?
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = `w-full fixed z-50 top-0 flex justify-center h-17 transition-colors duration-300 ${
    isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
  }`;

  return (
    <header className={headerClassName}>
      <div className="w-7xl flex items-center justify-between mx-4">
        <div className="w-16 cursor-pointer">
          <Link to={"/"}><img src={"./public/neoimpuls.png"} alt="logo-neo-impuls" /></Link>
        </div>
        <ul className="flex flex-row gap-4 cursor-pointer text-black font-bold">
          <Link to={"/designweb"}> Design </Link>
          <Link to={"/blog"}> Blog </Link>
          <Link to={"/contact"}> Contact </Link>
        </ul>
      </div>
    </header>
  );
}