import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/router-state', pathMatch: 'full' },
  { path: 'router-state', loadChildren: './router-state/router-state.module#RouterStateModule' },
  { path: 'form-state', loadChildren: './form-state/form-state.module#FormStateModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
