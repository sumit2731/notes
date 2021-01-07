import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sizing-columns-by-default',
  templateUrl: './sizing-columns-by-default.component.html',
  styleUrls: ['./sizing-columns-by-default.component.scss']
})
export class SizingColumnsByDefaultComponent {

  gridApi;
  gridColumnApi;

  columnDefs;
  defaultColDef;
  rowData: Array<any>;
  data: any;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        suppressSizeToFit: true
      },
      {
        headerName: "Age",
        field: "age",
        width: 90,
        minWidth: 50,
        maxWidth: 100
      },
      {
        headerName: "Country",
        field: "country",
        width: 120
      },
      {
        headerName: "Year",
        field: "year",
        width: 90
      },
      {
        headerName: "Date",
        field: "date",
        width: 110
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 100
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100
      },
      {
        headerName: "Total",
        field: "total",
        width: 100
      }
    ];
    this.defaultColDef = { resizable: true };
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
      )
      .subscribe((data: Array<any>) => {
        this.rowData = data;
      });
  }
}
