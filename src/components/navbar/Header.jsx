import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close mobile menu
  };

  const linkClass =
    "text-emerald-400 hover:text-emerald-300 font-medium";

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-emerald-400">
          Khalid Bin Hasan
        </h1>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollTo("hero")} className={linkClass}>Home</button>
          <button onClick={() => scrollTo("skills")} className={linkClass}>Skills</button>
          <button onClick={() => scrollTo("projects")} className={linkClass}>Projects</button>
          <button onClick={() => scrollTo("contact")} className={linkClass}>Contact</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="flex flex-col items-center gap-6 py-6">
            <button onClick={() => scrollTo("hero")} className={linkClass}>Home</button>
            <button onClick={() => scrollTo("skills")} className={linkClass}>Skills</button>
            <button onClick={() => scrollTo("projects")} className={linkClass}>Projects</button>
            <button onClick={() => scrollTo("contact")} className={linkClass}>Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
