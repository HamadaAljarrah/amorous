import { Component, Input, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { fadeInOut } from 'src/app/animation/onLoad';
import { MyoNavService } from 'src/app/services/myo-nav.service';
import { UserChoiceService } from 'src/app/services/user-choice.service';
import { content, ImpressionContent } from './impressions';

@Component({
    selector: 'app-impressions',
    templateUrl: './impressions.component.html',
    styleUrls: ['./impressions.component.scss'],
    animations: [fadeInOut],
})
export class ImpressionsComponent implements OnInit {
    @Input() showNum!: number;
    selectedOption = '';
    impressions!: ImpressionContent;
    male = false;
    female = false;

    constructor(
        private myoNavService: MyoNavService,
        private userChoiceService: UserChoiceService,
        private toast: HotToastService
    ) {}

    ngOnInit(): void {
        this.impressions = content;
        this.userChoiceService.choices$.subscribe((data) => {
            this.female = data.gender === 'Female';
            this.male = data.gender === 'Male';
        });
    }
    get show(): boolean {
        return this.myoNavService.getCurrentComponent() === this.showNum;
    }

    setOption(impression: string) {
        this.toast.close();
        this.toast.success('Selected ' + impression);
        this.userChoiceService.setImpression(impression);
        this.selectedOption = impression;
    }
}
