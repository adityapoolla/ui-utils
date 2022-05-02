import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.css']
})
export class ResultBoxComponent implements OnInit {

  @Input("result-list") resultList: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
