import { Component, Input, OnInit } from '@angular/core';

export enum TypeButton {
  PRIMARY = 0,
  SECUNDARY = 1,
  LIGHT = 3,
  FACEBOOK = 4,
  TWITTER = 5,
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{

  @Input() type: TypeButton = 0; 

  style: string = 'fa ';

  ngOnInit(): void {
    this.inicializarStyle();
  }

  inicializarStyle(){
    if(TypeButton.FACEBOOK == this.type){
      this.style = `${this.style} fa-facebook`
    }

    if(TypeButton.TWITTER == this.type){
      this.style = `${this.style} fa-twitter`
    }

    if(TypeButton.LIGHT == this.type){
      
    }

    if(TypeButton.SECUNDARY == this.type){
      
    }

    if(TypeButton.PRIMARY == this.type){
      
    }
  }
}
