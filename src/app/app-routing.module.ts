import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

const routes: Routes = [ // sets up routes constant where you define your routes
    { path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
    { path: '**', component: NotFoundComponent },
  ] 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }