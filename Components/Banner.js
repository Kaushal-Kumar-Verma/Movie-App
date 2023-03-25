import React, { Component } from "react";
import { movies } from "./getMovies";
export default class Banner extends Component {
  render() { // when you use render then you close js {}
    // console.log(movies.results[0]);
    let movie = movies.results[0];
    // let movie = "";
    return ( // return me jsx likhte hai
      <>
        {movie = "" ? (
          <div className="spinner-border text-primary" role="status">
            <span clasName="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="card banner-card">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="card-img-top banner-img"
              alt="..."
            />
            {/* <div className="card-body banner-title"> */}
              <h5 className="card-title banner-title ">{movie.original_title}</h5>
              <p className="card-text banner-text">{movie.overview}</p>
              {/*<a href="#" class="btn btn-primary">Go somewhere</a>*/}
            {/* </div> */}
          </div>
        )}
      </>
    );
  }
}


