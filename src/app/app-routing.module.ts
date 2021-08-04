import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'home', component: HeaderComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
