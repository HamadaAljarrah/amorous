import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class MyoNavService {
    private currentComponent = 0;

    constructor(private router:Router) {}

    next() {
        if (this.currentComponent < 8) {
            this.currentComponent++;
        }
    }

    previous() {
        if(this.currentComponent === 0){
            this.router.navigateByUrl("/options")
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
