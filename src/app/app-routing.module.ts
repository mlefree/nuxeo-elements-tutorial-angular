import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NgHomeComponent} from '../ng-home/ng-home.component';

const routes: Routes = [
  {path: 'home', component: NgHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
