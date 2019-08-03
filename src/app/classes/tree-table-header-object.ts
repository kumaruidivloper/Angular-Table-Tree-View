export class TreeTableHeaderObject {
    dataProperty: string;
    title: string;
    constructor(title: string, dataProperty: string) {
        this.dataProperty = dataProperty;
        this.title = title;
    }
}
