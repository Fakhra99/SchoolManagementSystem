import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { PiPerson } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { TfiBag } from "react-icons/tfi";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";

// Reusable HoverMenu component
const HoverMenu = ({ icon, title, options }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="flex flex-col items-center mb-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      <h1
        className={`text-slate-300 hover:text-gray-400 origin-left font-medium duration-300 ${
          isHovering ? "scale-100" : "scale-0"
        }`}
      >
        {title}
      </h1>
      {isHovering && (
        <div className="absolute bg-white p-4 mt-2 ml-36 rounded border border-gray-200">
          <ul>
            {options.map((option, index) => (
              <li key={index} className="bg-white w-44 hover:bg-greenish">{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div
        className={`bg-dark-greysh h-screen p-5 pt-8 relative duration-300 ${
          open ? "w-25" : "w-20"
        }`}
      >
        <BsArrowLeft
          className={`text-dark-purple bg-white text-3xl rounded-full 
          absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        {/* Usage of HoverMenu component */}
        <HoverMenu
          icon={
            <PiPerson className="text-4xl text-slate-300 hover:text-gray-400 cursor-pointer block float-left ml-2" />
          }
          title="Student"
          options={["Register Student", "Students List", "Past Students"]}
        />
        <HoverMenu
          icon={
            <IoBookOutline className="text-4xl text-slate-300 hover:text-gray-400 cursor-pointer block float-left ml-2" />
          }
          title="Academic"
          options={["Register Student", "Students List", "Past Students"]}
        />
        <HoverMenu
          icon={
            <TfiBag className="text-4xl text-slate-300 hover:text-gray-400 cursor-pointer block float-left ml-2" />
          }
          title="HR Admin"
          options={["Option 1", "Option 2", "Option 3"]}
        />
        <HoverMenu
          icon={
            <MdOutlineMoneyOffCsred className="text-4xl text-slate-300 hover:text-gray-400 cursor-pointer block float-left ml-2" />
          }
          title="Finance"
          options={["Option 1", "Option 2", "Option 3"]}
        />
        <HoverMenu
          icon={
            <HiOutlineDocumentChartBar className="text-4xl text-slate-300 hover:text-gray-400 cursor-pointer block float-left ml-2" />
          }
          title="Reports"
          options={["Option 1", "Option 2", "Option 3"]}
        />
      </div>
    </div>
  );
};

export default Sidebar;
