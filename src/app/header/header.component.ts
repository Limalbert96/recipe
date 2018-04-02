import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  public isRecipe: boolean = true;

  @Output() featureSelected = new EventEmitter<string>(); //() create object instantiation

  onSelect(feature: string) {
    this.featureSelected.emit(feature);

    if (feature == "recipe") {
      this.isRecipe = true;
    } else {
      this.isRecipe = false;
    }
  }
}
