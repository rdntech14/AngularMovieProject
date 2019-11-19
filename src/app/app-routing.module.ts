import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './componenets/contact/contact.component';
import { HomeComponent } from './componenets/home/home.component';
import { ViewcartComponent } from './componenets/viewcart/viewcart.component';
import { PopularComponent } from './componenets/popular/popular.component';
import { DocumentaryComponent } from './componenets/documentary/documentary.component';
import { AnimatedComponent } from './componenets/animated/animated.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'viewcart', component: ViewcartComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'popular', component: PopularComponent },
      { path: 'animated', component:  AnimatedComponent},
      { path: 'documentary', component:  DocumentaryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
