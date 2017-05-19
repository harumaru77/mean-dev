import {Pipe, PipeTransform} from "@angular/core";

/**
 * Created by kitri12 on 2017-05-17.
 */

@Pipe({
  name: 'toolong',
})
export class TooLongPipe implements PipeTransform {
  transform(value: string, howMany: number): string {
    if (!howMany) {
      howMany = 20;
    }

    if (value.length > howMany) {
      return value.substring(0, howMany) + '...';
    } else {
      return value;
    }
  }
}
