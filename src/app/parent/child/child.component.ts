import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
  @Input('loggedIn') loggedInFlag: boolean;
  @Input('lelo') la: boolean;

  ngOnChanges(changes : SimpleChanges){
    console.log(changes);
  }
  private _loggedInGetSet: boolean;
  public message: string;
  get loggedInGetSet(): boolean {
    return this._loggedInGetSet;
  }
  @Input()
  set loggedInGetSet(value: boolean) {
    this._loggedInGetSet = value;
    if (value === true) {
      this.message = 'Welcome back alaka!';
    } else {
      this.message = 'log in alaka';
    }
  }
  public inChildCompForViewChild: string = "For @ViewChild";


  constructor() { }

  ngOnInit(): void {
  }

}
