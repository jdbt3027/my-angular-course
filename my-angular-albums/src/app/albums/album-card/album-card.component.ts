import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Album } from "../album.model";

@Component({
  selector: "app-album-card",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.css"]
})
export class AlbumCardComponent implements OnInit {
  @Input()
  album: Album;
  newPrice: number;

  @Output()
  albumClicked: EventEmitter<Album> = new EventEmitter<Album>();

  constructor() {}

  ngOnInit() {}

  showAlbum() {
    this.albumClicked.emit(this.album);
  }

  showArtist() {
    console.log("Artist selected: " + this.album.artist);

    if (this.album.onSale) {
      // Apply 10% discount
      this.newPrice = this.album.price - (this.album.price * .10);
      }
  }
}
