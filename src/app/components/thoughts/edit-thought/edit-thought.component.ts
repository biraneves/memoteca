import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.scss'],
})
export class EditThoughtComponent implements OnInit {
  thought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: '',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.findById(parseInt(id)).subscribe((thought) => {
        this.thought = thought;
      });
    }
  }

  editThought() {
    this.service.edit(this.thought).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
