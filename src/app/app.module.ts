import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes/jokes.component';
import { JokesPipesComponent } from './jokes/jokes-pipes/jokes-pipes.component';
import { JokesChainOperatorComponent } from './jokes/jokes-chain-operator/jokes-chain-operator.component';
import { JokesPromiseFallbackComponent } from './jokes/jokes-promise-fallback/jokes-promise-fallback.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokesPipesComponent,
    JokesChainOperatorComponent,
    JokesPromiseFallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
