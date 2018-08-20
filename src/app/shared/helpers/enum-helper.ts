import { ListItem } from './../models/list-item';

export class EnumHelper {
    static getEnumList(enumType: any, enumName: string, modulePrefix: string = "Framework"): ListItem[] {
        let tempList = new Array<ListItem>();
        let keys = Object.keys(enumType);
        for (let key of keys) {
            let val = parseInt(key, 10);
            if (!isNaN(val)) {
                tempList.push({
                    value: val,
                    label: modulePrefix + '_' + enumName +'_' + enumType[val]
                });
            }
        }
        return tempList;
    }
}
