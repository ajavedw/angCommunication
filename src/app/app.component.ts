import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {InteractionService} from './interaction.service';

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


  constructor(private _interactionService : InteractionService){


  }
    greetStudent(){
      this._interactionService.sendMessage('morning')
    }
    appreciateStudent(){
      this._interactionService.sendMessage('appreciate student good night');
    }

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
