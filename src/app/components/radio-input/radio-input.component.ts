import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss']
})
export class RadioInputComponent implements OnInit {
  @Input() text = '';
  @Input() id = '';
  @Input() checked = false;
  @Output() action = new EventEmitter<()=> void>();
  constructor() { }


  
  ngOnInit(): void {
  }

}
