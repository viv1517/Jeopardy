import { Component, Input } from '@angular/core';
import { JeopardyService } from '../Services/jeopardy.service';

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.scss']
})
export class QuestionComponentComponent {

  @Input()
  question!:string;

  @Input()
  answer!:string;

  @Input()
  value!:number;

  showElement:boolean = false;
  showQuestion:boolean = false;
  done:boolean = false;

  constructor(public jeoSvc: JeopardyService){}

  print(){
    if (!this.showElement && !this.showQuestion){
      this.showElement = true;
      
    }
    else if (this.showElement && !this.showQuestion){
      this.showElement = false;
      this.showQuestion = true;
    }
    else{
      this.showElement = false;
      this.showQuestion = false;
      this.done = true;
    }
    
    console.log("showElement", this.showElement);
    console.log("showQuestion", this.showQuestion);
    
    
  }

  AddPoints(){
    this.jeoSvc.score = 0;
    this.jeoSvc.score = this.value;
  }

  subtractPoints(){
    this.jeoSvc.score = 0;
    this.jeoSvc.score = 0 - this.value;
  }
}
