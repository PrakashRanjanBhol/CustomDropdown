import {
  Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';

@Component({
  selector: 'custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {

  @Input() options: any;
  @Input() displayAttribute: any;
  @Output() onSelection = new EventEmitter<any>();
  _currentSelection: any;
  get currentSelection() {
    return this._currentSelection;
  }
  @Input()
  set currentSelection(value: any) {
    this._currentSelection =
      value === '' || value === null || value === undefined
        ? 'Please Select'
        : value?.[this.displayAttribute];
  }

  isDownArrowEnabled: boolean = true;

  constructor() {
  }

  ngOnInit() { }

  toggleArrow() {
    this.isDownArrowEnabled = !this.isDownArrowEnabled;
  }

  optionSelection(option: any) {
    this.isDownArrowEnabled = true;
    this._currentSelection = option?.[this.displayAttribute];
    this.onSelection.emit(option);
  }

}
