import { useState, useRef } from "react";
import CustomLink from "../../custom/CustomLink";

type NavDropdownProps = {
  title: string;
  items: { text: string; href: string }[];
};

const NavDropdown: React.FC<NavDropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // 200ms delay for smooth hover transition
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Parent Button */}
      <button className="transition-colors hover:text-blue-500 duration-300 block py-2 cursor-pointer">
        {title}
      </button>

      {/* Dropdown Menu */}
      <div
        className={`
          absolute left-0 top-full mt-2 w-60 p-4
          bg-black 
          transition-all duration-200 ease-out
          z-50 grid grid-cols-2 gap-3 shadow-xl
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 translate-y-1 pointer-events-none"
          }
        `}
      >
        {items.map((item, index) => (
          <CustomLink
            key={index}
            path={item.href}
            className="hover:text-blue-400 transition-colors duration-200 p-2 rounded  block  text-sm"
            onClick={() => setIsOpen(false)} // click on dropdown item closes it
          >
            {item.text}
          </CustomLink>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
