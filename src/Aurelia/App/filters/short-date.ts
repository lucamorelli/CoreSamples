export class ShortDateValueConverter {
    toView(value: string): string {
        var data: Date = new Date(value);
        return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    }
}