import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    let sec = value/1000, h,m,s;
    if(sec < 60) return `${Math.round(sec)}sec.`;
    if(sec >= 60 && sec < 3600) return `${Math.floor(sec/60)}min.${sec%60}sec.`;
    h = Math.floor(sec/3600);
    m = (sec%3600 >= 60)? Math.floor((sec%3600)/60): 0;
    s = ((sec%3600)%60 < 60)? Math.round((sec%3600)%60): 0;
    return `${h}hr.${(m===0)?'': m+'min.'}${(s===0)?'': s+'sec.'}`
  }
}
