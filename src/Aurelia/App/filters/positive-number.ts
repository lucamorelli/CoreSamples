export class PositiveNumberValueConverter {
    toView(value: string): string {
        if (value != undefined && value != "") {
            var numOre = parseInt(value);
            if (numOre != undefined && numOre > 0)
                return value;
        }
        return '';
    }
}