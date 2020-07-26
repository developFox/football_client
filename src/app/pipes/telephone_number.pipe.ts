import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'telephoneNumber'
})
export class TelephoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    const country = value.substr(0, 1);
    const city = value.substr(1, 3);
    const number = value.substr(4, 3);
    const number2 = value.substr(7, 2);
    const number3 = value.substr(9, 2);

    return `+${country}(${city})-${number}-${number2}-${number3}`;
  }
}
