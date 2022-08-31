import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [ // sets up routes constant where you define your routes
    { path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'about', component: AboutComponent },
    { path: 'news', component: ArticleComponent }
]

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }