import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

// here we are defining our own simple filters in addiiton to built in filters
@Component({
  selector: 'app-custom-filters',
  templateUrl: './custom-filters.component.html',
  styleUrls: ['./custom-filters.component.scss']
})
export class CustomFiltersComponent  {

  private gridApi;
  private gridColumnApi;
  //public modules: Module[] = AllCommunityModules;

  columnDefs;
  defaultColDef;
  localeTextFunc;
  rowData: Array<any>;
  filterState: any;


  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: "athlete",
        width: 150,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: [
            "contains",
            {
              displayKey: "startsA",
              displayName: 'Starts With "A"',
              test: function (filterValue, cellValue) {
                return cellValue != null && cellValue.indexOf("a") == 0;
              },
              hideFilterInput: true
            },
            {
              displayKey: "startsB",
              displayName: 'Starts With "N"',
              test: function (filterValue, cellValue) {
                return cellValue != null && cellValue.indexOf("n") == 0;
              },
              hideFilterInput: true
            }
          ],
          applyButton: true
        }
      },
      {
        field: "age",
        width: 90,
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            "empty",
            {
              displayKey: "evenNumbers",
              displayName: "Even Numbers",
              test: function (filterValue, cellValue) {
                return cellValue != null && cellValue % 2 === 0;
              },
              hideFilterInput: true
            },
            {
              displayKey: "oddNumbers",
              displayName: "Odd Numbers",
              test: function (filterValue, cellValue) {
                return cellValue != null && cellValue % 2 !== 0;
              },
              hideFilterInput: true
            },
            {
              displayKey: "blanks",
              displayName: "Blanks",
              test: function (filterValue, cellValue) {
                return cellValue == null;
              },
              hideFilterInput: true
            }
          ],
          suppressAndOrCondition: true
        }
      },
      {
        field: "date",
        width: 145,
        filter: "agDateColumnFilter",
        filterParams: {
          filterOptions: [
            "equals",
            {
              displayKey: "equalsWithNulls",
              displayName: "Equals (with Nulls)",
              test: function (filterValue, cellValue) {
                if (cellValue == null) return true;
                var parts = cellValue.split("/");
                var cellDate = new Date(Number(parts[2]), Number(parts[1] - 1), Number(parts[0]));
                return cellDate.getTime() === filterValue.getTime();
              }
            }
          ],
          comparator: function (filterLocalDateAtMidnight, cellValue) {
            var dateAsString = cellValue;
            if (dateAsString == null) return -1;
            var dateParts = dateAsString.split("/");
            var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
            if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
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
        field: "country",
        width: 120,
        filterParams: {
          filterOptions: [
            "notEqual",
            {
              displayKey: "notEqualNoNulls",
              displayName: "Not Equals without Nulls",
              test: function (filterValue, cellValue) {
                if (cellValue == null) return false;
                return cellValue !== filterValue;
              }
            }
          ]
        }
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
    this.defaultColDef = {
      sortable: true,
      filter: "agNumberColumnFilter",
    };
    this.localeTextFunc = function (key, defaultValue) {
      if (key === "notEqualNoNulls") {
        return "* Not Equals (No Nulls) *";
      }
      return defaultValue;
    };
  }

  printState() {
    var filterState = this.gridApi.getFilterModel();
    console.log("filterState: ", filterState);
  }

  saveState() {
    this.filterState = this.gridApi.getFilterModel();
    //window.filterState = this.gridApi.getFilterModel();
    console.log("filter state saved");
  }

  restoreState() {
    this.gridApi.setFilterModel(this.filterState);
    console.log("filter state restored");
  }

  resetState() {
    this.gridApi.setFilterModel(null);
    console.log("column state reset");
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/latest/packages/ag-grid-docs/src/javascript-grid-filter-provided-simple/custom-filter-options/data/data.json"
      )
      .subscribe((data: Array<any>) => {
        this.rowData = data;
      });
  }
}
