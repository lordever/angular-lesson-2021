import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
  transform(price?: number, currency: string = 'руб.'): string {
    return `${price} ${currency}`;
  }
}
