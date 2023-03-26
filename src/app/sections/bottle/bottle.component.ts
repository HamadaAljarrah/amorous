import { Component, Input, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { fadeInOut } from 'src/app/animation/onLoad';
import { CarouselItems } from 'src/app/components/carousel/carousel.component';
import { MyoNavService } from 'src/app/services/myo-nav.service';
import { UserChoiceService } from 'src/app/services/user-choice.service';

@Component({
    selector: 'app-bottle',
    templateUrl: './bottle.component.html',
    styleUrls: ['./bottle.component.scss'],
    animations: [fadeInOut],
})
export class BottleComponent implements OnInit {
    @Input() showNum!: number;
    selectedOption = 0;
    carouselItem: CarouselItems[] = [
        {
            img: '../../../assets/img/bottle1.png',
            value: 'Bottle 1',
        },
        {
            img: '../../../assets/img/bottle1.png',
            value: 'Bottle 2',
        },
        {
            img: '../../../assets/img/bottle1.png',
            value: 'Bottle 3',
        },
        {
            img: '../../../assets/img/bottle1.png',
            value: 'Bottle 4',
        },
        {
            img: '../../../assets/img/bottle1.png',
            value: 'Bottle 5',
        },
        {
            img: '../../../assets/img/bottle1.png',
            value: 'Bottle 6',
        },
    ];

    constructor(
        private myoNavService: MyoNavService,
        private userChoiceService: UserChoiceService,
        private toast: HotToastService
    ) {}

    ngOnInit(): void {}

    get show(): boolean {
        return this.myoNavService.getCurrentComponent() === this.showNum;
    }

    setOption(event: Event) {
        const selectedOption = +event;
        const bottle = this.carouselItem[selectedOption];
        this.toast.close();
        this.toast.success('Bottle set to ' + bottle.value);
        this.userChoiceService.setBottle(bottle.value);
        this.selectedOption = bottle.value;
    }
}
