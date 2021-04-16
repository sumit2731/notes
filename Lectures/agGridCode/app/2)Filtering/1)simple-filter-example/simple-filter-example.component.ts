import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-filter-example',
  templateUrl: './simple-filter-example.component.html',
  styleUrls: ['./simple-filter-example.component.scss']
})
//In this example we saw what are types of built in simple filters
// and how we can use any one of them. we also saw how we supply comparator to date filter
export class SimpleFilterExampleComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData: Array<any>;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        filter: "agTextColumnFilter"
      },
      {
        headerName: "Age",
        field: "age",
        width: 90,
        filter: "agNumberColumnFilter"
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
        width: 145,
        filter: "agDateColumnFilter",
        filterParams: {
          comparator: function (filterLocalDateAtMidnight, cellValue) {
            var dateAsString = cellValue;
            if (dateAsString == null) return -1;
            var dateParts = dateAsString.split("/");
            var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
            if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
          },
          browserDatePicker: true
        }
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 100,
        filter: "agNumberColumnFilter"
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100,
        filter: "agNumberColumnFilter"
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100,
        filter: "agNumberColumnFilter"
      },
      {
        headerName: "Total",
        field: "total",
        width: 100,
        filter: false
      }
    ];
    this.defaultColDef = { filter: true };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
      .subscribe((data: Array<any>) => {
        this.rowData = data;
      });
  }

}
