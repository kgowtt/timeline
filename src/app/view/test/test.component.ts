import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  hide = false;
  xing = '';
  constructor() { }


  idValue: string;
  hideValue: string;

  testValue: string;
  ngOnInit(): void {
    this.idValue = 'A123456789';
    this.testValue = 'A123456789';


  }
  onKey(value): void{

  }
  grtData(): void{
    console.log(this.idValue);
  }

  changText(inputVaule: any): void{
    console.log(this.idValue)
    console.log(inputVaule)
  }



  onClickEvent($event): void{
    console.log(this.idValue)
  }
}
