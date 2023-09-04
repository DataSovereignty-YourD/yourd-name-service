import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import More from '../../components/project/more';
import Profile from '../../components/project/profile';
import About from '../../components/project/about';
// import Subnames from '../../components/project/subnames';
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
    },
    {
      key: 'About',
      label: 'About',
    },
    // {
    //   key: 'Subnames',
    //   label: 'Subnames',

    // },
    // {
    //   key: 'More',
    //   label: 'More',

    // },
  ];

  return (
    
    <div className="flex flex-col w-1/2 mx-auto h-screen items-center">
      <div className="mx-auto w-full ">
        <nav className="text-black p-4 font-bold pl-0">
          <ul className="flex space-x-4 mr-28">
            {menuItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => handleMenuClick(item.key)}
                  className={`${
                    activeMenu === item.key
                      ? 'bg-black bg-clip-text text-transparent '
                      : 'text-gray-300 border-transparent'
                  } hover:text-black rounded-sm p-2`}
                >
                  <div className="flex items-center space-x-2 text-2xl ">
                    <div>{item.label}</div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="w-full h-fit mt-4 value">
        {activeMenu === 'Profile' && <Profile />}
        {activeMenu === 'About' && <About />}
        {/* {activeMenu === 'More' && <More />}  */}
        {/* {activeMenu === 'Subnames' && <Subnames />} */}
      </div>
    </div>
  );
}
