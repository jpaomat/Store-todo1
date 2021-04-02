import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/employes/employes.module').then( m => m.EmployesModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('src/app/modules/admin/admin.module').then( m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
