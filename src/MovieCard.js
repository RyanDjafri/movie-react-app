import React from "react";
import "./MovieCard.css";

function MovieCard(props) {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="card">
      <div className="poster">
        <img src={props.poster_path ? imgUrl + props.poster_path : "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2luZW1hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"} />
      </div>

      <div className="info">
        <p className="title">{props.title}</p>
        <p className="vote">{props.vote_average}</p>
      </div>
      <div className="overview">
        <h2 className="title-overview">Overview : </h2>
        <h3 className="overview-info">{props.overview}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
