import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value: string = '';
  showChild: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  SubmitValue(val: HTMLInputElement) {
    this.value = val.value;
  }

  toggleChild(): void {
    this.showChild = !this.showChild;
  }
}
