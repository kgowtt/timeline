import { Component, OnInit , Input} from '@angular/core';
const movies = [
  {
    name: "kgowtt",
    isFresh: true,
  },
  {
    name: "Iron Man",
    isFresh: true,
  },
  {
    name: "Eric",
    isFresh: true,
  },
  {
    name: "Batman",
    isFresh: true,
  },
  {
    name: "Star Wars",
    isFresh: false,
  }
]
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() showRotten: boolean;
  movies = movies;

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies)
    console.log(this.showRotten)
  }
  toggleFormat(): void {
    this.showRotten = !this.showRotten;
  }

  grtData(): void{
    console.log(this.movies)
  }
}
