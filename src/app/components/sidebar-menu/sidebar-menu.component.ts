import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {
  
  @Input() isCollapsed: boolean = true;

  constructor(private authService: AuthService, private router: Router){}

  menuItems = [
    { icon: 'fas fa-tachometer-alt', label: 'Dashboard', link: '/dashboard' },
    { icon: 'fas fa-users', label: 'Grupos de Estudo', link: '/grupos' },
    { icon: 'fas fa-book', label: 'Materiais de Estudo', link: '/materiais' },
    { icon: 'fas fa-tasks', label: 'Plano de Estudo', link: '/plano' },
    { icon: 'fas fa-chalkboard-teacher', label: 'Salas de Estudo', link: '/salas' },
    { icon: 'fas fa-video', label: 'Aulas por Streaming', link: '/aulas' },
    { icon: 'fas fa-cog', label: 'Configurações', link: '/configuracoes' },
    { icon: 'fas fa-sign-out-alt', label: 'Sair', link: '/sair' }
  ];

  logout(){
    this.authService.logout();
    this.router.navigate(['home'])
  }

  actionEvent(item: any){
    if(item.label == 'Sair'){
      this.logout();
    }
  }

}
