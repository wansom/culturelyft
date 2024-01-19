"use client";
import Drawer from "@/app/components/drawer";
import EmptyMessages from "@/app/components/empty-messages";
import EmptyState from "@/app/components/empty-state";
import Image from "next/image";
import { useState } from "react";

const DashboardFeedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab,setTab]=useState('All')
  const [allfeedback, setAllfeedback]=useState([{
    title:'ekiooo',
    message:'cdmnkdkkfkk kfkkkfkf'
  }])
  const [unreadfeedback, setUnreadfeedback]=useState([])
  const [repliedfeedback, setRepliedfeedback]=useState([])
  const [dismissedfeedback, setDismissedfeedback]=useState([])
  const [selectedMessage, setSelectedMessage]= useState(null)


  return (
    <div className="m-3 bg-gray-200 rounded-lg shadow-sm  w-[96%] flex gap-3">
      <div className="basis-1/5 h-screen ml-2 py-10 space-y-5" >
        <div className={tab==='All'?'bg-white flex justify-between items-center rounded-lg p-2':'bg-transparent flex justify-between items-center rounded-lg p-2'} onClick={()=>{setTab('All')}}>
          <div className={'flex items-center text-[#2D3B79] text-10 gap-2'}>
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
        <div className={tab==='Unread'?'flex justify-between items-center bg-white rounded-lg p-2 ':'flex justify-between items-center rounded-lg p-2 bg-transparent'} onClick={()=>{setTab('Unread')}}>
          <div className="flex items-center text-gray-600 text-10 gap-2">
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
        <div className={tab==='Replied'?'flex justify-between items-center bg-white rounded-lg p-2 ':'flex justify-between items-center rounded-lg p-2 bg-transparent'} onClick={()=>{setTab('Replied')}}>
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
        <div className={tab==='Dismissed'?'flex justify-between items-center bg-white rounded-lg p-2 ':'flex justify-between items-center rounded-lg p-2 bg-transparent'} onClick={()=>{setTab('Dismissed')}}>
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
      {tab==='All'&&(<>
        <div className="basis-2/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5">
        {allfeedback.length==0&&(
      <div className="h-full w-full flex flex-col items-center justify-center">
      <Image
                src="/icons/ic_folder_empty.svg"
                alt="logo"
                width={150}
                height={100}
              />
              <p className="text-gray-300 text-16 font-bold">This folder is empty</p>

      </div>
        )}
            {allfeedback.length>0&&(
      <div className="h-full w-full">
        <div className="w-full border-solid border-b-gray-300 border-b-2 py-2">
         <div className="flex justify-between items-center my-1 ">
         <h3 className="font-semibold text-10 text-black">#01382E</h3>
         <h3 className="text-8 text-gray-500">{new Date().toDateString()}</h3>
         </div>
           <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>
        </div>
        <div className="w-full border-solid border-b-gray-300 border-b-2 py-2">
         <div className="flex justify-between items-center my-1 ">
         <h3 className="font-semibold text-10 text-black">#01382E</h3>
         <h3 className="text-8 text-gray-500">{new Date().toDateString()}</h3>
         </div>
           <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>
        </div>
        <div className="w-full border-solid border-b-gray-300 border-b-2 py-2">
         <div className="flex justify-between items-center my-1 ">
         <h3 className="font-semibold text-10 text-black">#01382E</h3>
         <h3 className="text-8 text-gray-500">{new Date().toDateString()}</h3>
         </div>
           <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>
        </div>

      </div>
        )}

      </div>
      <div className="basis-3/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5 mr-2">
      <div className="h-full w-full flex flex-col items-center justify-center">
      <Image
                src="/icons/ic_email_disabled.svg"
                alt="logo"
                width={150}
                height={100}
              />
              <p className="text-gray-300 text-16 font-bold">No messages yet</p>

      </div>

</div>
      </>)}
      {tab==='Unread'&&(<>
        <div className="basis-2/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5">
        {unreadfeedback.length==0&&(
    <EmptyState message={'This folder is empty'}/>
        )}
            {unreadfeedback.length>0&&(
      <div className="h-full w-full">
        <div className="w-full border-solid border-b-gray-300 border-b-2 py-2">
         <div className="flex justify-between items-center my-1 ">
         <h3 className="font-semibold text-10 text-black">#01382E</h3>
         <h3 className="text-8 text-gray-500">{new Date().toDateString()}</h3>
         </div>
           <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>
        </div>
        <div className="w-full border-solid border-b-gray-300 border-b-2 py-2">
         <div className="flex justify-between items-center my-1 ">
         <h3 className="font-semibold text-10 text-black">#01382E</h3>
         <h3 className="text-8 text-gray-500">{new Date().toDateString()}</h3>
         </div>
           <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>
        </div>
        <div className="w-full border-solid border-b-gray-300 border-b-2 py-2">
         <div className="flex justify-between items-center my-1 ">
         <h3 className="font-semibold text-10 text-black">#01382E</h3>
         <h3 className="text-8 text-gray-500">{new Date().toDateString()}</h3>
         </div>
           <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>
        </div>

      </div>
        )}

      </div>
      <div className="basis-3/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5 mr-2">
    <EmptyMessages/>

</div>
      </>)}
      {tab==='Replied'&&(<>
        <div className="basis-2/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5">
        {repliedfeedback.length==0&&(
<EmptyState message={'This folder is empty'}/>
        )}
            {repliedfeedback.length>0&&(
      <div className="h-full w-full">
        <div className="w-full border-solid border-b-gray-300 border-b-2 py-2">
         <div className="flex justify-between items-center my-1 ">
         <h3 className="font-semibold text-10 text-black">#01382E</h3>
         <h3 className="text-8 text-gray-500">{new Date().toDateString()}</h3>
         </div>
           <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>
        </div>
        <div className="w-full border-solid border-b-gray-300 border-b-2 py-2">
         <div className="flex justify-between items-center my-1 ">
         <h3 className="font-semibold text-10 text-black">#01382E</h3>
         <h3 className="text-8 text-gray-500">{new Date().toDateString()}</h3>
         </div>
           <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>
        </div>
        <div className="w-full border-solid border-b-gray-300 border-b-2 py-2">
         <div className="flex justify-between items-center my-1 ">
         <h3 className="font-semibold text-10 text-black">#01382E</h3>
         <h3 className="text-8 text-gray-500">{new Date().toDateString()}</h3>
         </div>
           <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>
        </div>

      </div>
        )}

      </div>
      <div className="basis-3/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5 mr-2">
    <EmptyMessages/>

</div>
      </>)}
      {tab==='Dismissed'&&(<>
        <div className="basis-2/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5">
        {dismissedfeedback.length==0&&(
     <EmptyState message={'This folder is empty'}/>
        )}
            {dismissedfeedback.length>0&&(
      <div className="h-full w-full">
        <div className="w-full border-solid border-b-gray-300 border-b-2 py-2">
         <div className="flex justify-between items-center my-1 ">
         <h3 className="font-semibold text-10 text-black">#01382E</h3>
         <h3 className="text-8 text-gray-500">{new Date().toDateString()}</h3>
         </div>
           <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>
        </div>
        <div className="w-full border-solid border-b-gray-300 border-b-2 py-2">
         <div className="flex justify-between items-center my-1 ">
         <h3 className="font-semibold text-10 text-black">#01382E</h3>
         <h3 className="text-8 text-gray-500">{new Date().toDateString()}</h3>
         </div>
           <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>
        </div>
        <div className="w-full border-solid border-b-gray-300 border-b-2 py-2">
         <div className="flex justify-between items-center my-1 ">
         <h3 className="font-semibold text-10 text-black">#01382E</h3>
         <h3 className="text-8 text-gray-500">{new Date().toDateString()}</h3>
         </div>
           <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>
        </div>

      </div>
        )}

      </div>
      <div className="basis-3/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5 mr-2">
      <EmptyMessages/>

</div>
      </>)}

    </div>
  );
};

export default DashboardFeedback;
