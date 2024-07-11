import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ButtonComponent } from './button/button.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from '../pages/login/login.component';
import { PortalComponent } from '../pages/portal/portal.component';
import { RegistroComponent } from '../pages/registro/registro.component';
import { HomeComponent } from '../pages/home/home.component';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'xng-breadcrumb';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    FeedbackComponent,
    ButtonComponent,
    ProfileComponent,
    SidebarMenuComponent,
    ProfileComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    FeedbackComponent,
    ButtonComponent,
    ProfileComponent,
    SidebarMenuComponent,
    ProfileComponent,
    BreadcrumbComponent
  ]
})
export class ComponentsModule { }
