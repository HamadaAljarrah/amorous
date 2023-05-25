import { Component, OnInit, Input } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Dropdown } from 'src/app/components/dropdown/dropdown.component';
import { MyoNavService } from 'src/app/services/myo-nav.service';
import { UserChoiceService } from 'src/app/services/user-choice.service';

@Component({
    selector: 'app-bottle-design',
    templateUrl: './bottle-design.component.html',
    styleUrls: ['./bottle-design.component.scss'],
})
export class BottleDesignComponent implements OnInit {
    @Input() showNum!: number;
    fonts: Dropdown[] = [
        { label: 'Arial', value: 'Arial, Helvetica, sans-serif' },
        { label: 'Tangerine', value: '"Tangerine", cursive' },
    ];

    colors: Dropdown[] = [
        { label: 'White', value: 'white' },
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
    ];

    sizes: Dropdown[] = [
        { label: 'large', value: '16px' },
        { label: 'medium', value: '14px' },
        { label: 'small', value: '12px' },
    ];

    selectedFont = 'Arial, Helvetica, sans-serif';
    selectedColor = 'white';
    selectedSize = '16px';

    preview = false;
    textTop = '';
    middleText = '';
    bottomText = '';

    constructor(
        private myoNavService: MyoNavService,
        private userChoiceService: UserChoiceService,
        private toast: HotToastService
    ) {}

    ngOnInit(): void {
        //save data
    }
    get show(): boolean {
        return this.myoNavService.getCurrentComponent() === this.showNum;
    }

    setOption() {
        this.userChoiceService.setBottleText({
            top: this.textTop,
            middle: this.middleText,
            bottom: this.bottomText,
            fontColor: this.selectedColor,
            fontSize: this.selectedSize,
            fontStyle: this.selectedFont,
        });
    }
    togglePreview() {
        this.preview = !this.preview;
    }
}
