import "./NotFound.css";
import { Header } from "../components/Header.jsx";

export function NotFound() {
  return (
    <>
      <Header />
      <div className="not-found-container">
        <h1>404 Page not found.</h1>
      </div>
    </>
  );
}
