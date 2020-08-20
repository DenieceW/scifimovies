import React from "react";
import GridItem from "./GridItem";
import "./GridList.css";

const GridList = (props) => {
  let movieList = props.movieList.map(movie =>{
    return <GridItem key={movie.movie} image={movie.img} movie={movie.movie} />
  });

  return (
    <ul className="gridList">
    {movieList}
    </ul>
  );

}

export default GridList;

// <GridItem image="img/movie_1.jpg" altText="Altered Carbon"/>
// <GridItem image="img/movie_2.jpg" altText="Annihilation"/>
// <GridItem image="img/movie_3.jpg" altText="Arrival"/>
// <GridItem image="img/movie_4.jpg" altText="Event Horizon"/>
// <GridItem image="img/movie_5.jpg" altText="Interstellar"/>
// <GridItem image="img/movie_6.jpg" altText="Stargate"/>
// <GridItem image="img/movie_7.jpg" altText="The Expanse"/>
// <GridItem image="img/movie_8.jpg" altText="The Fifth Element"/>
// <GridItem image="img/movie_9.jpg" altText="The Martian"/>
