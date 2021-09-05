import React from "react";

function Photo({ id, caption, media_url, username, timestamp }) {
  return (
    <article id={id} className="article">
      <img className="photo" alt={username} src={media_url} />
      <div className="username"> {username} </div>
      <div className="caption">{caption}</div>
      <div className="timestamp">
        <div className="timestamp_date">{timestamp.substr(0, 10)}</div>
        &nbsp;
        <div className="timestamp_time">{timestamp.substr(11, 5)}</div>
      </div>
    </article>
  );
}

export function Video({ id, caption, media_url, username, timestamp }) {
  return (
    <article id={id} className="article">
      <video className="video" src={media_url} />
      <div className="username"> {username} </div>
      <div className="caption">{caption}</div>
      <div className="timestamp">
        <div className="timestamp_date">{timestamp.substr(0, 10)}</div>
        &nbsp;
        <div className="timestamp_time">{timestamp.substr(11, 5)}</div>
      </div>
    </article>
  );
}

export default Photo;
