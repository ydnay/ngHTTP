import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Observable } from 'rxjs';

import {fromEvent} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {throttleTime} from 'rxjs/operators';
// import { map } from 'rxjs/operators';


@Component({
  selector: 'app-jokes-chain-operator',
  templateUrl: './jokes-chain-operator.component.html',
  styleUrls: ['./jokes-chain-operator.component.css'],
  providers: [JokesService]
})
export class JokesChainOperatorComponent implements OnInit {
  joke$: Observable<string>;
  constructor(private jokes: JokesService) { }
  ngOnInit() {
    this.joke$ = 
      fromEvent<MouseEvent>(document.getElementById('joke-btn'), 'click').pipe(
      throttleTime(5000),
      switchMap(
        (e: MouseEvent) => this.jokes.getRandom()
      ));
  }
}
