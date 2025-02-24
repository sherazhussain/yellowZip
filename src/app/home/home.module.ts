import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/bannerSection/banner/banner.component';
import { NeighborComponent } from './components/neighbor/neighbor.component';
import { BussinessesComponent } from './components/bussinesses/bussinesses.component';
import { AgenciesAndBrandsComponent } from './components/agencies-and-brands/agencies-and-brands.component';
import { NeighbourlyNewsComponent } from './components/neighbourly-news/neighbourly-news.component';
import { AdvertiseComponent } from './components/advertise/advertise.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, FlexLayoutModule, MaterialModule, HomeRoutingModule],
  declarations: [HomeComponent, BannerComponent, NeighborComponent, BussinessesComponent, AgenciesAndBrandsComponent, NeighbourlyNewsComponent, AdvertiseComponent],
})
export class HomeModule {}
