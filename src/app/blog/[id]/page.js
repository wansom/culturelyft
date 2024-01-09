'use client'
import Navbar from "@/app/components/navbar";
import{ useEffect, useState } from 'react';
import { useParams } from 'next/navigation'

const BlogPost = () => {

  const slug  = useParams();
  const [post, setPost] = useState(null);

  // Move the useRouter outside of useEffect
  const fetchPost = async () => {
    try {
      const response = await fetch(`https://intelliverseai.com/wp/wp-json/wp/v2/posts?slug=${slug}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const fetchedPost = await response.json();
      console.log('WordPress API Response:', fetchedPost);
      setPost(fetchedPost);
    } catch (error) {
      console.error('Error fetching WordPress post:', error.message);
    }
  };
  

  useEffect(() => {
       fetchPost()
    
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      {/* Render the rest of your component using the 'post' data */}
    </main>
  );
};

export default BlogPost;
