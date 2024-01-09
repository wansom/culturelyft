'use client'
import { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import '../blog.css'

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://intelliverseai.com/wp/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((posts) => {
        const promises = posts.map((post) => {
          return fetch(
            `https://intelliverseai.com/wp/wp-json/wp/v2/media/${post.featured_media}`
          )
            .then((response) => response.json())
            .then((media) => {
              post.featured_image_url = media.source_url;
              return post;
            });
        });
        return Promise.all(promises);
      })
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <main>
      <Navbar />
      <article>
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
                    <a href="#" class="slider-card">

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
                    <a href="#" class="slider-card">

                      <figure class="slider-banner img-holder h-[318px]" >
                        <img src="/banner.jpg" width="507" height="618" loading="lazy" alt="Travel"
                          class="img-cover" />
                      </figure>

                      <div class="slider-content">
                        <span class="slider-title">Employee Experience</span>

                        <p class="slider-subtitle">63 Articles</p>
                      </div>

                    </a>
                  </li>

                  <li class="slider-item">
                    <a href="#" class="slider-card">

                      <figure class="slider-banner img-holder h-[318px] " >
                        <img src="/banner.jpg" width="507" height="618" loading="lazy" alt="Design"
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
        {/* 
          <section class="section feature" aria-label="feature" id="featured">
            <div class="container">
    
              <h2 class="headline headline-2 section-title">
                <span class="text-[32px] font-bold text-black">Editor's picked</span>
              </h2>
    
              <ul class="feature-list">
    
                <li>
                  <div class="card feature-card">
    
                    <figure class="card-banner img-holder h-[250px]">
                      <img src="./assets/images/featured-1.png" width="1602" height="903" loading="lazy"
                        alt="Self-observation is the first step of inner unfolding" class="img-cover"/>
                    </figure>
    
                    <div class="card-content">
    
                      <div class="card-wrapper">
                        <div class="card-tag">
                          <a href="#" class="span hover-2">#Travel</a>
    
                          <a href="#" class="span hover-2">#Lifestyle</a>
                        </div>
    
                        <div class="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">3 mins read</span>
                        </div>
                      </div>
    
                      <h3 class="headline headline-3">
                        <a href="#" class="card-title hover-2">
                          Self-observation is the first step of inner unfolding
                        </a>
                      </h3>
    
                      <div class="card-wrapper">
    
                        <div class="profile-card">
                          <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                            class="profile-banner"/>
    
                          <div>
                            <p class="card-title">Joseph</p>
    
                            <p class="card-subtitle">25 Nov 2022</p>
                          </div>
                        </div>
    
                        <a href="#" class="card-btn">Read more</a>
    
                      </div>
    
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div class="card feature-card">
    
                    <figure class="card-banner img-holder h-[250px]">
                      <img src="./assets/images/featured-2.png" width="1602" height="903" loading="lazy"
                        alt="Self-observation is the first step of inner unfolding" class="img-cover"/>
                    </figure>
    
                    <div class="card-content">
    
                      <div class="card-wrapper">
                        <div class="card-tag">
                          <a href="#" class="span hover-2">#Design</a>
    
                          <a href="#" class="span hover-2">#Movie</a>
                        </div>
    
                        <div class="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">6 mins read</span>
                        </div>
                      </div>
    
                      <h3 class="headline headline-3">
                        <a href="#" class="card-title hover-2">
                          Self-observation is the first step of inner unfolding
                        </a>
                      </h3>
    
                      <div class="card-wrapper">
    
                        <div class="profile-card">
                          <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                            class="profile-banner"/>
    
                          <div>
                            <p class="card-title">Joseph</p>
    
                            <p class="card-subtitle">25 Nov 2022</p>
                          </div>
                        </div>
    
                        <a href="#" class="card-btn">Read more</a>
    
                      </div>
    
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div class="card feature-card">
    
                    <figure class="card-banner img-holder h-[250px]">
                      <img src="./assets/images/featured-3.png" width="1602" height="903" loading="lazy"
                        alt="Self-observation is the first step of inner unfolding" class="img-cover"/>
                    </figure>
    
                    <div class="card-content">
    
                      <div class="card-wrapper">
                        <div class="card-tag">
                          <a href="#" class="span hover-2">#Design</a>
    
                          <a href="#" class="span hover-2">#Movie</a>
                        </div>
    
                        <div class="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">6 mins read</span>
                        </div>
                      </div>
    
                      <h3 class="headline headline-3">
                        <a href="#" class="card-title hover-2">
                          Self-observation is the first step of inner unfolding
                        </a>
                      </h3>
    
                      <div class="card-wrapper">
    
                        <div class="profile-card">
                          <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                            class="profile-banner"/>
    
                          <div>
                            <p class="card-title">Joseph</p>
    
                            <p class="card-subtitle">25 Nov 2022</p>
                          </div>
                        </div>
    
                        <a href="#" class="card-btn">Read more</a>
    
                      </div>
    
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div class="card feature-card">
    
                    <figure class="card-banner img-holder h-[250px]">
                      <img src="./assets/images/featured-4.png" width="1602" height="903" loading="lazy"
                        alt="Self-observation is the first step of inner unfolding" class="img-cover"/>
                    </figure>
    
                    <div class="card-content">
    
                      <div class="card-wrapper">
                        <div class="card-tag">
                          <a href="#" class="span hover-2">#Design</a>
    
                          <a href="#" class="span hover-2">#Movie</a>
                        </div>
    
                        <div class="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">6 mins read</span>
                        </div>
                      </div>
    
                      <h3 class="headline headline-3">
                        <a href="#" class="card-title hover-2">
                          Self-observation is the first step of inner unfolding
                        </a>
                      </h3>
    
                      <div class="card-wrapper">
    
                        <div class="profile-card">
                          <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                            class="profile-banner"/>
    
                          <div>
                            <p class="card-title">Joseph</p>
    
                            <p class="card-subtitle">25 Nov 2022</p>
                          </div>
                        </div>
    
                        <a href="#" class="card-btn">Read more</a>
    
                      </div>
    
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div class="card feature-card">
    
                    <figure class="card-banner img-holder h-[250px]">
                      <img src="./assets/images/featured-5.png" width="1602" height="903" loading="lazy"
                        alt="Self-observation is the first step of inner unfolding" class="img-cover"/>
                    </figure>
    
                    <div class="card-content">
    
                      <div class="card-wrapper">
                        <div class="card-tag">
                          <a href="#" class="span hover-2">#Design</a>
    
                          <a href="#" class="span hover-2">#Movie</a>
                        </div>
    
                        <div class="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">6 mins read</span>
                        </div>
                      </div>
    
                      <h3 class="headline headline-3">
                        <a href="#" class="card-title hover-2">
                          Self-observation is the first step of inner unfolding
                        </a>
                      </h3>
    
                      <div class="card-wrapper">
    
                        <div class="profile-card">
                          <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                            class="profile-banner"/>
    
                          <div>
                            <p class="card-title">Joseph</p>
    
                            <p class="card-subtitle">25 Nov 2022</p>
                          </div>
                        </div>
    
                        <a href="#" class="card-btn">Read more</a>
    
                      </div>
    
                    </div>
    
                  </div>
                </li>
    
              </ul>
    
              <a href="#" class="btn btn-secondary">
                <span class="span">Show More Posts</span>
    
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
    
            </div>
    
          </section> */}

        {/* <section class="tags" aria-labelledby="tag-label">
            <div class="container">
    
              <h2 class="headline headline-2 section-title" id="tag-label">
                <span class="span">Popular Tags</span>
              </h2>
    
              <p class="section-text">
                Most searched keywords
              </p>
    
              <ul class="grid-list">
    
                <li>
                  <button class="card tag-btn">
                    <img src="/logo.png" width="32" height="32" loading="lazy" alt="Travel"/>
    
                    <p class="btn-text">Travel</p>
                  </button>
                </li>
    
                <li>
                  <button class="card tag-btn">
                    <img src="./assets/images/tag2.png" width="32" height="32" loading="lazy" alt="Culture"/>
    
                    <p class="btn-text">Culture</p>
                  </button>
                </li>
    
                <li>
                  <button class="card tag-btn">
                    <img src="/logo.png" width="32" height="32" loading="lazy" alt="Lifestyle"/>
    
                    <p class="btn-text">Lifestyle</p>
                  </button>
                </li>
    
                <li>
                  <button class="card tag-btn">
                    <img src="/logo.png" width="32" height="32" loading="lazy" alt="Fashion"/>
    
                    <p class="btn-text">Fashion</p>
                  </button>
                </li>
    
                <li>
                  <button class="card tag-btn">
                    <img src="/logo.png" width="32" height="32" loading="lazy" alt="Food"/>
    
                    <p class="btn-text">Food</p>
                  </button>
                </li>
    
                <li>
                  <button class="card tag-btn">
                    <img src="./assets/images/tag6.png" width="32" height="32" loading="lazy" alt="Space"/>
    
                    <p class="btn-text">Space</p>
                  </button>
                </li>
    
                <li>
                  <button class="card tag-btn">
                    <img src="./assets/images/tag7.png" width="32" height="32" loading="lazy" alt="Animal"/>
    
                    <p class="btn-text">Animal</p>
                  </button>
                </li>
    
                <li>
                  <button class="card tag-btn">
                    <img src="./assets/images/tag8.png" width="32" height="32" loading="lazy" alt="Minimal"/>
    
                    <p class="btn-text">Minimal</p>
                  </button>
                </li>
    
                <li>
                  <button class="card tag-btn">
                    <img src="./assets/images/tag9.png" width="32" height="32" loading="lazy" alt="Interior"/>
    
                    <p class="btn-text">Interior</p>
                  </button>
                </li>
    
                <li>
                  <button class="card tag-btn">
                    <img src="./assets/images/tag10.png" width="32" height="32" loading="lazy" alt="Plant"/>
    
                    <p class="btn-text">Plant</p>
                  </button>
                </li>
    
                <li>
                  <button class="card tag-btn">
                    <img src="./assets/images/tag11.png" width="32" height="32" loading="lazy" alt="Nature"/>
    
                    <p class="btn-text">Nature</p>
                  </button>
                </li>
    
                <li>
                  <button class="card tag-btn">
                    <img src="./assets/images/tag12.png" width="32" height="32" loading="lazy" alt="Business"/>
    
                    <p class="btn-text">Business</p>
                  </button>
                </li>
    
              </ul>
    
            </div>
          </section> */}
        <section class="section recent-post" id="recent" aria-labelledby="recent-label">
          <div class="container">

            <div class="post-main">

              <h2 class="headline headline-2 section-title">
                <span class="span">Recent Articles</span>
              </h2>
              <ul class="grid-list">
                {posts.map((post) => (
                  <li>
                    <div class="recent-post-card">

                      <figure class="card-banner img-holder h-[258px]" >
                        <img src={post.featured_image_url}
                          alt={post.title.rendered} width="271" height="258" loading="lazy"
                          class="img-cover" />
                      </figure>

                      <div class="card-content">

                        <a href="#" class="card-badge">Working Tips</a>

                        <h3 class="text-black headline-3 card-title">
                          <a href="#" class="link hover-2">{post.title.rendered}</a>
                        </h3>

                        <p class="card-text" dangerouslySetInnerHTML={{ __html: post.content.rendered.slice(0, 200) }}>

                        </p>

                        <div class="card-wrapper">
                          <div class="card-tag">
                            <a href="#" class="span hover-2"># Travel</a>

                            <a href="#" class="span hover-2"># Lifestyle</a>
                          </div>

                          <div class="wrapper">
                            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                            <span class="span">3 mins read</span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </li>
                ))}




              </ul>
{/* 
              <nav aria-label="pagination" class="pagination">

                <a href="#" class="pagination-btn" aria-label="previous page">
                  <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
                </a>

                <a href="#" class="pagination-btn">1</a>
                <a href="#" class="pagination-btn">2</a>
                <a href="#" class="pagination-btn">3</a>
                <a href="#" class="pagination-btn" aria-label="more page">...</a>

                <a href="#" class="pagination-btn" aria-label="next page">
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </nav> */}

            </div>

            <div class="post-aside grid-list">

              <div class="card aside-card">

                <h3 class=" headline-2 aside-title">
                  <span class="span text-white">Popular Posts</span>
                </h3>

                <ul class="popular-list">


                  {posts.map((post) => (
                    <li>
                      <div class="popular-card">

                        <figure class="card-banner img-holder" style={{ width: '64px', height: '64px' }}>
                          <img src={post.featured_image_url}
                          alt={post.title.rendered} width="64" height="64" loading="lazy"
                            class="img-cover" />
                        </figure>

                        <div class="card-content">

                          <h4 class="headline headline-4 card-title">
                            <a href="#" class="link hover-2 text-white">{post.title.rendered}</a>
                          </h4>

                          <div class="warpper">
                            <p class="card-subtitle">15 mins read</p>

                            <time class="publish-date" datetime="2022-04-15">15 April 2022</time>
                          </div>

                        </div>

                      </div>
                    </li>
                  ))}

                </ul>

              </div>

            </div>

          </div>
        </section>

      </article>
    </main>
  );
}

export default BlogPage;