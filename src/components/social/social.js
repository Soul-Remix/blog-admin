import './social.css';

const Social = () => {
  return (
    <div className="social">
      <a href="#comments">
        <svg
          version="1.1"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          aria-hidden="true"
          className="symbol-social symbol-social-comments"
        >
          <path d="M22 12q0 2.172-1.469 4.016t-4.008 2.914-5.523 1.070q-1.344 0-2.75-0.25-1.937 1.375-4.344 2-0.562 0.141-1.344 0.25h-0.047q-0.172 0-0.32-0.125t-0.18-0.328q-0.016-0.047-0.016-0.102t0.008-0.102 0.031-0.094l0.039-0.078t0.055-0.086 0.063-0.078 0.070-0.078 0.063-0.070q0.078-0.094 0.359-0.391t0.406-0.461 0.352-0.453 0.391-0.602 0.32-0.688q-1.937-1.125-3.047-2.766t-1.109-3.5q0-2.172 1.469-4.016t4.008-2.914 5.523-1.070 5.523 1.070 4.008 2.914 1.469 4.016zM28 16q0 1.875-1.109 3.508t-3.047 2.758q0.156 0.375 0.32 0.688t0.391 0.602 0.352 0.453 0.406 0.461 0.359 0.391q0.016 0.016 0.063 0.070t0.070 0.078 0.063 0.078 0.055 0.086l0.039 0.078t0.031 0.094 0.008 0.102-0.016 0.102q-0.047 0.219-0.203 0.344t-0.344 0.109q-0.781-0.109-1.344-0.25-2.406-0.625-4.344-2-1.406 0.25-2.75 0.25-4.234 0-7.375-2.063 0.906 0.063 1.375 0.063 2.516 0 4.828-0.703t4.125-2.016q1.953-1.437 3-3.313t1.047-3.969q0-1.203-0.359-2.375 2.016 1.109 3.187 2.781t1.172 3.594z"></path>
        </svg>
      </a>
      <a href="www.facebook.com">
        <svg
          version="1.1"
          width="16"
          height="28"
          viewBox="0 0 16 28"
          aria-hidden="true"
          className="symbol-social symbol-social-facebook"
        >
          <path d="M14.984 0.187v4.125h-2.453q-1.344 0-1.813 0.562t-0.469 1.687v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406q0-2.906 1.625-4.508t4.328-1.602q2.297 0 3.563 0.187z"></path>
        </svg>
      </a>
      <a href="www.twitter.com">
        <svg
          version="1.1"
          width="26"
          height="28"
          viewBox="0 0 26 28"
          aria-hidden="true"
          className="symbol-social symbol-social-twitter"
        >
          <path d="M25.312 6.375q-1.047 1.531-2.531 2.609 0.016 0.219 0.016 0.656 0 2.031-0.594 4.055t-1.805 3.883-2.883 3.289-4.031 2.281-5.047 0.852q-4.234 0-7.75-2.266 0.547 0.063 1.219 0.063 3.516 0 6.266-2.156-1.641-0.031-2.938-1.008t-1.781-2.492q0.516 0.078 0.953 0.078 0.672 0 1.328-0.172-1.75-0.359-2.898-1.742t-1.148-3.211v-0.063q1.062 0.594 2.281 0.641-1.031-0.688-1.641-1.797t-0.609-2.406q0-1.375 0.688-2.547 1.891 2.328 4.602 3.727t5.805 1.555q-0.125-0.594-0.125-1.156 0-2.094 1.477-3.57t3.57-1.477q2.188 0 3.687 1.594 1.703-0.328 3.203-1.219-0.578 1.797-2.219 2.781 1.453-0.156 2.906-0.781z"></path>
        </svg>
      </a>
    </div>
  );
};

export default Social;
