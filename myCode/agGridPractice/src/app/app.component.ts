import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agGridPractice';
  @ViewChild('agGrid') agGrid: AgGridAngular;

  defaultColDef = {
    sortable: true,
    filter: true
  };

  // columnDefs = [
  //   { field: 'make', sortable: true, filter: true, checkboxSelection: true },
  //   { field: 'model',sortable: true,filter: true  },
  //   { field: 'price', sortable: true, filter: true}
  // ];

  columnDefs = [
    { field: 'make', rowGroup: true },
    { field: 'price' }
  ];

  autoGroupColumnDef = {
    headerName: 'ModelS',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    },
    groupSelectsChildren: true
    
  };

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];
  rowData: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    //this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');
    this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');
  }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    console.log(selectedNodes)
    console.table(selectedNodes);
    const selectedData = selectedNodes.map(node => node.data);
    console.log(selectedData)
    console.table(selectedData);

    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
