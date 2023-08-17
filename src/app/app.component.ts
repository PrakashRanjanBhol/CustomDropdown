import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  //@Input() options: list of options objects, and it can be any object with any key name. For reference, I have added the below commented options.
  options = [
    { name: 'Option 1', id: 1 },
    { name: 'Option 2', id: 2 },
    { name: 'Option 3', id: 3 },
    { name: 'Option 4', id: 4 },
    { name: 'Option 5', id: 5 },
    { name: 'Option 6', id: 6 },
    { name: 'Option 7', id: 7 },
    { name: 'Option 8', id: 8 },
    { name: 'Option 9', id: 9 },
    { name: 'Option 10', id: 10 },
    { name: 'Option 11', id: 11 },
    { name: 'Option 12', id: 12 },
  ];

  //@Input() currentSelection : either it can be empty or can be provided with any default value. 
  currentSelection: any;

  //@Input() displayAttribute : This input property refers to the key name of the options list which needs to be displayed in the select option. 
  displayAttribute: string = 'name';

  constructor() { }

  ngOnInit(): void {

  }

  onSelection(event: any) {
    console.log(event);
  }
}
