import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'yell' })
export class YellPipe implements PipeTransform {
  transform(value: string, args?: string): any {
    // "args"  = es erwartet String.
    // "args?" = Parameter ist optional.

    const suffix = args || '!!!';

    return `${value}${suffix}`;
  }
}
