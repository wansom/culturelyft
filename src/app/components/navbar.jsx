
'use client'
import { useState } from 'react';
import Image from 'next/image'
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from "next/navigation";
const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const router =useRouter()
  
    return ( 
        <nav class="nav">
        <div class="flex  items-center justify-between mx-auto px-5">
          <div class="nav logo md:mt-3">
            <a href="/" class="nav-logo">
              <Image
                src="/culturelyft.png"
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
            <Link href="/#assitants" >Customer Support</Link>
            <Link href="/#businesses">Sales Support</Link>
            <Link href="/corporate">Corporate Training</Link>
            <Link href="/#resources">Resources</Link>
            <Link href="/register">Become an Assistant</Link>
            <button onClick={()=>{router.push('/login')}}
                class=" flex imtes-center justify-center gap-2  px-4 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 border-[#e58e04]  border-solid border-2 rounded-lg active:bg-[#e58e04] hover:bg-[#e58e04] hover:text-white focus:outline-none focus:shadow-outline-purple"
              >
               MY ACCOUNT<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

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