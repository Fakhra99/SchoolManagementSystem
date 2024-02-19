import React from 'react';
import { useState } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { TfiDashboard } from "react-icons/tfi";
import { PiPerson } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { TfiBag } from "react-icons/tfi";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";

const Sidebar = () => {
  const [open, setOpen] = useState(true)
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
        <div className="flex flex-col items-cente mb-8">
          <TfiDashboard className=" text-4xl text-slate-300 hover:text-gray-400 cursor-pointer block float-left  ml-2" />
          <h1
            className={`text-slate-300  hover:text-gray-400 origin-left font-medium duration-300 ${
              !open && "scale-0"
            }`}
          >
            Admin
          </h1>
        </div>

        <div className="flex flex-col items-cente mb-8">
          <PiPerson className=" text-4xl text-slate-300 hover:text-gray-400 cursor-pointer block float-left  ml-2" />
          <h1
            className={`text-slate-300 hover:text-gray-400 origin-left font-medium duration-300 ${
              !open && "scale-0"
            }`}
          >
            Student
          </h1>
        </div>

        <div className="flex flex-col items-cente mb-8">
          <IoBookOutline className=" text-4xl text-slate-300 hover:text-gray-400 cursor-pointer block float-left  ml-2" />
          <h1
            className={`text-slate-300 hover:text-gray-400 origin-left font-medium duration-300 ${
              !open && "scale-0"
            }`}
          >
            Academic
          </h1>
        </div>

        <div className="flex flex-col items-cente mb-8">
          <TfiBag className=" text-4xl text-slate-300 hover:text-gray-400 cursor-pointer block float-left  ml-2" />
          <h1
            className={`text-slate-300 hover:text-gray-400 origin-left font-medium duration-300 ${
              !open && "scale-0"
            }`}
          >
            HR Admin
          </h1>
        </div>

        <div className="flex flex-col items-cente mb-8">
          <MdOutlineMoneyOffCsred className=" text-4xl text-slate-300 hover:text-gray-400 cursor-pointer block float-left  ml-2" />
          <h1
            className={`text-slate-300 hover:text-gray-400 origin-left font-medium duration-300 ${
              !open && "scale-0"
            }`}
          >
            Finance
          </h1>
        </div>

        <div className="flex flex-col items-cente mb-8">
          <HiOutlineDocumentChartBar className=" text-4xl text-slate-300 hover:text-gray-400 cursor-pointer block float-left ml-2" />
          <h1
            className={`text-slate-300 hover:text-gray-400 origin-left font-medium duration-300 ${
              !open && "scale-0"
            }`}
          >
            Reports
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar