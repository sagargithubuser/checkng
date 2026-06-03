import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  SubmitValue(val: HTMLInputElement) {
    this.value = val.value;
  }
}
