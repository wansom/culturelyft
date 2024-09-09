"use client";
import Drawer from "@/app/components/drawer";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const TrainingCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropDown,setOpenDropDown]=useState(false)
  return (

  <div className=" px-10 py-10 h-fit  my-4 rounded-lg mx-auto bg-white">
      
    <div className="flex  flex-wrap lg:flex-nowrap items-center justify-evenly gap-10 my-6">
      <div className="space-y-2 md:basis-2/3">
        <h1 className="text-2xl font-bold">Asssistant Training Center</h1>
        <p>
         You can access the training center after your profile is verified. This should be within 72 hours after submission
        </p>
        {/* <button class=" uppercase block max-w-1/2 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple w-full">
          Request feature
        </button> */}
      </div>
      <Image
                  src="/rocket.png"
                  alt="logo"
                  width={250}
                  height={250}
                />
</div>
  </div>
  );
};

export default TrainingCenter;
