import './error.css';

const Error = ({ message }) => {
  const onBtnClick = () => {
    window.location.reload();
  };

  return (
    <div className="error-container">
      <div className="overlay"></div>
      <div className="error-card">
        <h2>Error</h2>
        <p>{message}</p>
        <button className="error-button" onClick={onBtnClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Error;
