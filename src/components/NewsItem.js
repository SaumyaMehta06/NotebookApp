import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://img.freepik.com/free-photo/network-connection-graphic-overlay-background-computer-screen_53876-120776.jpg?w=2000"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              className="btn btn-sm btn-dark"
              rel="noreferrer"
              target="_blank"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
