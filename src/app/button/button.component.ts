import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  userSearch: string;

  @Output() searchComplete = new EventEmitter<string>();

    constructor(){}

  ngOnInit() {
  }

  search(){
    this.searchComplete.emit(this.userSearch);
  }


}



