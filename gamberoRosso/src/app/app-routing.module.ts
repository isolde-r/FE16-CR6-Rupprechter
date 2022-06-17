import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "menu", component: MenuComponent
  },
  {
    path: "dishes/:dishIndex", component: DetailsComponent
  },
  {
    path: "about", component: AboutComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
