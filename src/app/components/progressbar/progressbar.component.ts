import { Component, OnInit } from '@angular/core';
import { MyoNavService } from 'src/app/services/myo-nav.service';
import { UserChoiceService } from 'src/app/services/user-choice.service';

@Component({
    selector: 'app-progressbar',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent implements OnInit {
    percent = 0;

    constructor(
        private userChoiceService: UserChoiceService,
        private myoNavService: MyoNavService
    ) {
        this.userChoiceService.precent$.subscribe(
            (data) => (this.percent = data)
        );
    }

    ngOnInit(): void {}

    next(): void {
        this.myoNavService.next();
    }

    previous(): void {
        this.myoNavService.previous();
    }
}
