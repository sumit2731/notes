import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-column-sizing',
  templateUrl: './column-sizing.component.html',
  styleUrls: ['./column-sizing.component.scss']
})
export class ColumnSizingComponent  {

   gridApi;
   gridColumnApi;

   columnDefs;
   defaultColDef;
   rowData: any;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: "athlete",
        width: 150,
        suppressSizeToFit: true
      },
      {
        field: "age",
        width: 90,
        minWidth: 50,
        maxWidth: 100
      },
      {
        field: "country",
        width: 120
      },
      {
        field: "year",
        width: 90
      },
      {
        field: "date",
        width: 110
      },
      {
        field: "sport",
        width: 110
      },
      {
        field: "gold",
        width: 100
      },
      {
        field: "silver",
        width: 100
      },
      {
        field: "bronze",
        width: 100
      },
      {
        field: "total",
        width: 100
      }
    ];
    this.defaultColDef = { resizable: true };
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAll() {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    console.log(this.gridColumnApi.getAllColumns());
    console.log(allColumnIds);
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
      )
      .subscribe((data: any) => {
        this.rowData = data;
        console.log(this.rowData);
        console.log(this.columnDefs);
        //this.gridApi.sizeColumnsToFit();

      });
  }

}
