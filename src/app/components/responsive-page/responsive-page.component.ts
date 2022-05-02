import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-page',
  templateUrl: './responsive-page.component.html',
  styleUrls: ['./responsive-page.component.css']
})
export class ResponsivePageComponent implements OnInit {

  constructor() { }
  text: string = "";
  rows = ["The ::marker CSS pseudo-element selects the marker box of a list item, which typically contains a bullet or number. It works on any element or pseudo-element set to display: list-item, such as the <li> and <summary> elements.", "row 1", "row 1"];
  ngOnInit(): void {
    this.text = this.rows.join('\n')
  }

  keydownInEditor(event: KeyboardEvent) {
    if(event.key === 'Enter') {
      console.log(event)
    }
  }
}
