import { Component } from '@angular/core';

import { TutoringRequest } from '../tutoring-request';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent {

  tables = ['Table 1',
    'Table 2', 'Table 3', 'Table 4', 'Table 5', 'Table 6', 'Table 7', 'Table 8', 'Computer 1', 'Computer 2', 'Computer 3', 'Computer 4', 'Computer 5', 'Computer 6', 'Computer 7'];

  model = new TutoringRequest("", "", "", "", new Date());

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
