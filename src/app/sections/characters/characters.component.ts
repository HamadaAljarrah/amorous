import { Component, Input, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { fadeInOut } from 'src/app/animation/onLoad';
import { MyoNavService } from 'src/app/services/myo-nav.service';
import { UserChoiceService } from 'src/app/services/user-choice.service';
import { content } from './characters';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss'],
    animations: [fadeInOut],
})
export class CharactersComponent implements OnInit {
    @Input() showNum!: number;
    selectedOption = '';
    characters: string[] = [];

    constructor(
        private myoNavService: MyoNavService,
        private userChoiceService: UserChoiceService,
        private toast: HotToastService
    ) {
        this.characters = content;
    }

    ngOnInit(): void {}

    get show(): boolean {
        return this.myoNavService.getCurrentComponent() === this.showNum;
    }

    setOption(character: string) {
        this.toast.close();
        this.toast.success('Character set to ' + character);
        this.userChoiceService.setCharacter(character);
        this.selectedOption = character;
    }
}
