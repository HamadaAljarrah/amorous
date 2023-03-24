import { Component, Input, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/animation/onLoad';
import { MyoNavService } from 'src/app/services/myo-nav.service';
import { UserChoiceService } from 'src/app/services/user-choice.service';
import { characterContent, content } from './characters';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss'],
    animations: [fadeInOut]
})
export class CharactersComponent implements OnInit {
    @Input() showNum!: number;
    selectedOption = '';
    characters: characterContent[] = [];

    constructor(
        private myoNavService: MyoNavService,
        private userChoiceService: UserChoiceService
    ) {
      this.characters = content;
    }


    ngOnInit(): void {}
    get show(): boolean {
        return this.myoNavService.getCurrentComponent() === this.showNum;
    }

    setOption(character: string) {
      this.userChoiceService.setCharacter(character);
      this.selectedOption = character;
  }
}