import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  public imgSrc = 'assets/images/selfie.jpg' ;
  constructor() { }

  ngOnInit(): void {
  }

}
