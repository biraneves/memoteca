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
  filter: string = '';
  favorites: boolean = false;

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service
      .list(this.presentPage, this.filter, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
      });
  }

  loadMoreThoughts() {
    this.service
      .list(++this.presentPage, this.filter, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts.push(...listThoughts);

        if (!listThoughts.length) this.moreThoughtsExist = false;
      });
  }

  searchThoughts() {
    this.presentPage = 1;
    this.moreThoughtsExist = true;

    this.service
      .list(this.presentPage, this.filter, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
      });
  }

  listFavorites() {
    this.presentPage = 1;
    this.moreThoughtsExist = true;
    this.favorites = true;

    this.service
      .list(this.presentPage, this.filter, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
      });
  }
}
