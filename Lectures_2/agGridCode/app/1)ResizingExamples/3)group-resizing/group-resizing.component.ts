import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-group-resizing',
  templateUrl: './group-resizing.component.html',
  styleUrls: ['./group-resizing.component.scss']
})
export class GroupResizingComponent {

   gridApi;
   gridColumnApi;

   columnDefs;
   defaultColDef;
   rowData: Array<any>;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "Everything Resizes",
        children: [
          {
            headerName: "Athlete",
            field: "athlete",
            headerClass: "resizable-header"
          },
          {
            headerName: "Age",
            field: "age",
            headerClass: "resizable-header"
          },
          {
            headerName: "Country",
            field: "country",
            headerClass: "resizable-header"
          }
        ]
      },
      {
        headerName: "Only Year Resizes",
        children: [
          {
            headerName: "Year",
            field: "year",
            headerClass: "resizable-header"
          },
          {
            headerName: "Date",
            field: "date",
            resizable: false,
            headerClass: "fixed-size-header"
          },
          {
            headerName: "Sport",
            field: "sport",
            resizable: false,
            headerClass: "fixed-size-header"
          }
        ]
      },
      {
        headerName: "Nothing Resizes",
        children: [
          {
            headerName: "Gold",
            field: "gold",
            resizable: false,
            headerClass: "fixed-size-header"
          },
          {
            headerName: "Silver",
            field: "silver",
            resizable: false,
            headerClass: "fixed-size-header"
          },
          {
            headerName: "Bronze",
            field: "bronze",
            resizable: false,
            headerClass: "fixed-size-header"
          },
          {
            headerName: "Total",
            field: "total",
            resizable: false,
            headerClass: "fixed-size-header"
          }
        ]
      }
    ];
    this.defaultColDef = {
      width: 90,
      resizable: true
    };
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
