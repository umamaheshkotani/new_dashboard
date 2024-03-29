import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { RouterModule, Routes } from '@angular/router';
import { Service1Service } from './service1.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


const routes:Routes=[
  {
    path:'', component:HomeComponent
  },
  {
    path:'content1', component:Content1Component
  },
  {
    path:'content2', component:Content2Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    Content1Component,
    Content2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
