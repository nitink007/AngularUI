import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemListComponent } from './components/dashboard/item-list/item-list.component';
import { ItemListServiceService } from './service/item-list-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CardFormComponent } from './components/dashboard/card-form/card-form.component';
import { ReactiveForm1Component } from './components/dashboard/reactive-form1/reactive-form1.component';
import { ContactManagementComponent } from './components/contact-management/contact-management.component';
import { MenuTilesComponent } from './components/dashboard/menu-tiles/menu-tiles.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { GlobalSearchComponent } from './components/dashboard/global-search/global-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardComponent,
    ItemListComponent,
    CardFormComponent,
    ReactiveForm1Component,
    ContactManagementComponent,
    MenuTilesComponent,
    routingComponents,
    GlobalSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ItemListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
