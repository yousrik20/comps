import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats=[
    {value:22,label:'# of Users'},
    {value:900,label:'Renvenue'},
    {value:50,label:'Reviews'}
  ];
  items=[
    {image:'/assets/images/couch.jpeg',title:'Couch',description:'this is Fantatsic couch to sit in'},
    {image:'/assets/images/dresser.jpeg',title:'Dresser',description:'this is deresser to stuff in'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
