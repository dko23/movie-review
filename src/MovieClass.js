import React, { Component } from 'react';


export class MovieClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y&offset=10&order=by-opening-date&api-key=5SzvsUALdiIAnDsKViXhcAuRvJUrEMp1")
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        this.setState({ movies: data.results });
      });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <h3>Movies</h3>
          {this.state.movies.map(movie => (
            <div className='col-md-4' key={movie.id}>
              <div className="card movie-card">
                <div className="card-body">
                  <h5 className="card-title">Byline: {movie.byline}</h5>
                  <img src={movie.multimedia.src} className="card-img-top" alt="..." />
                  <p className="card-text"><strong>Critics Pick: </strong>{movie.critics_pick}</p>
                  <p className="card-text"><strong>Title:</strong> {movie.display_title}</p>
                  <p className="card-text"><strong>Headline:</strong> {movie.headline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
