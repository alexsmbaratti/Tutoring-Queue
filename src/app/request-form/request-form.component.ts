import { Component } from '@angular/core';

import { TutoringRequest } from '../tutoring-request';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
  animations: [
    trigger('fade', [
      state('transparent', style({
        opacity: 0
      })),
      state('opaque', style({
        opacity: 1
      })),
      transition('transparent => opaque', [
        animate('1s')
      ]),
    ]),
    trigger('longFade', [
      state('transparent', style({
        opacity: 0
      })),
      state('opaque', style({
        opacity: 1
      })),
      transition('transparent => opaque', [
        animate('0.5s 1500ms')
      ]),
    ]),
    trigger('fadeOut', [
      state('transparent', style({
        opacity: 0
      })),
      state('opaque', style({
        opacity: 1
      })),
      transition('opaque => transparent', [
        animate('1s')
      ]),
    ])
  ],
})
export class RequestFormComponent {

  tables = ['Table 1',
    'Table 2', 'Table 3', 'Table 4', 'Table 5', 'Table 6', 'Table 7', 'Table 8', 'Computer 1', 'Computer 2', 'Computer 3', 'Computer 4', 'Computer 5', 'Computer 6', 'Computer 7'];

  model = new TutoringRequest("", "", "", "", new Date());

  submitted = false;

  count: number = 15;
  interval;

  onSubmit() {
    this.submitted = true;
    this.interval = setInterval(() => {
      if(this.count > 0 && this.submitted) {
        this.count--;
      } else {
        this.count = 16;
        this.submitted = false;
        window.location.reload();
      }
    },1000)
  }

  onReset() {
    window.location.reload();
  }
}
