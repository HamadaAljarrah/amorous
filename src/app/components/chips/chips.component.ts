import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-chips',
    templateUrl: './chips.component.html',
    styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent implements OnInit {
    @Input() name: string | undefined;
    @Input() src: string | undefined;
    @Output() action = new EventEmitter<() => void>();
    constructor() {}

    ngOnInit(): void {}
}
