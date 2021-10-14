import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Post from '../../components/post/post';
import CommentCard from '../../components/comment-card/comment-card';
import Error from '../../components/error/error';
import Loader from '../../components/loader/loader';

import './postPage.css';

const PostPage = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchpost = async () => {
    try {
      const res = await fetch(
        `https://guarded-bayou-18266.herokuapp.com/api/v1/post/${id}`
      );
      const data = await res.json();
      if (res.status === 200) {
        setData((old) => (old = data));
        setLoading(false);
      } else {
        setLoading(false);
        setError(data);
      }
    } catch (err) {
      setLoading(false);
      setError(data);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(
        `https://guarded-bayou-18266.herokuapp.com/api/v1/post/${id}/comment`,
        {
          method: 'DELETE',
          headers: {
            commentId: commentId,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const comment = await res.json();
      if (res.status === 200) {
        const arr = data.comments.filter((x) => {
          if (x._id !== comment.comment._id) {
            return x;
          }
        });
        const newData = {
          ...data,
          comments: arr,
        };
        setData(newData);
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchpost();
  }, []);

  if (error) {
    return <Error message={error.message} />;
  }
  if (loading) {
    return <Loader />;
  }
  if (data) {
    return (
      <>
        <Post data={data} />
        <div className="comments-container" id="comments">
          <CommentCard comments={data.comments} handleDelete={deleteComment} />
        </div>
      </>
    );
  }
};

export default PostPage;
