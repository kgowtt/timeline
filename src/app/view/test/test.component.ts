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
  ngOnInit(): void {
  }
  onKey(value): void{
    this.idValue = value;
    this.hideValue = this.plusXing(this.idValue, 4 , 3 );
    console.log(this.idValue);
  }
  plusXing(str: string, frontLen: number, endLen: number): string{
    const len = str.length - frontLen - endLen;
    let xing = '';
    for (let i = 0; i < len; i ++) {
      xing += '*';
    }
    return str.substring(0, frontLen) + xing + str.substring( str.length - endLen);
  }

  // psdFfun(): void{
  //   console.log(12321213)
  // }


}
