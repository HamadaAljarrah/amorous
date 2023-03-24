import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  @Output() action = new EventEmitter();
  @Input() src = "";
  @Input() name = ""


  constructor() { 
  }

  ngOnInit(): void {
  }

}
