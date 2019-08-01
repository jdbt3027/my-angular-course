import { Component, OnInit } from "@angular/core";
import { Album } from "../album.model";
import { AlbumService } from "../shared/album.service";
import { Observable } from 'rxjs';

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  constructor(private albumService: AlbumService) {}
  albumsArray: Observable<Album[]>;

  ngOnInit(): void {
    this.getAlbums();
  }

  parentFunctionHandler(album) {
    alert(
      "Album " + album.albumName + " was sent from the album card component"
    );
  }

/*   getAlbums() {
    this.albumService
      .getAlbums()
      .subscribe(
        albums => (this.albumsArray = albums),
        error => console.log("Error: ", error)
      );
  } */

  getAlbums() {
    this.albumsArray = this.albumService.getAlbums();
}
}
