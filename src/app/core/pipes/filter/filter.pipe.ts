import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args): unknown {
    // console.log('parámetros pipe', value, args);
    const resultFilter = [];
    let limit: number = 5;
    let num = 0;
    if (!args) {
      return resultFilter;
    }
    for (const data of value) {
      let parameter = (data.economicActivity) ? data.economicActivity : data.nombre;
      if ((args.length > 2) && (num < limit) && (this.removeAccents(parameter).toLowerCase()).indexOf(this.removeAccents(args.toLowerCase())) > -1) {
        resultFilter.push(data);
        num++;
      }
    }
    return resultFilter;
  }

  private removeAccents(str) {
    const cleanStr = str
      .replace(/á/g, 'a')
      .replace(/é/g, 'e')
      .replace(/í/g, 'i')
      .replace(/ó/g, 'o')
      .replace(/ú/g, 'u');
    return cleanStr;
  }

}