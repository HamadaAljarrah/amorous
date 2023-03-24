import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fadeTransfrom } from 'src/app/animation/onLoad';


@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss'],
  animations: [fadeTransfrom]

})
export class OptionCardComponent implements OnInit {
  @Input() title = '';
  @Input() text = '';
  @Input() route = '';
  @Input() btn = '';
  @Input() icon = '';
  @Output() action = new EventEmitter<()=> void>();

  showSidebar = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.showSidebar = !this.showSidebar;    
  }

}
