"use client";
import Drawer from "@/app/components/drawer";
import Image from "next/image";
import { useState } from "react";

const DashboardFeedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="m-3 bg-gray-200 rounded-lg shadow-sm  w-[96%] flex gap-3">
      <div className="basis-1/5 h-screen  px-5 py-10 space-y-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-[#2D3B79] text-10 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>

            <p>All</p>
          </div>

          <div className="rounded-full bg-[#2D3B79] h-10 w-10 text-8 flex items-center justify-center text-[#45B9FB]">
            3
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-600 text-10 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>

            <p>Unread</p>
          </div>

          <div className="rounded-full bg-gray-400 h-10 w-10 text-8 flex items-center justify-center text-gray-200">
            3
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-[#118D57] text-10 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>

            <p>Replied</p>
          </div>

          <div className="rounded-full h-10 w-10 text-8 flex items-center justify-center bg-[#E4F5ED] text-[#118D57]">
            3
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-[#B71D18] text-10 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>

            <p>Dismissed</p>
          </div>

          <div className="rounded-full h-10 w-10 text-8 flex items-center justify-center bg-[#FFE4DE] text-[#B71D18]">
            3
          </div>
        </div>
      </div>
      <div className="basis-2/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5">

      </div>
      <div className="basis-3/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5 mr-2">

</div>
    </div>
  );
};

export default DashboardFeedback;
