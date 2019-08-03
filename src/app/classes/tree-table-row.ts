import { TreeTableData } from './tree-table-data';

export class TreeTableRow {
    id: string = null;
    data: {} = {};
    expandable = false;
    children: TreeTableData = null;
    exapanded = false;

    constructor(id: string, data: {}, expandable: boolean, children: TreeTableData) {
        this.id = id;
        this.data = data;
        this.expandable = expandable;
        this.children = children;
    }
}
