'use client'
import Navbar from "@/app/components/navbar";
import{ useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import '../../blog.css'
import BlogAside from "@/app/components/blog-aside";
import MainLoader from "@/app/components/main-loader";

const BlogPost = () => {

  const {id}  = useParams();
  const [post, setPost] = useState(null);
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
        const singlePost =posts.find((post)=>post.slug===id)
        setPost(singlePost)
      })
      .catch((error) => console.error(error));
  }, []);

if(!post){
  return(
    <MainLoader/>
  )
}
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <article>
        <section class="section recent-post" id="recent" aria-labelledby="recent-label">
          <div class="container">

            <div class="post-main">
                 <figure class="card-banner img-holder h-[258px] rounded-lg" >
                        <img src={post.featured_image_url}
                          alt={post.title.rendered} width="271" height="258" loading="lazy"
                          class="img-cover" />
                      </figure>
                      <h3 class="text-black headline-3 card-title">
                          <a href={'/blog/'+post.slug} class="link hover-2">{post.title.rendered}</a>
                        </h3>

                        <div class="card-text" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>

            </div>

<BlogAside posts={posts}/>

          </div>
        </section>

      </article>
    </main>
  );
};

export default BlogPost;
