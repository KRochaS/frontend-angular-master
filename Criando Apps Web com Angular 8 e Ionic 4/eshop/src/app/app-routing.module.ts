import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/account/login/login.page';

const routes: Routes = [
    {
      path: '',
      component: LoginPage,
      children: [
        { path: 'login', loadChildren: './pages/account/login.module#LoginPageModule' },
      ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
