// DataContext.js
'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser } from './firestore';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [user,setUser] = useState(null)

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
        setPosts(singlePost)
        getCurrentUser().then(({data})=>{

            console.log(data,"I am here")
        })
      })
      .catch((error) => console.error(error));
      
  }, []);

  return (
    <DataContext.Provider value={{ posts }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataContextProvider');
  }
  return context;
};

export { DataContextProvider, useDataContext };
