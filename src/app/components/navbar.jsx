
'use client'
import { useState } from 'react';
import Image from 'next/image'
const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return ( 
        <nav class="nav ">
        <div class="nav-container container mx-auto px-5 lg:px-28 border-b-[1px] border-solid border-black">
          <div class="nav logo">
            <a href="/" class="nav-logo">
              <Image
                src="/logo.png"
                alt="logo"
                width={150}
                height={100}
              />
            </a>
          </div>
          <div className={isOpen ? "active links" : "hide links"} id="links">
            <div class="cancel">
              <span className={isOpen ? "cancel-btn active" : "cancel-btn hide"}
                onClick={() => setOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </div>
            <a href="/anonymous" class="active">Anonymous Reporting</a>
            <a href="/#insights">Team Insights</a>
            <a href="/#culture">Company Culture</a>
            <a href="/blog">Resources</a>
            <button href="/login"
                class=" block w-[200px] px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple ml-10"
              >
               Speak To Our Team
              </button>
          </div>
          <div class="menu-bar">
            <span className={isOpen ? "hide text-white" : " active"}
              onClick={() => setOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </span>
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;