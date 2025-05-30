import React from "react";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black pb-20">
          Expense Tracker
        </h2>
        {children}
      </div>
      <div className="hidden md:block w-[40vw] h-screen bg-green-50 bg-cover bg-no-repeat bg-center p-8 relative overflow-hidden">
        <div className="w-48 h-48 rounded-[40px] bg-green-600 absolute -top-10 -left-5" />
        <div className="w-48 h-48 rounded-[40px] border-[20px] border-lime-500 absolute top-[30%] -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-lime-700 absolute -bottom-7 -left-5" />
        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="500,000"
            color="bg-primary"
          />
        </div>
        <img
          src="/"
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15"
          alt=""
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div className="">
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">KSH.{value}</span>
      </div>
    </div>
  );
};
