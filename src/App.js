import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log("This is my initializer")

    // const movies = [
    //   {id:0, poster_src:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title: "Avengers: Infinity War", overview: "This is my first overviewddddddddddddddddddddddddddddddddddddddddd"},
    //   {id:1, poster_src:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/cezWGskPY5x7GaglTTRN4Fugfb8.jpg", title: "The Avengers: Infinity War", overview: "This is my second overview eeeeeeeeeeeeeffffffffffffffffe"}
    // ]

    // var movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie} />
    //   movieRows.push(movieRow)
    // })

    // this.state = {rows: movieRows}
    this.performSerch()
  }

  performSerch() {
    console.log("Perform search using moviedb")
    const urlString ="https://api.themoviedb.org/3/search/movie?api_key=1f1b95c89a3439518717be62697c7775&query=avengers"
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        // console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])

        results.forEach((movie) => {
          console.log(movie.title)
        })
      },
      error: (xhr, status, err) =>{
        console.error("Failed to fetch data")
      }
    })
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="movieIcon-removebg.png"/>
              </td>
              <td width="8"/>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "98.5%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} placeholder="Enter search term"/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
