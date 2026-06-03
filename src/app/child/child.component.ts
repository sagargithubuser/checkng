import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() inputValue: string = 'LifeCycle Hooks';

  constructor() {
    console.log("Constructor Called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Called", changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit Called");
  }
  
  ngDoCheck(): void {
    console.log("ngDoCheck Called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Called");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy Called");
  }
}
