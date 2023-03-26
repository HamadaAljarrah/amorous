import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UserChoices, UserChoiceService } from './user-choice.service';

@Injectable({
    providedIn: 'root',
})
export class MyoNavService {
    private currentComponent = 0;
    private userChoice!: UserChoices;

    constructor(
        private router: Router,
        private toast: HotToastService,
        private userChoiceService: UserChoiceService
    ) {
        this.userChoiceService.choices$.subscribe((data) => {
            this.userChoice = data;
        });
    }

    next() {
        switch (this.currentComponent) {
            case 0:
                if (this.userChoice.gender) {
                    this.currentComponent++;
                } else {
                    this.toast.error('Choose a gender');
                }
                break;
            case 1:
                if (this.userChoice.character) {
                    this.currentComponent++;
                } else {
                    this.toast.warning('Choose a character');
                }
                break;
            case 2:
                if (this.userChoice.impression) {
                    this.currentComponent++;
                } else {
                    this.toast.warning('Choose a impression');
                }
                break;
            case 3:
                if (
                    this.userChoice.ingridients &&
                    this.userChoice.ingridients.length > 0
                ) {
                    this.currentComponent++;
                } else {
                    this.toast.warning('Choose at least 1 ingredient');
                }
                break;
            case 4:
                if (this.userChoice.bottle) {
                    this.currentComponent++;
                } else {
                    this.toast.warning('Choose a bottle!');
                }
                break;
            case 5:
                this.currentComponent++;
                break;
            case 6:
                if (this.userChoice.box) {
                    this.currentComponent++;
                } else {
                    this.toast.warning('Choose a box!');
                }
                break;
            case 7:
                this.router.navigateByUrl('/summary');
                break;
        }
    }

    previous() {
        if (this.currentComponent === 0) {
            this.router.navigateByUrl('/options');
        }
        if (this.currentComponent > 0) {
            this.currentComponent--;
        }
    }

    getCurrentComponent() {
        return this.currentComponent;
    }

    reset() {
        this.currentComponent = 0;
    }

    setComponent(num: number) {
        this.currentComponent = num;
    }
}
