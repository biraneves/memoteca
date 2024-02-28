import { Component, Input } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss'],
})
export class ThoughtComponent {
  @Input() thought!: Thought;

  constructor(private service: ThoughtService) {}

  widthThought(): string {
    if (this.thought.content.length >= 256) {
      return 'thought-l';
    }

    return 'thought-s';
  }

  changeFavoriteIcon(): string {
    if (this.thought.favorite === false) return 'inactive';

    return 'active';
  }

  updateFavorite() {
    this.service.changeFavorite(this.thought).subscribe();
  }
}
