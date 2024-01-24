'use client'
import Drawer from "@/app/components/drawer";
import Image from "next/image";
import { useState } from "react";

const DashboardSurveys = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" w-[60%] pl-10 space-y-2 h-fit  my-4 rounded-lg mx-auto flex items-center justify-between bg-white" >
       <div className="space-y-2">
       <h1 className="text-2xl font-bold">Feature Coming Soon</h1>
       <p>Send targeted surveys and analyze real-time employee sentiment.Gain valuable insights into company culture, career development, and more.</p>
       </div>
      <img src="/icons/we_building.png" className="object contain h-[406px]"/>
     
      {/* <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="px-4 border-gray-100 border-2 border-solid my-8 mx-10 w-[75%] h-fit text-14 text-black rounded-lg">
          Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.

        </div>
      </Drawer>
      <div className=" shadow-lg rounded-lg h-fit w-full bg-white flex items-center  justify-evenly p-3">
        <div>
          <h2 className=" text-gray-400 text-12">Tracker ID</h2>
          <p className="text-14 text-black font-semibold">A5067484</p>
        </div>
        <hr className="h-16 w-[2px] bg-gray-200" />
        <div className="">
          <h2 className=" text-gray-400 text-12">Category</h2>
          <p className="text-14 text-black font-semibold">Company Culture</p>
        </div>
        <hr className="h-16 w-[2px] bg-gray-200" />
        <div className="">
          <h2 className=" text-gray-400 text-12">Date</h2>
          <p className="text-14 text-black font-semibold">{new Date().toDateString()}</p>
        </div>
        <hr className="h-16 w-[2px] bg-gray-200" />
        <button className="flex items-center gap-1 rounded-lg py-2 px-4 bg-gray-200" onClick={() => { setIsOpen(true) }}>
          <h2 className=" text-black text-12">View</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </button>
        <button className="flex items-center gap-1 rounded-lg py-2 px-4 bg-[#E4F5ED] text-[#118D57]">
          <h2 className="text-12">Edit</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>


        </button>
        <button className="flex items-center gap-1 rounded-lg py-2 px-4 bg-[#FFE4DE] text-[#B71D18]">
          <h2 className="  text-12">Delete</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>



        </button>


      </div>
        <div className=" shadow-lg rounded-lg h-fit w-full bg-white flex items-center  justify-evenly p-3">
        <div>
          <h2 className=" text-gray-400 text-12">Tracker ID</h2>
          <p className="text-14 text-black font-semibold">A5067484</p>
        </div>
        <hr className="h-16 w-[2px] bg-gray-200" />
        <div className="">
          <h2 className=" text-gray-400 text-12">Category</h2>
          <p className="text-14 text-black font-semibold">Company Culture</p>
        </div>
        <hr className="h-16 w-[2px] bg-gray-200" />
        <div className="">
          <h2 className=" text-gray-400 text-12">Date</h2>
          <p className="text-14 text-black font-semibold">{new Date().toDateString()}</p>
        </div>
        <hr className="h-16 w-[2px] bg-gray-200" />
        <button className="flex items-center gap-1 rounded-lg py-2 px-4 bg-gray-200" onClick={() => { setIsOpen(true) }}>
          <h2 className=" text-black text-12">View</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </button>
        <button className="flex items-center gap-1 rounded-lg py-2 px-4 bg-[#E4F5ED] text-[#118D57]">
          <h2 className="text-12">Edit</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>


        </button>
        <button className="flex items-center gap-1 rounded-lg py-2 px-4 bg-[#FFE4DE] text-[#B71D18]">
          <h2 className="  text-12">Delete</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

        </button>


      </div> */}



    </div>
  );
}

export default DashboardSurveys;