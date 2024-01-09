'use client'
import { useState } from "react";

const Chatbox = () => {
    const[isOpen,setisOpen]= useState(false)
    const handleTabChange=()=>{
        setisOpen(!isOpen)
    }
    return (  
        <main class="dash-view">
        <div class="inbox-content">
          <div class="inbox-messages">
            <div class="top msg-search">
              <input type="search" placeholder="Say anything"/>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.39658 1.34277C9.4889 1.34277 11.9963 3.84953 11.9963 6.94248C11.9963 10.0354 9.4889 12.5422 6.39658 12.5422C3.30363 12.5422 0.796875 10.0354 0.796875 6.94248C0.796875 3.84953 3.30363 1.34277 6.39658 1.34277Z" stroke="#818181" stroke-width="1.01355" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0387 11.6621C12.5483 11.6621 12.9613 12.0757 12.9613 12.5847C12.9613 13.0949 12.5483 13.5079 12.0387 13.5079C11.5291 13.5079 11.1155 13.0949 11.1155 12.5847C11.1155 12.0757 11.5291 11.6621 12.0387 11.6621Z" stroke="#818181" stroke-width="1.01355" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>            
            </div>
            <div class="compose-msg-btn">
              <button>New Chat</button>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.577637 10.7931C0.577637 5.72312 0.577637 3.18814 2.15267 1.61312C3.7277 0.0380859 6.26267 0.0380859 11.3326 0.0380859H21.508C26.578 0.0380859 29.1129 0.0380859 30.688 1.61312C32.263 3.18814 32.263 5.72312 32.263 10.7931V20.9685C32.263 26.0384 32.263 28.5734 30.688 30.1484C29.1129 31.7234 26.578 31.7234 21.508 31.7234H11.3326C6.26267 31.7234 3.7277 31.7234 2.15267 30.1484C0.577637 28.5734 0.577637 26.0384 0.577637 20.9685V10.7931Z" fill="#B5C5D5" fill-opacity="0.42"/>
                <path d="M16.4204 8.83887L16.4204 22.9213" stroke="white" stroke-width="1.34437" stroke-linejoin="round"/>
                <path d="M23.4617 15.8804L9.37929 15.8804" stroke="white" stroke-width="1.34437" stroke-linejoin="round"/>
              </svg>            
            </div>
            <div class="msged-persons">
              <div class="tab">
                <button class="msgtablinks" onClick={handleTabChange} >Profiles</button>
                <button class="msgtablinks" onClick={handleTabChange}>History</button>
              </div>
              
              <div id="msg-inbox" class={`msgtabcontent ${isOpen ? 'hidden' : 'block'}`}>
                <div class="msg-person">
                  <div class="p-image">
                    <img src="/userprofile.png" alt="Profile Image for messages"/>
                  </div>
                  <div class="m-p-txt">
                    <h4>John Kawaida</h4>
                    <div class="last-msg-time">
                      <span class="last-reply"><strong>You:</strong> Ok, thanks!</span>
                      <span>9:14 AM</span>
                    </div>
                  </div>
                  <div class="msg-p-status">
                    <button class="txt-status">Solved 🎉</button>
                  </div>
                </div>
                <div class="msg-person">
                  <div class="p-image">
                    <img src="/userprofile.png" alt="Profile Image for messages"/>
                  </div>
                  <div class="m-p-txt">
                    <h4>John Kawaida</h4>
                    <div class="last-msg-time">
                      <span class="last-reply"><strong>You:</strong> Ok, thanks!</span>
                      <span>9:14 AM</span>
                    </div>
                  </div>
                  <div class="msg-p-status">
                    <button class="txt-status">Solved 🎉</button>
                  </div>
                </div>
                <div class="msg-person">
                  <div class="p-image">
                    <img src="/userprofile.png" alt="Profile Image for messages"/>
                  </div>
                  <div class="m-p-txt">
                    <h4>John Kawaida</h4>
                    <div class="last-msg-time">
                      <span class="last-reply"><strong>You:</strong> Ok, thanks!</span>
                      <span>9:14 AM</span>
                    </div>
                  </div>
                  <div class="msg-p-status">
                    <button class="txt-status">Solved 🎉</button>
                  </div>
                </div>
                <div class="msg-person">
                  <div class="p-image">
                    <img src="/userprofile.png" alt="Profile Image for messages"/>
                  </div>
                  <div class="m-p-txt">
                    <h4>John Kawaida</h4>
                    <div class="last-msg-time">
                      <span class="unread-reply">Hi, was hoping to get it.</span>
                      <span>Fri</span>
                    </div>
                  </div>
                  <div class="msg-p-status">
                    <button class="unread-msgs">2</button>
                  </div>
                </div>
            
              </div>
              
              <div id="msg-history" class={`msgtabcontent ${isOpen ? 'block' : 'hidden'}`}>
                <h3>Empty</h3>
              </div>
            </div>
          </div>
          <div class="msg-box">
              <div class="msg-bx-top">
                <div class="user-mgs-bx">
                  <button>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.05241 1.61306C8.41179 1.25053 8.41179 0.662749 8.05241 0.300218C7.69303 -0.0623124 7.11036 -0.0623124 6.75098 0.300218L0.84766 6.2553C0.48828 6.61783 0.48828 7.20561 0.84766 7.56814L6.75098 13.5232C7.11036 13.8858 7.69303 13.8858 8.05241 13.5232C8.41179 13.1607 8.41179 12.5729 8.05241 12.2104L2.79981 6.91172L8.05241 1.61306Z" fill="#0584FE"/>
                    </svg>                  
                  </button>
                  <img src="/message.jpg" alt="User Messaging info"/>
                  <div class="userinfo-msg-bx">
                    <h4>Amelia Kwaida</h4>
                    <p>User ID: 45676</p>
                  </div>
                </div>
                <button class="internal internal-btn">Internal</button>
              </div>
              <div class="msg-bx-msg">
                <div class="message-date-title">
                  <p>Today</p>
                </div>
                <div class="messages">
                  <div class="sender boxed-messages">
                    <div class="sender-image">
                      <img src="/message.jpg" alt="Message sender image"/>
                    </div>
                    <div class="sender-message">
                      <div class="sender-message-txt">
                        <p>Hello, Jacob!</p>
                      </div>
                      <div class="sender-message-txt">
                        <p>Hello, Jacob!</p>
                      </div>
                      <div class="sender-message-time">
                        <span>7:14 AM</span>
                      </div>
                    </div>
                  </div>
                  <div class="reciever boxed-messages">
                    <div class="reciever-message">
                      <div class="reciever-message-txt emoji">
                        <p class="emoji">👋🏽</p>
                      </div>
                      <div class="reciever-message-txt">
                        <p>Hello, Jacob!</p>
                      </div>
                      <div class="reciever-message-time">
                        <span>7:14 AM</span>
                      </div>
                    </div>
                    <div class="reciever-image">
                      <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.22122" cy="5.65188" r="5.30716" fill="#0066F9"/>
                      </svg>                    
                    </div>
                  </div>
                  <div class="sender boxed-messages">
                    <div class="sender-image">
                      <img src="/message.jpg" alt="Message sender image"/>
                    </div>
                    <div class="sender-message">
                      <div class="sender-message-txt">
                        <p>Do you know what time is it?want to update 
                          Case 8990</p>
                      </div>
                      <div class="sender-message-time">
                        <span>7:14 AM</span>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
              <div class="msg-input">
                <div class="emoji">
                  <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.94873 13.0386C5.94873 13.0386 7.50794 15.1175 10.1066 15.1175C12.7053 15.1175 14.2645 13.0386 14.2645 13.0386" stroke="#333333" stroke-width="1.43927" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.1065 20.3155C15.2733 20.3155 19.4617 16.127 19.4617 10.9602C19.4617 5.79347 15.2733 1.60498 10.1065 1.60498C4.93971 1.60498 0.751221 5.79347 0.751221 10.9602C0.751221 16.127 4.93971 20.3155 10.1065 20.3155Z" stroke="#333333" stroke-width="1.43927" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.2249 7.8418H13.235" stroke="#333333" stroke-width="1.43927" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.98804 7.8418H6.9982" stroke="#333333" stroke-width="1.43927" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                  
                </div>
                <input type="text" placeholder="Write a Message..."/>
              </div>
          </div>
          <div class="inbox-msg-profile" id="inbox-msg-p">
            <div class="p-info">
              <div class="info-p-image">
                <img src="/userprofile.png" alt="Profile Image"/>
                <div class="avai-status active"></div>
              </div>
              <div class="p-info-text">
                <h3>Mambo Kiwanda</h3>
                <div class="status">Active</div>
              </div>
            </div>
            <div class="p-info-extra">
              <div class="extras">
                <span>Member No.</span>
                <span>877</span>
              </div>
              <div class="extras">
                <span>ID Passport</span>
                <span>29774884</span>
              </div>
              <div class="extras">
                <span>Employer</span>
                <span>Self Employment</span>
              </div>
              <div class="extras">
                <span>Facility Name</span>
                <span>N/A</span>
              </div>
              <div class="extras">
                <span>Marital Status</span>
                <span>Single</span>
              </div>
              <div class="extras">
                <span>Year of Birth</span>
                <span>18-02-1993</span>
              </div>
              <div class="extras">
                <span>Mobile</span>
                <span>+254 855 555 557</span>
              </div>
              <div class="bottom-extras">
                <div class="btm-ex-hold">
                  <div class="btm-ex-num">
                    <span>Dependants</span>
                    <div class="dep-count">2</div>
                  </div>
                  <a href="#">SEE ALL</a>
                </div>
                <div class="dependants">
                  <div class="dependant">
                    <div class="left">
                      <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.02898" cy="3.45964" r="2.71648" fill="#D9D9D9"/>
                      </svg>   
                      <span>Martin Mumba</span>                 
                    </div>
                    <div class="right">
                      <span>Relationship</span>
                      <span>| Sister</span>
                    </div>
                  </div>
                  <div class="dependant">
                    <div class="left">
                      <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.02898" cy="3.45964" r="2.71648" fill="#D9D9D9"/>
                      </svg>   
                      <span>Martin Mumba</span>                 
                    </div>
                    <div class="right">
                      <span>Relationship </span>
                      <span>| Sister</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}
 
export default Chatbox;