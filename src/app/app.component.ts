import {Component} from '@angular/core'
import {initializeApp} from "firebase/app"

@Component({
  selector: 'MF-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies-finder'

  firebaseConfig = {
    apiKey: "AIzaSyAnjzG-3_kcFQCxQr9IVoy8a2fFmgf9XFY",
    authDomain: "movie-finder-app.firebaseapp.com",
    projectId: "movie-finder-app",
    storageBucket: "movie-finder-app.appspot.com",
    messagingSenderId: "69818344013",
    appId: "1:69818344013:web:e5d1f44330b783b3def204"
  }

  app = initializeApp(this.firebaseConfig)
}


