export class clue{
    question: string;
    answer: string;
    value: number;
    id: number;
    constructor(question:string, answer:string, value:number, id:number){
        this.question = question;
        this.answer = answer;
        this.value = value;
        this.id = id;
    }
}