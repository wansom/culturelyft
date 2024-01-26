"use client";
import ButtonLoader from "@/app/components/button-loader";
import Drawer from "@/app/components/drawer";
import EmptyMessages from "@/app/components/empty-messages";
import EmptyState from "@/app/components/empty-state";
import MainLoader from "@/app/components/main-loader";
import { UserContext } from "@/app/services/DataContext";
import {
  fetchQuestionsByUser,
  updateMessageStatus,
} from "@/app/services/firestore";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import _ from 'lodash';

const DashboardFeedback = () => {
  const { loading, error, messages } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState("All");
  const [allfeedback, setAllfeedback] = useState([
  ]);
  const [unreadfeedback, setUnreadfeedback] = useState([]);
  const [dismissedfeedback, setDismissedfeedback] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState(null);
  const [updateloading, setLoading] = useState(false);
  const [repliedMessages, setRepliedMessages] = useState([]);

  useEffect(() => {
    // Filter messages when the component mounts or when the messages array changes
    const filteredMessages = _.filter(messages, { status: 'replied' });
    const dismissedMessages = _.filter(messages, { status: 'dismissed' });
    setRepliedMessages(filteredMessages);
    setDismissedfeedback(dismissedMessages)
  }, [messages]);

  const handleTabChange = (tab) => {
    setTab(tab);
    setSelectedMessage(null);
  };
  const dismissMessage =async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        id: selectedMessage.id,
        data: {
          status: "dismissed",
        },
      };
      await updateMessageStatus(payload);
      toast.success(` 🦄 we have delivered your response !`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(` 🦄 something went wrong !`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        id: selectedMessage.id,
        data: {
          reply: reply,
          status: "replied",
        },
      };
      await updateMessageStatus(payload);
      toast.success(` 🦄 we have delivered your response !`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(` 🦄 something went wrong !`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <MainLoader />;
  if (error) return <div>Error fetching user data: {error.message}</div>;
  return (
    <div className="m-3 bg-gray-200 rounded-lg shadow-sm  w-[96%] flex flex-col md:flex-row gap-3">
      <ToastContainer />
      <div className="basis-1/5 h-screen ml-2 py-2 md:py-10 md:space-y-5">
        <div
          className={
            tab === "All"
              ? "bg-white flex justify-between items-center rounded-lg p-2"
              : "bg-transparent flex justify-between items-center rounded-lg p-2"
          }
          onClick={() => {
            handleTabChange("All");
          }}
        >
          <div className={"flex items-center text-[#2D3B79] text-10 gap-2"}>
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
            {messages.length}
          </div>
        </div>
        {/* <div className={tab==='Unread'?'flex justify-between items-center bg-white rounded-lg p-2 ':'flex justify-between items-center rounded-lg p-2 bg-transparent'} onClick={()=>{setTab('Unread')}}>
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
        </div> */}
        <div
          className={
            tab === "Replied"
              ? "flex justify-between items-center bg-white rounded-lg p-2 "
              : "flex justify-between items-center rounded-lg p-2 bg-transparent"
          }
          onClick={() => {
            handleTabChange("Replied");
          }}
        >
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
            {repliedMessages.length}
          </div>
        </div>
        <div
          className={
            tab === "Dismissed"
              ? "flex justify-between items-center bg-white rounded-lg p-2 "
              : "flex justify-between items-center rounded-lg p-2 bg-transparent"
          }
          onClick={() => {
            handleTabChange("Dismissed");
          }}
        >
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
            {dismissedfeedback.length}
          </div>
        </div>
      </div>
      {tab === "All" && (
        <>
          <div className="basis-2/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5">
            {messages.length == 0 && (
              <EmptyState message={"This folder is empty"} />
            )}
            {messages.length > 0 && (
              <div className="h-full w-full">
                {messages.map((message, index) => (
                  <div
                    className="w-full border-solid border-b-gray-300 border-b-2 py-2"
                    key={index}
                    onClick={() => {
                      setSelectedMessage(message);
                    }}
                  >
                    <div className="flex justify-between items-center my-1 ">
                      <p className="font-semibold text-[10px] text-black">
                        {message.category}
                      </p>
                      <h3 className="text-[12px] text-gray-500">
                        {message.date.toDate().toDateString()}
                      </h3>
                    </div>
                    <div className="flex justify-between">
                      {message.status=='replied'&&( <div className="text-[#118D57]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>

                      </div>)}
                      {message.status=='dismissed'&&( <div className="text-[#B71D18]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53" />
</svg>


                      </div>)}
                     
                    <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">
                      {message.message}
                    </p>
                      </div>
                   
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="basis-3/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5 mr-2">
            {!selectedMessage && <EmptyMessages />}
            {selectedMessage && (
              <div>
                <div className="flex items-center justify-between  border-dashed border-b-2 border-gray-600 py-5 mb-3">
                  <div className="py-2 px-4 text-[#B71D18] bg-[#FFE4DE] rounded-lg text-[12px]">
                    {selectedMessage.category}
                  </div>
                  <p className="text-gray-400">
                    {selectedMessage.date.toDate().toDateString()}
                  </p>
                </div>
                <h2>{selectedMessage.message}</h2>
                {selectedMessage.reply && (
                  <div className="flex items-center gap-5 my-5">
                    <img
                        src="/avatar_1.jpg"
                        className="rounded-full h-10 w-10"
                      />
                    <div className="py-2 bg-gray-300 px-4 rounded-lg ml-2  ">
                      
                      <h2>{selectedMessage.reply}</h2>
                    </div>
                  </div>
                )}
                <form className="" onSubmit={handelSubmit}>
                  <div className="md:basis-2/3">
                    <textarea
                      value={reply}
                      required
                      onChange={(e) => {
                        setReply(e.target.value);
                      }}
                      type="text"
                      name="message"
                      id="message"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                      placeholder="reply to this message"
                    ></textarea>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      className="md:basis-1/2 uppercase flex items-center justify-center gap-3 px-4 py-2 mt-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
                    >
                      Send Reply{" "}
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
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                      </svg>
                      {updateloading && <ButtonLoader />}
                    </button>
                    <button
                      className="md:basis-1/2 uppercase flex items-center justify-center gap-3 px-4 py-2 mt-2 text-sm font-medium leading-5 text-center text-[#B71D18] bg-[#FFE4DE] transition-colors duration-150 border border-transparent rounded-lg hover:bg-gray-500 hover:text-white focus:outline-none focus:shadow-outline-purple"
                      onClick={dismissMessage}
                    >
                      Dismiss Feedback{" "}
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
                          d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                        />
                      </svg>
                      {updateloading && <ButtonLoader />}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </>
      )}

      {tab === "Replied" && (
               <>
               <div className="basis-2/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5">
                 {repliedMessages.length == 0 && (
                   <EmptyState message={"This folder is empty"} />
                 )}
                 {repliedMessages.length > 0 && (
                   <div className="h-full w-full">
                     {repliedMessages.map((message, index) => (
                       <div
                         className="w-full border-solid border-b-gray-300 border-b-2 py-2"
                         key={index}
                         onClick={() => {
                           setSelectedMessage(message);
                         }}
                       >
                         <div className="flex justify-between items-center my-1 ">
                           <p className="font-semibold text-[10px] text-black">
                             {message.category}
                           </p>
                           <h3 className="text-[12px] text-gray-500">
                             {message.date.toDate().toDateString()}
                           </h3>
                         </div>
                         <div className="flex justify-between">
                           {message.status=='replied'&&( <div className="text-[#118D57]">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
     </svg>
     
                           </div>)}
                           {message.status=='dismissed'&&( <div className="text-[#B71D18]">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53" />
     </svg>
     
     
                           </div>)}
                          
                         <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">
                           {message.message}
                         </p>
                           </div>
                        
                       </div>
                     ))}
                   </div>
                 )}
               </div>
               <div className="basis-3/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5 mr-2">
                 {!selectedMessage && <EmptyMessages />}
                 {selectedMessage && (
                   <div>
                     <div className="flex items-center justify-between  border-dashed border-b-2 border-gray-600 py-5 mb-3">
                       <div className="py-2 px-4 text-[#B71D18] bg-[#FFE4DE] rounded-lg text-[12px]">
                         {selectedMessage.category}
                       </div>
                       <p className="text-gray-400">
                         {selectedMessage.date.toDate().toDateString()}
                       </p>
                     </div>
                     <h2>{selectedMessage.message}</h2>
                     {selectedMessage.reply && (
                       <div className="flex items-center gap-5 my-5">
                         <img
                             src="/avatar_1.jpg"
                             className="rounded-full h-10 w-10"
                           />
                         <div className="py-2 bg-gray-300 px-4 rounded-lg ml-2  ">
                           
                           <h2>{selectedMessage.reply}</h2>
                         </div>
                       </div>
                     )}
                     <form className="" onSubmit={handelSubmit}>
                       <div className="md:basis-2/3">
                         <textarea
                           value={reply}
                           required
                           onChange={(e) => {
                             setReply(e.target.value);
                           }}
                           type="text"
                           name="message"
                           id="message"
                           class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                           placeholder="reply to this message"
                         ></textarea>
                       </div>
                       <div className="flex items-center gap-4">
                         <button
                           type="submit"
                           className="md:basis-1/2 uppercase flex items-center justify-center gap-3 px-4 py-2 mt-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
                         >
                           Send Reply{" "}
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
                               d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                             />
                           </svg>
                           {updateloading && <ButtonLoader />}
                         </button>
                         <button
                           className="md:basis-1/2 uppercase flex items-center justify-center gap-3 px-4 py-2 mt-2 text-sm font-medium leading-5 text-center text-[#B71D18] bg-[#FFE4DE] transition-colors duration-150 border border-transparent rounded-lg hover:bg-gray-500 hover:text-white focus:outline-none focus:shadow-outline-purple"
                           onClick={dismissMessage}
                         >
                           Dismiss Feedback{" "}
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
                               d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                             />
                           </svg>
                           {updateloading && <ButtonLoader />}
                         </button>
                       </div>
                     </form>
                   </div>
                 )}
               </div>
             </>
      )}
      {tab === "Dismissed" && (
         <>
         <div className="basis-2/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5">
           {dismissedfeedback.length == 0 && (
             <EmptyState message={"This folder is empty"} />
           )}
           {dismissedfeedback.length > 0 && (
             <div className="h-full w-full">
               {dismissedfeedback.map((message, index) => (
                 <div
                   className="w-full border-solid border-b-gray-300 border-b-2 py-2"
                   key={index}
                   onClick={() => {
                     setSelectedMessage(message);
                   }}
                 >
                   <div className="flex justify-between items-center my-1 ">
                     <p className="font-semibold text-[10px] text-black">
                       {message.category}
                     </p>
                     <h3 className="text-[12px] text-gray-500">
                       {message.date.toDate().toDateString()}
                     </h3>
                   </div>
                   <div className="flex justify-between">
                     {message.status=='replied'&&( <div className="text-[#118D57]">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>

                     </div>)}
                     {message.status=='dismissed'&&( <div className="text-[#B71D18]">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53" />
</svg>


                     </div>)}
                    
                   <p className="text-gray-400 text-10 whitespace-nowrap overflow-hidden text-ellipsis w-[300px]">
                     {message.message}
                   </p>
                     </div>
                  
                 </div>
               ))}
             </div>
           )}
         </div>
         <div className="basis-3/5  h-screen  px-5 py-10 space-y-3 bg-white rounded-lg my-5 mr-2">
           {!selectedMessage && <EmptyMessages />}
           {selectedMessage && (
             <div>
               <div className="flex items-center justify-between  border-dashed border-b-2 border-gray-600 py-5 mb-3">
                 <div className="py-2 px-4 text-[#B71D18] bg-[#FFE4DE] rounded-lg text-[12px]">
                   {selectedMessage.category}
                 </div>
                 <p className="text-gray-400">
                   {selectedMessage.date.toDate().toDateString()}
                 </p>
               </div>
               <h2>{selectedMessage.message}</h2>
               {selectedMessage.reply && (
                 <div className="flex items-center gap-5 my-5">
                   <img
                       src="/avatar_1.jpg"
                       className="rounded-full h-10 w-10"
                     />
                   <div className="py-2 bg-gray-300 px-4 rounded-lg ml-2  ">
                     
                     <h2>{selectedMessage.reply}</h2>
                   </div>
                 </div>
               )}
               <form className="" onSubmit={handelSubmit}>
                 <div className="md:basis-2/3">
                   <textarea
                     value={reply}
                     required
                     onChange={(e) => {
                       setReply(e.target.value);
                     }}
                     type="text"
                     name="message"
                     id="message"
                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                     placeholder="reply to this message"
                   ></textarea>
                 </div>
                 <div className="flex items-center gap-4">
                   <button
                     type="submit"
                     className="md:basis-1/2 uppercase flex items-center justify-center gap-3 px-4 py-2 mt-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
                   >
                     Send Reply{" "}
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
                         d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                       />
                     </svg>
                     {updateloading && <ButtonLoader />}
                   </button>
                   <button
                     className="md:basis-1/2 uppercase flex items-center justify-center gap-3 px-4 py-2 mt-2 text-sm font-medium leading-5 text-center text-[#B71D18] bg-[#FFE4DE] transition-colors duration-150 border border-transparent rounded-lg hover:bg-gray-500 hover:text-white focus:outline-none focus:shadow-outline-purple"
                     onClick={dismissMessage}
                   >
                     Dismiss Feedback{" "}
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
                         d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                       />
                     </svg>
                     {updateloading && <ButtonLoader />}
                   </button>
                 </div>
               </form>
             </div>
           )}
         </div>
       </>
      )}
    </div>
  );
};

export default DashboardFeedback;
