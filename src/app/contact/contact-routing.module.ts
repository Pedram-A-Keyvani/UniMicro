import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from '@app/contact/contact-form/contact-form.component';
import { ContactListComponent } from '@app/contact/contact-list/contact-list.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: ContactListComponent
  },
  {
    path: ':mode',
    children: [
      { path: '', pathMatch: 'full', component: ContactFormComponent },
      { path: ':id', component: ContactFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
