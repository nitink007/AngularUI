import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemListComponent } from './components/dashboard/item-list/item-list.component';
import { ItemListServiceService } from './service/item-list-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CardFormComponent } from './components/dashboard/card-form/card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardComponent,
    ItemListComponent,
    CardFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
