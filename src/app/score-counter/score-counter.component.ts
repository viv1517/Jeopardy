import { Component, Input } from '@angular/core';
import { JeopardyService } from '../Services/jeopardy.service';

@Component({
  selector: 'app-score-counter',
  templateUrl: './score-counter.component.html',
  styleUrls: ['./score-counter.component.scss']
})
export class ScoreCounterComponent {
    // teamNumbers: Number[] = [0];
    // currTeam = 0;
    // ourNumber = this.teamNumbers[this.teamNumbers.length - 1];

  @Input()
  listOfTeams!: number[];

  teams: number[] = [1];

  @Input()
  teamNumber!: number;

  team:number=0;

  score: number = 0;

  constructor(public jeoSvc: JeopardyService){}

  ngOnInit(){
    this.team = this.listOfTeams[this.teamNumber - 1];
  }

  addPoints(){
    this.score += this.jeoSvc.score;
    this.jeoSvc.score = 0;
  }

  subtractPoints(){
    this.score -= this.jeoSvc.score;
    this.jeoSvc.score = 0;
  }


}
