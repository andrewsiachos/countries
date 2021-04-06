import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortencountries'
})
export class ShortencountriesPipe implements PipeTransform {

  transform(value: string): unknown {
    if(value.length > 10){
      return value.substr(0,10) + '...';
    }
    return value.substr(0,10);
  }

}
