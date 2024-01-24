'use client'
import { logout } from '@/app/services/auth';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
const DashboardSidebar = () => {
    const router =useRouter()
    const pathname = usePathname()
    const userLogout=()=>{
        logout().then(()=>{
            console.log('user logged out')
            router.push('/login')
        })
    }
    return ( 
        <nav class="dash-nav">
        <div class="ins-lg -mt-6">
            <div class="dash-lg ">
            <Link href="/" class="nav-logo">
              <Image
                src="/logo-white.png"
                alt="logo"
                width={150}
                height={80}
              />
            </Link>
            </div>
            <div class="dash-arrow">
                <Link href='/' className='flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
</Link>
            </div>
        </div>
        <div class="dash-links -mt-8">
            <div class="link">
                <Link href="/dashboard"  class={` ${pathname === '/dashboard' ? 'active' : ''}`}>
                    <div class="link-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.29388 7.54045H1.8325C0.814444 7.54045 0 6.72601 0 5.70795V2.24656C0 1.22851 0.814444 0.414062 1.8325 0.414062H5.29388C6.31194 0.414062 7.12638 1.22851 7.12638 2.24656V5.70795C7.22819 6.72601 6.31194 7.54045 5.29388 7.54045Z"
                                fill="#1787E0" />
                            <path
                                d="M5.29388 17.2123H1.8325C0.814444 17.2123 0 16.3979 0 15.3798V11.9184C0 10.9004 0.814444 10.0859 1.8325 10.0859H5.29388C6.31194 10.0859 7.12638 10.9004 7.12638 11.9184V15.3798C7.22819 16.2961 6.31194 17.2123 5.29388 17.2123Z"
                                fill="#1787E0" />
                            <path
                                d="M15.4742 7.54045H12.0128C10.9948 7.54045 10.1803 6.72601 10.1803 5.70795V2.24656C10.1803 1.22851 10.9948 0.414062 12.0128 0.414062H15.4742C16.4923 0.414062 17.3067 1.22851 17.3067 2.24656V5.70795C17.3067 6.72601 16.4923 7.54045 15.4742 7.54045Z"
                                fill="#C5E4FC" />
                            <path
                                d="M15.4741 17.2123H12.0127C10.9946 17.2123 10.1802 16.3979 10.1802 15.3798V11.9184C10.1802 10.9004 10.9946 10.0859 12.0127 10.0859H15.4741C16.4921 10.0859 17.3066 10.9004 17.3066 11.9184V15.3798C17.3066 16.2961 16.4921 17.2123 15.4741 17.2123Z"
                                fill="#1787E0" />
                        </svg>

                    </div>
                    <div class="link-text">
                        Dashboard
                    </div>
                </Link>
            </div>
            <div class="link">
                <Link href="/dashboard/feedback"  class={` ${pathname === '/dashboard/feedback' ? 'active' : ''}`}>
                    <div class="link-icon">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.4203 16.8753H5.58125C3.03611 16.8753 1 14.8392 1 12.2941V5.77851C1 3.23338 3.03611 1.19727 5.58125 1.19727H13.4203C15.9654 1.19727 18.0015 3.23338 18.0015 5.77851V12.2941C18.0015 14.8392 15.9654 16.8753 13.4203 16.8753Z"
                                stroke="#ADC9CD" stroke-miterlimit="10" />
                            <path d="M4.15576 5.98242L9.55145 10.9709L14.9471 5.98242" stroke="#ADC9CD"
                                stroke-miterlimit="10" />
                        </svg>
                    </div>
                    <div class="link-text">
                      View Feedback
                    </div>
                </Link>
            </div>
            <div class="link">
                <Link href="/dashboard/company/new"  class={` ${pathname === '/dashboard/company/new' ? 'active' : ''}`}>
                    <div class="link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
</svg>

                    </div>
                    <div class="link-text">
                        Company Profile
                    </div>
                </Link>
            </div>
            <div className='link'>
                <Link href="/dashboard/team" class={` ${pathname === '/dashboard/team' ? 'active' : ''}`}>
                    <div class="link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>

                    </div>
                    <div class="link-text">
                        Team Profiles
                    </div>
                </Link>
            </div>

            <div class="link">
                <Link href="/dashboard/surveys"  class={`${pathname === '/dashboard/surveys' ? 'active' : ''}`}>
                    <div class="link-icon">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.29446 11.788H13.8655" stroke="#ADC9CD" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1 5.73393C1 3.55216 2.11684 1.67843 4.23615 1.24361C6.35457 0.807932 7.9646 0.958545 9.30213 1.68013C10.6406 2.40171 10.2573 3.46707 11.6323 4.24907C13.0082 5.03192 15.2214 3.85594 16.667 5.41569C18.1806 7.04861 18.1725 9.55544 18.1725 11.1535C18.1725 17.2257 14.7711 17.7073 9.58625 17.7073C4.40144 17.7073 1 17.2869 1 11.1535V5.73393Z"
                                stroke="#ADC9CD" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class="link-text">
                    Surveys
                    </div>
                </Link>
            </div>
            <div className='link'>
                <Link href="/dashboard/programs"  class={` ${pathname === '/dashboard/programs' ? 'active' : ''}`}>
                    <div class="link-icon">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.47558 13.1809C8.47558 13.4571 8.69944 13.6809 8.97558 13.6809C9.25172 13.6809 9.47558 13.4571 9.47558 13.1809V10.9053C9.47558 10.6291 9.25172 10.4053 8.97558 10.4053C8.69944 10.4053 8.47558 10.6291 8.47558 10.9053V13.1809Z"
                                stroke="#ADC9CD" stroke-linecap="round" stroke-linejoin="round" />
                            <mask id="path-2-outside-1_1_295" maskUnits="userSpaceOnUse" x="0.0728912" y="7.81641"
                                width="18" height="5" fill="black">
                                <rect fill="white" x="0.0728912" y="7.81641" width="18" height="5" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16.8821 8.81641L16.857 8.83459C14.7597 10.1266 11.9905 10.9068 8.9736 10.9068C5.95671 10.9068 3.19527 10.1266 1.09887 8.83459L1.07289 8.81641" />
                            </mask>
                            <path
                                d="M17.4686 9.62634C17.9159 9.30242 18.016 8.6772 17.692 8.22989C17.3681 7.78257 16.7429 7.68255 16.2956 8.00647L17.4686 9.62634ZM16.857 8.83459L17.3815 9.68601C17.4027 9.67296 17.4233 9.65912 17.4435 9.64453L16.857 8.83459ZM1.09887 8.83459L0.525407 9.65382C0.541363 9.66499 0.557641 9.67569 0.574222 9.68591L1.09887 8.83459ZM1.64635 7.99717C1.1939 7.68046 0.570374 7.79049 0.253659 8.24294C-0.0630552 8.69539 0.0469795 9.31892 0.499429 9.63564L1.64635 7.99717ZM16.2956 8.00647L16.2705 8.02466L17.4435 9.64453L17.4686 9.62634L16.2956 8.00647ZM16.3325 7.98317C14.4095 9.16777 11.8258 9.90675 8.9736 9.90675V11.9068C12.1552 11.9068 15.1099 11.0853 17.3815 9.68601L16.3325 7.98317ZM8.9736 9.90675C6.12191 9.90675 3.54592 9.168 1.62352 7.98327L0.574222 9.68591C2.84462 11.0851 5.79152 11.9068 8.9736 11.9068V9.90675ZM1.67233 8.01536L1.64635 7.99717L0.499429 9.63564L0.525407 9.65382L1.67233 8.01536Z"
                                fill="#ADC9CD" mask="url(#path-2-outside-1_1_295)" />
                            <path
                                d="M8.97604 2.83643C5.96655 2.83643 3.80584 3.2759 2.41231 4.51694C1.00118 5.77364 0.5 7.73663 0.5 10.4396C0.5 13.1426 1.00118 15.1056 2.41231 16.3623C3.80584 17.6033 5.96655 18.0428 8.97604 18.0428C11.9859 18.0428 14.1467 17.6033 15.5401 16.3623C16.9511 15.1056 17.4521 13.1425 17.4521 10.4396C17.4521 7.73668 16.9511 5.77367 15.5401 4.51695C14.1467 3.27589 11.9859 2.83643 8.97604 2.83643Z"
                                stroke="#ADC9CD" stroke-linecap="round" stroke-linejoin="round" />
                            <mask id="path-5-outside-2_1_295" maskUnits="userSpaceOnUse" x="5.15106" y="0" width="8"
                                height="5" fill="black">
                                <rect fill="white" x="5.15106" width="8" height="5" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11.8012 3.52764V2.9821C11.8012 1.88757 11.002 1 10.0174 1H7.93487C6.95031 1 6.15106 1.88757 6.15106 2.9821V3.52764" />
                            </mask>
                            <path
                                d="M10.8012 3.52764C10.8012 4.07992 11.2489 4.52764 11.8012 4.52764C12.3535 4.52764 12.8012 4.07992 12.8012 3.52764H10.8012ZM5.15106 3.52764C5.15106 4.07992 5.59878 4.52764 6.15106 4.52764C6.70335 4.52764 7.15106 4.07992 7.15106 3.52764H5.15106ZM12.8012 3.52764V2.9821H10.8012V3.52764H12.8012ZM12.8012 2.9821C12.8012 1.43687 11.6506 0 10.0174 0V2C10.3533 2 10.8012 2.33828 10.8012 2.9821H12.8012ZM10.0174 0H7.93487V2H10.0174V0ZM7.93487 0C6.30165 0 5.15106 1.43687 5.15106 2.9821H7.15106C7.15106 2.33828 7.59898 2 7.93487 2V0ZM5.15106 2.9821V3.52764H7.15106V2.9821H5.15106Z"
                                fill="#ADC9CD" mask="url(#path-5-outside-2_1_295)" />
                        </svg>
                    </div>
                    <div class="link-text">
                        Culture Kit
                    </div>
                </Link>
            </div>
           
            
            
            {/* <div class="link">
                <a href="renewals.html">
                    <div class="link-icon">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.6605 4.67282C16.6725 4.67282 17.493 3.85239 17.493 2.84033C17.493 1.82827 16.6725 1.00781 15.6605 1.00781C14.6484 1.00781 13.828 1.82827 13.828 2.84033C13.828 3.85239 14.6484 4.67282 15.6605 4.67282Z"
                                stroke="#ADC9CD" stroke-miterlimit="10" />
                            <path
                                d="M3.84863 12.2057C5.0703 10.8823 6.39377 9.66061 7.61544 8.33714C8.22627 9.25339 8.93891 10.0678 9.54974 10.9841C10.7714 9.3552 11.8913 7.82811 13.1129 6.19922"
                                stroke="#ADC9CD" stroke-miterlimit="10" />
                            <path
                                d="M12.1986 1.61914H4.86861C2.73069 1.61914 1 3.34982 1 5.48774V13.734C1 15.8719 2.73069 17.6026 4.86861 17.6026H13.1149C15.2528 17.6026 16.9835 15.8719 16.9835 13.734V6.40401"
                                stroke="#ADC9CD" stroke-miterlimit="10" />
                        </svg>
                    </div>
                    <div class="link-text">
                        Renewals
                    </div>
                </a>
            </div> */}
            

           
{/*             
            <div class="link">
                <a href="/dashboard/chat"  class={` ${pathname === '/dashboard/chat' ? 'active' : ''}`}>
                    <div class="link-icon">
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.84536 1.49414C5.26411 1.49414 1.59911 5.15911 1.59911 9.74036C1.59911 11.1656 1.90453 12.3874 2.51536 13.609L0.988281 18.6993C2.61717 18.1903 4.34786 17.6812 5.97675 17.0704C7.19842 17.6812 8.52189 18.0884 9.94716 18.0884C14.5284 18.0884 18.1934 14.4234 18.1934 9.8422C18.0916 5.26096 14.4266 1.49414 9.84536 1.49414Z"
                                stroke="#ADC9CD" stroke-miterlimit="10" />
                            <path
                                d="M6.4868 11.4717C7.04906 11.4717 7.50486 11.0159 7.50486 10.4536C7.50486 9.89135 7.04906 9.43555 6.4868 9.43555C5.92455 9.43555 5.46875 9.89135 5.46875 10.4536C5.46875 11.0159 5.92455 11.4717 6.4868 11.4717Z"
                                stroke="#ADC9CD" stroke-miterlimit="10" />
                            <path
                                d="M10.1499 11.4717C10.7121 11.4717 11.1679 11.0159 11.1679 10.4536C11.1679 9.89135 10.7121 9.43555 10.1499 9.43555C9.58763 9.43555 9.13184 9.89135 9.13184 10.4536C9.13184 11.0159 9.58763 11.4717 10.1499 11.4717Z"
                                stroke="#ADC9CD" stroke-miterlimit="10" />
                            <path
                                d="M13.3071 11.4717C13.8694 11.4717 14.3252 11.0159 14.3252 10.4536C14.3252 9.89135 13.8694 9.43555 13.3071 9.43555C12.7449 9.43555 12.2891 9.89135 12.2891 10.4536C12.2891 11.0159 12.7449 11.4717 13.3071 11.4717Z"
                                stroke="#ADC9CD" stroke-miterlimit="10" />
                        </svg>
                    </div>
                    <div class="link-text">
                        Inbox
                    </div>
                    <div class="inbox-msgs">
                        12
                    </div>
                </a>
            </div> */}
        </div>
        <div class="nav-profile">
          
            <div class="profile">
                <div class="pr-img">
                    <img src="/profile.png" alt="Insurance profile image"/>
                    <span class="name-initials">a</span>
                </div>
                <div class="pr-text">
                    <h4>Need Help?</h4>
                    <p>info@culturelyft.com</p>
                </div>
                <div class="pr-drpdwn">
                    <button class="pr-drpdwn-btn" onClick={userLogout}>
                        <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0938 11.0488L11.0454 2.00044L1.99697 11.0488" stroke="#F5F7FF"
                                stroke-width="2.68421" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
     );
}
 
export default DashboardSidebar;