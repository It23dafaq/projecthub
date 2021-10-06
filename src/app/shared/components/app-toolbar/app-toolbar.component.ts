import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.sass']
})
export class AppToolbarComponent implements OnInit {
  myplaceHolder = 'Search'
 

  constructor() { }
  
  ngOnInit(): void {
  }
  
  Search(event : any): void {
     console.log(event);
      this.myplaceHolder = event.target.value
  }
  checkPlaceHolder() {
    if (this.myplaceHolder) {
      this.myplaceHolder = ''
      return;
    } else {
      this.myplaceHolder = 'Search'
      return
    }
  }
}
