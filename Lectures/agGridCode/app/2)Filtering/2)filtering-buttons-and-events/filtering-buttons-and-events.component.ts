import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filtering-buttons-and-events',
  templateUrl: './filtering-buttons-and-events.component.html',
  styleUrls: ['./filtering-buttons-and-events.component.scss']
})
// here we saw how we can include buttons in filters
export class FilteringButtonsAndEventsComponent {
   gridApi;
   gridColumnApi;
   columnDefs;
   defaultColDef;
   rowData: Array<any>;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        filter: "agTextColumnFilter",
        filterParams: {
          applyButton: true,
          clearButton: true
        }
      },
      {
        headerName: "Age",
        field: "age",
        width: 90,
        filter: "agNumberColumnFilter",
        filterParams: {
          applyButton: true,
          clearButton: true
        }
      },
      {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agSetColumnFilter",
        filterParams: {
          applyButton: true,
          clearButton: true
        }
      },
      {
        headerName: "Year",
        field: "year",
        width: 90
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
        filter: "agNumberColumnFilter"
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
