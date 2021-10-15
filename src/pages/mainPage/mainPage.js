import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PostCard from '../../components/post-card/post-card';
import Error from '../../components/error/error';

import './mainPage.css';
import CreatePage from '../createPage/createPage';

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [post, setPost] = useState({});
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

  const handlePostDelete = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(
        `https://guarded-bayou-18266.herokuapp.com/api/v1/posts`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            postId,
          },
        }
      );
      const data = await res.json();
      if (res.status !== 200) {
        setError(data);
        return;
      } else {
        const arr = posts.filter((x) => x._id !== data.post._id);
        setPosts(arr);
        return;
      }
    } catch (err) {
      setError(err);
    }
  };

  const handlePostEdit = (post) => {
    setPost({ ...post });
    setEditing(true);
  };

  const handleCloseEdit = () => {
    setEditing(false);
    setPost({});
  };

  if (error) {
    return <Error message={error.message} />;
  } else {
    return (
      <>
        {editing && (
          <CreatePage
            title={post.title}
            description={post.description}
            editing={true}
            id={post._id}
            close={handleCloseEdit}
          />
        )}
        {!editing && (
          <main className="main-container">
            <Link to="/create" className="main-create-link">
              Create Post
            </Link>
            {posts.map((x) => {
              return (
                <PostCard
                  post={x}
                  key={x._id}
                  deletePost={handlePostDelete}
                  editPost={handlePostEdit}
                />
              );
            })}
          </main>
        )}
      </>
    );
  }
};

export default MainPage;
