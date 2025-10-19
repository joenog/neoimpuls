import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClassName = `
    w-full fixed top-0 z-50 flex justify-center items-center h-16 px-4
    transition-all duration-300 ease-in-out
    ${isScrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'}
  `;

  return (
    <header className={headerClassName}>
      <div className="w-full max-w-7xl flex items-center justify-between">
        <div className="w-16 cursor-pointer">
          <Link to="/">
            <img src="./neoimpuls.png" alt="logo-neo-impuls" />
          </Link>
        </div>
        <nav>
          <ul className="flex gap-6 font-semibold">
            <li><Link to="/designweb">Design</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
