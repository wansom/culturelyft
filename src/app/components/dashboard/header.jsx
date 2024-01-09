const DashboardHeader = () => {
    return ( 
        <div class="tp-dash-vw">
        <span>Clients</span>
        <div class="dash-notifications">
          <div class="bell">
            <svg
              width="34"
              height="37"
              viewBox="0 0 34 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5952 7.83333V7.83333C12.5792 7.83333 9.0786 10.5666 8.10458 14.4626L6.68278 20.1498C6.15151 22.2749 4.84726 24.1256 3.02469 25.3407V25.3407C2.11859 25.9447 2.54623 27.3571 3.63523 27.3571H29.5552C30.6442 27.3571 31.0719 25.9447 30.1658 25.3407V25.3407C28.3432 24.1256 27.039 22.2749 26.5077 20.1498L25.0859 14.4626C24.1119 10.5665 20.6112 7.83333 16.5952 7.83333V7.83333ZM16.5952 7.83333V1"
                stroke="#4A4A4A"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M11.879 31.5488C12.1571 32.5867 12.7699 33.5038 13.6223 34.1579C14.4748 34.812 15.5192 35.1665 16.5937 35.1665C17.6681 35.1665 18.7126 34.812 19.565 34.1579C20.4174 33.5038 21.0302 32.5867 21.3083 31.5488"
                stroke="#FF0000"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="notify-num">8</div>
        </div>
      </div>
     );
}
 
export default DashboardHeader;