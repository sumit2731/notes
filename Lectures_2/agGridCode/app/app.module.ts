import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import 'ag-grid-enterprise';
import { ColumnSizingComponent } from './1)ResizingExamples/1)column-sizing/column-sizing.component';
import { ColumnResizeIndexComponent } from './1)ResizingExamples/column-resize-index/column-resize-index.component';
import { SizingColumnsByDefaultComponent } from './1)ResizingExamples/2)sizing-columns-by-default/sizing-columns-by-default.component';
import { GroupResizingComponent } from './1)ResizingExamples/3)group-resizing/group-resizing.component';
import { FilteringIndexComponent } from './2)Filtering/filtering-index/filtering-index.component';
import { SimpleFilterExampleComponent } from './2)Filtering/1)simple-filter-example/simple-filter-example.component';
import { FilteringButtonsAndEventsComponent } from './2)Filtering/2)filtering-buttons-and-events/filtering-buttons-and-events.component';
import { ProvidedSimpleComponent } from './2)Filtering/3)gettingAndSettingFilters/provided-simple.component';
import { CustomFiltersComponent } from './2)Filtering/4)custom-SimpleFilters/custom-filters.component';
import { BlankCellsComponent } from './2)Filtering/5)blank-cells/blank-cells.component';
import { AdvancedTextFilterComponent } from './2)Filtering/6)advanced-text-filter/advanced-text-filter.component';
import { FilterAPIComponent } from './2)Filtering/7)filter-api/filter-api.component';
import { FloatingFiltersComponent } from './2)Filtering/8)fiter-uiAndFloating/floating-filters.component';


@NgModule({
  declarations: [
    AppComponent,
    ColumnSizingComponent,
    ColumnResizeIndexComponent,
    SizingColumnsByDefaultComponent,
    GroupResizingComponent,
    FilteringIndexComponent,
    SimpleFilterExampleComponent,
    FilteringButtonsAndEventsComponent,
    ProvidedSimpleComponent,
    CustomFiltersComponent,
    BlankCellsComponent,
    AdvancedTextFilterComponent,
    FilterAPIComponent,
    FloatingFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
