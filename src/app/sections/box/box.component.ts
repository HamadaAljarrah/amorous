import { Component, OnInit, Input } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { CarouselItems } from 'src/app/components/carousel/carousel.component';
import { MyoNavService } from 'src/app/services/myo-nav.service';
import { UserChoiceService } from 'src/app/services/user-choice.service';

@Component({
    selector: 'app-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
    @Input() showNum!: number;
    selectedOption = 0;
    carouselItem: CarouselItems[] = [
        {
            img: 'https://custombeautybox.com/wp-content/uploads/2020/06/Custom-perfume-box-main.jpg',
            value: 'Box 1',
        },
        {
            img: 'https://custombeautybox.com/wp-content/uploads/2020/06/Custom-perfume-box-main.jpg',
            value: 'Box 2',
        },
        {
            img: 'https://custombeautybox.com/wp-content/uploads/2020/06/Custom-perfume-box-main.jpg',
            value: 'Box 3',
        },
        {
            img: 'https://custombeautybox.com/wp-content/uploads/2020/06/Custom-perfume-box-main.jpg',
            value: 'Box 4',
        },
        {
            img: 'https://custombeautybox.com/wp-content/uploads/2020/06/Custom-perfume-box-main.jpg',
            value: 'Box 5',
        },
        {
            img: 'https://custombeautybox.com/wp-content/uploads/2020/06/Custom-perfume-box-main.jpg',
            value: 'Box 6',
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
        const box = this.carouselItem[selectedOption];
        this.toast.close();
        this.toast.success('Selected ' + box.value);
        this.userChoiceService.setBox(box.value);
        this.selectedOption = box.value;
    }
}
