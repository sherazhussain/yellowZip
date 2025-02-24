import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertiseComponent } from './advertise/advertise.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: AdvertiseComponent, data: { title: marker('About') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertiseRoutingModule { }
