export class Movie {
  adult: boolean
  // backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg"
  // belongs_to_collection: null
  // budget: 63000000
  // genres: [{ … }]
  // homepage: "http://www.foxmovies.com/movies/fight-club"
  id: number
  // imdb_id: "tt0137523"
  // original_language: "en"
  original_title: string
//   overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion."
//   popularity: 41.795
  poster_path: string
//   production_companies: (7) [{ … }
// , {…}
//
// ,
// {…}
// ,
// {…}
// ,
// {…}
// ,
// {…}
// ,
// {…}
// ]
// production_countries: (2) [{…
// },
// {…}
// ]
// release_date: "1999-10-15"
// revenue: 100853753
// runtime: 139
// spoken_languages: [{…
// }]
// status: "Released"
// tagline: "Mischief. Mayhem. Soap."
// title: "Fight Club"
// video: false
// vote_average: 8.4
// vote_count: 22316

  constructor(data: any) {
    this.adult = data.adult
    this.id = data.id
    this.original_title = data.original_title
    this.poster_path = data.poster_path
  }
}
