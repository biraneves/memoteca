import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.scss'],
})
export class EditThoughtComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      content: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      author: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      model: [''],
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.findById(parseInt(id!)).subscribe((thought) => {
        this.form.setValue({
          id: thought.id,
          content: thought.content,
          author: thought.author,
          model: thought.model,
        });
      });
    }
  }

  enableButton(): string {
    if (this.form.valid) return 'button';

    return 'button--disabled';
  }

  editThought() {
    this.service.edit(this.form.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
