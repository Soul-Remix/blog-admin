import { useEffect, useState } from 'react';

import PostCard from '../../components/post-card/post-card';
import Error from '../../components/error/error';

import './mainPage.css';

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const fetchPosts = async () => {
    try {
      const res = await fetch(
        'https://guarded-bayou-18266.herokuapp.com/api/v1/posts/all'
      );
      const data = await res.json();
      if (res.status === 200) {
        setPosts(data.posts);
      } else {
        setError(data);
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) {
    return <Error message={error.message} />;
  } else {
    return (
      <main className="main-container">
        {posts.map((x) => {
          return <PostCard post={x} key={x._id} />;
        })}
      </main>
    );
  }
};

export default MainPage;
