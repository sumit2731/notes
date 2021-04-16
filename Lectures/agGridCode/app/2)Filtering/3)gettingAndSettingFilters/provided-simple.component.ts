import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

//1)custom simple filters, comparator
//2)Getting & setting filter instances
//3Filtering through code
//4)custom filter filters

@Component({
  selector: 'app-provided-simple',
  templateUrl: './provided-simple.component.html',
  styleUrls: ['./provided-simple.component.scss']
})
export class ProvidedSimpleComponent{
  gridApi;
  gridColumnApi;

  columnDefs;
  defaultColDef;
  rowData: Array<any>;

  @ViewChild(AgGridAngular, {static: true})grid :AgGridAngular;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        filter: "agTextColumnFilter",
        filterParams: {
           filterOptions: ['equals', 'contains',
            {
              displayKey: 'SumeetFilter',
              displayName: 'SoodFilter',
              test: function (filterValue, cellValue) {
                let index = cellValue.indexOf(filterValue);
                return index > -1 ? true: false;
              },
              hideFilterInput: true
            }
          
          ],
          applyButton: true
        }
      },
      {
        headerName: "Age",
        field: "age",
        width: 90,
        filter: "agNumberColumnFilter",
        filterParams : {
          applyButton: true
        }
      },
      {
        headerName: "Country",
        field: "country",
        width: 120,
        filterParams: {
          applyButton: true
        }
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
  applyColumnFiltersByCode() {

    // get filter instance
    var filterInstance = this.gridApi.getFilterInstance('athlete');
    //var filterInstance = this.grid.api.getFilterInstance('athlete');
    //var filterInstance = this.grid.api.getFilterApi('athlete');

    // get filter model - 2 ways to get it
    var model = filterInstance.getModel();
    console.log(model);
    //var model2 = filterInstance.getModelFromUi();
    //console.log(model2);

    // OR set filter model and update
    //now both getModel and getModelFromUI will return this
    filterInstance.setModel({
      type: 'endsWith',
      filter: 'phelps'
    });
    // tell the grid to refresh rows based on the filter. the filter does not
    // do this automatically in case multiple filters are going to get set.
    this.gridApi.onFilterChanged();
    
    // filterInstance.applyModel();
    // var model3 = filterInstance.getModel();
    // console.log(model3);
  }
}
