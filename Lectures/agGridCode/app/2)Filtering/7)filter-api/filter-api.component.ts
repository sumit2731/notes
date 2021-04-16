import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';


//here we saw how w ecan use filter api to set filters through code
// Here we saw methods of setFilter(Enterprise feature)- irelandAndUk,endingStan
// here we saw how can we set filters of coluns from click of button
// here we also saw the difference between resetting and destroying the filter, function- destroyCountryFilter
@Component({
  selector: 'app-filter-api',
  templateUrl: './filter-api.component.html',
  styleUrls: ['./filter-api.component.scss']
})
export class FilterAPIComponent  {
  gridApi;
  gridColumnApi;

  columnDefs;
  defaultColDef;
  rowData: Array<any>;

  @ViewChild(AgGridAngular, { static: true }) grid: AgGridAngular;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        filter: "agSetColumnFilter"
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
          }
        }
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110,
        filter: "agTextColumnFilter"
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
      filter: true
    };
  }

  irelandAndUk() {
    //var countryFilterComponent = this.grid.api.getFilterInstance("country");
    var countryFilterComponent = this.gridApi.getFilterInstance("country");
    countryFilterComponent.selectNothing();
    countryFilterComponent.selectValue("Ireland");
    countryFilterComponent.selectValue("Great Britain");
    countryFilterComponent.applyModel();
    this.gridApi.onFilterChanged();
  }

  clearCountryFilter() {
    var countryFilterComponent = this.gridApi.getFilterInstance("country");
    countryFilterComponent.selectEverything();
    countryFilterComponent.applyModel();
    this.gridApi.onFilterChanged();
  }

  destroyCountryFilter() {
    //The example also shows 'gridApi.destroyFilter(col)' which completely destroys a filter.
    //Use this is if you want a filter to be created again with new initialisation values.
    this.gridApi.destroyFilter("country");
  }

  endingStan() {
    var countryFilterComponent = this.gridApi.getFilterInstance("country");
    countryFilterComponent.selectNothing();
    for (var i = 0; i < countryFilterComponent.getUniqueValueCount(); i++) {
      var value = countryFilterComponent.getUniqueValue(i);
      var valueEndsWithStan = value.indexOf("stan") === value.length - 4;
      if (valueEndsWithStan) {
        countryFilterComponent.selectValue(value);
      }
    }
    countryFilterComponent.applyModel();
    this.gridApi.onFilterChanged();
  }

  setCountryModel() {
    var countryFilterComponent = this.gridApi.getFilterInstance("country");
    var model = {
      type: "set",
      values: ["Algeria", "Argentina"]
    };
    countryFilterComponent.setModel(model);
    this.gridApi.onFilterChanged();
    // this how we can set SetFilter along with other filters through grid api-
    // var hardcodedFilter = {
    //   country: ["Ireland", "United States"],
    //   age: {
    //     type: "lessThan",
    //     filter: "30"
    //   },
    //   athlete: {
    //     type: "startsWith",
    //     filter: "Mich"
    //   },
    //   date: {
    //     type: "lessThan",
    //     dateFrom: "2010-01-01"
    //   }
    // };
    // this.gridApi.setFilterModel(hardcodedFilter);
    // this.gridApi.onFilterChanged();
  }

  printCountryModel() {
    var countryFilterComponent = this.gridApi.getFilterInstance("country");
    var model = countryFilterComponent.getModel();
    if (model) {
      console.log("Country model is: [" + model.values.join(",") + "]");
    } else {
      console.log("Country model filter is not active");
    }
  }

  sportStartsWithS() {
    var sportsFilterComponent = this.gridApi.getFilterInstance("sport");
    sportsFilterComponent.setModel({
      type: "startsWith",
      filter: "s"
    });
    this.gridApi.onFilterChanged();
  }

  sportEndsWithG() {
    var sportsFilterComponent = this.gridApi.getFilterInstance("sport");
    sportsFilterComponent.setModel({
      type: "endsWith",
      filter: "g"
    });
    this.gridApi.onFilterChanged();
  }

  sportsCombined() {
    var sportsFilterComponent = this.gridApi.getFilterInstance("sport");
    sportsFilterComponent.setModel({
      condition2: {
        type: "endsWith",
        filter: "g"
      },
      condition1: {
        type: "startsWith",
        filter: "s"
      },
      operator: "AND"
    });
    this.gridApi.onFilterChanged();
  }

  ageBelow25() {
    var ageFilterComponent = this.gridApi.getFilterInstance("age");
    ageFilterComponent.setModel({
      type: "lessThan",
      filter: 25,
      filterTo: null
    });
    this.gridApi.onFilterChanged();
  }

  ageAbove30() {
    var ageFilterComponent = this.gridApi.getFilterInstance("age");
    ageFilterComponent.setModel({
      type: "greaterThan",
      filter: 30,
      filterTo: null
    });
    this.gridApi.onFilterChanged();
  }

  ageBelow25OrAbove30() {
    var ageFilterComponent = this.gridApi.getFilterInstance("age");
    ageFilterComponent.setModel({
      condition1: {
        type: "greaterThan",
        filter: 30,
        filterTo: null
      },
      operator: "OR",
      condition2: {
        type: "lessThan",
        filter: 25,
        filterTo: null
      }
    });
    this.gridApi.onFilterChanged();
  }

  ageBetween25And30() {
    var ageFilterComponent = this.gridApi.getFilterInstance("age");
    ageFilterComponent.setModel({
      type: "inRange",
      filter: 25,
      filterTo: 30
    });
    this.gridApi.onFilterChanged();
  }

  clearAgeFilter() {
    var ageFilterComponent = this.gridApi.getFilterInstance("age");
    ageFilterComponent.setModel(null);
    this.gridApi.onFilterChanged();

    // this is how we can clear all filters at once-
    
      // this.gridApi.setFilterModel(null);
      // this.gridApi.onFilterChanged();
    

  }

  after2010() {
    var dateFilterComponent = this.gridApi.getFilterInstance("date");
    dateFilterComponent.setModel({
      type: "greaterThan",
      dateFrom: "2010-01-01",
      dateTo: null
    });
    this.gridApi.onFilterChanged();}

  before2012() {
    var dateFilterComponent = this.gridApi.getFilterInstance("date");
    dateFilterComponent.setModel({
      type: "lessThan",
      dateFrom: "2012-01-01",
      dateTo: null
    });
    this.gridApi.onFilterChanged();
  }

  dateCombined() {
    var dateFilterComponent = this.gridApi.getFilterInstance("date");
    dateFilterComponent.setModel({
      condition1: {
        type: "lessThan",
        dateFrom: "2012-01-01",
        dateTo: null
      },
      condition2: {
        type: "greaterThan",
        dateFrom: "2010-01-01",
        dateTo: null
      },
      operator: "OR"
    });
    this.gridApi.onFilterChanged();
  }

  clearDateFilter() {
    var dateFilterComponent = this.gridApi.getFilterInstance("date");
    dateFilterComponent.setModel(null);
    this.gridApi.onFilterChanged();
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
