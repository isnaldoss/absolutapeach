import React from 'react';

const rheader = () => {
  return (
    <header className="fixed-header flex items-center">
      <nav className="mx-auto max-w-7xl px-20 sm:px-20 lg:px-20 flex items-center justify-between ">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-yellow-500">
            Absolut Vodka Apeach
          </a>
          <div className="hidden md:block ml-10">
            <div className="flex space-x-4">
              <a href="#home" className="text-gray-900 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#products" className="text-gray-900 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">
                Products
              </a>
              <a href="#about" className="text-gray-900 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-900 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <a href="#" className="text-gray-900 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">
            Login
          </a>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button type="button" className="text-gray-900 hover:text-pink-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-900 hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="#" className="text-gray-900 hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">
            Products
          </a>
          <a href="#" className="text-gray-900 hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="#" className="text-gray-900 hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
          <a href="#" className="text-gray-900 hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default rheader;
