import { Component, Input } from "@angular/core";
import { EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  component = "Card Component";
  @Input("account") data: { name: string; status: string };
  @Input() id: number;

  @Output() updateStatus = new EventEmitter<{ status: string; id: number }>();
  onSetTo(recStatus: string) {
    this.updateStatus.emit({ status: recStatus, id: this.id });
  }
}
