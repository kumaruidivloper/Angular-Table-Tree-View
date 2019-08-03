import { Component, OnInit } from '@angular/core';
import { TreeTableData } from './classes/tree-table-data';
import { TreeTableHeaderObject } from './classes/tree-table-header-object';
import { TreeTableRow } from './classes/tree-table-row';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'treeTable';
  tableData: TreeTableData = new TreeTableData();

  ngOnInit(): void {
    const tableData3 = new TreeTableData();
    tableData3.headers = [
      new TreeTableHeaderObject('Shipment Line', 'shipmentLine'),
      new TreeTableHeaderObject('Shipment Date', 'shipmentDate'),
      new TreeTableHeaderObject('Quantity', 'quantity'),
      new TreeTableHeaderObject('ETA', 'eta')
    ];
    tableData3.data = [
      new TreeTableRow('1', {shipmentLine: '1', shipmentDate: '2019-03-15', quantity: 3, eta: '2019-03-20'}, false, null),
      new TreeTableRow('2', {shipmentLine: '2', shipmentDate: '2019-03-25', quantity: 2, eta: '2019-03-30'}, false, null)
    ];
    const tableData2 = new TreeTableData();
    tableData2.headers = [
      new TreeTableHeaderObject('Line Number', 'lineNumber'),
      new TreeTableHeaderObject('Item Description', 'item'),
      new TreeTableHeaderObject('Quantity', 'quantity')
    ];
    tableData2.data = [
      new TreeTableRow('1', {lineNumber: '1', item: 'Universal Remote', quantity: 5}, true, tableData3),
      new TreeTableRow('2', {lineNumber: '2', item: 'Key', quantity: 10}, false, null)
    ];
    this.tableData.headers = [
      new TreeTableHeaderObject('Sno', 'sno'),
      new TreeTableHeaderObject('PO Number', 'poNumber')
    ];
    this.tableData.data = [
      new TreeTableRow('1', {poNumber: 'PO123456', sno: 1}, false, null),
      new TreeTableRow('2', {poNumber: 'PO123457', sno: 2}, false, null),
      new TreeTableRow('3', {poNumber: 'PO123458', sno: 3}, false, null),
      new TreeTableRow('4', {poNumber: 'PO123459', sno: 4}, true, tableData2),
      new TreeTableRow('5', {poNumber: 'PO123460', sno: 5}, false, null),
      new TreeTableRow('6', {poNumber: 'PO123461', sno: 6}, false, null),
      new TreeTableRow('7', {poNumber: 'PO123462', sno: 7}, false, null),
      new TreeTableRow('8', {poNumber: 'PO123463', sno: 8}, false, null),
      new TreeTableRow('9', {poNumber: 'PO123464', sno: 9}, false, null),
      new TreeTableRow('10', {poNumber: 'PO123465', sno: 10}, false, null),
      new TreeTableRow('11', {poNumber: 'PO123466', sno: 11}, false, null),
      new TreeTableRow('12', {poNumber: 'PO123467', sno: 12}, false, null),
      new TreeTableRow('13', {poNumber: 'PO123468', sno: 13}, false, null),
      new TreeTableRow('14', {poNumber: 'PO123469', sno: 14}, false, null),
      new TreeTableRow('15', {poNumber: 'PO123470', sno: 15}, false, null),
      new TreeTableRow('16', {poNumber: 'PO123471', sno: 16}, false, null)
    ];
  }
}
