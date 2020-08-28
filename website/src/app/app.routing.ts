import {RouterModule, Routes} from "@angular/router";
import {StartPageComponent} from "./start-page/start-page.component";
import {GameComponent} from "./game/game.component";

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full'},
  { path: 'start', component: StartPageComponent},
  { path: 'game', component: GameComponent},
];
export const routing = RouterModule.forRoot(routes);
