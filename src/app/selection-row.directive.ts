import { Directive, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { SelectionContainerDirective } from './selection-container.directive';

@Directive({
  selector: '[appSelectionRow]',
})
export class SelectionRowDirective implements OnInit {
  constructor(private readonly selectionContainerDirective: SelectionContainerDirective<Record<string, unknown>>) {}

  public ngOnInit() {}

  @Input() public readonly row: Record<string, unknown>;

  @Output() public readonly selectionClick = new EventEmitter();

  @HostBinding('class.active') public get isActive() {
    return this.selectionContainerDirective.checkIsSelectedRow(this.row);
  }

  @HostListener('click')
  public onClick(): void {
    this.selectionContainerDirective.setSelectedRow(this.row);
    this.selectionClick.emit();
  }
}
