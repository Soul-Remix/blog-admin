import { Link } from 'react-router-dom';

import './post-card.css';

const PostCard = ({ post }) => {
  return (
    <section className="post-card" key={post._id}>
      <img href={post.image} alt="" className="post-card-image" />
      <div className="post-card-detail">
        <h2 className="post-card-title">{post.title}</h2>
        <p className="post-card-desc">{post.description}</p>
        <p>
          Views: <span className="post-card-view">{post.views}</span>
        </p>
        <p>
          Comments:{' '}
          <span className="post-card-view">{post.comments.length}</span>
        </p>
        <div className="post-card-buttons">
          <Link
            className="post-card-btn post-btn-view"
            to={`/post/${post._id}`}
          >
            View
          </Link>
          <Link
            className="post-card-btn post-btn-edit"
            to={`/post/${post._id}/edit`}
          >
            Edit
          </Link>
          <button className="post-card-btn post-btn-delete">Delete</button>
        </div>
      </div>
    </section>
  );
};

export default PostCard;
