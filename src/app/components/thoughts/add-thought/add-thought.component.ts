import { Component } from '@angular/core';

@Component({
  selector: 'app-add-thought',
  templateUrl: './add-thought.component.html',
  styleUrls: ['./add-thought.component.scss'],
})
export class AddThoughtComponent {
  thought = {
    id: '1',
    content: 'Aprendendo Angular',
    author: 'Dev',
    model: '',
  };
}
