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
    { path: 'home', component: HomeComponent  },
  ]},
  { path: 'registro', component: RegistroComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'main', loadChildren: ()=>import('./pages/main/main.module').then(m=>m.MainModule), canActivate: [authGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
