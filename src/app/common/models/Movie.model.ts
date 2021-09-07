export class Movie {
  adult: boolean
  backdrop_path: string
  genres: any[]
  id: number
  original_title: string
  overview: string
  poster_path: string
  title: string
  genresId:number[]
  // belongs_to_collection: null
  // budget: 63000000
  // homepage: "http://www.foxmovies.com/movies/fight-club"
  // imdb_id: "tt0137523"
  // original_language: "en"
//   popularity: 41.795
//   production_companies: (7) [{ … }
// production_countries: (2) [{…
// release_date: "1999-10-15"
// revenue: 100853753
// runtime: 139
// spoken_languages: [{…
// }]
// status: "Released"
// tagline: "Mischief. Mayhem. Soap."
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
    this.genresId = data.genre_ids
  }
}
