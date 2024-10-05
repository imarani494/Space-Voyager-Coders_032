import "./footer.css";

export const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="margintofooter">
        <div>
          <h2>Games</h2>
          <p>Action</p>
          <p>Role Playing</p>
          <p>Strategy</p>
          <p>Casual</p>
        </div>
        <div>
          <h2>Company</h2>
          <p>Simulation</p>
          <p>About</p>
        </div>
        <div>
          <h2>Resource</h2>
          <p>News</p>
          <p>Blog</p>
          <p>Developers</p>
        </div>
        <div>
          <h2>Help & Support</h2>
          <p>Questions & Queries</p>
          <p>Support</p>
        </div>
      </div>
      <div className="footercontainersecond">
        <p>
          <i className="ri-twitter-fill"></i>
        </p>
        <p>
          <i className="ri-youtube-fill"></i>
        </p>
        <p>
          <i className="ri-pinterest-fill"></i>
        </p>
      </div>
      <div className="copyrighttext">
        <p>Copyright © 2024 Ludo Verse. All rights reserved.</p>
      </div>
    </div>
  );
};
