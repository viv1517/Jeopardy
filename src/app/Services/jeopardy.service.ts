import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JeopardyService {

  score:number = 0;

  constructor() { }
}
