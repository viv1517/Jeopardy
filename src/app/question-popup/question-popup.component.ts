import { Component, Input } from '@angular/core';
import { JeopardyService } from '../Services/jeopardy.service';

@Component({
  selector: 'app-question-popup',
  templateUrl: './question-popup.component.html',
  styleUrls: ['./question-popup.component.scss']
})
export class QuestionPopupComponent {

  @Input()
  question!:string;

  @Input()
  answer!:string;

  @Input()
  value!:number;

  constructor(public jeoSvc: JeopardyService){}

  AddPoints(){
    this.jeoSvc.score = 0;
    this.jeoSvc.score = this.value;
  }

  subtractPoints(){
    this.jeoSvc.score = 0;
    this.jeoSvc.score = 0 - this.value;
  }

}
