import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import More from '../../components/project/more';
import Profile from '../../components/project/profile';
import Records from '../../components/project/records';
import Subnames from '../../components/project/subnames';
import { FaUser, FaBook, FaTags, FaEllipsisH } from 'react-icons/fa';
export default function DomainDetail() {
  const [activeMenu, setActiveMenu] = useState('Profile');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;
  const [isPlanOpen, setIsPlanOpen] = useState(false);

  const handleMenuClick = (key: string) => {
    setActiveMenu(key);
  };

  const closeDropdown = () => {
    setIsPopupOpen(false);
  };
  const openSubscribePopup = () => {
    setIsPopupOpen(true);
  };

  const menuItems = [
    {
      key: 'Profile',
      label: 'Profile',
      icon: <FaUser size={24} />,
    },
    {
      key: 'Records',
      label: 'Records',
      icon: <FaBook size={24} />,
    },
    {
      key: 'Subnames',
      label: 'Subnames',
      icon: <FaTags size={24} />,
    },
    {
      key: 'More',
      label: 'More',
      icon: <FaEllipsisH size={24} />,
    },
  ];

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="pr-60">
        <div className="text-3xl my-8 font-bold pl-2">Example.yourD</div>
        <nav className="text-black p-4 font-bold pl-0">
          <ul className="flex justify-between space-x-4 pl-0">
            {menuItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => handleMenuClick(item.key)}
                  className={`${
                    activeMenu === item.key
                      ? 'bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent '
                      : 'text-gray-300 border-transparent'
                  } hover:text-black rounded-sm p-2`}
                >
                  <div className="flex items-center space-x-2 text-2xl">
                    <div>{item.label}</div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="w-full h-fit mt-4 value">
        {activeMenu === 'More' && <More />}
        {activeMenu === 'Profile' && <Profile />}
        {activeMenu === 'Records' && <Records />}
        {activeMenu === 'Subnames' && <Subnames />}
      </div>
    </div>
  );
}
