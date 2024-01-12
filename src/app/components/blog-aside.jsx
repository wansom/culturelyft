const BlogAside = ({posts}) => {
    return ( 
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
                      <a href={'/blog/'+post.slug} class="link hover-2 text-white">{post.title.rendered}</a>
                    </h4>

                    <div class="warpper">
                    

                      <time class="publish-date" datetime="2022-04-15">{new Date(post?.date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}</time>
                    </div>

                  </div>

                </div>
              </li>
            ))}

          </ul>

        </div>

      </div>
     );
}
 
export default BlogAside;