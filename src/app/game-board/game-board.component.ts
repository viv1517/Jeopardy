import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, zip, concatMap, tap } from 'rxjs';
import { clue } from '../models/clue';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {
  categories: string[] = [];
  clueList: clue[] = [];
  showClue:boolean = false;
  teams: number[] = [1];
  numberOfTeams = 1;

  constructor(private http: HttpClient){ }

  ngOnInit(){
    this.getClues().subscribe(clues => this.clueList = clues);
  }


  print(){
    this.showClue = true;
    console.log("clueList", this.clueList);
    console.log("categories", this.categories);
  }

  getClues(){
    let cluesForCategory: clue[] = []
    return this.http.get("http://localhost:5023/Jeopardy/CreateGame").pipe(map((item:any) => {
      console.log("item",item);
      for (let key in item){
        this.categories.push(key);
        for (let value in item[key]){
          let newClue = new clue(item[key][value].question, item[key][value].answer, item[key][value].value, item[key][value].id);
          cluesForCategory.push(newClue);
        }
      }
      return cluesForCategory;
    }));

    
  }

  addTeam(){
    this.teams.push(this.numberOfTeams + 1);
    this.numberOfTeams += 1;
    console.log(this.teams);
  }

  subtractTeam(){
    this.teams.pop();
    this.numberOfTeams -= 1;
  }
}
