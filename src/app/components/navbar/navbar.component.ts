import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import {
    UserChoices,
    UserChoiceService,
} from 'src/app/services/user-choice.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
    showSidebar = false;
    userChoice!: UserChoices;
    constructor(private userChoiceService: UserChoiceService) {}
 

    ngOnInit(): void {
        this.userChoiceService.choices$.pipe(takeUntil(this.destroy$)).subscribe(
            (data) => (this.userChoice = data)
        );
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        let element = document.querySelector('.navbar') as HTMLElement;
        if (window.pageYOffset > element.clientHeight) {
            element.classList.add('background');
        } else {
            element.classList.remove('background');
        }
    }

    toggleSideBar() {
        this.showSidebar = !this.showSidebar;
    }

    private destroy$ = new Subject<void>()
    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
    }
}
