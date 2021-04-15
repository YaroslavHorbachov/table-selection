import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SelectionContainerDirective } from './selection-container.directive';
import { SelectionRowDirective } from './selection-row.directive';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [AppComponent, TableComponent, SelectionRowDirective, SelectionContainerDirective],
  imports: [BrowserModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
