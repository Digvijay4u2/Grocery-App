import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router';
import { ProductsComponent } from "./components/products/products.component";
import { SubProductComponent } from "./components/sub-product/sub-product.component";
import { AuthGuard } from "./guard/auth.guard";

import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginComponent } from "./pages/login/login.component";

import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";



const routes : Routes=[
    {path : '', redirectTo :'login',pathMatch:'full'},
    { path : 'home', component:HomePageComponent,canActivate:[AuthGuard] },
    {path : 'products/:catId', component:ProductPageComponent,canActivate:[AuthGuard]},
    { path : 'about', component:AboutPageComponent ,canActivate:[AuthGuard]},
    { path : 'contact', component:ContactPageComponent },
    {path : 'subProduct/:subId', component:SubProductComponent,canActivate:[AuthGuard]},
    
    { path : 'product_detail/:id', component:ProductDetailComponent ,canActivate:[AuthGuard]},
    { path : 'register', component:RegisterPageComponent},
    { path : 'login', component:LoginComponent},
    { path : '**', component:ErrorPageComponent}
];

@NgModule({
   imports:[RouterModule.forRoot(routes)],
   exports : [RouterModule]

})

export class AppRoutingModule{}
export const routingComponents = [HomePageComponent,ProductDetailComponent,ProductPageComponent,AboutPageComponent,ContactPageComponent]