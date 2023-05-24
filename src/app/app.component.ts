import { Component, OnInit } from "@angular/core";
import { assetUrl } from "src/single-spa/asset-url";

// @ts-ignore
import { getAllUSer, mount, currentUser } from "@sifast/navbar";
import { Observable } from "rxjs";

@Component({
  selector: "app1-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "app1";
  data ;
  constructor() {}

  ngOnInit(): void {
    currentUser.subscribe(user => {
      this.data = user ;
    })
  }
}
