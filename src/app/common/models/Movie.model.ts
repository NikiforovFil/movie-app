export class Movie {
  adult: boolean
  backdrop_path: string
  // belongs_to_collection: null
  // budget: 63000000
  genres: any[]
  // homepage: "http://www.foxmovies.com/movies/fight-club"
  id: number
  // imdb_id: "tt0137523"
  // original_language: "en"
  original_title: string
  overview: string
//   popularity: 41.795
  poster_path: string
//   production_companies: (7) [{ … }
// production_countries: (2) [{…
// release_date: "1999-10-15"
// revenue: 100853753
// runtime: 139
// spoken_languages: [{…
// }]
// status: "Released"
// tagline: "Mischief. Mayhem. Soap."
title: string
// video: false
// vote_average: 8.4
// vote_count: 22316

  constructor(data: any) {
    this.adult = data.adult
    this.id = data.id
    this.original_title = data.original_title
    this.poster_path = data.poster_path
    this.overview = data.overview
    this.title = data.title
    this.genres = data.genres
    this.backdrop_path = data.backdrop_path
  }
}
