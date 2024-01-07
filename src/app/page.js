'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const topics = [
    {
      title: "SME Digitization and Job Creation",
      content: "Exploring the role of AI and data transformation in digitizing SMEs and its potential to create jobs across Africa and the diaspora."
    },
    {
      title: 'The Possibilities of AI for Transformation and Economic Growth',
      content: 'Discussing the transformative power of AI and its capacity development as a driver for AI adoption, contributing to economic growth.'
    },
    {
      title: 'Data & Digitization',
      content: 'Ethical Advancement: Maximizing the value of data while ensuring ethical advancement and responsible data use.'
    },
    {
      title: 'Policy and African AI Ethics/Data Transformation in Africa',
      content: 'Examining AI policy development and ethics in Africa, focusing on responsible AI adoption.'
    },
    {
      title: 'The Link between AI and Data Privacy',
      content: 'Analyzing the connection between AI utilization and data privacy, emphasizing the importance of data protection.'
    },
    {
      title: 'Africa and UK Research Collaboration',
      content: 'Promoting research collaboration between Africa and the UK for sustainable impact in AI development for social and commercial good in Africa and the diaspora.'
    }
  ]
  const [speakerDetails, setSpeakerDetails] = useState(null)
  const openSpeakerModal = (speaker) => {
    setModalOpen(true),
      setSpeakerDetails(speaker)
  }
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    tickets: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.adanianlabs.io/api/v1/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (data) {
        swal({
          title: "Thank You",
          text: "Your reservation has been received ",
          icon: "success",
        }).then(() => {
          location.reload()
        })
      }

      // handle success or errors based on the response data
    } catch (error) {
      swal({

        text: "Something went wrong making your reservation. please try again",
        icon: "error",
      })
    }
  };
  return (
    <main className=" overflow-x-hidden">
      <nav class="nav">
        <div class="nav-container container mx-auto px-5 lg:px-28">
          <div class="nav logo">
            <a href="index.html" class="nav-logo">
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
            <a href="#about-id" class="active">About</a>
            <a href="#schedule-id">Schedule</a>
            <a href="#speakers-id">Speakers</a>
            <a href="#contact-id">Contact</a>
            <button>Register</button>
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

      <section class="banner h-[1150px] md:h-fit">

        <div class="banner-container container mx-auto px-5 lg:px-28">
          <div class="banner-text bt">
            <div class="top flex items-center justify-start">
              <div class="left t flex items-start">
                <h1 className='-ml-16 hidden md:block'>OCTOBER EVENT</h1>
              </div>
              <div class="right t md:-ml-10">
                <h2><div class="line"></div> 2024</h2>
                <h1 className='text-[32px] lg:text-[44px] uppercase '>
                  Inclusive AI for development of social and commercial good for Diaspora and Africa
                </h1>
              </div>
            </div>
            <div className='absolute right-24 -bottom-64 md:bottom-[25%] bg-[#13A8BD] h-fit p-8 time-card rounded-lg space-y-3'>
              <p>October 2024 </p>
              <p>Adanian Labs UK</p>
              <hr className='h-0  w-full bg-white border-1 border-solid border-white'></hr>
              <div className='flex gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_135_445)">
                    <path d="M17.5 8.33334C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33334C2.5 6.34422 3.29018 4.43656 4.6967 3.03004C6.10322 1.62352 8.01088 0.833344 10 0.833344C11.9891 0.833344 13.8968 1.62352 15.3033 3.03004C16.7098 4.43656 17.5 6.34422 17.5 8.33334Z" stroke="#F9FCFC" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 10.8333C11.3807 10.8333 12.5 9.71406 12.5 8.33334C12.5 6.95263 11.3807 5.83334 10 5.83334C8.61929 5.83334 7.5 6.95263 7.5 8.33334C7.5 9.71406 8.61929 10.8333 10 10.8333Z" stroke="#F9FCFC" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_135_445">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>
                  Building 1, Circle Square,<br />
                  3rd Symphony Park,<br />
                  Oxford Road, Manchester
                </p>
              </div>
              <div className='flex gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z" stroke="#F9FCFC" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13.334 1.66675V5.00008" stroke="#F9FCFC" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.66602 1.66675V5.00008" stroke="#F9FCFC" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.5 8.33334H17.5" stroke="#F9FCFC" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>21 October 2024</p>
              </div>

            </div>
            <div class="bottom">
              <p class="btm two "><span className='font-semibold'>Event:</span>A Borderless Africa tech Summit-UK</p>
              <p class="btm two "><span className='font-semibold'>Hosted By:</span>Adanian Labs-UK</p>
              <p class="btm two">
                <span className='font-semibold'>Supported by:</span>Adanian Labs and its Centers of Excellence - AI Center of Excellence Africa and The Africa Blockchain Center</p>
              <p class="btm two mt-10">
                Join Adanian Labs UK to address challenges facing black startups in the UK. Explore funding solutions and foster African Diaspora tech inclusion for sustainable development. Don't miss this event with John Kamara!</p>
              <button class="btn-register">Register Now</button>
            </div>
          </div>
          <div class="banner-illusion">
          </div>
        </div>
        <img src="/Meliuk-liuk.png" class="vector m-one" alt="Adanian" width="500px" />
        <img src="/Meliuk-liuk.png" class="vector m-two" alt="Adanian" width="320px" />
      </section>
      <section class="about" id="about-id">
        <div class="about-container ac container  mx-auto px-5 lg:px-28 flex flex-col md:flex-row  items-start justify-between gap-20">
          <div class="left flex flex-col md:flex-row items-center justify-between ">
            <div class="l-images">
              <img src="/ev-1.jpeg" alt="Adanian" className='rounded-lg' />
              <img class="left-img" src="/ev-2.jpeg" alt="Adanian" className='rounded-lg' style={{ borderRadius: '10px' }} />
            </div>
            <div class="r-images">
              <img src="/ev-6.jpeg" alt="Adanian" className='rounded-lg' style={{ borderRadius: '10px' }} />
            </div>
          </div>
          <div class="right z-10">
            <h3>Overview</h3>
            <h1 className='text-[32px] md:text-[44px]'>ABOUT THE EVENT</h1>
            <p className='z-10'>In a world propelled by technological innovation, Artificial Intelligence (AI) stands as a transformative force with the potential to drive economic and social development. For the African diaspora and the continent itself, AI presents a unique opportunity to leapfrog into the future. Adanian Labs, a leader in data transformation and AI, is committed to fostering inclusive AI development for the betterment of society and commerce. <br />  <br />

              The event aims to facilitate dialogue and collaboration among key stakeholders, including policy makers, entrepreneurs, businesses, Development Finance Institutions (DFIs), Venture Capitalists (VCs), and startups. The event will delve into critical discussions around AI, data transformation, and the PDI Model (People, Data, Infrastructure), a transformative framework pioneered by Adanian Labs.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div class="about-cards container mx-auto px-5 lg:px-28 flex items-center md:items-start flex-col md:flex-row justify-between gap-10">
          <div class="ellipse"></div>
          <div class="about-card w-80 md:w-[260px]">
            <svg id="ellipse" xmlns="http://www.w3.org/2000/svg" width="131" height="93" viewBox="0 0 131 93" fill="none">
              <g opacity="0.15">
                <circle cx="98.9996" cy="-6.00002" r="19.4" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9994" cy="-6.00004" r="32.3333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9991" cy="-5.99993" r="45.2667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0008" cy="-5.99995" r="58.2" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0005" cy="-6.00008" r="71.1333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0003" cy="-5.99999" r="84.0667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99" cy="-6" r="97" stroke="#F9FCFC" stroke-width="2.56954" />
              </g>
            </svg>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32 10.6667C32 11.403 31.403 12 30.6667 12C28.4575 12 26.6667 13.7909 26.6667 16C26.6667 18.2091 28.4575 20 30.6667 20C31.403 20 32 20.597 32 21.3333V24.6667C32 25.5507 31.6488 26.3986 31.0237 27.0237C30.3986 27.6488 29.5507 28 28.6667 28H3.33333C1.49238 28 0 26.5076 0 24.6667V21.3333C0 20.597 0.596954 20 1.33333 20C3.54247 20 5.33333 18.2091 5.33333 16C5.33333 13.7909 3.54247 12 1.33333 12C0.596954 12 0 11.403 0 10.6667V7.33333C0 5.49238 1.49238 4 3.33333 4H28.6667C29.5507 4 30.3986 4.35119 31.0237 4.97631C31.6488 5.60143 32 6.44928 32 7.33333V10.6667ZM18.4813 16.8733L20.28 15.42L20.2853 15.4187C20.5051 15.2412 20.5892 14.9444 20.4951 14.678C20.401 14.4116 20.1492 14.2334 19.8667 14.2333H17.9413C17.8069 14.2336 17.6855 14.1532 17.6333 14.0293L16.6133 11.588C16.5094 11.3405 16.2671 11.1795 15.9987 11.1795C15.7302 11.1795 15.4879 11.3405 15.384 11.588L14.3533 14.0307C14.3014 14.1541 14.1806 14.2344 14.0467 14.2347H12.1253C11.8428 14.2347 11.591 14.4129 11.4969 14.6793C11.4028 14.9457 11.4869 15.2425 11.7067 15.42L13.5053 16.8747C13.6173 16.9646 13.6587 17.1163 13.608 17.2507L12.7333 19.5827C12.6306 19.8573 12.7194 20.1669 12.9521 20.3453C13.1848 20.5237 13.5067 20.5292 13.7453 20.3587L15.8 18.892C15.9156 18.8092 16.0711 18.8092 16.1867 18.892L18.2427 20.3587C18.4815 20.5286 18.8032 20.5226 19.0356 20.3439C19.2679 20.1652 19.3563 19.8558 19.2533 19.5813L18.3787 17.2493C18.328 17.115 18.3694 16.9633 18.4813 16.8733Z" fill="#F39711" />
              </svg>
            </span>
            <div class="card-text">
              <h2>140+</h2>
              <p>Startups</p>
              <p>Incubated</p>
            </div>
          </div>
          <div class="about-card w-80 md:w-[260px]">
            <svg id="ellipse" xmlns="http://www.w3.org/2000/svg" width="131" height="93" viewBox="0 0 131 93" fill="none">
              <g opacity="0.15">
                <circle cx="98.9996" cy="-6.00002" r="19.4" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9994" cy="-6.00004" r="32.3333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9991" cy="-5.99993" r="45.2667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0008" cy="-5.99995" r="58.2" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0005" cy="-6.00008" r="71.1333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0003" cy="-5.99999" r="84.0667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99" cy="-6" r="97" stroke="#F9FCFC" stroke-width="2.56954" />
              </g>
            </svg>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                <path d="M19.9471 19.646C18.2985 21.0339 16.1398 21.6599 14.0044 21.3693C13.8966 21.3548 13.7891 21.3979 13.7213 21.4829C13.6512 21.5715 13.6357 21.6916 13.681 21.7951L16.3912 27.6689C16.7265 28.5402 17.4839 29.1798 18.3991 29.3644C18.623 29.4102 18.8033 29.5762 18.8672 29.7957L19.3551 31.4666C19.4233 31.7022 19.5823 31.901 19.7972 32.0193C20.012 32.1377 20.2651 32.1657 20.5006 32.0974C20.5721 32.0758 20.6409 32.0461 20.7057 32.0089C21.0736 31.7957 21.249 31.3593 21.1309 30.9508L20.6454 29.2843C20.5816 29.0645 20.6447 28.8275 20.8095 28.6687C21.4825 28.0213 21.7782 27.075 21.5937 26.1595L20.4467 19.8186C20.4251 19.7122 20.3489 19.6251 20.2462 19.5897C20.1436 19.5542 20.0299 19.5756 19.9471 19.646Z" fill="#06400B" />
                <path d="M5.79943 10.9297L21.5489 6.34583C21.8613 6.25484 22.1118 6.0208 22.2238 5.71535C22.3359 5.40989 22.296 5.06938 22.1166 4.79801C19.785 1.30256 15.4553 -0.276356 11.421 0.897585C7.38657 2.07153 4.58004 5.72696 4.48792 9.92766C4.48174 10.2535 4.63104 10.5628 4.89001 10.7607C5.14898 10.9585 5.48667 11.0213 5.79943 10.9297Z" fill="#06400B" />
                <path d="M23.315 9.4664C23.0563 9.26817 22.7187 9.20497 22.4057 9.29621L6.66689 13.8739C6.35414 13.965 6.10338 14.1994 5.99151 14.5053C5.87965 14.8113 5.92003 15.1522 6.10028 15.4235C8.43271 18.9154 12.7599 20.492 16.792 19.319C20.8241 18.1459 23.6302 14.4941 23.7254 10.2959C23.7285 9.96983 23.5761 9.66178 23.315 9.4664Z" fill="#06400B" />
              </svg>
            </span>
            <div class="card-text">
              <h2>5+</h2>
              <p>Labs</p>
              <p>Within Africa</p>
            </div>
          </div>
          <div class="about-card w-80 md:w-[260px]">
            <svg id="ellipse" xmlns="http://www.w3.org/2000/svg" width="131" height="93" viewBox="0 0 131 93" fill="none">
              <g opacity="0.15">
                <circle cx="98.9996" cy="-6.00002" r="19.4" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9994" cy="-6.00004" r="32.3333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9991" cy="-5.99993" r="45.2667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0008" cy="-5.99995" r="58.2" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0005" cy="-6.00008" r="71.1333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0003" cy="-5.99999" r="84.0667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99" cy="-6" r="97" stroke="#F9FCFC" stroke-width="2.56954" />
              </g>
            </svg>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8.3617 27.4662C8.45435 27.3019 8.46754 27.1069 8.39782 26.9324C8.32809 26.7579 8.18241 26.6214 7.99903 26.5587C6.28793 25.9845 4.39815 26.1837 2.85759 27.1007C1.31704 28.0176 0.290853 29.554 0.0656984 31.2806C0.04187 31.4636 0.101441 31.6476 0.22914 31.7854C0.35684 31.9232 0.540253 32.0014 0.732365 32H6.6857C7.05389 32 7.35237 31.7134 7.35237 31.36C7.35026 30.0021 7.69693 28.6648 8.3617 27.4662Z" fill="#13A8BD" />
                <path d="M21.3522 14.72C21.1828 14.7205 21.0149 14.6896 20.8576 14.6291C20.5292 14.503 20.2665 14.2568 20.1272 13.9448C19.9879 13.6327 19.9835 13.2803 20.1149 12.9651C20.8649 11.1718 22.033 9.56745 23.5296 8.27519C24.079 7.81618 24.9104 7.86535 25.397 8.38561C25.8836 8.90587 25.8452 9.70471 25.3109 10.1798C24.1192 11.2093 23.1888 12.4869 22.5909 13.9149C22.3885 14.4013 21.8978 14.7202 21.3522 14.72Z" fill="#13A8BD" />
                <path d="M10.6869 14.72C10.1413 14.7202 9.65066 14.4013 9.44825 13.9149C8.85036 12.4869 7.91993 11.2093 6.72825 10.1798C6.19391 9.70471 6.15558 8.90587 6.64216 8.38561C7.12874 7.86535 7.96017 7.81618 8.50958 8.27519C10.0062 9.56745 11.1743 11.1718 11.9242 12.9651C12.0883 13.3593 12.0381 13.8059 11.7902 14.1575C11.5424 14.509 11.1291 14.7197 10.6869 14.72Z" fill="#13A8BD" />
                <path d="M26.0189 24.96C27.8599 24.96 29.3522 23.5273 29.3522 21.76C29.3522 19.9927 27.8599 18.56 26.0189 18.56C24.178 18.56 22.6856 19.9927 22.6856 21.76C22.6856 23.5273 24.178 24.96 26.0189 24.96Z" fill="#13A8BD" />
                <path d="M24.6864 31.36C24.6864 31.7134 24.9849 32 25.3531 32H31.3117C31.5039 32.0014 31.6873 31.9232 31.815 31.7854C31.9427 31.6476 32.0022 31.4636 31.9784 31.2806C31.7529 29.5552 30.7275 28.02 29.1883 27.1033C27.6491 26.1865 25.7609 25.9864 24.0504 26.5587C23.8665 26.6204 23.7198 26.7562 23.649 26.9305C23.5783 27.1048 23.5905 27.3 23.6824 27.4649C24.3436 28.665 24.6883 30.0024 24.6864 31.36Z" fill="#13A8BD" />
                <path d="M6.01891 24.96C7.85986 24.96 9.35225 23.5273 9.35225 21.76C9.35225 19.9927 7.85986 18.56 6.01891 18.56C4.17797 18.56 2.68558 19.9927 2.68558 21.76C2.68558 23.5273 4.17797 24.96 6.01891 24.96Z" fill="#13A8BD" />
                <path d="M18.6426 25.472C18.5275 25.4249 18.4496 25.3198 18.4409 25.2C18.4322 25.0802 18.4941 24.9658 18.6012 24.9037C20.5249 23.7905 21.4395 21.5828 20.8377 19.5054C20.2359 17.428 18.2653 15.9905 16.0192 15.9905C13.7731 15.9905 11.8025 17.428 11.2008 19.5054C10.599 21.5828 11.5136 23.7905 13.4372 24.9037C13.5444 24.9658 13.6063 25.0802 13.5976 25.2C13.5889 25.3198 13.511 25.4249 13.3959 25.472C10.9409 26.4638 9.34755 28.775 9.3559 31.3319C9.34938 31.5056 9.41673 31.6743 9.54247 31.7994C9.66821 31.9245 9.84152 31.995 10.0226 31.9949H22.0226C22.2034 31.995 22.3765 31.9246 22.5022 31.7998C22.6279 31.6751 22.6954 31.5066 22.6892 31.3332C22.6981 28.7739 21.1013 26.4612 18.6426 25.472Z" fill="#13A8BD" />
                <path d="M7.44558 4.48639L7.00558 4.42623C5.83184 4.26203 4.90995 3.37702 4.73891 2.25023L4.68025 1.82911C4.63558 1.51164 4.35328 1.27478 4.01958 1.27478C3.68588 1.27478 3.40358 1.51164 3.35891 1.82911L3.29625 2.25407C3.12521 3.38086 2.20332 4.26587 1.02958 4.43007L0.588247 4.49023C0.259708 4.53517 0.015625 4.80525 0.015625 5.12383C0.015625 5.44241 0.259708 5.71249 0.588247 5.75743L1.03225 5.81887C2.20661 5.98187 3.12912 6.86748 3.29891 7.99487L3.36158 8.41855C3.40625 8.73602 3.68855 8.97288 4.02225 8.97288C4.35595 8.97288 4.63824 8.73602 4.68291 8.41855L4.74558 7.99359C4.91537 6.8662 5.83788 5.98059 7.01225 5.81759L7.44825 5.75999C7.77679 5.71505 8.02087 5.44497 8.02087 5.12639C8.02087 4.80781 7.77679 4.53773 7.44825 4.49279L7.44558 4.48639Z" fill="#13A8BD" />
                <path d="M18.7822 3.84639L18.4288 3.79775C17.5499 3.67475 16.8596 3.01205 16.7315 2.16831L16.6808 1.82911C16.6362 1.51164 16.3539 1.27478 16.0202 1.27478C15.6865 1.27478 15.4042 1.51164 15.3595 1.82911L15.3088 2.17599C15.1802 3.01923 14.49 3.68129 13.6115 3.80415L13.2582 3.85279C12.9296 3.89773 12.6855 4.16781 12.6855 4.48639C12.6855 4.80497 12.9296 5.07505 13.2582 5.11999L13.6128 5.16863C14.4916 5.29229 15.1814 5.95551 15.3088 6.79935L15.3595 7.13727C15.4042 7.45474 15.6865 7.6916 16.0202 7.6916C16.3539 7.6916 16.6362 7.45474 16.6808 7.13727L16.7315 6.79807C16.8596 5.95433 17.5499 5.29163 18.4288 5.16863L18.7822 5.11999C19.1107 5.07505 19.3548 4.80497 19.3548 4.48639C19.3548 4.16781 19.1107 3.89773 18.7822 3.85279V3.84639Z" fill="#13A8BD" />
                <path d="M16.0189 14.08C15.2825 14.08 14.6856 13.5069 14.6856 12.8V10.24C14.6856 9.53307 15.2825 8.95999 16.0189 8.95999C16.7553 8.95999 17.3522 9.53307 17.3522 10.24V12.8C17.3522 13.5069 16.7553 14.08 16.0189 14.08Z" fill="#13A8BD" />
              </svg>
            </span>
            <div class="card-text">
              <h2>170+</h2>
              <p>Blockchain</p>
              <p>Engineers</p>
            </div>
          </div>
          <div class="about-card w-80 md:w-[260px]">
            <svg id="ellipse" xmlns="http://www.w3.org/2000/svg" width="131" height="93" viewBox="0 0 131 93" fill="none">
              <g opacity="0.15">
                <circle cx="98.9996" cy="-6.00002" r="19.4" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9994" cy="-6.00004" r="32.3333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9991" cy="-5.99993" r="45.2667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0008" cy="-5.99995" r="58.2" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0005" cy="-6.00008" r="71.1333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0003" cy="-5.99999" r="84.0667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99" cy="-6" r="97" stroke="#F9FCFC" stroke-width="2.56954" />
              </g>
            </svg>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32 11.3333C32 10.2288 31.1046 9.33333 30 9.33333H25.7893C25.473 9.33276 25.2006 9.10995 25.1373 8.79999C24.2546 4.45484 20.4339 1.33237 16 1.33237C11.5661 1.33237 7.74544 4.45484 6.86267 8.79999C6.7994 9.10995 6.52701 9.33276 6.21067 9.33333H2C0.895431 9.33333 0 10.2288 0 11.3333V28.6667C0 29.7712 0.895431 30.6667 2 30.6667H30C31.1046 30.6667 32 29.7712 32 28.6667V11.3333ZM3.66602 28C3.11373 28 2.66602 27.5523 2.66602 27C2.66602 26.4477 3.11373 26 3.66602 26C4.2183 26 4.66602 26.4477 4.66602 27C4.66602 27.5523 4.2183 28 3.66602 28ZM17 5C17 4.44771 16.5523 4 16 4C15.4477 4 15 4.44771 15 5C15 5.55228 15.4477 6 16 6C16.5523 6 17 5.55228 17 5ZM21.128 22.7907C21.2725 23.1366 21.18 23.5362 20.8982 23.7835C20.6165 24.0308 20.2083 24.0707 19.884 23.8827L16.3373 21.8827C16.1341 21.7681 15.8859 21.7681 15.6827 21.8827L12.136 23.8827C11.8117 24.0707 11.4035 24.0308 11.1218 23.7835C10.84 23.5362 10.7475 23.1366 10.892 22.7907L12.2773 19.6107C12.4044 19.3195 12.3085 18.9792 12.048 18.7973L9.6 17.092C9.3427 16.8633 9.25662 16.4977 9.38483 16.1782C9.51305 15.8587 9.82798 15.6541 10.172 15.6667H13.048C13.3253 15.6669 13.5738 15.4954 13.672 15.236L15.224 11.144C15.3762 10.8504 15.6793 10.6661 16.01 10.6661C16.3407 10.6661 16.6438 10.8504 16.796 11.144L18.3453 15.236C18.4435 15.4954 18.692 15.6669 18.9693 15.6667H21.8413C22.1861 15.6523 22.5027 15.8563 22.6319 16.1762C22.7612 16.4961 22.6753 16.8628 22.4173 17.092L19.972 18.8C19.7115 18.9818 19.6156 19.3222 19.7427 19.6133L21.128 22.7907ZM27.334 27C27.334 27.5523 27.7817 28 28.334 28C28.8863 28 29.334 27.5523 29.334 27C29.334 26.4477 28.8863 26 28.334 26C27.7817 26 27.334 26.4477 27.334 27Z" fill="#90123F" />
              </svg>
            </span>
            <div class="card-text">
              <h2>300+</h2>
              <p>Data</p>
              <p>Scientists</p>
            </div>
          </div>
        </div>
        <img src='/Meliuk-liuk.png' alt='vecotr image' class="vector m-one" width="500px" />
        <img src='/Meliuk-liuk.png' alt='vecotr image' class="vector m-two" width="320px" />
      </section>
      <section class="about" id="about-id">
        <div className='container mx-auto px-10 lg:px-28 '>
          <div class="about-cards ">
            <div class="ellipse"></div>
            <h1 className='text-[32px] md:text-[44px]'>TOPICS TO BE COVERED</h1>
            <p>The <span className='font-semibold'>"Inclusive AI for development of social and commercial good for Diaspora and Africa"</span> event represents a pivotal moment in the journey toward harnessing the power of AI for inclusive development. With the support of Adanian Labs and its Centers of Excellence, the event promises to ignite discussions, collaborations, and partnerships that will drive AI innovation and adoption for the betterment of society and commerce.</p>
            <div className='flex flex-wrap gap-3 my-5'>
              {topics.map((topic) => (
                <div className='topics-card space-y-5 p-5'>
                  <h3>{topic.title}</h3>
                  <p>{topic.content}</p>
                </div>
              ))}

            </div>
          </div>
        </div>

        <img src='/Meliuk-liuk.png' alt='vecotr image' class="vector m-one" width="500px" />
        <img src='/Meliuk-liuk.png' alt='vecotr image' class="vector m-two" width="320px" />
      </section>
      <section class="about" id="speakers-id">
        <div className='container mx-auto px-10 lg:px-28 '>
          <div class="about-cards ">
            <div class="ellipse"></div>
            <h3 className='text-[#F39711] text-center '>OUR AMAZING SPEAKERS</h3>
            <h1 className='text-[32px] md:text-[44px] text-center'>The talented <span className='text-[#F39711]'>Speakers</span> that will be joining us!</h1>
            <p className='text-center my-3'>Speakers from leading tech industries from Africa & the Diaspora.</p>
            <div className='flex justify-between items-center flex-wrap my-10'>
              <div className='h-[360px] w-[360px] rounded-full object-contain bg-center bg-cover relative group hover:overlay' style={{ backgroundImage: "url('/speakers/kamara.jpg')" }}>

                <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                  <div>
                    <h2 className='text-white text-center'>JOHN KAMARA</h2>
                    <p className='text-white text-center'>Pan African Tech Entrepreneur - AI, Blockchain Specialist</p>
                    <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                      image: '/speakers/kamara.jpg',
                      bio: 'John Kamara is a Pan-Africa smart technology thought leader, investor, and technology entrepreneur with over 20 years of experience in business growth and market expertise. As the CEO and co-founder of Adanian Labs, he has a mission to actuate the tech revolution in Africa by investing in and building tech ventures, building smart technology capacity, launching tech tools to impact multiple sectors, and helping tech companies scale across the continent.John"s expertise spans AI, blockchain, IoT, and smart technologies, and he has successfully delivered multi- million dollar global initiatives and projects both online and offline in corporate and government sectors in Europe, Asia, and Africa. He began his career in the tech and telecoms space in the mid-1990s, working for international brands such as Digicel in Jamaica, O2 Ireland, BMC Software, and Google.John is a celebrated smart technology speaker who has graced multiple African and global stages, championing for AI and Blockchain support and adoption for critical sectors like health, education, agriculture, climate change, and financial services. He is an angel investor who spends a lot of time and resources mentoring and supporting youth in tech in Africa, while building firm foundations to help them build sustainable businesses.As a passionate advocate for the adoption of AI and Blockchain technologies in Africa, John"s work has had a profound impact on the African tech ecosystem, empowering young entrepreneurs and helping to build sustainable businesses across the continent. As a leader in the Pan-African smart technology industry, his knowledge and expertise make him an invaluable asset to any organization or project in the field.'
                    })}>View Profile</h3>
                  </div>
                </div>
              </div>
              <div className='h-[360px] w-[360px] rounded-full object-contain  bg-cover relative group hover:overlay ' style={{ backgroundImage: "url('/speakers/richard.jpg')" }}>
                <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                  <div>
                    <h2 className='text-white text-center uppercase'>Richard Foster-Fletcher</h2>
                    <p className='text-white text-center' style={{ fontSize: '10px' }}>Ethical artificial intelligence, blockchain, and climate change</p>
                    <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                      image: '/speakers/richard.jpg',
                      bio: 'Professional interests: Richard Foster-Fletcher is passionate about ethical artificial intelligence, blockchain, and climate change. He is driven by the vision of a kinder, fairer, and more sustainable world and seeks to develop a digital future that works for everyone. Richard is the Executive Chair at MKAI.org, focusing on bridging the digital divide, leveraging diverse perspectives to reduce AI harms, and building agricultural resilience in the face of climate change. As a lecturer, advisor, and author, he enthusiastically discusses topics like AI ethics, AI for good, and promoting diversity in the AI community. 1.	Causes Richard cares about: Richard is deeply involved in various environmental and social initiatives. As a member of the United Nations’ Resilience Frontiers Initiative Impact Advisory Group, he advises on communication strategies to support a global transition towards permanent resilience. He is also a working group member of the IEEE Global Initiative on Ethics of Extended Reality and a Blockchain and AI Advisor for the XR Safety Initiative, focusing on promoting privacy, security, and ethics in immersive environments.2.	Personal interests: Richard has recently discovered Yoga and commits to a daily ritual. He is passionate about music, particularly electronic music and enjoys travelling to experience new cultures and different ways of life. He swears by his 20-ingredient morning smoothie! 3.	Favourite quote: ‘No future without forgiveness” Archbishop Desmond Tutu'
                    })}>View Profile</h3>
                  </div>
                </div>
              </div>

              <div className='flex justify-between'>
                <div className='space-y-3'>
                  <div className='h-[160px] w-[160px] rounded-full object-contain  bg-cover relative group hover:overlay' style={{ backgroundImage: "url('/speakers/michael.jpg')" }}>
                    <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <div>
                        <h2 className='text-white text-center uppercase'>Michael livingstone  </h2>
                        <p className='text-white text-center' style={{ fontSize: '10px' }}>Founder & CEO of Dustid.</p>
                        <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                          image: '/speakers/michael.jpg',
                          bio: 'Michael Livingstone the visionary founder behind Dustid, a groundbreaking startup with global aspirations. With a passion for seamless connectivity, Michael embarked on a journey to revolutionise the way we manage our contacts across borders. His innovative virtual address book not only organises your network but transcends geographical boundaries, facilitating effortless communication and networking worldwide. Michael"s unwavering dedication to simplifying our digital lives makes Dustid a promising venture set to redefine global connections.'
                        })}>View Profile</h3>
                      </div>
                    </div>
                  </div>
                  <div className='h-[160px] w-[160px] rounded-full object-contain  bg-cover relative group hover:overlay' style={{ backgroundImage: "url('/speakers/niaz.jpg')" }}>
                    <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <div>
                        <h2 className='text-white text-center uppercase'>Niaz Chowdhury</h2>
                        <p className='text-white text-center ' style={{ fontSize: '10px' }}>Co-founder, Chairman and Director of Education at London School of Leadership</p>
                        <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                          image: '/speakers/niaz.jpg',
                          bio: ' The London School of Leadership, Investment, and Technology stands at the forefront of EdTech innovation. Catering to forward-thinking executives and passionate lifelong learners, this pioneering platform delivers cutting-edge courses on disruptive technologies, including Blockchain, AI, and Cybersecurity. It"s not just about staying updated; it"s about leading the future. Dive into a world where leadership converges with the latest tech advancements, only at this groundbreaking institution.'
                        })}>View Profile</h3>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='space-y-3'>
                  <div className='h-[160px] w-[160px] rounded-full object-contain  bg-cover relative group hover:overlay' style={{ backgroundImage: "url('/speakers/effa.jpg')" }}>
                    <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <div>
                        <h2 className='text-white text-center uppercase'>Effa Arikpo Ettah</h2>
                        <p className='text-white text-center'>the Ecosystem Manager at Turing Innovation Catalyst</p>
                        <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                          image: '/speakers/effa.jpg',
                          bio: 'Effa Arikpo Ettah is the Ecosystem Manager at Turing Innovation Catalyst Manchester and Project Manager - GM AI Foundry Project Manager at The University of Manchester.Though his background is in climate change/engineering, Effa has been active in AI-related industry–university collaborations for nearly five years. Effa has worked as part of various multi-university consortiums.'
                        })}>View Profile</h3>
                      </div>
                    </div>
                  </div>
                  <div className='h-[160px] w-[160px] rounded-full object-contain  bg-cover relative group hover:overlay' style={{ backgroundImage: "url('/speakers/sheila.jpg')" }}>
                    <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <div>
                        <h2 className='text-white text-center uppercase'>Sheila Aladejana</h2>
                        <p className='text-white text-center' style={{ fontSize: '10px' }}>Ms. MSc Applied AI and Data Analytics, LLB Hons, LLM</p>
                        <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                          image: '/speakers/sheila.jpg',
                          bio: 'Sheila is a renowned Lawyer with a passion for technology and has taken steps to contribute to business developments by taking advantage of advanced technology. She has a master’s degree in general law and is concluding her master"s in Applied Artificial Intelligence and Data Analytics.'
                        })}>View Profile</h3>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
            <div className='flex items-center justify-center flex-wrap gap-10'>
              <div className='flex flex-col md:flex-row gap-10'>
                <div className='space-y-3 flex flex-row md:flex-col items-center'>
                  <div className='h-[160px] w-[160px] rounded-full object-contain  bg-cover relative group hover:overlay' style={{ backgroundImage: "url('/speakers/jossi.jpg')" }}>
                    <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <div>
                        <h2 className='text-white text-center uppercase'>Natalie Jameson </h2>
                        <p className='text-white text-center' style={{ fontSize: '10px' }}>BA Hons : MSc | D.E.I. Fair FinTech Inventor | Adviser | Investor</p>
                        <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                          image: '/speakers/jossi.jpg',
                          bio: "Despite $26 billion a year spending on DEI we are still over 100 years from parity or equity. YZen is an inclusive language, culture and conduct intelligence tool, akin to a 'spellcheck with trackable equality policy compliance and guidance deployed real-time, cost-effectively, and integrated into everyone's daily workflow.. YZen safeguards individuals, brands, and balance sheets from inadvertent harm, bias, blind spots, and discriminatory conduct in communications.  YZen identifies and rectifies bias in written communications by employing natural language processing and machine learning, it empowers regulated businesses to transform equality policy into everyday practice."
                        })}>View Profile</h3>
                      </div>
                    </div>
                  </div>
                  <div className=' z-10 h-[160px] w-[160px] rounded-full object-contain  bg-contain relative group hover:overlay' style={{ backgroundImage: "url('/speakers/troy.jpg')" }}>
                    <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <div>
                        <h2 className='text-white text-center uppercase'>Troy Richards </h2>
                        <p className='text-white text-center' style={{ fontSize: '10px' }}>Founder & CEO
                          Museum of Diversity
                        </p>
                        <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                          image: '/speakers/troy.jpg',
                          bio: "I have a passion for supporting young people and to give back to disenfranchised communities, so to make a tangible change in their lives. I believe in the importance of cultural education through mentorship.  Throughout my career, I have developed and delivered leadership and mentorship programmes to and for various educational organisations globally. With the knowledge I have gained in the museum and cultural sector, alongside my technical skills in virtual reality; and being aware of the global issues regarding diversity, race and equity, I founded the Museum of Diversity whose mission is “To celebrate the diversity of cultural heritage originating from Africa using immersive technology”. "
                        })}>View Profile</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='space-y-3 flex flex-row md:flex-col items-center'>
                  <div className='h-[160px] w-[160px] rounded-full object-contain  bg-cover relative group hover:overlay' style={{ backgroundImage: "url('/speakers/jackson.jpg')" }}>
                    <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <div>
                        <h2 className='text-white text-center uppercase'>Mr. Nosa Aikodon</h2>
                        <p className='text-white text-center' style={{ fontSize: '10px' }}>Adanian Labs UK Senior Developer & Data Scientis</p>
                        <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                          image: '/speakers/jackson.jpg',
                          bio: "My research focuses on predictive modeling for patient care in intensive care units (ICUs). Using deep learning techniques, I have developed a model to anticipate patient decompensation, a critical aspect of ICU care. By analyzing time-series data, I've identified key physiological indicators and their temporal patterns. These insights enable early intervention and improved patient outcomes. My work contributes to the integration of advanced AI with clinical expertise for enhanced critical care"
                        })}>View Profile</h3>
                      </div>
                    </div>
                  </div>
                  <div className='z-10 h-[160px] w-[160px] rounded-full object-contain  bg-cover relative group hover:overlay' style={{ backgroundImage: "url('/speakers/sherin.jpg')" }}>
                    <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <div>
                        <h2 className='text-white text-center uppercase'>Sherin Mathew</h2>
                        <p className='text-white text-center' style={{ fontSize: '10px' }}>Founder & CEO of AI Tech UK | AI Ethicist & Futurist | Chief AI Officer</p>
                        <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                          image: '/speakers/sherin.jpg',
                          bio: "Sherin Mathew is a recognised AI Leader and leading AI Ethicist in the UK. A Founder, CEO, and Serial Entrepreneur, with a deep-rooted passion for wider AI Awareness, Impact, Ethics, and Intellectual Privacy.As a former IBM AI Expert at Global Business Services UK, Sherin’s specialism is transforming businesses into cognitive enterprises. Sherin is an award-winning CEO of AI Tech UK (https://www.ai-tech.uk/) and is responsible for delivering the National AI Strategy and democratising AI Awareness with UK businesses since 2018.Sherin is a Tech4good champion and a pioneer in the space of Ethics and Sustainability Management in Digital Transformation. Sherin is the founder of http://smartethics.net/, a groundbreaking open AI Ethics management platform forged with global partners and institutes.Sherin is an AI Strategist and board advisor for West Yorkshire Combined Authority, and also the Chief AI advisor for ambitious SMEs, DeepTech Startups, and the UK AI policy team (DSIT) with a mission to 'Disrupt the AI Disruption'! Sherin is an untiring advocate for the creative, innovative, and ethical elements of intelligent technologies. As an accomplished Public Speaker, AI Ethicist, and Evangelist, Sherin promotes thought-provoking ideas, shares his technical knowledge, and advises on best practices.As an AI Influencer, Sherin is recognised for delivering national-level strategy and engagements with global partners from the North. He has published thought-provoking papers and is listed as a Top leader in 60 Leaders in AI: https://www.60leaders.com/leader/sherin-mathew Top 5 Asians in Tech: https://asiansintech.com/top-100-asian-stars-in-uk-tech-2023-top-5s/ DataIQ-Top100 Leaders"
                        })}>View Profile</h3>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className='flex flex-col md:flex-row gap-10'>
                <div className='space-y-3  flex flex-row md:flex-col items-center'>
                  <div className='z-10 h-[160px] w-[160px] rounded-full object-contain  bg-cover relative group hover:overlay' style={{ backgroundImage: "url('/speakers/wayne.jpg')" }}>
                    <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <div>
                        <h2 className='text-white text-center uppercase'>Wayne Bennett</h2>
                        <p className='text-white text-center' style={{ fontSize: '10px' }}>Director & Founder; MADE4TECHGLOBAL</p>
                        <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                          image: '/speakers/wayne.jpg',
                          bio: 'Wayne Bennett is a Founder and Director of Made4Tech Global, a technology recruitment consultancy specialising in recruiting professionals within the Technology, Business Change & Transformation markets. Worked in recruitment for nearly 30 years, his experience in the industry encompasses, Marketing, Finance and Technology (23 years) discipline. Recruiting within the Technology space, Wayne has witnessed the change within the industry, encouraging him to advocate for female and diverse leadership and advise businesses on effective inclusion strategies in his role. Wayne has worked with organisations ranging from major corporates, SMEs, and technology-led start-ups, giving him exposure to placing professionals in positions ranging from senior management to “hands on” technical roles.'
                        })}>View Profile</h3>
                      </div>
                    </div>
                  </div>
                  <div className='z-10 h-[160px] w-[160px] rounded-full object-contain  bg-cover relative group hover:overlay' style={{ backgroundImage: "url('/speakers/wafula.jpg')" }}>
                    <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <div>
                        <h2 className='text-white text-center uppercase'>John Wafula</h2>
                        <p className='text-white text-center' style={{ fontSize: '10px' }}>Senior  Data Scientist and Commercial lead at AICE Africa </p>
                        <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                          image: '/speakers/wafula.jpg',
                          bio: 'John Wafula is  a Senior  Data Scientist and Commercial lead at AICE Africa He is responsible for data mining, modelling and analytics. His career is founded on building broad-base data intensive applications,overcoming complex architectural and scalability issues in diverse industries  spanning across functional business and finance units, healthcare, insurance, consumer welfare,Agriculture, marketing, product-promotion, sales, and IT (engineering).'
                        })}>View Profile</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='space-y-3  flex flex-row md:flex-col items-center'>
                  <div className='z-10 h-[160px] w-[160px] rounded-full object-contain  bg-cover relative group hover:overlay bg-center' style={{ backgroundImage: "url('/speakers/seun.jpg')" }}>
                    <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <div>
                        <h2 className='text-white text-center uppercase'>Dr. Seun Ajao </h2>
                        <p className='text-white text-center' style={{ fontSize: '10px' }}>senior lecturer (associate professor) in Data Science at Manchester Metropolitan University</p>
                        <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                          image: '/speakers/seun.jpg',
                          bio: 'Dr Seun Ajao is a senior lecturer (associate professor) in Data Science at Manchester Metropolitan University. Prior to joining MMU, he was co-investigator on the EU-funded Digital Innovation for Growth (DIfG) project, helping SMEs within the Sheffield City Region.A recipient of ACM SIGIR/Google grant. His PhD research paper was nominated for the best student paper award ICASSP 2019. He has been guest speaker and panel member at conferences on AI and data analytics topics.'
                        })}>View Profile</h3>
                      </div>
                    </div>
                  </div>
                  <div className='h-[160px] w-[160px] rounded-full object-contain  bg-cover relative group hover:overlay' style={{ backgroundImage: "url('/speakers/michaels.jpeg')" }}>
                    <div className='absolute inset-0 bg-[#F39711CC] opacity-0 group-hover:opacity-50 rounded-full'></div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <div>
                        <h2 className='text-white text-center uppercase'>MICHAEL EKPECHUE</h2>
                        <p className='text-white text-center' style={{ fontSize: '10px' }}> Event Director &Moderator</p>
                        <h3 className='text-black text-center mt-3 cursor-pointer' onClick={() => openSpeakerModal({
                          image: '/speakers/michaels.jpg',
                          bio: 'Michael"s industry experience is widely spread, from the corporate sector of software solutions to telecom, insurance underwriter to healthcare. Michael is the Executive Country Head AfyaRekod UK , a Disruptive digital health platform, built on blockchain technology, which supports medical data access and health care management for both patients and healthcare providers.Michael also doubles as the UK Director for Adanian Labs, a VentureBuilder and Venture Studio , using our unique positioning as purveyors of value , to create and spearhead the sharing economy for Africa and the rest of the world, through the building of a socio-economic ecosystem, revolving around modelled shared resources, creation, production, distribution, trade and consumption.Michael is the founder of Afyalife Foundation, a charity to support needy people ,families and communities globally.'
                        })}>View Profile</h3>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>
      </section>
      <section class="about" id="about-id">
        <div className='container mx-auto px-10 lg:px-28 '>
          <div class="about-cards ">
            <div class="ellipse"></div>

            <h1 className='text-[32px] md:text-[44px] text-center'>Event Highlights</h1>
            <div className='grid grid-cols-1 md:grid-cols-3'>
              <div className='highlights-card space-y-4 border-b-2 border-r-2 border-solid border-b-[#F39711CC] border-r-[#F39711CC] p-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <g clip-path="url(#clip0_135_637)">
                    <path d="M0 40.9657C1.9448 40.9657 3.8896 40.9657 5.9176 40.9657C5.4288 40.3833 5.4912 39.7073 5.4912 39.0521C5.4912 35.6097 5.4392 32.1569 5.512 28.7145C5.5536 26.6553 5.3144 24.6481 4.8464 22.6617C4.6696 21.9025 4.524 21.1225 4.368 20.3529C4.3368 20.1969 4.3368 20.0201 4.0664 20.0617C3.7544 20.1137 3.9208 20.3009 3.9416 20.4361C4.1184 21.3513 4.316 22.2665 4.4824 23.1921C4.524 23.4417 4.7736 23.7329 4.4512 23.9617C4.0456 24.2529 3.5984 24.4505 3.0784 24.2425C2.6624 24.0761 2.4024 23.7641 2.3712 23.3377C2.1944 21.4969 2.1528 19.6665 2.6624 17.8569C2.808 17.3369 3.0264 16.8481 3.3488 16.4113C3.7336 15.8913 4.212 15.5585 4.8776 15.4441C6.136 15.2257 7.4048 14.9969 8.6424 14.6745C10.3168 14.2377 11.96 14.4249 13.624 14.6953C14.4248 14.8201 15.2256 14.9657 16.016 15.1425C16.328 15.2153 16.4944 15.1425 16.6712 14.8617C17.5864 13.3953 18.5224 11.9497 19.448 10.4937C19.6456 10.1921 19.8536 9.92169 20.228 9.81769C20.6648 9.68249 21.0392 9.79689 21.3512 10.0881C21.6632 10.3793 21.8088 10.7537 21.6736 11.1801C21.6216 11.3569 21.5384 11.5233 21.4448 11.6793C20.3216 13.4473 19.188 15.2153 18.0648 16.9833C17.732 17.5137 17.2848 17.7217 16.6504 17.6073C15.2048 17.3369 13.7592 17.0873 12.3136 16.8377C12.1056 16.7961 11.8872 16.7441 11.6376 16.8169C11.9808 18.4913 12.2824 20.1657 12.6672 21.8193C13.1352 23.8681 13.3848 25.9169 13.3536 28.0281C13.2808 31.7721 13.3328 35.5265 13.3328 39.2705C13.3328 39.8529 13.3744 40.4457 12.9584 40.9345C13.156 41.0593 13.3328 41.0073 13.4888 41.0073C26.1768 41.0073 38.8752 41.0073 51.5632 41.0073C51.7192 41.0073 51.8648 40.9969 52.0208 40.9865C52.0208 42.0577 52.0208 43.1289 52.0208 44.2001C51.8544 44.2105 51.688 44.2209 51.5112 44.2209C34.5176 44.2209 17.5136 44.2209 0.52 44.2209C0.3536 44.2209 0.1872 44.2001 0.0104 44.2001C0 43.1081 0 42.0369 0 40.9657ZM10.192 40.9657C9.6616 40.3833 9.7552 39.7281 9.7552 39.0833C9.7552 35.1521 9.7552 31.2209 9.7552 27.2897C9.7552 27.1025 9.7552 26.9257 9.7552 26.7489C9.2144 26.7073 9.048 26.8945 9.048 27.4249C9.0792 31.2729 9.0584 35.1209 9.0584 38.9689C9.0584 39.6449 9.1624 40.3417 8.6424 40.9761C9.1936 40.9657 9.6408 40.9657 10.192 40.9657Z" fill="#F9FCFC" />
                    <path d="M25.5425 36.6704C25.7401 36.1192 25.8961 35.62 26.1769 35.152C26.4681 34.6632 26.8529 34.4136 27.4561 34.4344C28.6209 34.4656 29.7961 34.4656 30.9609 34.4344C31.5433 34.424 31.9177 34.6632 32.1985 35.1312C32.4793 35.5888 32.6457 36.0984 32.8433 36.6912C33.0617 36.0672 33.2281 35.5264 33.5505 35.0376C33.8209 34.6216 34.1745 34.424 34.6841 34.424C35.8801 34.4448 37.0865 34.4448 38.2929 34.424C38.8337 34.4136 39.1873 34.632 39.4681 35.0584C39.7801 35.5368 39.9257 36.088 40.1649 36.6496C40.3521 36.0568 40.5393 35.5264 40.8409 35.0376C41.1217 34.6008 41.4961 34.4032 42.0265 34.4136C43.1913 34.4344 44.3665 34.4448 45.5313 34.4136C46.1553 34.3928 46.5505 34.6632 46.8417 35.1728C47.3929 36.14 47.5905 37.2008 47.7361 38.2824C47.8089 38.8648 47.8089 39.4472 47.8609 40.0296C47.8817 40.2688 47.8193 40.3728 47.5593 40.3416C47.4761 40.3312 47.3929 40.3416 47.3097 40.3416C37.6689 40.3416 28.0177 40.3416 18.3769 40.352C17.9297 40.352 17.8257 40.2584 17.8465 39.8112C17.9297 38.5216 18.0441 37.2424 18.4809 36.0152C18.5641 35.776 18.6785 35.5576 18.7825 35.3288C19.0841 34.6944 19.5417 34.372 20.3009 34.4032C21.4345 34.4552 22.5681 34.4344 23.7017 34.4136C24.2425 34.4032 24.5961 34.6216 24.8769 35.048C25.1681 35.5576 25.3345 36.0984 25.5425 36.6704Z" fill="#F9FCFC" />
                    <path d="M6.43772 7.80005C8.24732 7.80005 9.68252 9.21445 9.68252 11.0032C9.68252 12.7816 8.22652 14.2272 6.43772 14.2272C4.65932 14.2272 3.18252 12.7712 3.17212 11.0032C3.17212 9.24565 4.63852 7.80005 6.43772 7.80005Z" fill="#F9FCFC" />
                    <path d="M46.124 31.5536C46.1136 32.8224 45.084 33.8416 43.7944 33.8416C42.4944 33.8416 41.444 32.7912 41.4544 31.512C41.4648 30.2536 42.5152 29.224 43.7944 29.224C45.084 29.2136 46.124 30.2536 46.124 31.5536Z" fill="#F9FCFC" />
                    <path d="M21.9128 33.8521C20.6024 33.8625 19.552 32.8328 19.552 31.5432C19.552 30.2848 20.6024 29.2449 21.8712 29.2345C23.1608 29.2241 24.232 30.2849 24.232 31.5641C24.232 32.8225 23.192 33.8417 21.9128 33.8521Z" fill="#F9FCFC" />
                    <path d="M29.172 33.8416C27.8928 33.8312 26.8528 32.812 26.8424 31.5432C26.832 30.2744 27.9136 29.2136 29.2032 29.224C30.4824 29.2344 31.512 30.264 31.5224 31.5328C31.5328 32.8224 30.4928 33.8416 29.172 33.8416Z" fill="#F9FCFC" />
                    <path d="M38.8233 31.5329C38.8233 32.8329 37.7833 33.8417 36.4625 33.8313C35.1833 33.8209 34.1433 32.7809 34.1433 31.5225C34.1433 30.2745 35.1937 29.2241 36.4729 29.2137C37.7729 29.2033 38.8233 30.2433 38.8233 31.5329Z" fill="#F9FCFC" />
                    <path d="M37.6897 26.0624C37.7001 27.1024 36.8889 27.9136 35.8489 27.924C34.7881 27.9344 33.9353 27.1024 33.9353 26.0624C33.9457 25.0536 34.7985 24.2112 35.8177 24.2112C36.8369 24.2112 37.6793 25.0432 37.6897 26.0624Z" fill="#F9FCFC" />
                    <path d="M47.7256 27.9241C46.6856 27.9241 45.864 27.1025 45.864 26.0729C45.864 25.0537 46.696 24.2217 47.7256 24.2113C48.7552 24.2009 49.6288 25.0745 49.6184 26.1041C49.5976 27.1233 48.7656 27.9241 47.7256 27.9241Z" fill="#F9FCFC" />
                    <path d="M41.7975 27.9241C40.7575 27.9345 39.9255 27.1233 39.9151 26.1041C39.9047 25.0641 40.7575 24.2009 41.7975 24.2113C42.8167 24.2217 43.6695 25.0641 43.6695 26.0729C43.6695 27.0921 42.8271 27.9137 41.7975 27.9241Z" fill="#F9FCFC" />
                    <path d="M19.8121 26.0936C19.8121 27.1232 18.9905 27.9344 17.9505 27.9448C16.9105 27.9448 16.0681 27.1336 16.0577 26.1144C16.0473 25.0848 16.9209 24.2216 17.9505 24.232C18.9905 24.2424 19.8121 25.064 19.8121 26.0936Z" fill="#F9FCFC" />
                    <path d="M22.0271 26.0729C22.0271 25.0537 22.8695 24.2217 23.8991 24.2217C24.9183 24.2217 25.7711 25.0537 25.7815 26.0729C25.7919 27.1025 24.9287 27.9449 23.8679 27.9345C22.8383 27.9241 22.0271 27.1129 22.0271 26.0729Z" fill="#F9FCFC" />
                    <path d="M29.8479 27.9344C28.8079 27.9344 27.9863 27.1128 27.9863 26.0936C27.9863 25.0744 28.8183 24.2424 29.8479 24.232C30.8983 24.2216 31.7511 25.0744 31.7407 26.1144C31.7199 27.144 30.8879 27.9448 29.8479 27.9344Z" fill="#F9FCFC" />
                    <path d="M31.9799 21.1329C31.9799 21.9337 31.2935 22.5993 30.4927 22.5785C29.7023 22.5681 29.0471 21.9129 29.0471 21.1329C29.0471 20.3321 29.7335 19.6665 30.5343 19.6769C31.3247 19.6977 31.9799 20.3633 31.9799 21.1329Z" fill="#F9FCFC" />
                    <path d="M45.9159 21.112C45.9263 21.9232 45.2607 22.5784 44.4495 22.5784C43.6591 22.568 43.0039 21.9232 42.9935 21.1432C42.9831 20.3528 43.6695 19.6768 44.4703 19.6768C45.2503 19.6872 45.9055 20.332 45.9159 21.112Z" fill="#F9FCFC" />
                    <path d="M27.3209 21.164C27.3105 21.9752 26.6345 22.6096 25.8129 22.5784C25.0225 22.5576 24.3777 21.8816 24.3881 21.112C24.4089 20.3424 25.0745 19.6872 25.8545 19.6768C26.6761 19.6872 27.3417 20.3632 27.3209 21.164Z" fill="#F9FCFC" />
                    <path d="M33.7063 21.1327C33.7063 20.3423 34.3511 19.6975 35.1415 19.6871C35.9423 19.6767 36.6287 20.3631 36.6287 21.1535C36.6183 21.9335 35.9735 22.5783 35.1831 22.5887C34.3615 22.5887 33.7063 21.9439 33.7063 21.1327Z" fill="#F9FCFC" />
                    <path d="M22.6721 21.1119C22.6825 21.9127 22.0585 22.5679 21.2577 22.5887C20.4361 22.6095 19.7705 21.9543 19.7705 21.1431C19.7705 20.3527 20.4153 19.6975 21.2161 19.6871C22.0065 19.6767 22.6617 20.3215 22.6721 21.1119Z" fill="#F9FCFC" />
                    <path d="M41.2672 21.1329C41.2776 21.9337 40.6432 22.5785 39.8424 22.5889C39.0208 22.5993 38.3552 21.9545 38.3552 21.1329C38.3552 20.3425 39.0208 19.6977 39.8112 19.6873C40.6016 19.6873 41.2568 20.3425 41.2672 21.1329Z" fill="#F9FCFC" />
                  </g>
                  <defs>
                    <clipPath id="clip0_135_637">
                      <rect width="52" height="52" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h2>Keynote Addresses</h2>
                <p>Visionary keynote speakers will set the stage for discussions on the future of AI in Africa and the diaspora.</p>
              </div>
              <div className='highlights-card space-y-4 border-b-2 border-r-2 border-solid border-b-[#F39711CC] border-r-[#F39711CC] p-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <g clip-path="url(#clip0_135_620)">
                    <path d="M51.9895 15.0386C51.4799 15.881 50.6063 15.5274 49.8367 15.6522C49.9927 16.037 50.1383 16.3802 50.2735 16.7442C50.4607 17.2746 50.2735 17.7218 49.8055 17.9194C49.3687 18.0962 48.9319 17.909 48.6823 17.4098C48.4639 16.9522 48.2663 16.4946 48.0895 16.0058C47.9751 15.6834 47.7983 15.5898 47.4551 15.5898C44.2103 15.6002 40.9655 15.6002 37.7311 15.6002C36.6391 15.6002 36.3999 15.361 36.3999 14.2482C36.3999 13.3018 36.3895 12.3554 36.3999 11.409C36.4103 10.0362 36.8991 8.95456 37.8871 8.07056C39.2391 10.6186 41.2983 12.0954 44.1999 12.1058C47.1015 12.1058 49.1711 10.6394 50.5335 8.08096C51.2719 8.68416 51.6671 9.46416 51.9063 10.3586C51.9271 10.4314 51.8959 10.5354 52.0103 10.5666C51.9895 12.0642 51.9895 13.5514 51.9895 15.0386Z" fill="#F9FCFC" />
                    <path d="M36.9718 52.0002C36.1294 51.4802 36.4934 50.617 36.3582 49.8578C35.9734 50.0138 35.6198 50.1594 35.2662 50.2946C34.7462 50.4818 34.2782 50.2946 34.091 49.837C33.9142 49.3898 34.091 48.9634 34.6006 48.7138C35.0582 48.4954 35.5158 48.2978 35.9838 48.1106C36.2646 48.0066 36.3998 47.861 36.4206 47.5282C36.4726 46.3218 36.9718 45.313 37.8662 44.4602C39.1974 47.0394 41.2982 48.5162 44.1998 48.5162C47.091 48.5162 49.171 47.0498 50.4918 44.4706C51.2198 45.0738 51.6254 45.8538 51.8646 46.7274C51.8854 46.8002 51.8542 46.9042 51.9686 46.9146C51.9686 48.4434 51.9686 49.9514 51.9686 51.4802C51.7502 51.6882 51.5214 51.865 51.2614 51.9898C46.5086 52.0002 41.7454 52.0002 36.9718 52.0002Z" fill="#F9FCFC" />
                    <path d="M0.551099 52.0001C0.103899 51.6361 0.0206986 51.1577 0.0310986 50.5961C0.0726986 49.6289 0.0310986 48.6617 0.0414986 47.7049C0.0518986 46.4153 0.551099 45.3545 1.5183 44.4497C2.8495 47.0289 4.9503 48.5057 7.8519 48.4953C10.7431 48.4849 12.8231 47.0185 14.1439 44.4497C15.0591 45.3025 15.5479 46.2905 15.6103 47.5073C15.6207 47.8297 15.7247 47.9961 16.0263 48.0897C16.4631 48.2457 16.8687 48.4329 17.2847 48.6201C17.9191 48.9009 18.1479 49.3481 17.9191 49.8369C17.7007 50.3257 17.2327 50.4609 16.6191 50.2217C16.3175 50.0969 15.9951 49.9721 15.6623 49.8369C15.4959 50.5961 15.9535 51.5425 14.9551 51.9793C10.1503 52.0001 5.3455 52.0001 0.551099 52.0001Z" fill="#F9FCFC" />
                    <path d="M51.9896 28.236C51.7088 28.7248 51.8232 29.2656 51.6984 29.7752C51.6464 29.9624 51.6464 30.1808 51.6048 30.3784C51.4904 30.8984 51.0952 31.1688 50.6168 31.096C50.1696 31.0232 49.8784 30.6488 49.92 30.1288C49.9824 29.3488 50.0968 28.5896 50.1696 27.8096C50.284 26.4368 50.2632 25.0432 50.1696 23.66C50.128 23.1296 50.492 22.7552 50.96 22.7344C51.4072 22.7136 51.7712 23.0152 51.8752 23.4936C51.896 23.5976 51.8856 23.7016 51.896 23.7952C51.896 23.868 51.9064 23.92 52 23.9512C51.9896 25.3864 51.9896 26.8112 51.9896 28.236Z" fill="#F9FCFC" />
                    <path d="M23.9928 52C23.6912 51.792 23.3168 51.8856 22.984 51.8232C22.4224 51.7192 22.1104 51.376 22.1624 50.8664C22.204 50.3776 22.6096 50.024 23.1712 50.0864C25.0744 50.3048 26.9776 50.3048 28.8704 50.0864C29.4216 50.024 29.8376 50.3672 29.8896 50.8456C29.952 51.3552 29.6088 51.6984 29.016 51.8128C28.6312 51.8856 28.2256 51.792 27.8616 51.9896C26.5616 52 25.272 52 23.9928 52Z" fill="#F9FCFC" />
                    <path d="M13.8944 33.4986C13.8944 32.8746 13.884 32.2506 13.9048 31.6162C13.9152 31.2938 13.8424 31.1586 13.4888 31.1794C13.208 31.2002 12.9064 31.2002 12.636 31.1378C11.8872 30.9714 11.3256 30.3266 11.3152 29.5466C11.3048 26.0314 11.3048 22.5058 11.3152 18.9906C11.3152 18.0858 12.0224 17.389 12.9272 17.3578C13.9672 17.3162 15.028 17.3474 16.068 17.3474C20.1136 17.3474 24.1488 17.389 28.184 17.337C29.7232 17.3162 30.4096 18.2418 30.3472 19.5002C30.3056 20.3634 30.3576 21.2266 30.3368 22.0794C30.3264 22.4642 30.4304 22.5682 30.8048 22.5474C33.1344 22.5266 35.4744 22.537 37.804 22.537C39.208 22.537 39.8632 23.1818 39.8632 24.5754C39.8632 27.8514 39.8632 31.1066 39.8632 34.3722C39.8632 35.7346 39.1976 36.4106 37.8456 36.3794C37.3984 36.369 37.2528 36.473 37.2632 36.9514C37.3048 38.137 37.2736 39.3226 37.2736 40.4978C37.2736 40.9346 37.18 41.3298 36.7536 41.5066C36.3064 41.6938 35.9528 41.5066 35.62 41.1738C34.1432 39.6866 32.656 38.2098 31.1792 36.7226C30.9504 36.4938 30.7216 36.3898 30.3888 36.3898C27.8824 36.4002 25.3864 36.4002 22.8904 36.4002C21.4656 36.4002 20.8312 35.7658 20.8312 34.3306C20.8312 33.457 20.8416 32.573 20.8208 31.6994C20.8208 31.533 20.9456 31.2938 20.696 31.2314C20.4776 31.169 20.2904 31.2522 20.1136 31.4394C19.6456 31.9386 19.1568 32.4066 18.6888 32.8746C17.6488 33.9146 16.5984 34.9442 15.5688 35.9946C15.2464 36.3274 14.8928 36.525 14.4352 36.3482C13.9672 36.161 13.884 35.745 13.9048 35.2874C13.9048 34.6842 13.8944 34.081 13.8944 33.4986ZM15.6312 33.4466C16.8376 32.2298 17.9504 31.1274 19.032 30.025C19.4168 29.6298 19.8224 29.3906 20.3632 29.4738C20.7584 29.5362 20.8312 29.3594 20.8208 29.0058C20.8 27.5082 20.8104 25.9898 20.8104 24.4922C20.8104 23.2338 21.4968 22.5682 22.7552 22.5578C24.5648 22.5578 26.364 22.5474 28.184 22.5682C28.5272 22.5682 28.6208 22.4746 28.6 22.1522C28.5792 21.289 28.5792 20.4258 28.6 19.573C28.6104 19.1778 28.4856 19.105 28.1216 19.105C23.2336 19.1154 18.356 19.1154 13.468 19.105C13.104 19.105 13 19.1778 13 19.573C13.0104 22.433 13.0104 25.2826 13.0104 28.153C13.0104 28.5898 12.8232 29.1618 13.0832 29.4218C13.3536 29.6922 13.9048 29.4946 14.352 29.4946C15.34 29.505 15.6104 29.7754 15.6104 30.7634C15.6312 31.585 15.6312 32.4378 15.6312 33.4466ZM27.7264 28.6106C28.5376 28.6106 29.3592 28.621 30.16 28.6106C30.7528 28.6002 31.096 28.3402 31.1792 27.893C31.2832 27.3106 30.8776 26.8738 30.16 26.8738C28.5584 26.8634 26.9568 26.8634 25.3448 26.8738C24.6584 26.8738 24.2632 27.217 24.2736 27.7474C24.284 28.2674 24.6688 28.5898 25.324 28.6002C26.1352 28.621 26.9256 28.6106 27.7264 28.6106ZM32.9056 32.0738C33.748 32.0738 34.6008 32.0842 35.4328 32.0738C36.0464 32.0634 36.4 31.689 36.3688 31.1794C36.3584 30.6906 36.0256 30.3474 35.464 30.3474C33.7584 30.337 32.0528 30.3474 30.3368 30.3474C29.9728 30.3474 29.692 30.5138 29.536 30.857C29.2656 31.4706 29.692 32.0426 30.4408 32.0634C31.2728 32.0946 32.0944 32.0738 32.9056 32.0738ZM34.6736 26.8946C34.6736 26.8842 34.6736 26.8738 34.6736 26.853C34.3408 26.8634 33.9976 26.8634 33.6648 26.905C33.228 26.9674 32.916 27.3418 32.9368 27.737C32.9784 28.153 33.1656 28.4858 33.6232 28.5482C34.3096 28.6418 34.996 28.6522 35.6824 28.5482C36.1504 28.4858 36.3792 28.153 36.3688 27.6954C36.3584 27.2274 36.088 26.9466 35.62 26.8946C35.3184 26.8634 34.9856 26.8946 34.6736 26.8946ZM26.0416 30.3474C25.7192 30.3474 25.4072 30.3266 25.0848 30.3578C24.6168 30.3994 24.3464 30.6906 24.3048 31.1482C24.284 31.6058 24.5128 31.9386 24.9704 32.0114C25.6568 32.1258 26.3432 32.1154 27.0296 32.0218C27.4976 31.9594 27.7264 31.6266 27.7264 31.169C27.7368 30.7322 27.3936 30.389 26.936 30.3578C26.6344 30.3266 26.3328 30.3474 26.0416 30.3474Z" fill="#F9FCFC" />
                    <path d="M39 41.2569C39.0936 39.5929 39.936 38.0537 41.6832 37.0657C43.4616 36.0777 45.2296 36.1713 46.9456 37.2321C47.2992 37.4505 47.4448 37.4089 47.5696 37.0449C47.6632 36.7953 47.7984 36.5561 47.9232 36.3169C48.2144 35.7865 48.6824 35.5993 49.14 35.8281C49.5976 36.0569 49.7224 36.5561 49.4624 37.0865C49.2336 37.5545 48.9944 38.0121 48.7344 38.4697C48.6096 38.6985 48.5992 38.8753 48.724 39.1145C50.4712 42.5153 48.36 46.3737 44.564 46.7481C41.6832 47.0809 39 44.5849 39 41.2569Z" fill="#F9FCFC" />
                    <path d="M2.65192 41.236C2.65192 40.7264 2.83912 39.9152 3.27592 39.1664C3.40072 38.9376 3.41112 38.7504 3.27592 38.5216C3.02632 38.064 2.77672 37.6064 2.54792 37.1384C2.27752 36.5872 2.39192 36.1192 2.83912 35.8696C3.28632 35.6304 3.76472 35.7968 4.05592 36.3272C4.26392 36.6912 4.45112 37.076 4.63832 37.4504C4.99192 37.2632 5.33512 37.0552 5.68872 36.8992C8.33032 35.7136 11.2007 36.7952 12.5423 39.4784C13.7175 41.8184 12.6983 44.8448 10.2647 46.176C6.84312 48.0272 2.59992 45.4896 2.65192 41.236Z" fill="#F9FCFC" />
                    <path d="M44.1167 10.4002C41.4751 10.2962 39.4887 8.5386 39.0831 5.949C39.0311 5.6578 38.9167 5.4602 38.6463 5.325C38.1887 5.0858 37.7311 4.8154 37.2839 4.5346C36.7743 4.2122 36.6391 3.7234 36.8991 3.2866C37.1487 2.881 37.6375 2.777 38.1471 3.037C38.3863 3.1618 38.6255 3.2762 38.8439 3.4322C39.1663 3.661 39.2599 3.5466 39.4055 3.2138C40.4663 0.655399 43.3679 -0.623801 45.9575 0.312199C48.3183 1.1754 49.7847 3.7234 49.3167 6.1258C48.7967 8.6426 46.5607 10.4834 44.1167 10.4002Z" fill="#F9FCFC" />
                    <path d="M7.5606 10.4001C5.6262 10.3065 4.0038 9.2977 3.099 7.2801C2.2774 5.4185 2.4854 3.5881 3.7958 1.9969C6.375 -1.1439 11.0342 -0.457498 12.615 3.2657C12.7398 3.5569 12.8438 3.6297 13.1142 3.4425C13.3846 3.2657 13.6654 3.1097 13.9566 2.9745C14.4038 2.7665 14.8822 2.9121 15.111 3.2761C15.3502 3.6817 15.2462 4.1705 14.7886 4.4617C14.3206 4.7633 13.8526 5.0441 13.3534 5.3041C13.083 5.4393 12.9686 5.6369 12.9166 5.9281C12.5422 8.5489 10.483 10.3273 7.5606 10.4001Z" fill="#F9FCFC" />
                    <path d="M2.19431 15.6105C1.74711 15.6105 1.37271 15.6209 0.977508 15.6105C0.426308 15.5897 0.0623083 15.3193 0.0623083 14.8513C0.0623083 13.3745 -0.0936917 11.8977 0.155908 10.4313C0.311908 9.50566 0.790308 8.70486 1.53911 8.06006C2.06951 9.14166 2.78711 10.0465 3.74391 10.7745C6.97831 13.2393 11.9079 12.1993 13.8527 8.62166C14.1751 8.03926 14.1855 8.03926 14.6015 8.52806C15.3087 9.36006 15.6311 10.3377 15.6311 11.4193C15.6311 12.4385 15.6415 13.4577 15.6311 14.4561C15.6311 15.2985 15.3087 15.6001 14.4559 15.6001C11.1591 15.6001 7.87271 15.6105 4.56551 15.5897C4.22231 15.5897 4.04551 15.6833 3.93111 16.0057C3.76471 16.4633 3.56711 16.9105 3.35911 17.3577C3.11991 17.8777 2.66231 18.0857 2.21511 17.9089C1.73671 17.7009 1.54951 17.2433 1.76791 16.6921C1.90311 16.3385 2.03831 16.0057 2.19431 15.6105Z" fill="#F9FCFC" />
                    <path d="M0.0519698 26.5201C-0.0104302 25.5113 0.0727698 24.5857 0.14557 23.6601C0.18717 23.0881 0.59277 22.7137 1.10237 22.7553C1.60157 22.7969 1.91357 23.1713 1.88237 23.7641C1.77837 25.1161 1.75757 26.4577 1.87197 27.8201C1.93437 28.5481 2.03837 29.2553 2.10077 29.9833C2.16317 30.6489 1.89277 31.0545 1.37277 31.1169C0.85277 31.1793 0.47837 30.8465 0.39517 30.1913C0.20797 28.9433 0.0831698 27.6953 0.0519698 26.5201Z" fill="#F9FCFC" />
                    <path d="M18.9175 2.75613C18.4495 2.75613 18.1063 2.47533 18.0231 2.05933C17.9503 1.64333 18.1791 1.22733 18.6367 1.08173C19.5311 0.790527 20.4567 0.582527 21.3823 0.416127C22.0271 0.301727 22.6823 0.228927 23.3271 0.135327C23.9407 0.0625267 24.3775 0.353727 24.4607 0.873727C24.5231 1.36253 24.1799 1.76813 23.5871 1.84093C22.0999 2.02813 20.6231 2.28813 19.1879 2.71453C19.0839 2.75613 18.9799 2.75613 18.9175 2.75613Z" fill="#F9FCFC" />
                    <path d="M28.4544 0.124993C30.1808 0.301793 31.8136 0.592993 33.384 1.08179C33.8936 1.23779 34.1328 1.70579 34.008 2.14259C33.8832 2.58979 33.436 2.88099 32.9264 2.72499C31.408 2.30899 29.8792 2.02819 28.3192 1.82019C27.8408 1.75779 27.5288 1.33139 27.5704 0.894593C27.6224 0.447393 28.0176 0.114593 28.4544 0.124993Z" fill="#F9FCFC" />
                  </g>
                  <defs>
                    <clipPath id="clip0_135_620">
                      <rect width="52" height="52" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h2>Panel Discussions</h2>
                <p>Expert panels will delve deep into topics such as AI policy, the role of AI in sustainable development, data transformation and entrepreneurship.</p>
              </div>
              <div className='highlights-card space-y-4 border-b-2 border-r-2 border-solid border-b-[#F39711CC] border-r-[#F39711CC]  md:border-r-0 p-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <g clip-path="url(#clip0_135_678)">
                    <path d="M43.0871 9.63039C43.6487 9.44319 44.1687 9.22479 44.7095 9.11039C46.5087 8.72559 48.0583 9.23519 49.2023 10.6704C50.3359 12.0848 50.5439 13.6864 49.7639 15.34C48.9735 17.0352 47.5799 17.9192 45.7183 17.9296C39.7487 17.9608 33.7687 17.94 27.7991 17.94C26.6447 17.94 25.4799 17.9296 24.3255 17.9504C24.0135 17.9504 23.8263 17.888 23.6703 17.5864C22.8175 15.8912 21.6319 14.4664 20.1031 13.3536C19.7391 13.0936 19.7807 12.8128 19.8535 12.48C20.2799 10.4936 22.0687 9.02719 24.0967 8.98559C25.0223 8.96479 25.0223 8.96479 25.1471 8.05999C25.7399 3.89999 28.3399 1.03999 32.3023 0.197586C37.2839 -0.863214 42.3383 2.75599 42.9207 7.79999C42.9935 8.38239 43.0351 8.97519 43.0871 9.63039ZM34.0703 2.74559C34.0703 1.75759 34.0703 1.75759 33.3839 1.83039C29.9415 2.20479 27.2999 4.84639 26.9255 8.28879C26.8527 8.97519 26.8527 8.97519 27.5599 8.97519C27.8407 8.97519 28.1215 8.95439 28.4023 8.97519C28.6519 8.99599 28.6935 8.89199 28.7143 8.66319C29.0055 5.91759 30.7111 4.04559 33.3839 3.68159C34.0599 3.58799 34.1639 3.33839 34.0807 2.79759C34.0599 2.77679 34.0703 2.75599 34.0703 2.74559ZM25.1055 13.4264C25.0951 14.3936 25.8751 15.2152 26.8423 15.2464C27.8303 15.2776 28.6727 14.4664 28.6935 13.4784C28.7039 12.5112 27.9239 11.6896 26.9567 11.6584C25.9479 11.6376 25.1159 12.428 25.1055 13.4264ZM34.0703 11.6584C33.0927 11.6584 32.2919 12.4488 32.2815 13.416C32.2711 14.404 33.0823 15.236 34.0703 15.236C35.0375 15.236 35.8487 14.4456 35.8591 13.468C35.8695 12.4904 35.0583 11.6584 34.0703 11.6584ZM39.4471 13.4264C39.4367 14.3936 40.2167 15.2152 41.1839 15.2464C42.1719 15.2776 43.0143 14.4768 43.0351 13.4888C43.0455 12.5216 42.2655 11.7 41.2983 11.6688C40.2895 11.6376 39.4575 12.428 39.4471 13.4264Z" fill="#F9FCFC" />
                    <path d="M14.8616 26.8425C14.404 25.8337 13.832 24.9289 13.6552 23.8681C13.8424 23.7849 13.9256 23.9305 14.0088 23.9929C15.6104 25.1889 17.368 26.0625 19.292 26.5825C19.552 26.6553 19.7392 26.7073 19.7392 27.0713C19.708 29.1825 19.7496 31.2937 19.708 33.3945C19.656 35.9321 17.9296 38.2409 15.5272 39.0729C15.2152 39.1769 15.0384 39.2081 14.9344 38.8025C14.7992 38.2513 14.456 37.7937 14.0712 37.3257C14.7784 36.9721 15.3504 36.4833 15.7768 35.8281C15.9952 35.4849 16.0576 35.2457 15.5896 35.1105C15.5584 35.1001 15.5272 35.0793 15.4856 35.0585C15.184 34.9129 14.8928 34.6737 14.5808 34.6321C14.196 34.5905 14.1648 35.0689 13.9256 35.2873C13 36.1401 11.5648 35.9945 10.868 34.9025C10.66 34.5697 10.504 34.5697 10.2232 34.7361C10.0048 34.8713 9.76556 34.9961 9.52636 35.0897C9.17276 35.2353 8.95436 35.4017 9.32876 35.8281C8.23676 35.7865 7.30076 36.0465 6.42716 36.6081C5.76156 35.6305 5.39756 34.5593 5.37676 33.4049C5.34556 31.2417 5.35596 29.0785 5.36636 26.9153C5.37676 25.6881 6.21916 24.6897 7.42556 24.3673C7.65436 24.3049 7.78956 24.3361 7.95596 24.5025C9.93196 26.4265 11.9912 27.1337 14.8616 26.8425ZM10.5976 31.3665C10.8992 31.3665 11.0968 31.3457 11.2736 31.3665C11.596 31.4081 11.6896 31.2937 11.6376 30.9609C11.44 29.7545 10.4208 28.7873 9.21436 28.6833C7.99756 28.5793 6.82236 29.3281 6.41676 30.4825C6.12556 31.3145 6.16716 31.3665 7.05116 31.3665C7.19676 31.3665 7.35276 31.3561 7.49836 31.3665C7.82076 31.3873 8.03916 31.3457 8.19516 30.9609C8.44476 30.3473 9.38076 30.2433 9.63036 30.8257C9.89036 31.4185 10.2544 31.3977 10.5976 31.3665ZM17.8984 31.3665C18.0856 31.3665 18.2728 31.3457 18.46 31.3665C18.824 31.4185 18.8448 31.2417 18.8032 30.9505C18.6056 29.7441 17.576 28.7873 16.3696 28.6833C15.1528 28.5793 13.9776 29.3489 13.5824 30.4929C13.3016 31.3041 13.3432 31.3561 14.1752 31.3561C14.3624 31.3561 14.5496 31.3457 14.7368 31.3561C15.028 31.3769 15.2152 31.3353 15.3504 30.9921C15.6 30.3473 16.5672 30.2225 16.8168 30.8361C17.0664 31.4705 17.472 31.3561 17.8984 31.3665Z" fill="#F9FCFC" />
                    <path d="M43.0351 32.2608C40.4455 32.2608 37.8455 32.2608 35.2559 32.2608C34.3719 32.2608 34.0703 31.9696 34.0703 31.096C34.0703 30.056 34.0703 29.0056 34.0703 27.9656C34.0703 27.2064 34.3927 26.884 35.1623 26.884C40.4039 26.884 45.6455 26.884 50.8871 26.884C51.6567 26.884 51.9895 27.2064 51.9895 27.9552C51.9999 29.0368 51.9999 30.1184 51.9895 31.2C51.9895 31.928 51.6567 32.2504 50.9183 32.2504C48.2975 32.2712 45.6663 32.2608 43.0351 32.2608ZM36.7951 30.472C37.6479 30.472 37.6479 30.472 37.6479 29.64C37.6479 28.6728 37.6479 28.6728 36.7119 28.6728C35.8591 28.6728 35.8591 28.6728 35.8591 29.5048C35.8591 30.472 35.8591 30.472 36.7951 30.472ZM41.2359 29.5984C41.2359 28.6832 41.2359 28.6832 40.3103 28.6832C39.4471 28.6832 39.4471 28.6832 39.4471 29.5568C39.4471 30.472 39.4471 30.472 40.3727 30.472C41.2359 30.472 41.2359 30.472 41.2359 29.5984Z" fill="#F9FCFC" />
                    <path d="M43.0871 34.06C45.6663 34.06 48.2351 34.06 50.8143 34.06C51.6983 34.06 51.9895 34.3512 51.9895 35.2248C51.9895 36.2544 51.9895 37.2736 51.9895 38.3032C51.9895 39.1144 51.6775 39.4368 50.8871 39.4368C45.6455 39.4368 40.4039 39.4368 35.1623 39.4368C34.3927 39.4368 34.0703 39.1144 34.0703 38.3552C34.0599 37.2944 34.0703 36.2336 34.0703 35.1624C34.0703 34.372 34.3927 34.06 35.2039 34.06C37.8247 34.0496 40.4559 34.06 43.0871 34.06ZM46.6127 36.7744C46.6127 35.8488 46.6127 35.8488 45.6975 35.8488C44.8239 35.8488 44.8239 35.8488 44.8239 36.712C44.8239 37.6376 44.8239 37.6376 45.7391 37.6376C46.6127 37.6376 46.6127 37.6376 46.6127 36.7744ZM48.4119 36.7016C48.4119 37.6376 48.4119 37.6376 49.3271 37.6376C50.2007 37.6376 50.2007 37.6376 50.2007 36.7744C50.2007 35.8384 50.2007 35.8384 49.2855 35.8384C48.4119 35.8488 48.4119 35.8488 48.4119 36.7016Z" fill="#F9FCFC" />
                    <path d="M43.0455 46.6024C40.4559 46.6024 37.8559 46.6024 35.2663 46.6024C34.3511 46.6024 34.0703 46.3112 34.0703 45.396C34.0703 44.356 34.0599 43.3056 34.0703 42.2656C34.0807 41.5688 34.4031 41.236 35.0999 41.2256C40.3935 41.2256 45.6975 41.2256 50.9911 41.2256C51.6463 41.2256 51.9895 41.5688 51.9895 42.2344C51.9999 43.3576 51.9999 44.4704 51.9895 45.5936C51.9791 46.2696 51.6359 46.6024 50.9391 46.6024C48.3079 46.6024 45.6767 46.6024 43.0455 46.6024ZM36.7951 43.0144C35.8591 43.0144 35.8591 43.0144 35.8591 43.9192C35.8591 44.8032 35.8591 44.8032 36.7639 44.8032C37.6479 44.8032 37.6479 44.8032 37.6479 43.8984C37.6479 43.0144 37.6479 43.0144 36.7951 43.0144ZM40.3935 44.8032C41.2359 44.8032 41.2359 44.8032 41.2359 43.9712C41.2359 43.0144 41.2359 43.0144 40.2895 43.0144C39.4471 43.0144 39.4471 43.0144 39.4471 43.8464C39.4471 44.8032 39.4471 44.8032 40.3935 44.8032Z" fill="#F9FCFC" />
                    <path d="M12.0638 24.9288C10.2958 24.4192 9.07901 23.4208 8.31981 21.892C8.15341 21.5592 8.01821 21.5072 7.71661 21.6632C7.48781 21.7776 7.23821 21.8712 6.99901 21.9544C6.68701 22.0584 6.37501 22.152 6.65581 22.5784C6.77021 22.7448 6.59341 22.776 6.52061 22.7968C6.13581 22.9216 5.79261 23.1608 5.42861 23.3688C5.24141 19.9368 8.18461 16.172 12.5526 16.1304C15.9638 16.0992 20.311 18.8656 19.6974 24.8144C16.4006 23.9824 13.9774 21.8608 11.6686 19.3024C11.679 21.2576 11.5022 23.0568 12.0638 24.9288Z" fill="#F9FCFC" />
                    <path d="M23.3168 26.988C22.828 26.8736 22.3808 26.8632 21.9336 26.9048C21.58 26.936 21.5072 26.8112 21.5072 26.468C21.4864 24.96 21.6008 23.4416 21.4136 21.944C20.8208 17.316 16.1304 13.7488 11.5024 14.4248C6.75996 15.1112 3.59836 18.7616 3.59836 23.5456C3.59836 24.5024 3.56716 25.4488 3.60876 26.4056C3.62956 26.8528 3.48396 26.9464 3.07836 26.9048C2.67276 26.8736 2.25676 26.884 1.83036 26.988C1.73676 23.6704 1.57036 20.384 3.54636 17.4304C6.03196 13.7384 10.4208 11.8976 14.8512 12.8128C19.0736 13.6864 22.4952 17.2848 23.1712 21.6112C23.452 23.3688 23.2648 25.168 23.3168 26.988Z" fill="#F9FCFC" />
                    <path d="M15.6935 51.3761C16.3279 48.5473 16.9311 45.8121 17.5655 42.9937C18.0439 43.3681 18.4183 43.7425 18.7511 44.1481C19.9679 45.6249 20.5919 47.3201 20.6127 49.2337C20.6231 50.0345 20.6023 50.8353 20.6231 51.6361C20.6335 51.9065 20.5503 51.9689 20.2799 51.9793C18.8239 52.0313 18.8239 52.0417 18.8239 50.5753C18.8239 49.9617 18.8135 49.3481 18.8343 48.7241C18.8447 48.4537 18.7615 48.3913 18.4911 48.3809C17.0351 48.3289 17.0351 48.3185 17.0351 49.7849C17.0351 50.3985 17.0247 51.0121 17.0455 51.6361C17.0559 51.9065 16.9727 51.9793 16.7023 51.9793C13.9359 51.9689 11.1799 51.9689 8.41349 51.9793C8.08069 51.9793 8.05989 51.8337 8.07029 51.5841C8.08069 50.6481 8.05989 49.7225 8.08069 48.7865C8.09109 48.4745 8.00789 48.3809 7.68549 48.3809C6.28149 48.3601 6.28149 48.3497 6.28149 49.7329C6.28149 50.3673 6.27109 51.0017 6.29189 51.6361C6.30229 51.8961 6.22949 51.9793 5.95909 51.9897C4.49269 52.0521 4.52389 52.0521 4.49269 50.5857C4.45109 48.7761 4.57589 47.0081 5.51189 45.3961C5.54309 45.3441 5.56389 45.3025 5.59509 45.2505C6.31269 44.0025 6.52069 43.9505 7.78949 44.6265C8.02869 44.7513 7.99749 44.9697 8.03909 45.1465C8.47589 47.0705 8.90229 48.9945 9.32869 50.9185C9.35989 51.0433 9.35989 51.1785 9.49509 51.2929C10.4207 50.0553 11.3671 48.8281 12.2719 47.5801C12.5319 47.2265 12.6359 47.2473 12.8855 47.5801C13.7695 48.8385 14.7055 50.0553 15.6935 51.3761Z" fill="#F9FCFC" />
                    <path d="M0.010221 34.9441C0.540621 35.2977 1.02942 35.5681 1.57022 35.6929C1.74702 35.7345 1.83022 35.8177 1.79902 35.9945C1.78862 36.0465 1.79902 36.1089 1.79902 36.1609C1.83022 38.5113 2.76622 39.4265 5.11662 39.4265C5.16862 39.4265 5.23102 39.4265 5.28302 39.4265C5.95902 39.4785 6.51022 39.4577 6.90542 38.6881C7.27982 37.9497 8.10142 37.6585 8.95422 37.6377C9.56782 37.6273 10.1814 37.6273 10.8054 37.6377C12.2926 37.6689 13.4574 38.8649 13.4574 40.3313C13.4574 41.7977 12.2718 42.9729 10.7846 43.0041C10.1918 43.0145 9.58862 43.0145 8.99582 43.0041C7.93502 42.9833 7.12382 42.5049 6.63502 41.5793C6.46862 41.2673 6.29182 41.2153 5.99022 41.2153C4.95022 41.2049 3.91022 41.3193 2.89102 40.9241C1.20622 40.2585 0.051821 38.6881 0.010221 36.8889C-0.010579 36.2753 0.010221 35.6617 0.010221 34.9441Z" fill="#F9FCFC" />
                    <path d="M12.6256 0.010498C15.0904 0.052098 17.3056 0.894498 19.1984 2.5793C19.448 2.7977 19.5416 2.9641 19.2296 3.2137C18.8968 3.4841 18.6472 3.9729 18.2936 4.0561C17.9504 4.1393 17.6696 3.6089 17.3472 3.3801C14.2584 1.1233 10.0464 1.3105 7.17596 3.8689C6.90556 4.1081 6.78076 4.1289 6.52076 3.8689C5.49116 2.8289 5.47036 2.8393 6.66636 1.9657C8.42396 0.676098 10.3896 0.041698 12.6256 0.010498Z" fill="#F9FCFC" />
                    <path d="M21.5174 31.3977C21.5174 30.6177 21.5278 29.8273 21.507 29.0473C21.4966 28.7665 21.5694 28.6729 21.871 28.6729C23.535 28.6313 24.6478 29.3385 25.0014 30.7009C25.4278 32.3337 24.2422 33.9561 22.5678 34.0601C21.507 34.1225 21.507 34.1225 21.5174 33.0825C21.5174 32.5209 21.5174 31.9593 21.5174 31.3977Z" fill="#F9FCFC" />
                    <path d="M3.60868 31.4288C3.60868 32.2088 3.60868 32.9992 3.60868 33.7792C3.60868 33.8936 3.67108 34.008 3.46308 34.0704C1.85108 34.5072 0.0414799 33.1448 -0.000120058 31.4496C-0.0313201 29.952 1.13348 28.7352 2.63108 28.6936C2.83908 28.6832 3.04708 28.704 3.24468 28.6832C3.51508 28.652 3.58788 28.7664 3.58788 29.0264C3.56708 29.8272 3.57748 30.628 3.57748 31.4288C3.59828 31.4288 3.59828 31.4288 3.60868 31.4288Z" fill="#F9FCFC" />
                    <path d="M12.5944 3.59839C14.144 3.62959 15.5272 4.14959 16.7128 5.17919C16.9208 5.36639 16.9832 5.48079 16.744 5.69919C16.4216 5.97999 16.1824 6.41679 15.808 6.57279C15.4024 6.73919 15.1632 6.19839 14.82 6.01119C13.1976 5.08559 11.2008 5.22079 9.69277 6.43759C9.43277 6.64559 9.27677 6.69759 9.07917 6.41679C9.01677 6.32319 8.92317 6.26079 8.83997 6.17759C8.03917 5.37679 8.03917 5.37679 8.99597 4.71119C10.0776 3.96239 11.2736 3.60879 12.5944 3.59839Z" fill="#F9FCFC" />
                    <path d="M42.1303 22.4122C42.1303 23.473 42.1199 24.5442 42.1407 25.605C42.1511 25.917 42.0575 26.0002 41.7455 26.0106C40.3415 26.0314 40.3415 26.0418 40.3415 24.6586C40.3415 22.8698 40.3519 21.081 40.3311 19.2818C40.3311 18.9178 40.4247 18.8242 40.7887 18.8242C42.1303 18.8346 42.1303 18.8138 42.1303 20.1762C42.1303 20.9146 42.1303 21.6634 42.1303 22.4122Z" fill="#F9FCFC" />
                    <path d="M12.7192 7.18648C12.74 7.18648 12.9168 7.19688 13.0728 7.23848C13.572 7.36328 14.3104 7.50888 14.3208 7.98728C14.3312 8.42408 13.6448 8.75688 13.2808 9.14168C13.1664 9.25608 13.0832 9.14168 12.9896 9.10008C12.8232 9.01688 12.6048 8.90248 12.4592 8.99608C11.8456 9.40168 11.5856 8.89208 11.2528 8.55928C10.5768 7.89368 10.608 7.77928 11.5024 7.40488C11.8352 7.25928 12.1992 7.16568 12.7192 7.18648Z" fill="#F9FCFC" />
                    <path d="M14.7991 47.1226C14.7159 47.081 14.6951 47.0706 14.6847 47.0602C14.3727 46.613 13.7487 46.1866 13.8007 45.7186C13.8527 45.2506 14.4247 44.8346 14.7887 44.4186C14.9759 44.2002 15.1631 43.7322 15.3711 43.8466C15.6519 44.0026 15.3815 44.4082 15.3295 44.6994C15.1839 45.4898 14.9863 46.2802 14.7991 47.1226Z" fill="#F9FCFC" />
                    <path d="M10.3166 47.1848C10.1606 46.5088 10.015 45.9368 9.9006 45.3544C9.8694 45.1776 9.703 44.8968 9.9006 44.8344C10.1502 44.7616 10.4934 44.6784 10.743 44.928C10.9302 45.1256 11.0966 45.3544 11.2838 45.5624C11.4086 45.708 11.3566 45.812 11.2526 45.9472C10.951 46.332 10.6702 46.7168 10.3166 47.1848Z" fill="#F9FCFC" />
                  </g>
                  <defs>
                    <clipPath id="clip0_135_678">
                      <rect width="52" height="52" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h2>PDI Model Unveiling</h2>
                <p>
                  A presentation on the PDI Model and its impact on data transformation and AI adoption.
                </p>
              </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
              <div className='highlights-card space-y-4 border-b-2 border-b-[#F39711CC] md:border-b-0 border-r-2 border-solid  border-r-[#F39711CC] p-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <g clip-path="url(#clip0_135_702)">
                    <path d="M34.3824 31.72C28.912 31.72 23.4416 31.72 17.9712 31.72C17.0248 31.72 16.7544 31.4496 16.7544 30.524C16.7544 28.2672 16.744 26.0104 16.7648 23.7536C16.7648 23.4 16.7024 23.2856 16.3176 23.348C15.4336 23.504 14.5392 23.6288 13.6448 23.7328C13.2912 23.7744 13.2184 23.9096 13.2184 24.2424C13.2288 26.5928 13.2288 28.9432 13.2288 31.2936C13.2288 37.4296 13.2184 43.5552 13.2392 49.6912C13.2392 50.1488 13.1248 50.2528 12.6776 50.2528C10.088 50.232 7.4984 50.232 4.9088 50.2528C4.4928 50.2528 4.3992 50.1488 4.4096 49.7432C4.4304 45.6872 4.4096 41.6312 4.4304 37.5752C4.4304 37.1176 4.316 37.0136 3.8688 37.0136C1.4352 37.024 0 35.568 0 33.1344C0 30.108 0 27.0816 0 24.0448C0 20.7688 2.2672 18.5016 5.5224 18.5016C9.0688 18.5016 12.6048 18.4912 16.1512 18.512C16.6088 18.512 16.7544 18.4392 16.7544 17.9296C16.7336 12.3864 16.744 6.8432 16.744 1.3C16.744 0.2392 16.9832 0 18.0232 0C28.9328 0 39.832 0 50.7416 0C51.7504 0 52 0.2496 52 1.2688C52 10.9928 52 20.7272 52 30.4512C52 31.4704 51.7504 31.72 50.7416 31.72C45.2816 31.72 39.832 31.72 34.3824 31.72ZM34.3304 29.9624C39.468 29.9624 44.616 29.9624 49.7536 29.9728C50.1072 29.9728 50.2528 29.9208 50.2528 29.5152C50.2424 20.4048 50.2424 11.3048 50.2528 2.1944C50.2528 1.8096 50.128 1.7576 49.7952 1.7576C39.4992 1.768 29.224 1.768 18.9384 1.7576C18.5536 1.7576 18.5016 1.8824 18.5016 2.2256C18.512 7.4984 18.512 12.7608 18.4912 18.0336C18.4912 18.4704 18.6264 18.5328 19.0112 18.5224C20.5192 18.5016 22.0272 18.512 23.5248 18.512C24.6272 18.512 25.4488 19.2088 25.5424 20.2176C25.636 21.2472 24.9392 22.1 23.8368 22.2768C22.2456 22.516 20.644 22.7552 19.0424 22.9632C18.6264 23.0152 18.4808 23.14 18.4912 23.5976C18.5224 25.5424 18.5224 27.4872 18.4912 29.432C18.4808 29.9104 18.6264 29.9832 19.0632 29.9832C24.1592 29.952 29.2448 29.9624 34.3304 29.9624Z" fill="#F9FCFC" />
                    <path d="M24.6791 43.1809C25.8335 43.1809 26.9879 43.1705 28.1527 43.1809C30.2015 43.1913 31.7199 44.7097 31.7303 46.7689C31.7407 47.7777 31.7095 48.7865 31.7407 49.7953C31.7511 50.1697 31.5951 50.3673 31.3143 50.5337C30.0871 51.2825 28.7247 51.6361 27.3207 51.8129C24.7831 52.1249 22.2663 52.0729 19.8015 51.3241C19.1463 51.1265 18.5431 50.8457 17.9607 50.4817C17.7215 50.3257 17.6175 50.1489 17.6279 49.8577C17.6487 48.7969 17.6279 47.7257 17.6383 46.6649C17.6695 44.7409 19.1879 43.2121 21.1015 43.1809C22.2871 43.1705 23.4831 43.1809 24.6791 43.1809Z" fill="#F9FCFC" />
                    <path d="M44.1272 43.1809C45.2608 43.1809 46.4048 43.1705 47.5384 43.1809C49.5872 43.2017 51.1056 44.7201 51.116 46.7793C51.1264 47.7881 51.0952 48.7969 51.1264 49.8057C51.1368 50.1801 50.9808 50.3777 50.7 50.5441C49.4728 51.2929 48.1104 51.6465 46.7064 51.8233C44.1688 52.1353 41.652 52.0833 39.1872 51.3345C38.532 51.1369 37.9288 50.8561 37.3464 50.4921C37.1072 50.3361 37.0032 50.1593 37.0136 49.8681C37.0344 48.8073 37.0136 47.7361 37.024 46.6753C37.0552 44.7513 38.5736 43.2225 40.4872 43.1913C41.704 43.1705 42.9104 43.1809 44.1272 43.1809Z" fill="#F9FCFC" />
                    <path d="M14.1025 12.3449C14.1025 15.2465 11.7209 17.6177 8.81927 17.6177C5.89687 17.6177 3.51527 15.2257 3.52567 12.2929C3.54647 9.4017 5.92807 7.0409 8.84007 7.0513C11.7417 7.0617 14.1025 9.4433 14.1025 12.3449Z" fill="#F9FCFC" />
                    <path d="M24.6687 33.4878C27.1023 33.4878 29.0783 35.4638 29.0783 37.887C29.0783 40.3102 27.1023 42.2966 24.6791 42.2966C22.2559 42.2966 20.2695 40.3206 20.2695 37.8974C20.2695 35.4742 22.2455 33.4878 24.6687 33.4878Z" fill="#F9FCFC" />
                    <path d="M44.0649 42.2966C41.6417 42.2966 39.6553 40.3206 39.6553 37.8974C39.6553 35.4742 41.6313 33.4878 44.0545 33.4878C46.4881 33.4878 48.4641 35.4638 48.4641 37.887C48.4745 40.3206 46.4985 42.2966 44.0649 42.2966Z" fill="#F9FCFC" />
                    <path d="M34.372 23.7952C33.6024 23.7952 32.8328 23.7952 32.0632 23.7952C31.8656 23.7952 31.7304 23.816 31.72 23.5248C31.6888 22.7552 31.2104 22.2872 30.5656 21.9128C28.2776 20.6232 26.936 18.6784 26.5304 16.0888C25.8856 11.9496 28.7976 7.88324 32.9368 7.16564C37.908 6.30244 42.4424 10.1608 42.2968 15.2048C42.2136 18.1584 40.7992 20.3944 38.2408 21.8816C37.5648 22.2768 37.0552 22.7448 37.0344 23.5664C37.024 23.8576 36.8368 23.7744 36.6912 23.7744C35.9112 23.7952 35.1416 23.7952 34.372 23.7952ZM38.6776 14.9864C38.9272 14.9864 39.0728 14.9656 39.2184 14.9864C39.6552 15.0592 39.6864 14.8408 39.6448 14.4872C39.3848 11.9704 37.388 9.96324 34.8712 9.70324C34.4552 9.66164 34.3096 9.76564 34.3616 10.1816C34.4032 10.4728 34.3928 10.7744 34.3616 11.0656C34.3304 11.3672 34.4344 11.4504 34.736 11.4816C36.3064 11.6792 37.5232 12.7296 37.7728 14.2272C37.8976 14.9136 38.1368 15.132 38.6776 14.9864Z" fill="#F9FCFC" />
                    <path d="M31.7305 25.2617C31.5953 24.7937 31.8033 24.6377 32.3753 24.6585C33.7273 24.7105 35.0897 24.7001 36.4521 24.6585C36.9617 24.6377 37.0345 24.8145 37.0345 25.2617C37.0033 26.9465 35.9841 28.1425 34.4761 28.1945C32.8953 28.2465 31.7305 27.0401 31.7305 25.2617Z" fill="#F9FCFC" />
                    <path d="M45.4585 9.49499C45.4481 9.61979 45.3441 9.66139 45.2505 9.71339C44.6473 10.0566 44.0441 10.3998 43.4513 10.7534C43.2745 10.8574 43.1601 10.8574 43.0769 10.6494C43.0665 10.6286 43.0665 10.6182 43.0561 10.5974C42.2657 9.39099 42.2657 9.39099 43.5137 8.67339C43.8777 8.46539 44.2833 8.08059 44.5953 8.14299C44.9385 8.20539 45.0425 8.79819 45.2713 9.15179C45.3337 9.26619 45.3857 9.38059 45.4585 9.49499Z" fill="#F9FCFC" />
                    <path d="M30.264 6.10499C30.2224 6.15699 30.1808 6.21939 30.1288 6.25059C29.7336 6.47939 29.3384 6.70819 28.9432 6.93699C28.756 7.05139 28.6936 6.91619 28.6208 6.78099C28.2776 6.17779 27.9344 5.57459 27.5704 4.98179C27.456 4.79459 27.4872 4.68019 27.6848 4.60739C27.7056 4.59699 27.716 4.58659 27.7368 4.57619C28.9432 3.79619 28.9432 3.79619 29.6608 5.03379C29.848 5.38739 30.0456 5.73059 30.264 6.10499Z" fill="#F9FCFC" />
                    <path d="M24.1903 8.09131C24.2631 8.13291 24.3463 8.17451 24.4191 8.21611C24.9911 8.54891 25.5527 8.89211 26.1247 9.20411C26.3535 9.32891 26.4055 9.43291 26.2495 9.66171C25.9999 10.0361 25.8647 10.6289 25.5215 10.7745C25.1679 10.9305 24.7519 10.4313 24.3671 10.2129C23.2127 9.56811 23.2231 9.55771 23.9095 8.41371C23.9823 8.29931 24.0239 8.14331 24.1903 8.09131Z" fill="#F9FCFC" />
                    <path d="M39.8943 6.97816C39.4575 6.71816 38.9999 6.44776 38.5527 6.16696C38.4383 6.09416 38.5423 6.00056 38.5839 5.93816C38.9375 5.31416 39.3015 4.71096 39.6447 4.08696C39.7487 3.89976 39.8527 3.85816 40.0191 3.98296C40.0295 3.99336 40.0503 4.00376 40.0711 4.01416C41.3503 4.67976 41.3503 4.67976 40.6327 5.91736C40.4663 6.19816 40.2999 6.48936 40.1335 6.77016C40.0815 6.86376 40.0399 6.96776 39.8943 6.97816Z" fill="#F9FCFC" />
                    <path d="M33.488 3.952C33.488 2.6312 33.488 2.6416 34.8296 2.6416C35.1416 2.6416 35.2872 2.6832 35.2664 3.0472C35.2352 3.6712 35.2456 4.2952 35.2664 4.9192C35.2768 5.1896 35.2248 5.3456 34.9128 5.2936C34.892 5.2936 34.8712 5.2936 34.8608 5.2936C33.488 5.3144 33.488 5.3144 33.488 3.952Z" fill="#F9FCFC" />
                    <path d="M23.3273 15.8598C22.0273 15.8598 22.0377 15.8598 22.0273 14.5598C22.0169 14.175 22.1209 14.0606 22.5057 14.0814C23.1297 14.1126 23.7537 14.1022 24.3777 14.0814C24.6169 14.071 24.7209 14.1542 24.6793 14.3934C24.6793 14.4142 24.6793 14.435 24.6793 14.4454C24.7209 15.8598 24.7209 15.8598 23.3273 15.8598Z" fill="#F9FCFC" />
                    <path d="M45.3439 15.8602C44.0543 15.8602 44.0751 15.8602 44.0647 14.5394C44.0647 14.1858 44.1375 14.061 44.5119 14.0818C45.1359 14.113 45.7599 14.1026 46.3839 14.0818C46.6439 14.0714 46.7167 14.1442 46.7271 14.4146C46.7791 15.8602 46.7895 15.8602 45.3439 15.8602Z" fill="#F9FCFC" />
                  </g>
                  <defs>
                    <clipPath id="clip0_135_702">
                      <rect width="52" height="52" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h2>Pitch Sessions</h2>
                <p>Startups will have the opportunity to pitch their AI-driven projects to potential investors.</p>
              </div>
              <div className='highlights-card space-y-4  border-b-2 border-b-[#F39711CC] md:border-b-0 border-r-2 border-solid border-r-[#F39711CC] p-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <g clip-path="url(#clip0_135_698)">
                    <path d="M42.4736 0C43.0872 0.1352 43.7008 0.2288 44.304 0.3952C49.036 1.716 52.1144 6.1256 51.8232 11.1488C51.5424 15.808 47.8088 19.864 43.108 20.592C41.652 20.8208 40.2064 20.7272 38.74 20.3424C37.3464 24.3152 35.9528 28.2568 34.5592 32.2296C36.244 33.0304 37.6064 34.164 38.6984 35.672C40.3728 34.5384 42.0264 33.4152 43.7008 32.2712C43.16 30.9608 43.16 29.6608 43.8152 28.4024C44.2936 27.4872 45.0216 26.8216 45.9784 26.4264C47.9128 25.6152 50.1592 26.312 51.3032 28.0592C52.4576 29.8376 52.1768 32.188 50.6168 33.6128C48.8592 35.2248 46.7376 35.1416 44.356 33.3424C42.7232 34.4552 41.0696 35.568 39.3848 36.712C41.0176 40.1024 41.0488 43.472 39.1976 46.7688C37.908 49.0568 35.9632 50.6168 33.4776 51.4488C28.236 53.196 22.3288 50.492 20.3424 44.8032C19.0944 45.0736 17.8464 45.3336 16.5984 45.6248C16.4944 45.6456 16.3904 45.9056 16.3904 46.0512C16.2656 48.4016 14.3936 50.2216 12.064 50.2424C9.9736 50.2632 8.1016 48.7136 7.748 46.6544C7.3736 44.5328 8.6112 42.4424 10.6392 41.756C12.6568 41.0696 14.8928 41.9432 15.8704 43.8568C16.1096 44.3248 16.328 44.3872 16.796 44.2728C17.8568 44.0024 18.9384 43.7944 20.0512 43.5448C19.5104 40.092 20.3736 37.0864 22.724 34.4656C21.6632 33.1656 20.6128 31.876 19.5312 30.5552C16.848 32.6976 13.8528 33.4672 10.5248 32.7288C7.8624 32.136 5.7824 30.6488 4.2432 28.4024C1.0608 23.7848 2.1632 16.6712 7.8832 13.4992C7.592 12.896 7.3008 12.2928 7.0096 11.6896C6.5728 10.7952 6.1256 9.9008 5.6992 8.996C5.5952 8.7672 5.4808 8.6736 5.2 8.7048C2.5168 9.0376 0.6968 7.7584 0.0728 5.1584C0.0624 5.096 0.0208 5.044 0 4.9816C0 4.6072 0 4.2328 0 3.8688C0.0416 3.744 0.0832 3.6192 0.1144 3.4944C0.624 1.2688 2.6728 -0.156 4.9816 0.104C7.1136 0.3432 8.7672 2.2464 8.7464 4.4616C8.736 6.0528 8.008 7.2696 6.6872 8.1952C7.4776 9.8072 8.2576 11.4088 9.048 13.0312C11.5648 12.1056 14.0608 12.0744 16.5256 13.0208C19.0008 13.9672 20.8208 15.6624 22.0792 18.0128C25.3136 16.6088 28.5064 15.2152 31.7096 13.8112C31.0024 11.7104 30.9296 9.6408 31.5016 7.5608C30.5448 7.1656 29.6504 6.7912 28.7248 6.4064C28.1736 7.3632 27.4352 8.0704 26.4056 8.4656C24.7104 9.1104 22.776 8.6424 21.6008 7.28C20.3736 5.8552 20.1864 3.8896 21.112 2.2672C22.0168 0.6968 23.816 -0.1456 25.6048 0.1768C27.7888 0.572 29.2552 2.4232 29.1824 4.68C29.172 4.8776 29.2032 5.2 29.3176 5.252C30.1704 5.6472 31.044 5.9904 31.876 6.3336C31.9488 6.2712 31.9696 6.2608 31.98 6.2504C32.0216 6.1568 32.0736 6.0736 32.1152 5.98C33.2696 3.5776 35.0584 1.8096 37.5336 0.8216C38.4904 0.4368 39.5408 0.2704 40.5496 0C41.184 0 41.8288 0 42.4736 0ZM23.6496 33.6232C26.5928 31.3768 29.8064 30.7632 33.3528 31.7512C34.7464 27.7992 36.1296 23.868 37.4608 20.0928C36.3896 19.3336 35.3184 18.72 34.4448 17.8984C33.5608 17.0664 32.864 16.0368 32.0528 15.0592C29.0576 16.3696 25.9792 17.7112 22.8904 19.0424C22.5576 19.188 22.6408 19.3544 22.7136 19.604C23.7224 23.1816 23.088 26.4264 20.7584 29.328C20.6544 29.4528 20.5608 29.588 20.4568 29.7128C21.5384 31.0336 22.5784 32.3128 23.6496 33.6232ZM19.24 29.0576C22.6512 25.7712 23.0048 19.8432 19.0632 16.0784C15.2776 12.4592 9.1104 12.8544 5.8032 16.9312C2.4232 21.1016 3.6504 26.6032 6.4688 29.0368C6.6768 28.1112 6.9888 27.248 7.6232 26.5304C8.2472 25.8128 9.0376 25.3656 9.9216 25.0328C8.3096 22.7032 8.32 20.644 9.932 19.0528C11.3776 17.628 13.6448 17.4616 15.2776 18.6576C16.0888 19.2504 16.6296 20.0304 16.8584 21.008C17.2224 22.5368 16.796 23.868 15.7352 25.012C17.8568 25.9376 18.2832 26.4368 19.24 29.0576ZM47.8608 16.7752C51.2824 13.4784 51.6464 7.592 47.7984 3.8376C44.0648 0.208 37.9808 0.4888 34.5904 4.4616C31.0648 8.6008 32.24 14.2168 35.1312 16.744C35.4952 14.7264 36.66 13.3952 38.5736 12.7296C36.9408 10.3376 36.9824 8.2368 38.6464 6.6768C40.1336 5.2832 42.38 5.1688 44.0024 6.4064C44.8136 7.0304 45.3336 7.8416 45.5416 8.84C45.8432 10.3168 45.4064 11.596 44.3664 12.7192C46.332 13.4056 47.4864 14.7368 47.8608 16.7752ZM36.5976 48.0376C39.6656 45.2608 40.56 39.624 37.0656 35.6824C33.436 31.5848 27.3 31.5016 23.5872 35.4848C19.9056 39.4264 20.7272 45.188 23.8784 48.048C24.2424 46.02 25.4176 44.6784 27.3624 44.0024C25.5008 41.9952 25.9064 39.468 27.2896 38.0848C28.7768 36.5872 31.148 36.4208 32.7912 37.7208C33.6232 38.376 34.164 39.2288 34.3304 40.2688C34.5592 41.6832 34.1536 42.9312 33.1136 44.0128C35.0792 44.6784 36.2336 46.02 36.5976 48.0376Z" fill="#F9FCFC" />
                  </g>
                  <defs>
                    <clipPath id="clip0_135_698">
                      <rect width="52" height="52" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h2>Networking</h2>
                <p>Extensive networking opportunities for participants to connect, collaborate, and explore partnerships.</p>
              </div>
              <div className='highlights-card space-y-4  border-b-2 border-b-[#F39711CC] border-r-2 border-solid border-r-[#F39711CC] md:border-b-0 md:border-r-0 p-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <g clip-path="url(#clip0_135_659)">
                    <path d="M31.3769 3.59844C37.4609 3.59844 43.5449 3.60884 49.6289 3.58804C50.0969 3.58804 50.2009 3.69204 50.2009 4.16004C50.1801 10.9512 50.1801 17.7528 50.2009 24.544C50.2009 25.0016 50.0969 25.1264 49.6289 25.116C46.1553 25.0952 42.6817 25.1056 39.2185 25.1056C38.9273 25.1056 38.7193 25.064 38.5009 24.804C36.9097 22.9112 34.2473 22.776 32.4793 24.5336C32.0633 24.9496 31.6577 25.116 31.0753 25.116C28.0281 25.0848 24.9913 25.1056 21.9441 25.1056C21.6945 25.1056 21.4657 25.1784 21.3929 24.7624C20.6753 20.6024 17.2433 17.7944 13.0729 17.9504C12.5945 17.9712 12.5425 17.8256 12.5425 17.42C12.5529 12.9792 12.5529 8.53844 12.5425 4.08724C12.5425 3.66084 12.6569 3.57764 13.0625 3.57764C19.1673 3.59844 25.2721 3.59844 31.3769 3.59844ZM40.3313 18.8344C42.6609 18.8344 45.0009 18.8344 47.3305 18.8344C48.0585 18.8344 48.3913 18.5016 48.4017 17.784C48.4121 16.6816 48.4121 15.5792 48.4017 14.4768C48.3913 13.8112 48.0585 13.4784 47.4033 13.4576C47.2889 13.4576 47.1745 13.4472 47.0705 13.4576C46.7273 13.5096 46.5817 13.4056 46.6025 13.0208C46.6441 12.428 46.5921 11.8248 46.6233 11.232C46.6441 10.8784 46.5609 10.764 46.1761 10.764C44.8241 10.7744 44.8241 10.7536 44.8241 12.116C44.8241 13.4992 44.8241 13.4888 43.4305 13.4784C43.1185 13.4784 43.0145 13.4056 43.0249 13.0832C43.0457 12.168 43.0353 11.2528 43.0353 10.3376C43.0353 8.95444 43.0353 8.96484 41.6417 8.97524C41.3297 8.97524 41.2361 9.04804 41.2361 9.37044C41.2569 10.2856 41.2465 11.2008 41.2465 12.116C41.2465 13.4784 41.2465 13.468 39.9049 13.468C39.5409 13.468 39.4369 13.3744 39.4473 13.0104C39.4681 11.5128 39.4577 10.0256 39.4577 8.52804C39.4577 7.16564 39.4577 7.18644 38.1161 7.17604C37.7417 7.17604 37.6585 7.28004 37.6585 7.63364C37.6793 9.13124 37.6689 10.6184 37.6689 12.116C37.6689 13.4784 37.6689 13.4576 36.3169 13.468C35.9425 13.468 35.8593 13.364 35.8593 13C35.8801 10.9096 35.8697 8.81924 35.8697 6.72884C35.8697 5.36644 35.8697 5.38724 34.5177 5.37684C34.1433 5.37684 34.0601 5.49124 34.0705 5.84484C34.0809 8.17444 34.0601 10.5144 34.0913 12.844C34.1017 13.364 33.9457 13.4888 33.4569 13.468C32.5833 13.4264 32.2921 13.7488 32.2921 14.6328C32.2921 15.6416 32.2921 16.6504 32.2921 17.6592C32.2921 18.5328 32.5833 18.8344 33.4673 18.8344C35.7345 18.8344 38.0329 18.8344 40.3313 18.8344ZM22.3913 17.9296C25.8337 17.94 28.6729 15.132 28.6833 11.6896C28.7041 8.24724 25.9065 5.40804 22.4641 5.38724C19.0009 5.36644 16.1513 8.18484 16.1409 11.648C16.1305 15.0904 18.9489 17.9192 22.3913 17.9296ZM43.9713 22.412C45.0009 22.412 46.0201 22.412 47.0497 22.412C48.4121 22.412 48.4017 22.412 48.4121 21.0704C48.4121 20.7064 48.3289 20.6024 47.9545 20.6128C45.5625 20.6336 43.1809 20.6232 40.7889 20.6232C39.4057 20.6232 39.4161 20.6232 39.4369 22.0168C39.4369 22.3288 39.5097 22.4224 39.8321 22.4224C41.2049 22.4016 42.5881 22.412 43.9713 22.412ZM25.5425 22.412C26.1561 22.412 26.7697 22.412 27.3937 22.412C28.7041 22.412 28.6937 22.412 28.6937 21.0704C28.6937 20.7168 28.6105 20.6024 28.2361 20.6128C26.7385 20.6336 25.2513 20.6232 23.7537 20.6232C22.3705 20.6232 22.3809 20.6232 22.3913 22.0168C22.3913 22.3288 22.4641 22.4328 22.7865 22.4224C23.7121 22.4016 24.6273 22.412 25.5425 22.412Z" fill="#F9FCFC" />
                    <path d="M14.7369 51.9894C12.3865 51.9894 10.0361 51.979 7.68571 51.9998C7.26971 51.9998 7.16571 51.9166 7.16571 51.4902C7.18651 48.5366 7.16571 45.5934 7.18651 42.6398C7.18651 42.2342 7.10331 42.1094 6.67691 42.1198C5.38731 42.151 5.38731 42.1302 5.38731 43.4198C5.38731 46.103 5.37691 48.7966 5.39771 51.4798C5.39771 51.8854 5.32491 52.0102 4.88811 51.9998C3.40091 51.9686 1.90331 51.979 0.405713 51.9894C0.104113 51.9998 0.000113264 51.927 0.000113264 51.6046C0.0105133 48.079 -0.0206867 44.5534 0.0209133 41.0278C0.0625133 37.7726 2.78731 35.0686 6.03211 34.975C7.02011 34.9438 8.00811 34.975 8.99611 34.9542C9.25611 34.9542 9.38091 35.0374 9.50571 35.2662C10.3689 36.8158 11.7001 37.6478 13.4681 37.6374C15.2153 37.627 16.5257 36.8054 17.3785 35.2766C17.5241 35.027 17.6697 34.9542 17.9401 34.9542C19.2089 34.9646 20.4777 34.9542 21.7465 34.9646C23.6393 34.9854 25.2305 34.3094 26.5617 32.9782C28.3401 31.1894 30.1289 29.4214 31.8969 27.6222C32.1985 27.3206 32.3441 27.3206 32.6353 27.6222C33.4465 28.475 34.2785 29.307 35.1313 30.1182C35.4433 30.4094 35.4121 30.5654 35.1209 30.8566C31.5849 34.3718 28.0801 37.9078 24.5337 41.4126C23.0881 42.8478 22.3497 44.5222 22.3913 46.5606C22.4329 48.2246 22.3913 49.8782 22.4121 51.5422C22.4121 51.9062 22.3185 51.9998 21.9545 51.9998C19.5521 51.979 17.1497 51.9894 14.7369 51.9894ZM17.9609 39.4366C17.1081 39.4366 16.2449 39.4262 15.3921 39.4366C14.6953 39.447 14.3625 39.7694 14.3521 40.4558C14.3417 41.3294 14.3417 42.2134 14.3521 43.087C14.3937 45.0318 15.9745 46.5918 17.8985 46.6022C19.8537 46.6126 21.4657 45.063 21.5073 43.087C21.5281 42.2134 21.5177 41.3294 21.5073 40.4558C21.4969 39.7694 21.1641 39.4366 20.4673 39.4366C19.6353 39.4366 18.7929 39.4366 17.9609 39.4366Z" fill="#F9FCFC" />
                    <path d="M13.5306 32.2714C9.47458 32.261 6.50018 28.5898 7.30098 24.7106C7.37378 24.3778 7.44658 24.1594 7.89378 24.1906C10.0362 24.3154 12.085 23.941 13.957 22.8178C14.1754 22.6826 14.2898 22.7762 14.4458 22.901C15.8706 24.045 17.4826 24.7626 19.3026 24.9914C19.6354 25.033 19.677 25.2306 19.6978 25.4802C20.0514 28.5378 17.6594 31.6682 14.5914 32.157C14.2066 32.2194 13.8218 32.3026 13.5306 32.2714Z" fill="#F9FCFC" />
                    <path d="M31.3872 0.0104C38.0536 0.0104 44.72 0.0104 51.376 0C51.8336 0 52.0104 0.0624 51.9896 0.5824C51.9376 1.7992 51.9792 1.7992 50.7832 1.7992C37.6584 1.7992 24.5336 1.7992 11.4192 1.8096C10.9096 1.8096 10.7224 1.7264 10.7432 1.1648C10.7952 0.0103999 10.764 0 11.8976 0C18.3976 0.0104 24.8872 0.0104 31.3872 0.0104Z" fill="#F9FCFC" />
                    <path d="M39.2185 28.683C39.3537 28.1422 39.4889 27.6534 39.4265 27.1438C39.4057 26.9358 39.4785 26.8734 39.6657 26.8942C39.7593 26.9046 39.8529 26.8942 39.9465 26.8942C43.7945 26.8942 47.6321 26.9046 51.4801 26.8838C51.8961 26.8838 52.0105 26.9774 52.0001 27.4038C51.9793 28.6934 51.9897 28.6934 50.7001 28.6934C46.8937 28.683 43.0873 28.683 39.2185 28.683Z" fill="#F9FCFC" />
                    <path d="M26.4888 30.4824C25.324 31.72 24.284 33.0096 22.5368 33.124C21.0912 33.2176 19.6248 33.1656 18.1688 33.176C18.0648 33.176 17.9296 33.2072 17.9296 33.0304C17.9296 32.8848 17.888 32.7392 18.044 32.6248C18.8344 32.0736 19.5104 31.408 20.0512 30.628C20.176 30.4512 20.3424 30.4928 20.4984 30.4928C22.464 30.4824 24.4192 30.4824 26.4888 30.4824Z" fill="#F9FCFC" />
                    <path d="M30.0976 26.8945C29.5048 27.4873 28.9952 27.9969 28.4856 28.5169C28.3608 28.6521 28.2256 28.6937 28.0488 28.6937C25.74 28.6937 23.4312 28.6937 21.0808 28.6937C21.1848 28.1425 21.3928 27.6433 21.4344 27.1025C21.4552 26.8425 21.6632 26.9049 21.8192 26.9049C24.5232 26.8945 27.248 26.8945 30.0976 26.8945Z" fill="#F9FCFC" />
                    <path d="M37.648 27.5286C37.6376 27.9966 37.4088 28.527 36.9824 28.9846C36.816 29.1614 36.712 29.1718 36.5352 28.995C35.62 28.059 34.6944 27.1334 33.7584 26.2286C33.54 26.0206 33.6336 25.9062 33.8 25.7398C34.4344 25.1158 35.4016 24.9286 36.2336 25.2822C37.0864 25.6254 37.648 26.4574 37.648 27.5286Z" fill="#F9FCFC" />
                    <path d="M14.841 19.8745C13.021 21.6945 10.9098 22.4953 8.43457 22.4121C9.10017 20.6441 12.085 19.4377 14.841 19.8745Z" fill="#F9FCFC" />
                    <path d="M10.8577 33.6128C12.6049 34.2056 14.3001 34.1952 15.9953 33.644C16.0057 34.7048 14.8929 35.7552 13.6761 35.8488C12.2929 35.9528 11.0553 34.996 10.8577 33.6128Z" fill="#F9FCFC" />
                    <path d="M19.0217 23.1191C17.7737 22.8903 16.7649 22.3807 15.8185 21.7047C15.7769 21.6735 15.7041 21.6007 15.7041 21.5903C15.9537 21.2991 16.2033 21.0079 16.4529 20.7167C16.5881 20.5503 16.7025 20.6335 16.8377 20.7167C17.7425 21.3199 18.4497 22.0791 19.0217 23.1191Z" fill="#F9FCFC" />
                    <path d="M40.2896 17.035C38.3656 17.035 36.4416 17.0246 34.5176 17.0454C34.1744 17.0454 34.0392 16.9934 34.0496 16.5982C34.06 15.2462 34.0392 15.2462 35.3912 15.2462C38.9584 15.2462 42.5256 15.2566 46.0824 15.2358C46.4776 15.2358 46.6232 15.2878 46.6128 15.735C46.5816 17.035 46.6024 17.035 45.3232 17.035C43.6488 17.035 41.9744 17.035 40.2896 17.035Z" fill="#F9FCFC" />
                    <path d="M24.721 12.5527C25.3138 12.5527 25.917 12.5631 26.5098 12.5527C26.7282 12.5527 26.8114 12.5943 26.7386 12.8335C26.2498 14.4351 25.2202 15.5167 23.6082 15.9639C22.0066 16.4111 20.5922 16.0055 19.365 14.9135C19.1882 14.7575 19.157 14.6535 19.3962 14.5079C20.4362 13.8943 21.4762 13.2703 22.5058 12.6463C22.6618 12.5527 22.8178 12.5527 22.9842 12.5527C23.5666 12.5527 24.1386 12.5527 24.721 12.5527Z" fill="#F9FCFC" />
                    <path d="M18.2105 13.1353C17.3785 10.6913 18.6785 8.12246 21.0809 7.38406C21.4033 7.29046 21.5385 7.26966 21.5281 7.68566C21.4969 8.72566 21.5177 9.76566 21.5177 10.8161C21.5177 11.0345 21.4865 11.1905 21.2681 11.3153C20.2593 11.8977 19.2609 12.5009 18.2105 13.1353Z" fill="#F9FCFC" />
                    <path d="M23.3066 7.31104C25.0226 7.60224 26.4578 9.02703 26.7594 10.7638C25.6986 10.7638 24.6378 10.7638 23.5874 10.7638C23.369 10.7638 23.2962 10.7014 23.3066 10.483C23.317 9.43264 23.3066 8.37184 23.3066 7.31104Z" fill="#F9FCFC" />
                    <path d="M17.9609 41.2358C18.4497 41.2358 18.9281 41.2462 19.4169 41.2358C19.6561 41.2254 19.7393 41.2982 19.7289 41.5478C19.7081 42.0678 19.7393 42.5878 19.7185 43.1078C19.6769 44.075 18.8761 44.8238 17.9297 44.8238C16.9833 44.8238 16.1825 44.0646 16.1513 43.1078C16.1305 42.5878 16.1617 42.0678 16.1409 41.5478C16.1305 41.2982 16.2241 41.2358 16.4633 41.2358C16.9521 41.2462 17.4617 41.2358 17.9609 41.2358Z" fill="#F9FCFC" />
                  </g>
                  <defs>
                    <clipPath id="clip0_135_659">
                      <rect width="52" height="52" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h2>Innovation Showcase</h2>
                <p>
                  Exhibitions showcasing innovative AI solutions and technologies.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      <section class="events" id='schedule-id'>
        <div class="events-container container mx-auto px-5 lg:px-28 flex flex-col md:flex-row justify-between items-start gap-5">
          <div class="left events md:basis-1/3">
            <div class="left-text">
              <h3>EVENT OUTLOOK</h3>
              <h1>EXPECTED OUTCOMES</h1>
              <div className='flex gap-2 mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <mask id="mask0_79_39" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                    <rect width="28" height="28" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_79_39)">
                    <path d="M14.0001 10.5L9.91675 6.41671L14.0001 2.33337L18.0834 6.41671L14.0001 10.5ZM1.16675 23.3334V18.6667C1.16675 18.0056 1.39522 17.4514 1.85216 17.0042C2.30911 16.557 2.85841 16.3334 3.50008 16.3334H7.32091C7.7098 16.3334 8.07925 16.4306 8.42925 16.625C8.77925 16.8195 9.06119 17.082 9.27508 17.4125C9.83897 18.1709 10.5341 18.7639 11.3605 19.1917C12.1869 19.6195 13.0667 19.8334 14.0001 19.8334C14.9529 19.8334 15.8424 19.6195 16.6688 19.1917C17.4952 18.7639 18.1806 18.1709 18.7251 17.4125C18.9779 17.082 19.2744 16.8195 19.6147 16.625C19.9549 16.4306 20.3098 16.3334 20.6792 16.3334H24.5001C25.1612 16.3334 25.7154 16.557 26.1626 17.0042C26.6098 17.4514 26.8334 18.0056 26.8334 18.6667V23.3334H18.6667V20.6792C17.9862 21.1653 17.2522 21.5348 16.4647 21.7875C15.6772 22.0403 14.8556 22.1667 14.0001 22.1667C13.164 22.1667 12.3473 22.0355 11.5501 21.773C10.7529 21.5105 10.014 21.1362 9.33341 20.65V23.3334H1.16675ZM4.66675 15.1667C3.69453 15.1667 2.86814 14.8264 2.18758 14.1459C1.50703 13.4653 1.16675 12.6389 1.16675 11.6667C1.16675 10.675 1.50703 9.84379 2.18758 9.17296C2.86814 8.50212 3.69453 8.16671 4.66675 8.16671C5.65841 8.16671 6.48967 8.50212 7.1605 9.17296C7.83133 9.84379 8.16675 10.675 8.16675 11.6667C8.16675 12.6389 7.83133 13.4653 7.1605 14.1459C6.48967 14.8264 5.65841 15.1667 4.66675 15.1667ZM23.3334 15.1667C22.3612 15.1667 21.5348 14.8264 20.8542 14.1459C20.1737 13.4653 19.8334 12.6389 19.8334 11.6667C19.8334 10.675 20.1737 9.84379 20.8542 9.17296C21.5348 8.50212 22.3612 8.16671 23.3334 8.16671C24.3251 8.16671 25.1563 8.50212 25.8272 9.17296C26.498 9.84379 26.8334 10.675 26.8334 11.6667C26.8334 12.6389 26.498 13.4653 25.8272 14.1459C25.1563 14.8264 24.3251 15.1667 23.3334 15.1667Z" fill="#F9FCFC" />
                  </g>
                </svg>
                <p>Strategic partnerships between diaspora innovators, African AI practitioners, and global stakeholders.</p>
              </div>
              <div className='flex gap-2 mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <mask id="mask0_79_45" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                    <rect width="28" height="28" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_79_45)">
                    <path d="M14.0001 25.55C13.864 25.55 13.7376 25.5402 13.6209 25.5208C13.5042 25.5014 13.3876 25.4722 13.2709 25.4333C10.6459 24.5583 8.55564 22.9396 7.00008 20.5771C5.44453 18.2146 4.66675 15.6722 4.66675 12.95V7.43747C4.66675 6.95136 4.80772 6.51386 5.08966 6.12497C5.37161 5.73608 5.73619 5.45413 6.18341 5.27913L13.1834 2.65413C13.4556 2.55691 13.7279 2.5083 14.0001 2.5083C14.2723 2.5083 14.5445 2.55691 14.8167 2.65413L21.8167 5.27913C22.264 5.45413 22.6286 5.73608 22.9105 6.12497C23.1924 6.51386 23.3334 6.95136 23.3334 7.43747V12.95C23.3334 14.175 23.173 15.3659 22.8522 16.5229C22.5313 17.6798 22.0695 18.7833 21.4667 19.8333L18.0251 16.3916C18.239 16.0222 18.3994 15.6382 18.5063 15.2396C18.6133 14.8409 18.6667 14.4277 18.6667 14C18.6667 12.7166 18.2098 11.618 17.2959 10.7041C16.382 9.79025 15.2834 9.3333 14.0001 9.3333C12.7167 9.3333 11.6181 9.79025 10.7042 10.7041C9.79036 11.618 9.33341 12.7166 9.33341 14C9.33341 15.2833 9.79036 16.3819 10.7042 17.2958C11.6181 18.2097 12.7167 18.6666 14.0001 18.6666C14.4084 18.6666 14.8119 18.6132 15.2105 18.5062C15.6091 18.3993 15.9834 18.2389 16.3334 18.025L20.0959 21.7583C19.357 22.6333 18.5452 23.3771 17.6605 23.9895C16.7758 24.6021 15.7987 25.0833 14.7292 25.4333C14.6126 25.4722 14.4959 25.5014 14.3792 25.5208C14.2626 25.5402 14.1362 25.55 14.0001 25.55ZM14.0001 16.3333C13.3584 16.3333 12.8091 16.1048 12.3522 15.6479C11.8952 15.1909 11.6667 14.6416 11.6667 14C11.6667 13.3583 11.8952 12.809 12.3522 12.3521C12.8091 11.8951 13.3584 11.6666 14.0001 11.6666C14.6417 11.6666 15.1911 11.8951 15.648 12.3521C16.1049 12.809 16.3334 13.3583 16.3334 14C16.3334 14.6416 16.1049 15.1909 15.648 15.6479C15.1911 16.1048 14.6417 16.3333 14.0001 16.3333Z" fill="#F9FCFC" />
                  </g>
                </svg>
                <p>Valuable policy insights for shaping AI policies and strategies.</p>
              </div>
              <div className='flex gap-2 mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <mask id="mask0_79_51" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                    <rect width="28" height="28" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_79_51)">
                    <path d="M5.83333 24.5C5.19167 24.5 4.64236 24.2715 4.18542 23.8146C3.72847 23.3576 3.5 22.8083 3.5 22.1667V3.5H5.83333V22.1667H24.5V24.5H5.83333ZM7 21V10.5H11.6667V21H7ZM12.8333 21V4.66667H17.5V21H12.8333ZM18.6667 21V15.1667H23.3333V21H18.6667Z" fill="#F9FCFC" />
                  </g>
                </svg>
                <p>Investment opportunities for startups.</p>
              </div>
              <div className='flex gap-2 mb-2'>

                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <mask id="mask0_79_57" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                    <rect width="28" height="28" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_79_57)">
                    <path d="M0 21V19.1625C0 18.3264 0.427778 17.6458 1.28333 17.1208C2.13889 16.5958 3.26667 16.3333 4.66667 16.3333C4.91944 16.3333 5.1625 16.3382 5.39583 16.3479C5.62917 16.3576 5.85278 16.3819 6.06667 16.4208C5.79444 16.8292 5.59028 17.2569 5.45417 17.7042C5.31806 18.1514 5.25 18.6181 5.25 19.1042V21H0ZM7 21V19.1042C7 18.4819 7.17014 17.9132 7.51042 17.3979C7.85069 16.8826 8.33194 16.4306 8.95417 16.0417C9.57639 15.6528 10.3201 15.3611 11.1854 15.1667C12.0507 14.9722 12.9889 14.875 14 14.875C15.0306 14.875 15.9785 14.9722 16.8438 15.1667C17.709 15.3611 18.4528 15.6528 19.075 16.0417C19.6972 16.4306 20.1736 16.8826 20.5042 17.3979C20.8347 17.9132 21 18.4819 21 19.1042V21H7ZM22.75 21V19.1042C22.75 18.5986 22.6868 18.1222 22.5604 17.675C22.434 17.2278 22.2444 16.8097 21.9917 16.4208C22.2056 16.3819 22.4243 16.3576 22.6479 16.3479C22.8715 16.3382 23.1 16.3333 23.3333 16.3333C24.7333 16.3333 25.8611 16.591 26.7167 17.1062C27.5722 17.6215 28 18.3069 28 19.1625V21H22.75ZM4.66667 15.1667C4.025 15.1667 3.47569 14.9382 3.01875 14.4812C2.56181 14.0243 2.33333 13.475 2.33333 12.8333C2.33333 12.1722 2.56181 11.6181 3.01875 11.1708C3.47569 10.7236 4.025 10.5 4.66667 10.5C5.32778 10.5 5.88194 10.7236 6.32917 11.1708C6.77639 11.6181 7 12.1722 7 12.8333C7 13.475 6.77639 14.0243 6.32917 14.4812C5.88194 14.9382 5.32778 15.1667 4.66667 15.1667ZM23.3333 15.1667C22.6917 15.1667 22.1424 14.9382 21.6854 14.4812C21.2285 14.0243 21 13.475 21 12.8333C21 12.1722 21.2285 11.6181 21.6854 11.1708C22.1424 10.7236 22.6917 10.5 23.3333 10.5C23.9944 10.5 24.5486 10.7236 24.9958 11.1708C25.4431 11.6181 25.6667 12.1722 25.6667 12.8333C25.6667 13.475 25.4431 14.0243 24.9958 14.4812C24.5486 14.9382 23.9944 15.1667 23.3333 15.1667ZM14 14C13.0278 14 12.2014 13.6597 11.5208 12.9792C10.8403 12.2986 10.5 11.4722 10.5 10.5C10.5 9.50833 10.8403 8.67708 11.5208 8.00625C12.2014 7.33542 13.0278 7 14 7C14.9917 7 15.8229 7.33542 16.4937 8.00625C17.1646 8.67708 17.5 9.50833 17.5 10.5C17.5 11.4722 17.1646 12.2986 16.4937 12.9792C15.8229 13.6597 14.9917 14 14 14Z" fill="#F9FCFC" />
                  </g>
                </svg>
                <p>Knowledge sharing and capacity building in AI and data transformation.</p>
              </div>
              {/* <button>Download Schedule</button> */}
            </div>
            <div class="left-images gap-2">
              <div class="imgs">
                <img src="/ev-4.jpeg" alt="Adanian" className='rounded-lg w-[225.736px]' />
                <img class="event-l-image" src="/aice-2.jpeg" alt="Adanian" style={{ width: '225px', borderRadius: '10px', marginRight: '2px' }} />
              </div>
              <div class="r-i imgs">
                <img src="/men grp photo.png" alt="Adanian" />
              </div>
            </div>
            <div class="left-text my-5 space-y-5">
              <h1>Event Sponsors</h1>
              <div className='my-4 space-y-8'>
                <img src='/sponsors/adanian.png'></img>
                <img src='/sponsors/aice.png'></img>
                <img src='/sponsors/abc.png'></img>
                <img src='/sponsors/msc-1.png'></img>
                <img src='/sponsors/p-1.jpeg' className='h-28'></img>
                <img src='/sponsors/p-2.jpeg' className='h-24'></img>
                <img src='/sponsors/p-4.jpeg' className='h-28'></img>
                <img src='/sponsors/p-5.jpeg' className='h-28'></img>
                <img src='/sponsors/p-7.jpeg' className='h-28'></img>
                
              </div>
            </div>
          </div>
          <div class="right events timeline md:basis-2/3 Z-10">
            <button class="timeline-btn z-10">EVENT SCHEDULE</button>
            <div class="timeline-cards">
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start z-10">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">12:00pm - 12:02pm</span>
                  <span class="schedule-number">1</span>
                </div>
                <div class="t-c-right z-10">
                  <h3> Program Director, Greetings and Welcome opening Remark</h3>
                  {/* <p>Check-in and network with fellow attendees.</p> */}
                </div>
              </div>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">12:02pm- 12:10pm</span>
                  <span class="schedule-number">2</span>
                </div>
                <div class="t-c-right z-10">
                  <h3>John Kamara Opening Address and introduction of keynote speakers </h3>
                  <ul>
                    <li>Sherin Mathew</li>
                    <li>Richard Foster-Fletcher </li>
                    <li>Natalie Jameson </li>
                  </ul>
                </div>
              </div>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">12:10pm - 12:15pm  </span>
                  <span class="schedule-number">3</span>
                </div>
                <div class="t-c-right z-10">
                  <h3>Presentation by Nosa Aikodon</h3>
                </div>
              </div>
              <h1 className='text-[#F39711] font-bold'>TOPIC DISCUSSION - SME Digitization and Job Creation whilst exploring The Link between
                AI and Data Privacy </h1>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">12:15pm- 12:25pm</span>
                  <span class="schedule-number">4</span>
                </div>
                <div class="t-c-right z-10">
                  <h3>Sherin Mathew -Keynote Speaker</h3>
                  <ul>
                    <li>SME Digitization and Job Creation: Exploring the role of AI and data transformation in
                      digitizing SMEs and its potential to create jobs across Africa and the diaspora.</li>
                    <li>focusing on responsible AI adoption and the Link between AI and Data Privacy: Analyzing
                      the connection between AI utilization and data privacy, emphasizing the importance of data
                      protection.</li>
                  </ul>
                </div>
              </div>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">12:25pm - 12:45pm </span>
                  <span class="schedule-number">5</span>
                </div>
                <div class="t-c-right z-10">
                  <h3>Panel Discussion</h3>
                  <ul>
                    <li>Sherin Mathew( Panelist)</li>
                    <li>John Kamara (Lead Panelist)</li>
                    <li>Natalie Jameson (Panelist)</li>
                    <li>WayneBennett (Panelist)</li>
                  </ul>
                </div>
              </div>
              <h1 className='text-[#F39711] font-bold'>TOPIC DISCUSSION - The Possibilities of AI for Transformation and Economic Growth with
                Ethical Data Transformation and Policy Development in Africa. </h1>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">12:45pm - 12:55pm </span>
                  <span class="schedule-number">6</span>
                </div>
                <div class="t-c-right z-10">
                  <h3>John Kamara-Keynote Speaker </h3>
                  <ul>
                    <li>The Possibilities of AI for Transformation and Economic Growth: Discussing the
                      transformative power of AI and its capacity development as a driver for AI adoption,
                      contributing to economic growth</li>
                    <li>Policy and African AI Ethics/Data Transformation in Africa: Examining AI policy
                      development and ethics in Africa</li>

                  </ul>
                </div>
              </div>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">12:55pm -13:15pm </span>
                  <span class="schedule-number">7</span>
                </div>
                <div class="t-c-right z-10">
                  <h3>Panel Discussions and questions time </h3>
                  <ul>
                    <li>John Kamara (panel Discussion)</li>
                    <li>Niaz Chowdhury (Panelist)</li>
                    <li>RichardFoster-Fletcher(Lead Panelist)</li>
                    <li>Effa Ettah (Panelist )</li>
                    <li>Dr Seun Ajao (panel Speaker) </li>
                  </ul>
                </div>
              </div>

              <h1 className='text-[#F39711] font-bold'>TOPIC DISCUSSION - Data & Digitization </h1>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start z-10">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">13:15pm- 13:23pm </span>
                  <span class="schedule-number">8</span>
                </div>

                <div class="t-c-right z-10">
                  <h3>Natalie Jameson-Keynote Speaker</h3>
                  <ul>
                    <li>Ethical Advancement: Maximizing the value of data while ensuring ethical advancement and
                      responsible data use.</li>
                  </ul>
                </div>
              </div>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start z-10">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">13:23pm- 13:38pm  </span>
                  <span class="schedule-number">9</span>
                </div>
                <div class="t-c-right z-10">
                  <h3>Panel discussion  and question time</h3>
                  <ul>
                    <li>Sheila Aladejana(Panel Lead )</li>
                    <li>Natalie Jameson (Panelist )</li>
                    <li>Michael Livingstone( Panelist)</li>
                    <li>Troy Richard (Panelist)</li>
                  </ul>
                </div>
              </div>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start z-10">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">13:38pm- 13:45pm  </span>
                  <span class="schedule-number">10</span>
                </div>
                <div class="t-c-right z-10">
                  <h3>John Wafula - Presentation of AICE</h3>
                </div>
              </div>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start z-10">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">13:45pm - 14:00pm</span>
                  <span class="schedule-number">11</span>
                </div>
                <div class="t-c-right z-10">
                  <h3>15 Minute Break and Refreshments </h3>
                </div>
              </div>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start z-10">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">14:00pm- 14:30pm </span>
                  <span class="schedule-number">12</span>
                </div>
                <div class="t-c-right z-10">
                  <h3>John Kamara presentation of the PDI MODEL </h3>

                </div>
              </div>
              <h1 className='text-[#F39711] font-bold my-2'>TOPIC DISCUSSION - International Collaboration for AI Development in Africa</h1>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start z-10">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">14:30pm- 14:40pm  </span>
                  <span class="schedule-number">13</span>
                </div>
                <div class="t-c-right z-10">
                  <h3>Richard Foster-Fletcher -Keynote Speaker</h3>
                  <ul>
                    <li>Africa and UK Research Collaboration: Promoting research collaboration between Africa and
                      the UK for sustainable impact in AI development for social and commercial good in Africa
                      and the diaspora.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start z-10">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">14:40pm- 14:55pm </span>
                  <span class="schedule-number">14</span>
                </div>
                <div class="t-c-right z-10">
                  <h3>Panel discussions </h3>
                  <ul>
                    <li>Richard Foster-Fletcher (Panelist)</li>
                    <li>Effa Ettah (Lead panelist)</li>
                    <li>John Wafula( Panelist)</li>
                    <li>Sherin Mathew (Panel Speaker)</li>
                    <li>Dr Seun Ajao (panel Speaker) </li>
                  </ul>
                </div>
              </div>
              <div class="timeline-card flex flex-col md:flex-row items-start justify-start z-10">
                <div class="t-c-left flex gap-4 z-10">
                  <span class="time whitespace-nowrap">14:55pm - 15:00pm </span>
                  <span class="schedule-number">15</span>
                </div>
                <div class="t-c-right z-10">
                  <h3>Presentation by Michael Livingstone </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="events-ellipse"></div>
      </section>
      <section class="contact" id="contact-id">
        <div class="contact-container container mx-auto px-5 lg:px-28 flex flex-col md:flex-row items-start justify-between">
          <div class="contact-details">
            <div class="title">
              <h1>Register Now</h1>
              <p>Unlocking Africa's Potential: Redefining Work in a Rapidly Changing World</p>
            </div>
            <div class="details">
              <div class="detail">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.27013 3.71L10.3401 2.87C11.1501 2.54 12.0801 2.93 12.4101 3.75L13.0401 5.29C13.3701 6.1 12.9801 7.03 12.1601 7.37L9.87013 8.3C10.1101 9.45 10.4801 10.8 11.0601 12.26C11.7101 13.91 12.4601 15.27 13.1401 16.36L15.4301 15.43C16.2501 15.1 17.1801 15.49 17.5101 16.31L18.1401 17.85C18.4701 18.67 18.0801 19.6 17.2601 19.93L15.1901 20.77L15.1501 20.79C12.9201 21.69 10.3501 20.82 9.19013 18.72C8.41013 17.31 7.64013 15.73 6.93013 13.96C6.29013 12.36 5.79013 10.83 5.41013 9.41C4.78013 7.08 6.00013 4.65 8.23013 3.74L8.27013 3.71Z"
                    stroke="#F39711" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <span>+0161 216 4007</span>
              </div>
              <div class="detail">
                <svg width="19" height="15" viewBox="0 0 19 15" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.09 14.21H3.5C2.4 14.21 1.5 13.31 1.5 12.21V2.5C1.5 1.95 1.95 1.5 2.5 1.5H17.09C17.64 1.5 18.09 1.95 18.09 2.5V12.21C18.09 13.31 17.19 14.21 16.09 14.21Z"
                    stroke="#F39711" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M1.8501 2.13L9.2401 7.27C9.5701 7.5 10.0201 7.5 10.3501 7.27L17.7401 2.13"
                    stroke="#F39711" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <span>info@adanianlabs.io</span>
              </div>
              <div class="detail">
                <svg width="16" height="21" viewBox="0 0 16 21" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.39 7.98998C14.39 12.14 10.34 17.13 8.68999 18.99C8.31999 19.4 7.67999 19.4 7.30999 18.99C5.65999 17.13 1.60999 12.14 1.60999 7.98998C1.60999 4.45998 4.46999 1.59998 7.99999 1.59998C11.53 1.59998 14.39 4.45998 14.39 7.98998Z"
                    stroke="#F39711" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M7.98993 10.5499C9.40378 10.5499 10.5499 9.40378 10.5499 7.98993C10.5499 6.57608 9.40378 5.42993 7.98993 5.42993C6.57608 5.42993 5.42993 6.57608 5.42993 7.98993C5.42993 9.40378 6.57608 10.5499 7.98993 10.5499Z"
                    stroke="#F39711" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <span className=' whitespace-nowrap'>Manchester, England</span>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form onSubmit={handleSubmit}>
              {/* Rest of the form inputs with required attributes */}
              <div className="control-group name">
                <label for="firstname">First Name</label><br />
                <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} required />
              </div>
              <div className="control-group name">
                <label for="lastname">Last Name</label><br />
                <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} required />
              </div>
              <div className="control-group">
                <label for="email">Email Address</label><br />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="control-group">
                <label for="phonenumber">Phone Number</label><br />
                <input type="number" name="phonenumber" value={formData.phonenumber} onChange={handleInputChange} required />
              </div>
              <div className="control-group">
                <label for="tickets">Number of Tickets</label><br />
                <input type="number" name="tickets" value={formData.tickets} onChange={handleInputChange} required />
              </div>
              {/* Checkbox input here */}
              <div className="control-group">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div class="footer-container container">
          <p>© {new Date().getFullYear()}All Rights Reserved Adanian Labs UK 2024. Designed by Adanian Labs.</p>
        </div>
      </footer>
    </main>
  )
}
