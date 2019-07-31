import { Component, OnInit } from "@angular/core";
import { Album } from "./albums/album.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Angular Albums';
  albumsArray: Album[];
  titleCounter = 1;
  numbers: number[];

  ngOnInit(): void {

    const interval = setInterval(() => this.titleCounter++, 2000);
    setTimeout(() => clearInterval(interval), 6000);
    this.numbers = [1, 2, 3];

    this.albumsArray = [
      {
        id: 1,
        artist: "Tremonti",
        albumName: "Dust",
        isOnSale: true,
        price: 11.99,
        currency: "USD",
        year: 2016,
        releaseDate: "April 29, 2016",
        recordingLocation: "Studio Barbarosa, Orlando, FL",
        genre: "Pop/Rock",
        duration: "43:18:00",
        url: "https://www.allmusic.com/album/dust-mw0002918360"
      },
      {
        id: 2,
        artist: "Bon Jovi",
        albumName: "Slippery When Wet",
        isOnSale: false,
        price: 7,
        year: 1986,
        currency: "USD",
        releaseDate: "August 18, 1986",
        recordingLocation: "Warehouse, Philadelphia, PA",
        genre: "Pop/Rock",
        duration: "43:00",
        url: "https://www.allmusic.com/album/slippery-when-wet-mw0000652380"
      },
      {
        id: 3,
        artist: "The Beatles",
        albumName: "Sgt. Pepper's Lonely Hearts Club Band",
        isOnSale: true,
        currency: "GBP",
        price: 24,
        year: 1967,
        releaseDate: "May 26, 1967",
        recordingLocation: "",
        genre: "Pop/Rock",
        duration: "1:33:43",
        url: "https://www.allmusic.com/album/sgt-peppers-lonely-hearts-club-band-mw0000649874"
      }];

    console.log(this.albumsArray);
  }
}
