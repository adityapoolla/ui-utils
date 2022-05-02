import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-compare',
  templateUrl: './document-compare.component.html',
  styleUrls: ['./document-compare.component.css']
})
export class DocumentCompareComponent implements OnInit {

  constructor() { }
  comparedResults = ["abcd", "efgh"];
  ngOnInit(): void {
  }

}
