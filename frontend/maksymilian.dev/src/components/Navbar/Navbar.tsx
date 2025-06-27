import { useState, type JSX } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { RiInfoCardLine } from 'react-icons/ri';
import { PiToolboxBold } from 'react-icons/pi';
import { GrAchievement, GrContact } from 'react-icons/gr';

interface NavItem {
  id: string;
  label: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: <IoHomeOutline className="text-xl" /> },
  { id: 'about', label: 'About', icon: <RiInfoCardLine className="text-xl" /> },
  {
    id: 'skills',
    label: 'Skills',
    icon: <PiToolboxBold className="text-xl" />,
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <GrAchievement className="text-xl" />,
  },
];

const Navbar = () => {
  const [active, setActive] = useState<string>('home');

  return (
    <div className="bg-white h-16 md:h-12 2xl:h-16 flex justify-center fixed bottom-0 md:top-0 md:bottom-auto left-0 z-50 w-full px-2 py-2 border-t md:border-b border-gray-300 ">
      <div className="flex w-full justify-evenly items-center">
        <h2 className="hidden md:inline text-xl font-bold text-gray-800">
          Maksymilian.dev
        </h2>
        <div className="flex flex-auto md:space-x-3 md:max-w-[50%] justify-evenly md:justify-end px-2 text-gray-700 text-base">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center md:flex-row md:gap-1 p-1 rounded transition duration-150 ease-in-out delay-15 hover:bg-gray-200 ${
                active === item.id
                  ? 'text-green-700 underline underline-offset-4'
                  : 'hover:text-green-700'
              }`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setActive('contact')}
            className="hidden md:flex items-center bg-green-500 rounded text-white md:gap-1 p-1.5 transition delay-50 duration-300 ease-in-out hover:translate-3d hover:scale-110 hover:bg-green-600 "
          >
            <GrContact className="text-xl" />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
