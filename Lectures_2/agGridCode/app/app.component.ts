import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /* @ViewChild(AgGridAngular, {static: true}) agGrid: AgGridAngular;
  gridApi: any;
  columnApi = [];
  rows = [];

  title = 'app';

  columnDefs = [];

  autoGroupColumnDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };
   
  rowData: any;
 */
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    /* //this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
    this.http.get('https://api.myjson.com/bins/ly7d1').subscribe((data: Array<any>) => {
      this.rows = Array.from(data);
     // console.log(this.rows);
      //console.log(this.columnDefs);
    });
    setTimeout(() => {
      let columns = [
        {
          headerName: 'Make', field: 'make', resizable: true, width: 90, minWidth: 50, maxWidth: 100 },
        { headerName: 'Model', field: 'model', resizable: true },
        { headerName: 'Price', field: 'price', resizable: true }
      ];
      console.log("Got columns");
      this.gridApi.setColumnDefs(columns);
      this.gridApi.sizeColumnsToFit();
    }, 1000); */
  }

  // getSelectedRows() {
  //   console.log(this.gridApi.getSelectedNodes());
  //   const selectedNodes = this.agGrid.api.getSelectedNodes();
  //   const selectedData = selectedNodes.map(node => node.data);
  //   const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
  //   alert(`Selected nodes: ${selectedDataStringPresentation}`);
  // }
  // gridReady(params) {
  //   console.log("Grid Ready Called");
  //   console.log(this.rows);
  //   console.log(this.columnDefs);
  //   this.gridApi = params.api;
  //   this.columnApi = params.columnApi;
  //   this.gridApi.sizeColumnsToFit();
  // }

  // changeGrid() {
  //   this.columnDefs= [
  //     { headerName: 'rollNo', field: 'rollNo', resizable: true },
  //     { headerName: 'name', field: 'name', resizable: true }
  //   ];
  //   this.rows = [
  //     { rollNo: 1,name: 'sumeet'},
  //     {rollNo: 2,name: 'kriti'},
  //   ];

  //   setTimeout(() => this.gridApi.sizeColumnsToFit() ,0);
  // }
}