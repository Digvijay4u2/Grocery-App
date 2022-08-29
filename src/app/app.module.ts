import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {AppRoutingModule,routingComponents} from './app-routing-module'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { SubProductComponent } from './components/sub-product/sub-product.component';
import { SubProductPageComponent } from './pages/sub-product-page/sub-product-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomePageComponent,
    
    ProductPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    HeaderComponent,
    NavbarComponent,
    SubCategoryComponent,
    ProductsComponent,
    ProductDetailComponent,
    routingComponents,
    ErrorPageComponent,
    SubProductComponent,
    SubProductPageComponent,
    RegisterPageComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
