import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyoNavService } from 'src/app/services/myo-nav.service';
import { UserChoiceService } from 'src/app/services/user-choice.service';
import { fadeInOut } from 'src/app/animation/onLoad';
@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss'],
    animations: [fadeInOut],
})
export class OptionsComponent implements OnInit {
    options = [
        {
            route: 'make-your-own',
            title: 'Make Your Own',
            text: 'When many people think about beauty, fashion and fragrance, they feel empowered and inspired. After all, when you look (and smell) good, it’s easy to feel good!',
            btn: 'Let get started',
            icon: '../../../assets//icons/myo-icon.svg',
        },
        {
            route: 'make-good-better',
            title: 'Make Good Better',
            text: 'When many people think about beauty, fashion and fragrance, they feel empowered and inspired. After all, when you look (and smell) good, it’s easy to feel good!',
            btn: 'Let get started',
            icon: '../../../assets//icons/mgb-icon.svg',
        },
        {
            route: 'let-us-choose',
            title: 'Let Us Choose',
            text: 'When many people think about beauty, fashion and fragrance, they feel empowered and inspired. After all, when you look (and smell) good, it’s easy to feel good!',
            btn: 'Let get started',
            icon: '../../../assets//icons/luc-icon.svg',
        },
    ];

    constructor(
        private router: Router,
        private userChoiceService: UserChoiceService,
        private myoNavService: MyoNavService
    ) {}

    setOption(option: string) {
        this.userChoiceService.setOption(option);
        const route = this.options.filter(d => d.title == option)[0].route
        this.router.navigateByUrl('/options/' + route);
    }

    ngOnInit(): void {
        this.userChoiceService.reset();
        this.myoNavService.reset();
    }
}
