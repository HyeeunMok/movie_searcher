import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("This is my initializer")

    const movies = [
      {id:0, poster_src:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title: "Avengers: Infinity War", overview: "This is my first overview"},
      {id:1, poster_src:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/cezWGskPY5x7GaglTTRN4Fugfb8.jpg", title: "The Avengers: Infinity War", overview: "This is my second overview"}
    ]

    var movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <table key={movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" src={movie.poster_src}/>
            </td>
            <td>
              {movie.title}
            </td>
          </tr>
          </tbody>
      </table>
      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows}
  }

  render() {
    return (
      <div className="App">
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
