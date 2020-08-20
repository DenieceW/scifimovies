import React from "react";
import axios from "axios";
import "./Movie.css";

class Movie extends React.Component {

  state={title: "", plot: "", director: ""}

  componentDidMount(){
  //  const BASE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e001739b";
    // http://www.omdbapi.com/?apikey=[yourkey]&
    // const URL = BASE_URL + this.props.match.params.movieId;
   axios.get("http://www.omdbapi.com/?i=" + this.props.match.params.movieId + "&apikey=e001739b")
      .then(res =>{
        this.setState({
          title: res.data.Title,
          plot: res.data.Plot,
          director: res.data.Director,
        })
      });
  }

  render(){
    console.log(this.props.match.params);
    return(
      <div class="movieContainer">
      <figure>
      <img src={"/img/movie_" + this.props.match.params.movieId + ".jpg"} alt={this.state.title || "no known data"}/>
      </figure>

      <h2>Title of movie</h2>
      <p>{this.state.title || "no known data"}</p>
      <h2>Storyline</h2>
      <p>{this.state.plot || "no known data"}</p>
      <h2>Director</h2>
      <p>{this.state.director || "no known data"}</p>
      </div>
    );
  }
}

export default Movie;
