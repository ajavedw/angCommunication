import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public property = 'Property Binding';
  public imageUrl = 'picsum.phots/200';
  public counter = 0;
  userEnteredValue: string;
  public valueEntered: any;
  private _getSetAge: number;
  @ViewChild('nameRef') nameElementRef: ElementRef;

  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef.nativeElement);

  }
  counterP() {
    this.counter++;
  }

  onTheValueCh(valueIGetFrmEvent) {
    if (valueIGetFrmEvent === 'adnan') {
      alert('freaking awesome');
    }
  }

  public get getSetAge():number{
    return this._getSetAge;
  }

  public set getSetAge(entered){
    this._getSetAge = entered;
    if(this._getSetAge > 60){
      alert('old');
    }
    else if(entered < 29){
      alert('jawan');
    }
  }
}
