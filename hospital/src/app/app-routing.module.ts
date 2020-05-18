import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ServOldComponent} from './components/serv-old/serv-old.component';
import {ServYangComponent} from './components/serv-yang/serv-yang.component';
import {PricesComponent} from './components/prices/prices.component';
import {DoctorsComponent} from './components/doctors/doctors.component';
import {ServComponent} from './components/serv/serv.component';
import {SingleDoctorComponent} from './components/single-doctor/single-doctor.component';
import {CastomRecordComponent} from './components/castom-record/castom-record.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'doctors', component: DoctorsComponent},
  {path: 'doctors/:id', component: SingleDoctorComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'young', component: ServYangComponent},
  {path: 'old', component: ServOldComponent},
  {path: 'sp', component: ServComponent},
  {path: 'custom', component: CastomRecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
