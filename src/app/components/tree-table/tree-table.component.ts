import { Component, OnInit, Input } from '@angular/core';
import { TreeTableData } from 'src/app/classes/tree-table-data';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { TreeTableHeaderObject } from 'src/app/classes/tree-table-header-object';
import { TreeTableRow } from 'src/app/classes/tree-table-row';
import { setIsParent } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss']
})
export class TreeTableComponent implements OnInit {

  @Input() tableData = new TreeTableData();
  keyword = null;
  @Input() level = 0;
  className = '';
  currentPageData = new TreeTableData();
  page = 1;
  pageSize = 10;
  pagesCount = 1;
  sortedColumn = {};

  constructor() { }

  ngOnInit() {
    this.validateData();
    this.setPageData(this.page);
    this.className = 'table-tree level' + this.level;
    if (this.level === 0) {
      console.warn('Initialize Search Functionality');
    }
  }

  changePage(page: number) {
    this.setPageData(page);
  }

  setPageData(pageNumber: number) {
    this.page = pageNumber;
    const filteredData = this.tableData.data.filter((v) => {
      if (this.keyword === '' || this.keyword === null || this.keyword === undefined) {
        return true;
      }
      const keys = Object.keys(v.data);
      let matched = false;
      for (const key of keys) {
        matched = v.data[key].toString().toLowerCase().indexOf(this.keyword) > -1;
        if (matched) {
          break;
        }
      }
      return matched;
    });
    const rowsCount = filteredData.length;
    this.pagesCount = Math.floor(rowsCount / this.pageSize);
    if (this.pageSize * this.pagesCount < rowsCount) {
      this.pagesCount ++;
    }
    this.currentPageData.headers = this.tableData.headers;
    const startIndex = (pageNumber - 1) * this.pageSize;
    if (this.currentPageData.data === undefined) {
      this.currentPageData.data = [];
    }
    this.currentPageData.data.splice(0, this.currentPageData.data.length);
    for (let i = startIndex; i < startIndex + this.pageSize; i++) {
      this.currentPageData.data.push(filteredData[i]);
    }
  }

  validateData() {
    console.warn('Data Schema need to be validated');
  }

  pageNumbers() {
    const pageNumbers = [];
    for (let p = 1; p <= this.pagesCount; p ++) {
      pageNumbers.push(p);
    }
    return pageNumbers;
  }

  sortColumn(propertyName: string) {
    if (this.sortedColumn[propertyName] === undefined) {
      this.sortedColumn = {};
      this.sortedColumn[propertyName] = 'DESC';
      this.sortDescend(propertyName);
    } else if (this.sortedColumn[propertyName] === 'DESC') {
      this.sortedColumn[propertyName] = 'ASC';
      this.sortAscend(propertyName);
    } else {
      delete this.sortedColumn[propertyName];
    }
  }

  sortAscend(propertyName: string) {
    this.tableData.data.sort((a, b) => {
      if (a.data[propertyName] < b.data[propertyName]) {
        return -1;
      } else if (a.data[propertyName] > b.data[propertyName]) {
        return 1;
      }
      return 0;
    });
    this.setPageData(this.page);
  }

  sortDescend(propertyName: string) {
    this.tableData.data.sort((a, b) => {
      if (a.data[propertyName] < b.data[propertyName]) {
        return 1;
      } else if (a.data[propertyName] > b.data[propertyName]) {
        return -1;
      }
      return 0;
    });
    this.setPageData(this.page);
  }

  search() {
    this.setPageData(this.page);
  }
}
