import { Link } from 'react-router-dom';

import './post-card.css';

const PostCard = ({ post }) => {
  return (
    <section className="post" key={post._id}>
      <img href={post.image} alt="" className="post-image" />
      <div className="post-detail">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-desc">{post.description}</p>
        <p>Views: {post.views}</p>
        <div className="post-buttons">
          <Link className="post-btn post-btn-view" to={`/post/${post._id}`}>
            View
          </Link>
          <Link
            className="post-btn post-btn-edit"
            to={`/post/${post._id}/edit`}
          >
            Edit
          </Link>
          <button className="post-btn post-btn-delete">Delete</button>
        </div>
      </div>
    </section>
  );
};

export default PostCard;
