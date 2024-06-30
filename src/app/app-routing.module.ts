import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PortalComponent } from './pages/portal/portal.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: PortalComponent, children: [
    { path: 'home', component: HomeComponent  },
  ]},
  { path: 'registro', component: RegistroComponent  },
  { path: 'login', component: LoginComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
