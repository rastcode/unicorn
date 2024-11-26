"use client"
import Image from "next/image";
import unicorn from "../assets/Images/unicorn.png"
import { useState } from "react";
import Content from "@/components/Content";

export default function Home() {
  const [love, setLove]=useState(true)
  const handleClick=()=>{
    setLove(!love)
  }
  return (
    <div className="max-w-md w-full h-screen bg-fuchsia-200 flex flex-col items-center justify-between ">
      <div className="w-full p-2 flex items-center justify-center bg-violet-400 rounded-b-lg shadow-xl font-bold text-white">
        آیدا
      </div>
      <div className="flex items-center justify-center w-3/4  p-4">
        {love?<Image
        className="w-5/6"
          src={unicorn}
          
          alt="unicorn"
          onClick={handleClick}
        />:<Content/>}
      
      </div>
      <button onClick={handleClick} className="flex items-center justify-center w-full cursor-pointer hover:bg-rose-600 p-3 bg-rose-500 font-bold text-white">
        دوست دارم
      </button>
    </div>
  );
}
