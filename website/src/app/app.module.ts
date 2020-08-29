import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { GameComponent } from './game/game.component';
import {routing} from "./app.routing";
import { TimePipe } from './game/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    GameComponent,
    TimePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
