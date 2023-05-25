import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


export interface Dropdown{
  value: string,
  label: string
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() items!: Dropdown[];
  @Output() action = new EventEmitter();
  selected = ''

  constructor() { }

  ngOnInit(): void {
  }



  emit(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.action.emit(value);
    this.selected = value;
    
  }



}
