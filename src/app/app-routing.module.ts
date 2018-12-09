import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ContactManagementComponent } from './components/contact-management/contact-management.component';

const route: Routes = [
  {path: 'contactManagement', component: ContactManagementComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(route)
    
  ],
  exports: [
    RouterModule
  ]
  // declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [ContactManagementComponent]
