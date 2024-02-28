import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.scss'],
})
export class ListThoughtsComponent implements OnInit {
  listFavorites: Thought[] = [];
  listThoughts: Thought[] = [];
  currentPage: number = 1;
  moreThoughtsExist: boolean = true;
  filter: string = '';
  favorites: boolean = false;
  title: string = 'Meu Mural';

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .list(this.currentPage, this.filter, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
      });
  }

  reloadComponent() {
    this.favorites = false;
    this.currentPage = 1;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  loadMoreThoughts() {
    this.service
      .list(++this.currentPage, this.filter, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts.push(...listThoughts);

        if (!listThoughts.length) this.moreThoughtsExist = false;
      });
  }

  searchThoughts() {
    this.currentPage = 1;
    this.moreThoughtsExist = true;

    this.service
      .list(this.currentPage, this.filter, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
      });
  }

  listFavoriteThoughts() {
    this.currentPage = 1;
    this.moreThoughtsExist = true;
    this.favorites = true;
    this.title = 'Meus Favoritos';

    this.service
      .list(this.currentPage, this.filter, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
        this.listFavorites = listThoughts;
      });
  }
}
