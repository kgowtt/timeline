import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fresh'
})
export class FreshPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(values: any[], args?: any[]): any {
    // console.log(values);
    return args ? values : values.filter((item) => item.isFresh ) ;
  }
}

// https://www.youtube.com/c/PaulHalliday/playlists
