import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AngularComponent } from './angular/angular.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'posts', component: PostComponent },
  { path: 'angular', component: AngularComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
