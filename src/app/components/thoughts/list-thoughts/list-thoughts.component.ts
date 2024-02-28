import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.scss'],
})
export class ListThoughtsComponent implements OnInit {
  listThoughts: Thought[] = [];
  presentPage: number = 1;
  moreThoughtsExist: boolean = true;

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.list(this.presentPage).subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }

  loadMoreThoughts() {
    this.service.list(++this.presentPage).subscribe((listThoughts) => {
      this.listThoughts.push(...listThoughts);

      if (!listThoughts.length) this.moreThoughtsExist = false;
    });
  }
}
