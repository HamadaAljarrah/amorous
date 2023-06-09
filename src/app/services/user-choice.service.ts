import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserChoiceService {
    private choicesSource = new BehaviorSubject<UserChoices>({} as UserChoices);
    private percentSource = new BehaviorSubject<number>(0);
    choices$ = this.choicesSource.asObservable();
    precent$ = this.percentSource.asObservable();

    constructor() {}

    setOption(option: string): void {
        const current = this.choicesSource.getValue();
        current['option'] = option;
        this.choicesSource.next(current);
    }

    setGender(gender: string): void {
        const current = this.choicesSource.getValue();
        const firstIncrement = current['gender'] == undefined;
        current['gender'] = gender;
        if (firstIncrement)
            this.percentSource.next(this.percentSource.getValue() + 12);
        this.choicesSource.next(current);
    }

    setCharacter(character: string): void {
        const current = this.choicesSource.getValue();
        const firstIncrement = current['character'] == undefined;
        current['character'] = character;
        if (firstIncrement)
            this.percentSource.next(this.percentSource.getValue() + 12);
        this.choicesSource.next(current);
    }

    setImpression(impression: string): void {
        const current = this.choicesSource.getValue();
        const firstIncrement = current['impression'] == undefined;
        current['impression'] = impression;
        if (firstIncrement)
            this.percentSource.next(this.percentSource.getValue() + 12);
        this.choicesSource.next(current);
    }

    setIngridients(ingridient: Ingredient[]): void {
        const current = this.choicesSource.getValue();
        const firstIncrement = current['ingridients'] == undefined;

        if (firstIncrement || current['ingridients'].length === 0)
            this.percentSource.next(this.percentSource.getValue() + 12);
        this.choicesSource.next(current);

        current['ingridients'] = ingridient;
        if (current['ingridients'].length === 0)
            this.percentSource.next(this.percentSource.getValue() - 12);

        this.choicesSource.next(current);
    }

    setBottle(bottle: string): void {
        const current = this.choicesSource.getValue();
        const firstIncrement = current['bottle'] == undefined;
        current['bottle'] = bottle;
        if (firstIncrement)
            this.percentSource.next(this.percentSource.getValue() + 12);
        this.choicesSource.next(current);
    }

    setBottleText(bottleText: BottleText): void {
        const current = this.choicesSource.getValue();
        const firstIncrement = current['bottleText'] == undefined;
        current['bottleText'] = bottleText;
        if (firstIncrement)
            this.percentSource.next(this.percentSource.getValue() + 12);
        this.choicesSource.next(current);
    }

    setBox(box: string): void {
        const current = this.choicesSource.getValue();
        const firstIncrement = current['box'] == undefined;
        current['box'] = box;
        if (firstIncrement)
            this.percentSource.next(this.percentSource.getValue() + 12);
        this.choicesSource.next(current);
    }

    setBoxText(boxText: BoxText): void {
        const current = this.choicesSource.getValue();
        current['boxText'] = boxText;
        this.choicesSource.next(current);
    }

    reset() {
        this.choicesSource.next({} as UserChoices);
        this.percentSource.next(0);
    }
}

export type BottleText = {
    top: string;
    middle: string;
    bottom: string;
    fontStyle: string;
    fontSize: string;
    fontColor: string;
};
export type BoxText = {
    front: string;
    back: string;
    fontStyle: string;
    fontSize: string;
    fontColor: string;
};
export type Ingredient = {
    name: string;
    img: string;
};

export interface UserChoices {
    option: string;
    gender: string;
    character: string;
    impression: string;
    ingridients: Ingredient[];
    bottle: string;
    bottleText: BottleText;
    box: string;
    boxText: BoxText;
}
