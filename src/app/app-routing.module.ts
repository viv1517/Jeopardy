import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './game-board/game-board.component';

const routes: Routes = [
  {path: 'game', component: GameBoardComponent},
  {path: '', redirectTo: 'game', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
