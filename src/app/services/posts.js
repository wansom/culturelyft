export async function getStaticProps() {
    try {
      const response = await fetch('https://hrfleek.intelliverseai.com/wp-json/wp/v2/posts');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const posts = await response.json();
  
      return {
        props: {
          posts,
        },
      };
    } catch (error) {
      console.error('Error fetching WordPress posts:', error.message);
      return {
        props: {
          posts: [],
        },
      };
    }
  }
  