import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  items = ["Item 11"];

  add() {
    this.items.push("Item " + (this.items.length + 1));
  }

  remove() {
    this.items.pop();
  }

}
