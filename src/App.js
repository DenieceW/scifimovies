import React from "react"; //react geimporteerd
import GridList from "./GridList";
import SearchBar from "./SearchBar";
import Movie from "./Movie";

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
}from "react-router-dom";

import "./App.css";
import movieList from "./movieList";

class App extends React.Component { //constante variabletype voor alle componenten, met arrow function.

    state =  {
      list:movieList
    }

    filterList = (searchTerm) =>{
      const newList = movieList.filter(movie =>{
        if(movie.title.toLowerCase().split(' ').join('').indexOf(searchTerm.toLowerCase().split(' ').join('')) !== -1){
          return movie;
        }
      });
      this.setState({
        list:newList
      });
   }
   render(){
     return(
       <Router>
          <Switch>
            <Route exact path="/">
                <main>
                  <SearchBar filterList={this.filterList} placeholder="Search for a title"/>
                  <GridList movieList={this.state.list}/>
                  <Link to="/about"> <h4>About this project</h4> </Link>
                </main>
            </Route>
            <Route exact path="/about">
            <h1>Made by MoonieBanoonie</h1>
            <p>A collection of some of my favorite sci-fi movies and series</p>
            <p>Thanks to The Open Movie Database for the API and Yuron for the great tutorial</p>
            </Route>
            <Route exact path="/movie/:movieId" component={Movie}/>
            <Redirect to="/"/>
         </Switch>
       </Router>
     );
   }
}

export default App;


//een component is een stukje logica, hierin kun je dingen laten zien en logica meegeven
//Wanneer je een component maakt, moet je dit ook exporteren
//  return <h1> Hello World</h1>; // Elke component heeft een return functie nodig. jsx.
  //als deze app geladen wordt, dan moet Hello world teruggegeven worden (zie je webpagina)
