import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
  pure: true,
})
export class FullnamePipe implements PipeTransform {
  transform(person: any) {
    return person.firstName + ' ' + person.lastName;
  }
}
