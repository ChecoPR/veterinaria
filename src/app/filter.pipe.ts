import { Pipe, PipeTransform } from '@angular/core';
import { razas } from './components/razas.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(individuals: razas[ ], searchText: string): razas[ ] {
    
    if( !individuals || !searchText  ){
      return individuals;
    }

    return individuals.filter(individual =>
      individual.nombre.toLowerCase().indexOf( searchText.toLowerCase() ) !== -1);
  }
}
