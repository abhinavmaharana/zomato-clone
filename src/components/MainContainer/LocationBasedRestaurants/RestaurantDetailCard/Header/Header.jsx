/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { LOGO } from '../../../../../utils/constants';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const cartItems = useSelector(store => store.cart.items);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(error => {
        navigate('/error');
      });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <div className="bg-transparent -mt-52">
      <div className="container mx-auto">
        <div className="flex space-x-20 justify-between items-center text-black">
          <div>
            <div className="flex items-center ">
              <Link to="/">
                <img
                  className="w-44 cursor-pointer"
                  src={LOGO}
                  alt="Download the app"
                />
              </Link>
            </div>
          </div>
          <div className="">
            <div className="relative w-full max-w-7xl -ml-12 ">
              <div className="relative">
                <div className="absolute top-0 left-0 mt-[17px] ml-3">
                  <i className="fa fa-search text-gray-400"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search for restaurants, cuisines, or dishes"
                  className="w-[700px] py-4 pl-10 pr-4 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-primary focus:border-opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center">
            <p>{user.email}</p>
            <img
              className="w-12 h-12 md:hidden"
              alt="User Icon"
              src={user.photoURL}
            />
            <div className="">
              <button
                onClick={toggleDropdown}
                className="relative z-10 block rounded-md bg-white p-2 focus:outline-none"
              >
                <svg
                  className="h-5 w-5 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <>
                  <div
                    onClick={closeDropdown}
                    className="fixed inset-0 h-full w-full z-10"
                  ></div>

                  <div className="absolute right-40 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100"
                    >
                      profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100"
                    >
                      Notifications
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100"
                    >
                      Bookmarks
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100"
                    >
                      Reviews
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100"
                    >
                      Network
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100"
                    >
                      Find friends
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100"
                      onClick={handleSignOut}
                    >
                      Logout
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
