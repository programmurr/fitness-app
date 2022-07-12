import "../styles/404.css";
import { Link } from "react-router-dom";
import styles from "../styles/links.module.css";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <p className="not-found-text">404 Not Found</p>
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>
    </div>
  );
}
