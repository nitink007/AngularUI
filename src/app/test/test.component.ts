import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

// @Component({
//   selector: '.app-test',
//   template: `<h2>Welcome from test component - Name = {{name}}</h2>`,
//   styles: []
// })
export class TestComponent implements OnInit {

  public name = 'nitin';
  constructor() { }

  ngOnInit() {
  }

}
