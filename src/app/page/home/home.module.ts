import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SmdHomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  exports: [],
  imports: [CommonModule, SmdHomeRoutingModule],
  providers: []
})
export class SmdHomeModule {}
