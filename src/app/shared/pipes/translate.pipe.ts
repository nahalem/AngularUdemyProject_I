import { Pipe, PipeTransform } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';
import * as _ from 'lodash';

@Pipe({
    name: 'translate',
    pure: true
})
export class TranslatePipe implements PipeTransform {

    constructor(private dictionaryService: DictionaryService) {
    }

    transform(value: any) {
        let item = _.find(this.dictionaryService.dictionary,
            (d) => {
                return d.key === value;
            });
        return (item)? item.translation : value;
    }
}
