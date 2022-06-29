import "../styles/404.css";
import { HomeLink } from "../styled-components/links/HomeLink";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <p className="not-found-text">404 Not Found</p>
      <HomeLink to="/">Home</HomeLink>
    </div>
  );
}
