import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="error-container">
      <div className="error-msg-wrapper">
        <h1>Page not found</h1>

        <p>
          The page you are looking for, is in construction. Go back to{" "}
          <Link to="/" title="homepage">
            Homepage
          </Link>
        </p>
      </div>
    </main>
  );
}

export default NotFound;
