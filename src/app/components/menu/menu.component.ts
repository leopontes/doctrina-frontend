import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  isCollapsed: boolean = true;

  constructor(private authService: AuthService){}

  isAutenticado(): boolean{
    return this.authService.isAutenticated();
  }

  getUsuario(): any {
    return this.authService.getCurrentUserValue();
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
