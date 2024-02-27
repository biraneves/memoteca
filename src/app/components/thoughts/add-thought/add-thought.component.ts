import { Component } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-thought',
  templateUrl: './add-thought.component.html',
  styleUrls: ['./add-thought.component.scss'],
})
export class AddThoughtComponent {
  thought: Thought = {
    content: '',
    author: '',
    model: 'model1',
  };

  constructor(private service: ThoughtService, private router: Router) {}

  addThought() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
