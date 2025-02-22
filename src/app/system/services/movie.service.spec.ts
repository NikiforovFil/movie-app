import {HttpClientModule} from "@angular/common/http"
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import {TestBed} from '@angular/core/testing'
import {Movie} from "../../common/models/Movie.model"

import {MovieService} from "./movie.service"

describe('MovieService', () => {
  let movieService: MovieService
  let httpTestingController: HttpTestingController

  const mockDataGenres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ] as { id: number, name: string }[]
  const mockDataMovies = {
    "page": 1,
    "results": [{
      "adult": false,
      "backdrop_path": "/pUc51UUQb1lMLVVkDCaZVsCo37U.jpg",
      "genre_ids": [53, 27],
      "id": 482373,
      "original_language": "en",
      "original_title": "Don't Breathe 2",
      "overview": "The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire. Their quiet life together is shattered when a group of criminals kidnap the girl, forcing the Blind Man to leave his safe haven to save her.",
      "popularity": 3581.263,
      "poster_path": "/hRMfgGFRAZIlvwVWy8DYJdLTpvN.jpg",
      "release_date": "2021-08-12",
      "title": "Don't Breathe 2",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 381
    }, {
      "adult": false,
      "backdrop_path": "/nDLylQOoIazGyYuWhk21Yww5FCb.jpg",
      "genre_ids": [28, 12, 14],
      "id": 566525,
      "original_language": "en",
      "original_title": "Shang-Chi and the Legend of the Ten Rings",
      "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
      "popularity": 3228.037,
      "poster_path": "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
      "release_date": "2021-09-01",
      "title": "Shang-Chi and the Legend of the Ten Rings",
      "video": false,
      "vote_average": 8,
      "vote_count": 482
    }, {
      "adult": false,
      "backdrop_path": "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
      "genre_ids": [28, 878, 12],
      "id": 588228,
      "original_language": "en",
      "original_title": "The Tomorrow War",
      "overview": "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
      "popularity": 3145.279,
      "poster_path": "/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
      "release_date": "2021-09-03",
      "title": "The Tomorrow War",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 299
    }, {
      "adult": false,
      "backdrop_path": "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
      "genre_ids": [28, 12, 14, 35],
      "id": 436969,
      "original_language": "en",
      "original_title": "The Suicide Squad",
      "overview": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
      "popularity": 2535.755,
      "poster_path": "/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
      "release_date": "2021-07-28",
      "title": "The Suicide Squad",
      "video": false,
      "vote_average": 8,
      "vote_count": 3583
    }, {
      "adult": false,
      "backdrop_path": "/7WJjFviFBffEJvkAms4uWwbcVUk.jpg",
      "genre_ids": [12, 14, 35, 28],
      "id": 451048,
      "original_language": "en",
      "original_title": "Jungle Cruise",
      "overview": "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.",
      "popularity": 1931.33,
      "poster_path": "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
      "release_date": "2021-07-28",
      "title": "Jungle Cruise",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 2436
    }, {
      "adult": false,
      "backdrop_path": "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg",
      "genre_ids": [28, 12, 53, 878],
      "id": 497698,
      "original_language": "en",
      "original_title": "Black Widow",
      "overview": "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
      "popularity": 1671.533,
      "poster_path": "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
      "release_date": "2021-07-07",
      "title": "Black Widow",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 4823
    }, {
      "adult": false,
      "backdrop_path": "/mtRW6eAwOO27h3zrfU2foQFW7Hg.jpg",
      "genre_ids": [16, 10751, 12, 35],
      "id": 675445,
      "original_language": "en",
      "original_title": "PAW Patrol: The Movie",
      "overview": "Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.",
      "popularity": 1567.119,
      "poster_path": "/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg",
      "release_date": "2021-08-09",
      "title": "PAW Patrol: The Movie",
      "video": false,
      "vote_average": 8,
      "vote_count": 365
    }, {
      "adult": false,
      "backdrop_path": "/849RDhbADVVnhtggR14dDBYejeN.jpg",
      "genre_ids": [14, 10749, 35],
      "id": 593910,
      "original_language": "en",
      "original_title": "Cinderella",
      "overview": "Cinderella, an orphaned girl with an evil stepmother, has big dreams and with the help of her Fabulous Godmother, she perseveres to make them come true.",
      "popularity": 2284.467,
      "poster_path": "/clDFqATL4zcE7LzUwkrVj3zHvk7.jpg",
      "release_date": "2021-09-03",
      "title": "Cinderella",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 390
    }, {
      "adult": false,
      "backdrop_path": "/nprqOIEfiMMQx16lgKeLf3rmPrR.jpg",
      "genre_ids": [28, 53, 18],
      "id": 619297,
      "original_language": "en",
      "original_title": "Sweet Girl",
      "overview": "A devastated husband vows to bring justice to the people responsible for his wife's death while protecting the only family he has left, his daughter.",
      "popularity": 1589.263,
      "poster_path": "/cP7odDzzFBD9ycxj2laTeFWGLjD.jpg",
      "release_date": "2021-08-18",
      "title": "Sweet Girl",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 474
    }, {
      "adult": false,
      "backdrop_path": "/8s4h9friP6Ci3adRGahHARVd76E.jpg",
      "genre_ids": [16, 35, 10751, 878],
      "id": 379686,
      "original_language": "en",
      "original_title": "Space Jam: A New Legacy",
      "overview": "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
      "popularity": 1490.589,
      "poster_path": "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
      "release_date": "2021-07-08",
      "title": "Space Jam: A New Legacy",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 2097
    }, {
      "adult": false,
      "backdrop_path": "/zHHcindG4uVZLPLuYWoo4rnv6Ti.jpg",
      "genre_ids": [28, 53],
      "id": 595743,
      "original_language": "en",
      "original_title": "SAS: Red Notice",
      "overview": "An off-duty SAS soldier, Tom Buckingham, must thwart a terror attack on a train running through the Channel Tunnel. As the action escalates on the train, events transpire in the corridors of power that may make the difference as to whether Buckingham and the civilian passengers make it out of the tunnel alive.",
      "popularity": 2113.88,
      "poster_path": "/6Y9fl8tD1xtyUrOHV2MkCYTpzgi.jpg",
      "release_date": "2021-08-11",
      "title": "SAS: Red Notice",
      "video": false,
      "vote_average": 6.1,
      "vote_count": 105
    }, {
      "adult": false,
      "backdrop_path": "/qD45xHA35HdJDGOaA1AgDwiWEgO.jpg",
      "genre_ids": [10749, 18],
      "id": 744275,
      "original_language": "en",
      "original_title": "After We Fell",
      "overview": "Just as Tessa's life begins to become unglued, nothing is what she thought it would be. Not her friends nor her family. The only person that she should be able to rely on is Hardin, who is furious when he discovers the massive secret that she's been keeping. Before Tessa makes the biggest decision of her life, everything changes because of revelations about her family.",
      "popularity": 1394.667,
      "poster_path": "/oOZITZodAja6optBgLh8ZZrgzbb.jpg",
      "release_date": "2021-09-01",
      "title": "After We Fell",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 186
    }, {
      "adult": false,
      "backdrop_path": "/dssCw0mUmD4EriUmkwB3PnsGu4q.jpg",
      "genre_ids": [16, 28, 14],
      "id": 841755,
      "original_language": "en",
      "original_title": "Mortal Kombat Legends: Battle of the Realms",
      "overview": "The Earthrealm heroes must journey to the Outworld and fight for the survival of their homeland, invaded by the forces of evil warlord Shao Kahn, in the tournament to end all tournaments: the final Mortal Kombat.",
      "popularity": 1406.437,
      "poster_path": "/ablrE8IbWcIrAxMmm4gnPn75AMS.jpg",
      "release_date": "2021-08-30",
      "title": "Mortal Kombat Legends: Battle of the Realms",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 80
    }, {
      "adult": false,
      "backdrop_path": "/AjQgFtfXTmmMVuaH2VfQDdGbeQH.jpg",
      "genre_ids": [28, 18, 80],
      "id": 706972,
      "original_language": "en",
      "original_title": "Narco Sub",
      "overview": "A man will become a criminal to save his family.  Director: Shawn Welling  Writer: Derek H. Potts  Stars: Tom Vera, Tom Sizemore, Lee Majors |",
      "popularity": 1281.571,
      "poster_path": "/7p0O4mKYLIhU2E5Zcq9Z3vOZ4e9.jpg",
      "release_date": "2021-07-22",
      "title": "Narco Sub",
      "video": false,
      "vote_average": 7,
      "vote_count": 47
    }, {
      "adult": false,
      "backdrop_path": "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
      "genre_ids": [35, 28, 12, 878],
      "id": 550988,
      "original_language": "en",
      "original_title": "Free Guy",
      "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
      "popularity": 1168.371,
      "poster_path": "/yc2IfL701hGkNHRgzmF4C6VKO14.jpg",
      "release_date": "2021-08-11",
      "title": "Free Guy",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 584
    }, {
      "adult": false,
      "backdrop_path": "/1Txzm4bY5ZDqvgMl7MmHeBMl7HH.jpg",
      "genre_ids": [80, 18, 53],
      "id": 860425,
      "original_language": "es",
      "original_title": "Sinaliento",
      "overview": "",
      "popularity": 1179.481,
      "poster_path": "/oxNoVgbu2v9ETL93Kri1pw8osYf.jpg",
      "release_date": "2021-08-11",
      "title": "Breathless",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 20
    }, {
      "adult": false,
      "backdrop_path": "/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg",
      "genre_ids": [16, 35, 10751, 14],
      "id": 508943,
      "original_language": "en",
      "original_title": "Luca",
      "overview": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
      "popularity": 1136.436,
      "poster_path": "/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
      "release_date": "2021-06-17",
      "title": "Luca",
      "video": false,
      "vote_average": 8.1,
      "vote_count": 4353
    }, {
      "adult": false,
      "backdrop_path": "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
      "genre_ids": [28, 80, 53],
      "id": 385128,
      "original_language": "en",
      "original_title": "F9",
      "overview": "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
      "popularity": 1137.17,
      "poster_path": "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
      "release_date": "2021-05-19",
      "title": "F9",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 3473
    }, {
      "adult": false,
      "backdrop_path": "/uZDE9VnKFnIPmWriMjnp82bH9S8.jpg",
      "genre_ids": [28, 53],
      "id": 825997,
      "original_language": "en",
      "original_title": "Rogue Hostage",
      "overview": "A former Marine races against time to save a group of hostages -- including his young daughter and a congressman — when armed militants take over his stepfather's store.",
      "popularity": 1104.246,
      "poster_path": "/1ho7YYp1DvCke9I1D3Olbh2Px63.jpg",
      "release_date": "2021-06-11",
      "title": "Rogue Hostage",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 72
    }, {
      "adult": false,
      "backdrop_path": "/uHmvk8FnoxpgujDU0RIXLkv2fNt.jpg",
      "genre_ids": [16, 35],
      "id": 573164,
      "original_language": "es",
      "original_title": "Un rescate de huevitos",
      "overview": "A rooster and his fowl partner embark on a dangerous trip to the Congo to recover their stolen eggs from a group of Russian goons.",
      "popularity": 1045.624,
      "poster_path": "/wrlQnKHLCBheXMNWotyr5cVDqNM.jpg",
      "release_date": "2021-08-12",
      "title": "Eggs Run",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 203
    }],
    "total_pages": 500,
    "total_results": 10000
  }

  let mockGenres: { id: number, name: string }[]
  let mockMovies: Movie[]
  let mockMovie: Movie
  let mockMovieId: number
  let urls: { [name: string]: string }

  const baseUrl: string = `https://api.themoviedb.org/3/`
  const apiKey: string = '4ff0d73b5002176095b05f70b1853f4b'

  function getUrl(url: string, page: number = 1): string {
    return baseUrl + url + `?api_key=${apiKey}&page=${page}`
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        MovieService
      ]
    })
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  beforeEach(() => {
    movieService = TestBed.inject(MovieService)
  })

  beforeEach(() => {
    urls = movieService.getUrlsForTests()
    mockGenres = [...mockDataGenres]
    mockMovies = mockDataMovies.results.map(el => new Movie(el))
    mockMovie = mockMovies[0]
    mockMovieId = mockMovie.id
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(movieService).toBeTruthy()
  })

  describe('getGenres()', () => {

    it('should return mock movies', () => {
      movieService.getGenres().subscribe(
        genres => expect(genres.length).toEqual(mockGenres.length),
        fail
      )

      const req = httpTestingController.expectOne(getUrl(urls.genresUrl))
      expect(req.request.method).toEqual('GET')
      req.flush(mockGenres)
    })
  })

  describe('getPopularMovies()', () => {

    it('should get popular movies', () => {
      movieService.getPopularMovies().subscribe(
        movies => expect(movies.length).toEqual(mockMovies.length),
        fail
      )

      const req = httpTestingController.expectOne(getUrl(urls.popularMoviesUrl))
      expect(req.request.method).toEqual('GET')
      req.flush(mockDataMovies)
    })
  })

  describe('getTopRatedMovies()', () => {

    it('should get top rated movies', () => {
      movieService.getTopRatedMovies().subscribe(
        movies => expect(movies.length).toEqual(mockMovies.length),
        fail
      )

      const req = httpTestingController.expectOne(getUrl(urls.topRatedMoviesUrl))
      expect(req.request.method).toEqual('GET')
      req.flush(mockDataMovies)
    })
  })

  describe('getNowPlayingMovies()', () => {

    it('should get now playing movies', () => {
      movieService.getNowPlayingMovies().subscribe(
        movies => expect(movies.length).toEqual(mockMovies.length),
        fail
      )

      const req = httpTestingController.expectOne(getUrl(urls.nowPlayingMoviesUrl))
      expect(req.request.method).toEqual('GET')
      req.flush(mockDataMovies)
    })
  })

  describe('getUpcomingMovies()', () => {

    it('should get upcoming movies', () => {
      movieService.getUpcomingMovies().subscribe(
        movies => expect(movies.length).toEqual(mockMovies.length),
        fail
      )

      const req = httpTestingController.expectOne(getUrl(urls.upcomingMoviesUrl))
      expect(req.request.method).toEqual('GET')
      req.flush(mockDataMovies)
    })
  })

  describe('getImgUrl()', () => {

    it('should get img url', function () {
      const testSting = 'testString'
      expect(movieService.getImgUrl(testSting)).toEqual(urls.pictureUrl + testSting)
    })
  })

})
