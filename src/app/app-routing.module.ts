import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PortalComponent } from './pages/portal/portal.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: PortalComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' }  },
    { path: 'main', loadChildren: ()=>import('./pages/main/main.module').then(m=>m.MainModule), canActivate: [authGuard], data: { breadcrumb: 'Main' }},
  ]},
  { path: 'registro', component: RegistroComponent, data: { breadcrumb: 'Registro' }  },
  { path: 'login', component: LoginComponent  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
