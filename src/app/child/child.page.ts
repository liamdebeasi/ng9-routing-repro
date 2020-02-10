import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.page.html',
  styleUrls: ['./child.page.scss'],
})
export class ChildPage implements OnInit {
  constructor() {}
  
  ngOnInit() {
    
  }
  
  didLoad(ev: CustomEvent) {
    console.log('Web Component loaded', ev);
  }

}
