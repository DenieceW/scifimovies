import React from "react";
import "./SearchBar.css"

class SearchBar extends React.Component{

  state = {searchTerm: ""};

  onChange = (event) =>{
    this.setState({
      searchTerm:event.target.value
    });
  }
  onSubmit = (event) =>{
    event.preventDefault();
    this.props.filterList(this.state.searchTerm);
  }
  render(){ //als iets een functie is van een className gebruik je normale functie, arrow functie als je zelf een functie maakt
    return(
      <div className="searchBar">
          <form onSubmit={this.onSubmit}>
            <input onChange={this.onChange} type="text" placeholder={this.props.placeholder || "Search for a movie"} />
          </form>
      </div>
    )
  }
}
export default SearchBar;

//als je een state wil bijhouden, dan moet je een className component maken.
