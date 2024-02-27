import { Component, Input } from '@angular/core';
import { Thought } from '../thoughts';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss'],
})
export class ThoughtComponent {
  @Input() thought!: Thought;

  widthThought(): string {
    if (this.thought.content.length >= 256) {
      return 'thought-l';
    }

    return 'thought-s';
  }
}
