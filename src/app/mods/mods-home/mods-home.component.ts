import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen=false;
  items=[
    {title:'Why is the sky blue?',content:'the sky is blue because is '},
    {title:'What does an orange taste like?',content:'an orange taste like orange'},
    {title:'what color is the cat?',content:'the cat is orange color'}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.modalOpen=!this.modalOpen;
  }
}
