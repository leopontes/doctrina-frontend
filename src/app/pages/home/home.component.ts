import { Component } from '@angular/core';
import { TypeButton } from 'src/app/components/button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public types = TypeButton;
}
