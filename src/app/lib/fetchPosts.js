export async function fetchBlogSlugs() {
    const response = await fetch('https://evacare.intelliverseai.com/wp-json/wp/v2/posts');
    const posts = await response.json();
    return posts.map(post => post.slug);
  }
  export async function getBlogPosts(start,perPage) {
    const page = start || 1;
    const per_page =perPage || 10;
  
    try {
      const response = await fetch(`https://evacare.intelliverseai.com/wp-json/wp/v2/posts?per_page=${per_page}&page=${page}`);
      if (!response.ok) {
        return 'Something went wrong'
      }
  
      const posts = await response.json();
      const totalPages = response.headers.get('X-WP-TotalPages');
  
      // Fetch featured images for each post
      const postsWithImages = await Promise.all(posts.map(async (post) => {
        if (post.featured_media) {
          const mediaRes = await fetch(`https://evacare.intelliverseai.com/wp-json/wp/v2/media/${post.featured_media}`);
          if (mediaRes.ok) {
            const media = await mediaRes.json();
            post.featured_image_url = media.source_url;
          } else {
            post.featured_image_url = null;
          }
        } else {
          post.featured_image_url = null;
        }
        return post;
      }));
      const fetchedData={ posts: postsWithImages, totalPages: Number(totalPages) }
      return fetchedData
    } catch (error) {
      return JSON.stringify({ message: 'Internal Server Error' }, { status: 500 });
    }
  }