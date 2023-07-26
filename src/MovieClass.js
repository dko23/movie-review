import React, { Component } from 'react';
import  {SearchBar } from './Search';
import { Link } from 'react-router-dom';

export class MovieClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filteredMovies: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y&offset=10&order=by-opening-date&api-key=5SzvsUALdiIAnDsKViXhcAuRvJUrEMp1'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        this.setState({ movies: data.results, filteredMovies: data.results });
      });
  }

  handleSearch = (searchValue) => {
    const { movies } = this.state;
    const filteredMovies = movies.filter((movie) =>
      movie.display_title.toLowerCase().includes(searchValue.toLowerCase())
    );
    this.setState({ filteredMovies });
  };

  render() {
    const { filteredMovies } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className='movie-header'>
          <h3>Movies Review </h3>
          <SearchBar onSearch={this.handleSearch} />
         </div>
          {filteredMovies.map((movie) => (
            <div className="col-md-4" key={movie.id}>
              <div className="card movie-card">
                <div className="card-body">
                  <h5 className="card-title">Byline: {movie.byline}</h5>
                  <img
                    src={movie.multimedia.src}
                    className="card-img-top"
                    alt="..."
                  />
                  <p className="card-text">
                    <strong>Critics Pick: </strong>
                    {movie.critics_pick}
                  </p>
                  <p className="card-text">
                    <strong>Title:</strong> {movie.display_title}
                  </p>
                  <p className="card-text">
                    <strong>Headline:</strong> {movie.headline}
                  </p>
                  <p className="card-text">
                <a href={movie.link.url} target="_blank" rel="noopener noreferrer" className="review-button">
                  Read Review
                </a>
              </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}










// <a href={movie.link.url} target="_blank" rel="noopener noreferrer">
// {movie.link.url}
// </a>

// ///////import React, { Component } from 'react';
// import { SearchBar } from './SearchBar';

// export class MovieClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movies: [],
//       filteredMovies: [],
//     };
//   }

//   componentDidMount() {
//     fetch(
//       'https://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y&offset=10&order=by-opening-date&api-key=5SzvsUALdiIAnDsKViXhcAuRvJUrEMp1'
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.results);
//         this.setState({ movies: data.results, filteredMovies: data.results });
//       });
//   }

//   handleSearch = (searchValue) => {
//     const { movies } = this.state;
//     const filteredMovies = movies.filter((movie) =>
//       movie.display_title.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     this.setState({ filteredMovies });
//   };

//   render() {
//     const { filteredMovies } = this.state;

//     return (
//       <div className="container">
//         <div className="row">
//           <h3>Movies</h3>
//           <SearchBar onSearch={this.handleSearch} />
//           {filteredMovies.map((movie) => (
//             <div className="col-md-4" key={movie.id}>
//               <div className="card movie-card">
//                 <div className="card-body">
//                   <h5 className="card-title">Byline: {movie.byline}</h5>
//                   <img
//                     src={movie.multimedia.src}
//                     className="card-img-top"
//                     alt="..."
//                   />
//                   <p className="card-text">
//                     <strong>Critics Pick: </strong>
//                     {movie.critics_pick}
//                   </p>
//                   <p className="card-text">
//                     <strong>Title:</strong> {movie.display_title}
//                   </p>
//                   <p className="card-text">
//                     <strong>Headline:</strong> {movie.headline}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
