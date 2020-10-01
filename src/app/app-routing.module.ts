import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './view/index/index.component';
import {TestComponent} from './view/test/test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/test.html',
    pathMatch: 'full'
  },
  {
    path: 'timeline.html',
    component: IndexComponent,
  },
  {
    path: 'test.html',
    component: TestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
