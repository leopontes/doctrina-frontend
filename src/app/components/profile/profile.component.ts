import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  user = { name: 'John Doe' }; // Substitua com o objeto de usuário real
  showDropdown = false;
  messageCount = 3; // Exemplo de contador de mensagens

  @Input() usuario!: any;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout(): void {
    this.authService.logout();
  }

  getUsuario(): any {
    return this.authService.getCurrentUserValue();
  }
}
