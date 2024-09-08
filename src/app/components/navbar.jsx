
'use client'
import { useState } from 'react';
import Image from 'next/image'
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from "next/navigation";
const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [openDropDown,setOpenDropDown]=useState(false)
    const router =useRouter()
  
    return ( 
        <nav class="nav">
        <div class="flex  items-center justify-between mx-auto px-5">
          <div class="nav logo">
            <a href="/" class="nav-logo">
              <Image
                src="/culturelyft.png"
                alt="logo"
                width={170}
                height={120}
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
            <Link href="/#assitants" >Sales Assistants</Link>
            <Link href="/#businesses">For Businesses</Link>
            <Link href="/#assitants">Our Training</Link>
            <Link href="/register">Become an Assistant</Link>
            <Link href="/#resources">Resources</Link>
           
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