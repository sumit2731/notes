import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-floating-filters',
  templateUrl: './floating-filters.component.html',
  styleUrls: ['./floating-filters.component.scss']
})
// here we created our custom simple filter, we chnaged
//not only logic but we chnaged UI also, we also have t implement te interface of it
// then we saw how we can floating filter and we also saw that they do not hve their own state
// they reprset the state of normal filter, we also saw we can pass floatingFilterComponentParams to
//colum defination
export class FloatingFiltersComponent  {
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
        // here we are using custom filter that is why floating filtertext is disabled
         filter: getPersonFilter(),
        //filter: "agTextColumnFilter",
        suppressMenu: true,
      },
      {
        headerName: "Age",
        field: "age",
        width: 90,
        filter: "agNumberColumnFilter",
        suppressMenu: false
      },
      {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agSetColumnFilter",
        suppressMenu: true,
        filterParams: {
          applyButton: true
        }
      },
      {
        headerName: "Year",
        field: "year",
        width: 90,
        filter: "agNumberColumnFilter",
        suppressMenu: true
      },
      {
        headerName: "Date",
        field: "date",
        width: 170,
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
        },
        suppressMenu: true
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110,
        suppressMenu: true,
        filter: "agTextColumnFilter"
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 100,
        filter: "agNumberColumnFilter",
        filterParams: { applyButton: true },
        suppressMenu: true
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100,
        filter: "agNumberColumnFilter",
        floatingFilterComponentParams: { suppressFilterButton: true }
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100,
        filter: "agNumberColumnFilter",
        floatingFilterComponentParams: { suppressFilterButton: true }
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
    var countryFilterComponent = this.gridApi.getFilterInstance("country");
    countryFilterComponent.selectNothing();
    countryFilterComponent.selectValue("Ireland");
    countryFilterComponent.selectValue("Great Britain");
    //this is required because we used methods of setFilter
    countryFilterComponent.applyModel();
    this.gridApi.onFilterChanged();
  }

  clearCountryFilter() {
    var countryFilterComponent = this.gridApi.getFilterInstance("country");
    countryFilterComponent.selectEverything();
    //this is required because we used methods of setFilter
    countryFilterComponent.applyModel();
    this.gridApi.onFilterChanged();
  }

  destroyCountryFilter() {
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
    var model = ["Algeria", "Argentina"];
    countryFilterComponent.setModel(model);
    this.gridApi.onFilterChanged();
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
  }

  after2010() {
    var dateFilterComponent = this.gridApi.getFilterInstance("date");
    dateFilterComponent.setModel({
      type: "greaterThan",
      dateFrom: "2010-01-01",
      dateTo: null
    });
    this.gridApi.onFilterChanged();
  }

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

function getPersonFilter() {
  function PersonFilter() { }
  PersonFilter.prototype.init = function (params) {
    this.valueGetter = params.valueGetter;
    this.filterText = null;
    this.setupGui(params);
  };
  PersonFilter.prototype.setupGui = function (params) {
    this.gui = document.createElement("div");
    this.gui.innerHTML =
      '<div style="padding: 4px;">' +
      '<div style="font-weight: bold;">Custom Athlete Filter</div>' +
      '<div><input style="margin: 4px 0px 4px 0px;" type="text" id="filterText" placeholder="Full name search..."/></div>' +
      '<div style="margin-top: 20px; width: 200px;">This filter does partial word search on multiple words, eg "mich phel" still brings back Michael Phelps.</div>' +
      "</div>";
    this.eFilterText = this.gui.querySelector("#filterText");
    this.eFilterText.addEventListener("changed", listener);
    this.eFilterText.addEventListener("paste", listener);
    this.eFilterText.addEventListener("input", listener);
    this.eFilterText.addEventListener("keydown", listener);
    this.eFilterText.addEventListener("keyup", listener);
    var that = this;
    function listener(event) {
      that.filterText = event.target.value;
      params.filterChangedCallback();
    }
  };
  PersonFilter.prototype.getGui = function () {
    return this.gui;
  };
  PersonFilter.prototype.doesFilterPass = function (params) {
    var passed = true;
    var valueGetter = this.valueGetter;
    this.filterText.toLowerCase().split(" ").forEach(function (filterWord) {
        var value = valueGetter(params);
        if (value.toString().toLowerCase().indexOf(filterWord) < 0) {
          passed = false;
        }
      });
    return passed;
  };
  PersonFilter.prototype.isFilterActive = function () {
    var isActive = this.filterText !== null && this.filterText !== undefined && this.filterText !== "";
    return isActive;
  };
  PersonFilter.prototype.getApi = function () {
    var that = this;
    return {
      getModel: function () {
        var model = { value: that.filterText.value };
        return model;
      },
      setModel: function (model) {
        that.eFilterText.value = model.value;
      }
    };
  };
  // if this filter is implemented then it means disbale floating filter
  PersonFilter.prototype.getModelAsString = function (model) {
    return model ? model : "";
    //return 'sumeet';
  };
  PersonFilter.prototype.getModel = function () {
    return this.filterText;
  };
  PersonFilter.prototype.setModel = function () { };
  return PersonFilter;

}
