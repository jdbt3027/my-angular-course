import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  template: `
    <div class="jumbotron text-center">
      <h1 class="display-4">Welcome to {{ title }}!</h1>
      <button
        type="button"
        routerLink="/albums"
        class="btn btn-primary text-center mt-3 mx-auto"
      >
        View Albums
      </button>
    </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  constructor() {}

  title = "My Angular Albums";

  ngOnInit() {}
}
