import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  component = "App Component";
  accounts = [
    {
      name: "Master Account",
      status: "active"
    },
    {
      name: "Testaccount",
      status: "inactive"
    },
    {
      name: "Hidden Account",
      status: "unknown"
    }
  ];
  accountAdded(newAccount: { name: string; status: string }) {
    // IF EVENT (CHILD -> PARENT) CREATE OBJECT TYPE LIKE NEWACCOUNT OR STATUSINFO
    this.accounts.push(newAccount);
  }
  changeStatus(statusInfo: { status: string; id: number }) {
    this.accounts[statusInfo.id].status = statusInfo.status;
  }
}
