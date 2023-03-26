import { Component, Input, OnInit } from '@angular/core';
import { MyoNavService } from 'src/app/services/myo-nav.service';
import { UserChoiceService } from 'src/app/services/user-choice.service';
import { fadeInOut } from 'src/app/animation/onLoad';
import { GenderHtml, genders } from './genders';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
    selector: 'app-gender',
    templateUrl: './gender.component.html',
    styleUrls: ['./gender.component.scss'],
    animations: [fadeInOut]
})
export class GenderComponent implements OnInit {
    @Input() showNum!: number;
    selectedOption = '';
    genders: GenderHtml[] = [];

    constructor(
        private myoNavService: MyoNavService,
        private userChoiceService: UserChoiceService,
        private toast: HotToastService
    ) {
        this.userChoiceService.choices$.subscribe((data) => {
            this.selectedOption = data['gender'];
        });
        this.genders = genders;
    }

    setOption(gender: string) {
        this.toast.close();
        this.toast.success('Gender set to ' + gender)
        this.userChoiceService.setGender(gender);
        this.selectedOption = gender;
    }

    get show(): boolean {
        return this.myoNavService.getCurrentComponent() === this.showNum;
    }
    ngOnInit(): void {}
}
