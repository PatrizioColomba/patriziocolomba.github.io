import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AngularComponent } from './angular/angular.component';


const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'angular', component: AngularComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
