import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./app/page/home/home.module').then((m) => m.SmdHomeModule)
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./app/page/test/test.module').then((m) => m.SmdTestModule)
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
