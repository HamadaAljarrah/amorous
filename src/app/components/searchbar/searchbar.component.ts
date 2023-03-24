import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
    placeholder = 'Search...';
    @Output() action = new EventEmitter();
    constructor() {}

    ngOnInit(): void {}

    onChange(event: Event){
      const value = (event.target as HTMLInputElement).value;
      this.action.emit(value)
    }

 
}
