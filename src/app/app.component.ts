import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "hello world";
  username = "";
  isSpecial: boolean = false;
  redColor = "green";
  imageUrl =
    "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1902945.jpg";

  messageWelcome: string = "";
  onClick(message: string): void {
    this.messageWelcome = message;
  }
}
