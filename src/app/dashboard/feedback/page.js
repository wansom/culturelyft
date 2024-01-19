'use client'
import Drawer from "@/app/components/drawer";
import Image from "next/image";
import { useState } from "react";

const DashboardFeedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="my-2 w-full px-10 space-y-2">
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="px-4 border-gray-100 border-2 border-solid my-8 mx-10 w-[75%] h-fit text-14 text-black rounded-lg">
          Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.

        </div>
      </Drawer>
      <div className=" shadow-lg rounded-lg h-fit w-full bg-white flex items-center p-3 gap-6">
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
          <h2 className="text-12">Reply</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>

        </button>
        <button className="flex items-center gap-1 rounded-lg py-2 px-4 bg-[#FFE4DE] text-[#B71D18]">
          <h2 className="  text-12">Dismiss</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>

        </button>


      </div>
      <div className=" shadow-lg rounded-lg h-fit w-full bg-white flex items-center p-3 gap-6">
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
          <h2 className="text-12">Reply</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>

        </button>
        <button className="flex items-center gap-1 rounded-lg py-2 px-4 bg-[#FFE4DE] text-[#B71D18]">
          <h2 className="  text-12">Dismiss</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>

        </button>


      </div>
      <div className=" shadow-lg rounded-lg h-fit w-full bg-white flex items-center p-3 gap-6">
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
          <h2 className="text-12">Reply</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>

        </button>
        <button className="flex items-center gap-1 rounded-lg py-2 px-4 bg-[#FFE4DE] text-[#B71D18]">
          <h2 className="  text-12">Dismiss</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>

        </button>


      </div>


    </div>
  );
}

export default DashboardFeedback;