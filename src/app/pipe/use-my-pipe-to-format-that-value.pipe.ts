import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'useMyPipeToFormatThatValue'
})
export class UseMyPipeToFormatThatValuePipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    value =  this.plusXing(value, 4 , 3 );
    return value;
  }
  plusXing(str: string, frontLen: number, endLen: number): string{
    const len = str.length - frontLen - endLen;
    let xing = '';
    for (let i = 0; i < len; i ++) {
      xing += '*';
    }
    return str.substring(0, frontLen) + xing + str.substring( str.length - endLen);
  }
}
