import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range',
  pure: false
})
export class RangePipe implements PipeTransform {

  transform(items: any[], start: number, finish: number): any {
    items.length = 0;
    for (let i = start; i <= finish; i++) {
      items.push(i);
    }
    return items;
  }

}
