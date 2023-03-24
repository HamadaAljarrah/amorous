import { Component, Input, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/animation/onLoad';
import { MyoNavService } from 'src/app/services/myo-nav.service';
import { UserChoiceService } from 'src/app/services/user-choice.service';
import { content, ImpressionContent } from './impressions';

@Component({
    selector: 'app-impressions',
    templateUrl: './impressions.component.html',
    styleUrls: ['./impressions.component.scss'],
    animations: [fadeInOut]
})
export class ImpressionsComponent implements OnInit {
    @Input() showNum!: number;
    selectedOption = '';
    impressions!: ImpressionContent;
    male = false;
    female = false;
    constructor(
        private myoNavService: MyoNavService,
        private userChoiceService: UserChoiceService
    ) {}

    ngOnInit(): void {
        this.impressions = content;
        this.userChoiceService.choices$.subscribe((data) => {
            this.female = data.gender === 'female';
            this.male = data.gender === 'male';
        });
    }
    get show(): boolean {
        return this.myoNavService.getCurrentComponent() === this.showNum;
    }

    setOption(impression: string) {
        this.userChoiceService.setImpression(impression);
        this.selectedOption = impression;
    }
}
