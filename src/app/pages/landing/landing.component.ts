import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/animation/onLoad';
import { UserChoiceService } from 'src/app/services/user-choice.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [fadeInOut]
})
export class LandingComponent implements OnInit {

  constructor( private userChoiceService: UserChoiceService) { }

  ngOnInit(): void {
    this.userChoiceService.reset();
  }

}
