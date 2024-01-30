'use client'
import { teamExperiences } from "@/app/services/data";
import Image from "next/image";
import { useState } from "react";

const Programs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropDown,setOpenDropDown]=useState(false)
  return (

  <div className=" w-[95%] px-10 py-10 h-fit  my-4 rounded-lg mx-auto bg-white">
      <div className=" flex flex-wrap items-center justify-start gap-4">
        {teamExperiences.map((e)=>(
          <div class="relative inline-block text-left">
    <button type="button" class=" whitespace-nowrap inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
    {e}
    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
</div>
        ))}

<button type="button" class="flex items-center justify-center text-white bg-[#01382E] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" onClick={()=>{setIsOpen(true)}}>
                        <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Create New
                    </button>





     
    </div>
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-evenly gap-10 my-4">
      <div className="space-y-2 md:basis-2/3">
        <h1 className="text-2xl font-bold">Redefine Employee Expereince</h1>
        <p>
        For HR teams and organizational leaders, offering personalized, experiential rewards at scale can feel impossible. culturelyft makes it easy to recognize your people with a meaningful, personalized experience no matter where they're located
        </p>
        <button class=" uppercase block max-w-1/2 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple w-full">
          Request feature
        </button>
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
}
 
export default Programs;