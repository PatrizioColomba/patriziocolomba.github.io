import { Component, OnInit, ViewChild, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  hidden: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }

  onResize() {
    if(window.innerWidth >= 780) {
      this.hidden = false; 
    } else {
      this.hidden = true; 
    }
  }

}
