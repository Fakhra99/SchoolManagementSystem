import React from 'react';
import { LuSchool2 } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <div className="h-14 bg-dark-greysh flex items-center">
        <LuSchool2 className="text-5xl text-slate-300 hover:text-gray-400 ml-6" />

        <div className="flex-grow">
          <h3 className="text-slate-300 mr-6 hover:text-gray-400 text-right">
            Welcome, Admin
          </h3>
        </div>
      </div>
    </>
  );
}

export default Header