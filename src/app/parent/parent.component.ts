import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
public loggedInVal = true;
public lala = true;
public loggedInGetSetVal: boolean;

@ViewChild(ChildComponent) childCompReference:ChildComponent;

ngAfterViewInit(){
  this.childCompReference.inChildCompForViewChild = "@viewchild badal shu";
}
  constructor() { }

  ngOnInit(): void {
  }

}
