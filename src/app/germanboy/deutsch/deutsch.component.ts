import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deutsch',
  templateUrl: './deutsch.component.html',
  styleUrls: ['./deutsch.component.css']
})
export class DeutschComponent implements OnInit {
  @Input() name="";
  constructor() { }

  ngOnInit(): void {
  }

}
