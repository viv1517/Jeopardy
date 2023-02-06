import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { CategoryQuestionCardComponent } from './category-question-card/category-question-card.component';
import { QuestionComponentComponent } from './question-component/question-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScoreCounterComponent } from './score-counter/score-counter.component';
import { QuestionPopupComponent } from './question-popup/question-popup.component'

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    CategoryQuestionCardComponent,
    QuestionComponentComponent,
    ScoreCounterComponent,
    QuestionPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
