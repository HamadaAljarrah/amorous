import { transition, style, animate, trigger } from '@angular/animations';

export const fadeTransfrom = trigger('fadeTransfrom', [
    transition(':enter', [
        style({ transform: 'translateY(-10px)', opacity: 0 }),
        animate(
            '800ms ease-in-out',
            style({ transform: 'translateY(0)', opacity: 1 })
        )
    ])
]);

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in-out', style({ opacity: 1 }))
    ]),
    transition(':leave', [animate('0.1s ease-in-out', style({ opacity: 0 }))])
]);



