import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-components',
  templateUrl: './css-components.component.html',
  styleUrls: ['./css-components.component.css']
})
export class CssComponentsComponent implements OnInit {

  activeComponent: string = "home";
  constructor() { }

  ngOnInit(): void {
  }

}
