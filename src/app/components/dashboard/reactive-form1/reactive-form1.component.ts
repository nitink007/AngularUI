import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form1',
  templateUrl: './reactive-form1.component.html',
  styleUrls: ['./reactive-form1.component.css']
})
export class ReactiveForm1Component implements OnInit {

  myForm1: FormGroup;


  constructor() { }

  ngOnInit() {
    this.myForm1 = new FormGroup({
      'firstName' : new FormControl(null, [Validators.required] ),
      'lastName' : new FormControl(null, [Validators.required, Validators.email]),
      'email' : new FormControl(null),
      'notes' : new FormControl(null),
      'password' : new FormControl(null),
    })
  }

  onSubmit() {
    console.log(this.myForm1)
  }

}
