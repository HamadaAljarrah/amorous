import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

export interface CarouselItems {
    img: string;
    value?: any;
}

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
    @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
    @Input() items: CarouselItems[] = [];
    @Output() action = new EventEmitter();
    active = 0;

    carouselConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        load: 3,
        //interval: { timing: 4000, initialDelay: 1000 },
        loop: true,
        touch: true,
        velocity: 0.2,
    };

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
        this.cdr.detectChanges();
        
    }

    getCurrentItem(){
        this.action.emit(this.myCarousel.currentSlide);
    }
}
