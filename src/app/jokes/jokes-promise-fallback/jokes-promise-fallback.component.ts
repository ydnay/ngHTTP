import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-jokes-promise-fallback',
  templateUrl: './jokes-promise-fallback.component.html',
  styleUrls: ['./jokes-promise-fallback.component.css'],
  providers: [JokesService]
})
export class JokesPromiseFallbackComponent implements OnInit {
  joke: Promise<string>;

  constructor(private jokes: JokesService) {}

  ngOnInit() {
  }
  
  getRandomJoke() {
    this.joke = this.jokes.getRandomUsingPromise();
  }
}
