import React from "react";
import { Link } from "react-router-dom";
import "./Page.css";
export default function Page() {
  return (
    <>
      <div className="Page_div">
        <div className="page-btn">
          <Link className="page-btn" to="/home">
            Home
          </Link>
        </div>
        <div className="page-btn">
          <Link className="page-btn" to="/settings">
            Settings
          </Link>
        </div>
        <div className="page-btn">
          <Link className="page-btn" to="/feed">
          Feeds
          </Link>
        </div>
        <div className="page-btn">
          <Link className="page-btn" to="/explore">
            Explore
          </Link>
        </div>
        <div className="page-btn">
          <Link className="page-btn" to="/profile">
            Profile
          </Link>
        </div>
      </div>
    </>
  );
}
