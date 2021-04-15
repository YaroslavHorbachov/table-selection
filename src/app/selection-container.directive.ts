import { Directive } from '@angular/core';

@Directive({
  selector: '[mat-table]',
})
export class SelectionContainerDirective<T> {
  private selectedRow: T;

  public setSelectedRow(row: T): void {
    this.selectedRow = row;
  }

  public checkIsSelectedRow(row?: T) {
    if (!row) {
      return false;
    }

    return this.selectedRow === row;
  }
}
