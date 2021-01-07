import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advanced-text-filter',
  templateUrl: './advanced-text-filter.component.html',
  styleUrls: ['./advanced-text-filter.component.scss']
})
// Here we saw textFormatter,textCustomComparator
//and floating filters
export class AdvancedTextFilterComponent {
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
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains", "notContains"],
          textFormatter: function (r) {
            if (r == null) return null;
            r = r.replace(new RegExp("[àáâãäå]", "g"), "a");
            r = r.replace(new RegExp("æ", "g"), "ae");
            r = r.replace(new RegExp("ç", "g"), "c");
            r = r.replace(new RegExp("[èéêë]", "g"), "e");
            r = r.replace(new RegExp("[ìíîï]", "g"), "i");
            r = r.replace(new RegExp("ñ", "g"), "n");
            r = r.replace(new RegExp("[òóôõøö]", "g"), "o");
            r = r.replace(new RegExp("œ", "g"), "oe");
            r = r.replace(new RegExp("[ùúûü]", "g"), "u");
            r = r.replace(new RegExp("[ýÿ]", "g"), "y");
            return r;
          },
          debounceMs: 0,
          caseSensitive: true,
          suppressAndOrCondition: true
        }
      },
      {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          textCustomComparator: function (filter, value, filterText) {
            // filter- filter type being tested. One of: {equals, notEqual, contains, notContains, startsWith, endsWith}
            //value-value of row
            //fiterText- text enterd in filter
            var filterTextLoweCase = filterText.toLowerCase();
            var valueLowerCase = value.toString().toLowerCase();
            var aliases = {
              usa: "united states",
              holland: "netherlands",
              vodka: "russia",
              niall: "ireland",
              sean: "south africa",
              alberto: "mexico",
              john: "australia",
              xi: "china"
            };
            function contains(target, lookingFor) {
              if (target === null) return false;
              return target.indexOf(lookingFor) >= 0;
            }
            var literalMatch = contains(valueLowerCase, filterTextLoweCase);
            return literalMatch || contains(valueLowerCase, aliases[filterTextLoweCase]);
          },
          debounceMs: 2000
        }
      },
      {
        headerName: "Year",
        field: "year",
        width: 90,
        filter: "agNumberColumnFilter",
        filterParams: { filterOptions: ["inRange","equals"] }
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 90,
        filter: "agTextColumnFilter",
        filterParams: { defaultOption: "startsWith" }
      }
    ];
    this.defaultColDef = {
      sortable: true,
      filter: true
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
