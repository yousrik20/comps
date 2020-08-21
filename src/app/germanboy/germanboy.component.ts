import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-germanboy',
  templateUrl: './germanboy.component.html',
  styleUrls: ['./germanboy.component.css']
})
export class GermanboyComponent implements OnInit {
  currentPage=0;
  images=[
    {
      title:'new Image',
      url:'https://images.unsplash.com/photo-1521488741203-dcc320950ce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title:'beutiful Girl',
      url:'https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title:'Smart Kind',
      url:'https://images.unsplash.com/photo-1518182867314-0fe2d7affd5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    }
  ]
  name="yousri";
  show=true;
  // changeMode(){
  //   if(this.name){
  //     this.name="";
  //   }else{
  //     this.name="yousri";
  //   }
    
  // }
  constructor() { }

  ngOnInit(): void {
  }
}
