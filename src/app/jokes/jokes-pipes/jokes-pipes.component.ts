import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-jokes-pipes',
  templateUrl: './jokes-pipes.component.html',
  styleUrls: ['./jokes-pipes.component.css'],
  providers: [JokesService]
})
export class JokesPipesComponent implements OnInit {
  joke$: Observable<string>;
  constructor(private jokes: JokesService) { }
  ngOnInit() {}
  getRandomJoke() {
    this.joke$ = this.jokes.getRandom();
  }
}

