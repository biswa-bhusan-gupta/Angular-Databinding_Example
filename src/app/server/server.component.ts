// IF WE ARE BINDING AN OBJECT,USE NG

import { Component } from "@angular/core";
import { EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  component = "Server Component";
  @Output() accountAdd = new EventEmitter<{ name: string; status: string }>();

  onCreateAccount(accountname: string, accountstatus: string) {
    this.accountAdd.emit({ name: accountname, status: accountstatus });
  }
}
