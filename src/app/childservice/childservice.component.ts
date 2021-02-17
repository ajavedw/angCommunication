import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {InteractionService} from '../interaction.service';

@Component({
  selector: 'app-childservice',
  templateUrl: './childservice.component.html',
  styleUrls: ['./childservice.component.css']
})
export class ChildserviceComponent implements OnInit {

  constructor(private _interactionService : InteractionService) { }

  ngOnInit(): void {
    this._interactionService.teacherMessage$
    .subscribe(
       (message) =>{
        if (message ==='morning'){
          alert ('good morning');
        } else if (message==='appreciate student good night'){
          alert ('good night');
        }
      }
    )
  }

}
