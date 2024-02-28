import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-thought',
  templateUrl: './add-thought.component.html',
  styleUrls: ['./add-thought.component.scss'],
})
export class AddThoughtComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
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
      model: ['model1'],
      favorite: [false],
    });
  }

  enableButton(): string {
    if (this.form.valid) return 'button';

    return 'button--disabled';
  }

  addThought() {
    console.log(this.form.get('author')?.errors);

    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
