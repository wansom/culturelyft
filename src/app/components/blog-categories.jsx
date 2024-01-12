const BlogCategories = () => {
    return ( 
        <section class="topics mt-2" id="topics" aria-labelledby="topic-label">
        <div class="container mx-auto">

          <div class="card topic-card">

            <div class="card-content">

              <h2 class="headline headline-2 section-title card-title text-white" id="topic-label">
                Resources
              </h2>

              <p class="card-text">
                Don't miss out on the latest Expert insights on performance management, employee development and employee engagement for HR professionals and people leaders.
              </p>

              <div class="btn-group">
                <button class="btn-icon" aria-label="previous" data-slider-prev>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </button>

                <button class="btn-icon" aria-label="next" data-slider-next>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </button>
              </div>

            </div>

            <div class="slider" data-slider>
              <ul class="slider-list" data-slider-container>

                <li class="slider-item">
                  <a href="/blog" class="slider-card">

                    <figure class="slider-banner img-holder h-[318px]">
                      <img src="/banner.jpg" width="507" height="618" loading="lazy" alt="Sport"
                        class="img-cover" />
                    </figure>

                    <div class="slider-content">
                      <span class="slider-title">Employee Engagement</span>

                      <p class="slider-subtitle">38 Articles</p>
                    </div>

                  </a>
                </li>

                <li class="slider-item">
                  <a href="blog" class="slider-card">

                    <figure class="slider-banner img-holder h-[318px]" >
                      <img src="/about-2.jpg" width="507" height="618" loading="lazy" alt="Travel"
                        class="img-cover" />
                    </figure>

                    <div class="slider-content">
                      <span class="slider-title">Employee Experience</span>

                      <p class="slider-subtitle">63 Articles</p>
                    </div>

                  </a>
                </li>

                <li class="slider-item">
                  <a href="/blog" class="slider-card">

                    <figure class="slider-banner img-holder h-[318px] " >
                      <img src="/blog-1.jpg" width="507" height="618" loading="lazy" alt="Design"
                        class="img-cover" />
                    </figure>

                    <div class="slider-content">
                      <span class="slider-title">Company Culture</span>

                      <p class="slider-subtitle">78 Articles</p>
                    </div>

                  </a>
                </li>

              </ul>
            </div>

          </div>

        </div>
      </section>
     );
}
 
export default BlogCategories;