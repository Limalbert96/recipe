import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>(); //() create object instantiation
  
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
}
