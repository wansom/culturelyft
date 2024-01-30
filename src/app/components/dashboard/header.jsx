'use client'
import { useState } from "react";
import Drawer from "../drawer";
import DashboardSidebar from "./sidebar";
import { useRouter } from "next/navigation";
import { logout } from "@/app/services/auth";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const router =useRouter()
  const userLogout=()=>{
      logout().then(()=>{
          router.push('/login')
      })
  }
  
    return ( 
        <div class="tp-dash-vw w-full">
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
      <DashboardSidebar toggleIsOpen={toggleIsOpen}/>
    </Drawer>
<span className="hidden lg:block"></span>
        <span className="block lg:hidden" onClick={()=>{setIsOpen(true)}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
        </span>
        <div class="dash-notifications flex items-center gap-2">
          <div className="bg-gray-800 h-10 w-10 rounded-full text-white flex items-center justify-center" onClick={userLogout}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>


          </div>
          <div class="bell">
            <svg
              width="34"
              height="37"
              viewBox="0 0 34 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5952 7.83333V7.83333C12.5792 7.83333 9.0786 10.5666 8.10458 14.4626L6.68278 20.1498C6.15151 22.2749 4.84726 24.1256 3.02469 25.3407V25.3407C2.11859 25.9447 2.54623 27.3571 3.63523 27.3571H29.5552C30.6442 27.3571 31.0719 25.9447 30.1658 25.3407V25.3407C28.3432 24.1256 27.039 22.2749 26.5077 20.1498L25.0859 14.4626C24.1119 10.5665 20.6112 7.83333 16.5952 7.83333V7.83333ZM16.5952 7.83333V1"
                stroke="#4A4A4A"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M11.879 31.5488C12.1571 32.5867 12.7699 33.5038 13.6223 34.1579C14.4748 34.812 15.5192 35.1665 16.5937 35.1665C17.6681 35.1665 18.7126 34.812 19.565 34.1579C20.4174 33.5038 21.0302 32.5867 21.3083 31.5488"
                stroke="#FF0000"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="notify-num">0</div>
        </div>
      </div>
     );
}
 
export default DashboardHeader;