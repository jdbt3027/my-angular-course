import { Component, OnInit } from '@angular/core';
import { Album } from "../album.model";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']

})
export class AlbumListComponent implements OnInit {

  albumsArray: Album[];
  constructor() { }

  ngOnInit(): void {

    this.albumsArray = [
      {
        id: 1,
        artist: "Tremonti",
        albumName: "Dust",
        onSale: true,
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
        onSale: false,
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
        onSale: true,
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
