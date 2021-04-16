import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

//Here we are basically changing the filter paras on the fly
//then we want these filter params to reflect in filter
//so we destroy the filter instance so that it is created from scratch again

@Component({
  selector: 'app-blank-cells',
  templateUrl: './blank-cells.component.html',
  styleUrls: ['./blank-cells.component.scss']
})

export class BlankCellsComponent implements OnInit {
  @ViewChild(AgGridAngular, { static: true }) grid: AgGridAngular;
  columnDefs = [
    { headerName: 'Athlete', field: 'athlete', width: 150, filter: 'agTextColumnFilter' },
    {
      headerName: 'Age',
      field: 'age',
      width: 90,
      filter: 'agNumberColumnFilter',
      filterParams: {
        includeBlanksInEquals: false,
        includeBlanksInLessThan: false,
        includeBlanksInGreaterThan: false,
        applyButton: true
      }
    },
    {
      headerName: 'Date',
      field: 'date',
      width: 145,
      filter: 'agDateColumnFilter',
      filterParams: {
        comparator: function (filterLocalDateAtMidnight, cellValue) {
          var dateAsString = cellValue;
          if (dateAsString == null) return -1;
          var dateParts = dateAsString.split('/');
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
        includeBlanksInEquals: false,
        includeBlanksInLessThan: false,
        includeBlanksInGreaterThan: false
      }
    },
    {
      headerName: 'Description',
      valueGetter: '"Age is " + data.age + " and Date is " + data.date',
      width: 400
    },
  ];
  defaultColDef= {
    filter: true
  };
  rowData = [
    {
      athlete: 'Alberto Gutierrez',
      age: 36,
      country: 'Spain',
      year: '2017',
      date: null,
      sport: 'Squash',
      gold: 1,
      silver: 0,
      bronze: 0
    },
    {
      athlete: 'Niall Crosby',
      age: 40,
      country: 'Spain',
      year: '2017',
      date: undefined,
      sport: 'Running',
      gold: 1,
      silver: 0,
      bronze: 0
    },
    {
      athlete: 'Sean Landsman',
      age: null,
      country: 'Rainland',
      year: '2017',
      date: '25/10/2016',
      sport: 'Running',
      gold: 0,
      silver: 0,
      bronze: 1
    },
    {
      athlete: 'Robert Clarke',
      age: undefined,
      country: 'Raveland',
      year: '2017',
      date: '25/10/2016',
      sport: 'Squash',
      gold: 0,
      silver: 0,
      bronze: 1
    }
  ];
  constructor() {
    
   }

  ngOnInit() {
  }
  onGridReady() {
  }
  changeNull(toChange, value) {
    switch (toChange) {
      case 'equals':
        this.columnDefs[1].filterParams.includeBlanksInEquals = value;
        this.columnDefs[2].filterParams.includeBlanksInEquals = value;
        break;
      case 'lessThan':
        this.columnDefs[1].filterParams.includeBlanksInLessThan = value;
        this.columnDefs[2].filterParams.includeBlanksInLessThan = value;
        break;
      case 'greaterThan':
        this.columnDefs[1].filterParams.includeBlanksInGreaterThan = value;
        this.columnDefs[2].filterParams.includeBlanksInGreaterThan = value;
        break;
    }

    var filterModel = this.grid.api.getFilterModel();
    //this.grid.api.setColumnDefs(this.columnDefs);
    this.grid.api.destroyFilter('age');
    this.grid.api.destroyFilter('date');
    this.grid.api.setFilterModel(filterModel);
  }
}
