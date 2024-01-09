'use client'
import { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import '../blog.css'
import BlogAside from '../components/blog-aside';
import BlogCategories from '../components/blog-categories';

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
    <BlogCategories/>
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
                          <a href={'/blog/'+post.slug} class="link hover-2">{post.title.rendered}</a>
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

           <BlogAside posts={posts}/>

          </div>
        </section>

      </article>
      
    </main>
  );
}

export default BlogPage;