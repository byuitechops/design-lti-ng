import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase() );
    }
    return value;
  }
}
