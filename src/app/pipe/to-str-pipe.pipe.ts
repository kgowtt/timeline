import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toStrPipe'
})
export class ToStrPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
