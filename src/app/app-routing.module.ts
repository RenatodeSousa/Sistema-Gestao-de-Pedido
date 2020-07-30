import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './core/config/guard/auth-guard.service';




const routes: Routes = [
  { path: '', component: LoginComponent},

  { path: 'login', component: LoginComponent },

  {
    path: 'categorias',
    loadChildren: './pages/categorias/categorias.module#CategoriasModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'entries',
    loadChildren: './pages/entries/entries.module#EntriesModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'reports',
    loadChildren: './pages/reports/reports.module#ReportsModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'vendedores',
    loadChildren: './pages/vendedor/vendedor.module#VendedorModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'clientes',
    loadChildren: './pages/clientes/clientes.module#ClientesModule',
    canActivate: [AuthGuardService]

  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
