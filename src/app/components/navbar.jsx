const Navbar = () => {
    return (
        <header>
        <nav>
          <div class="nav-container container">
            <div class="logo">
              <a href="/">
                <img
                  src="logo.png"
                  alt=""
                  class="h-10 w-full object-contain md:mr-20"
                />
              </a>
            </div>
            <div
              className="links"
              id="links"
            >
              <div class="cancel">
                <span
                 className="links"
                  ><i class="fas fa-times"></i
                ></span>
              </div>
              <div class="menu-item-lf">
                <router-link to="/dashboard"
                  ><button class="find-btn">AI Research Hub</button></router-link
                >
                <a href="/#partners">Partner Network</a>
                <a href="/dashboard/research-papers">Research Papers</a>
                <a href="/events">Events</a>
              </div>
              <div class="dropdown">
                <button class="dropbtn flex items-center">
                  For Reserchers<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    width="8"
                    class="ml-2 h-3 w-3"
                  >
                    <path
                      d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
                    ></path>
                  </svg>
                </button>
                <div class="dropdown-content">
                  <div class="dropdown-extras">
                    <div class="drop-extra">
                      <h4>Tools and Frameworks</h4>
                      <div class="drop-extra-links">
                        <a href="/register">Data Sets</a>
                        <a href="/register">Public API</a>
                        <a href="/register">Forums</a>
                        <div class="drop-extras-btns flex">
                          <router-link to="/register">
                            <button class="login">Login</button></router-link
                          >
                          <span>or</span>
                          <router-link to="/register"
                            ><button class="register">Register</button></router-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="menu-bar">
              <span
                className="menu-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <g clip-path="url(#clip0_302_221)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 9.84375C0 9.32161 0.207421 8.82085 0.576634 8.45163C0.945846 8.08242 1.44661 7.875 1.96875 7.875H40.0312C40.5534 7.875 41.0542 8.08242 41.4234 8.45163C41.7926 8.82085 42 9.32161 42 9.84375C42 10.3659 41.7926 10.8667 41.4234 11.2359C41.0542 11.6051 40.5534 11.8125 40.0312 11.8125H1.96875C1.44661 11.8125 0.945846 11.6051 0.576634 11.2359C0.207421 10.8667 0 10.3659 0 9.84375ZM0 21C0 20.4779 0.207421 19.9771 0.576634 19.6079C0.945846 19.2387 1.44661 19.0312 1.96875 19.0312H40.0312C40.5534 19.0312 41.0542 19.2387 41.4234 19.6079C41.7926 19.9771 42 20.4779 42 21C42 21.5221 41.7926 22.0229 41.4234 22.3921C41.0542 22.7613 40.5534 22.9688 40.0312 22.9688H1.96875C1.44661 22.9688 0.945846 22.7613 0.576634 22.3921C0.207421 22.0229 0 21.5221 0 21ZM1.96875 30.1875C1.44661 30.1875 0.945846 30.3949 0.576634 30.7641C0.207421 31.1333 0 31.6341 0 32.1562C0 32.6784 0.207421 33.1792 0.576634 33.5484C0.945846 33.9176 1.44661 34.125 1.96875 34.125H40.0312C40.5534 34.125 41.0542 33.9176 41.4234 33.5484C41.7926 33.1792 42 32.6784 42 32.1562C42 31.6341 41.7926 31.1333 41.4234 30.7641C41.0542 30.3949 40.5534 30.1875 40.0312 30.1875H1.96875Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_302_221">
                      <rect width="42" height="42" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </nav>
      </header>
      );
}
 
export default Navbar;