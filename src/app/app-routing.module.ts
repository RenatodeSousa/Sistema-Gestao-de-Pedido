import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';




const routes: Routes = [
  { path: '', component: LoginComponent},

  { path: 'login', component: LoginComponent },

  {
    path: 'categorias',
    loadChildren: './pages/categorias/categorias.module#CategoriasModule'
  },
  {
    path: 'entries',
    loadChildren: './pages/entries/entries.module#EntriesModule'
  },
  {
    path: 'reports',
    loadChildren: './pages/reports/reports.module#ReportsModule'
  },
  {
    path: 'vendedores',
    loadChildren: './pages/vendedor/vendedor.module#VendedorModule'

  },
  {
    path: 'clientes',
    loadChildren: './pages/clientes/clientes.module#ClientesModule'

  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
